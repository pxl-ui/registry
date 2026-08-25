
export const DEFAULT_FRAME_DURATION = 100;
export const DEFAULT_FRAME_WIDTH = 16;
export const DEFAULT_FRAME_HEIGHT = 16;

// #region Atlas Definition

export type Rect = {
  x: number;
  y: number;
  w: number;
  h: number;
}

export type Frame = {
  frame: Rect;
  rotated?: boolean;
  trimmed?: boolean;
  /** offset + size of the frame within the untrimmed sourceSize canvas */
  spriteSourceSize?: Rect;
  /** logical/untrimmed size of the sprite this frame belongs to */
  sourceSize?: { w: number; h: number };
  /** ms this frame should be held for */
  duration?: number;
}

export type FrameTag = {
  name: string;
  /** index into the ordered frame list (inclusive) */
  from: number;
  /** index into the ordered frame list (inclusive) */
  to: number;
  direction?: "forward";
  color?: string;
}

export type Layer = {
  name: string;
  opacity?: number;
  blendMode?: "normal";
}

export type Atlas = {
  frames: Record<string, Frame>;
  meta: {
    app?: string;
    version?: string;
    format?: string;
    size?: { w: number; h: number };
    scale?: string;
    frameTags: FrameTag[];
    layers?: Layer[];
    slices?: unknown[];
  };
}
// #endregion


// #region Atlas Utilities

/**
 * Order of the `frames` keys, which in the Aseprite export "hash" matches
 * the frame index used by `frameTags[].from/to` (the order of
 * key insertion is preserved since they are not numeric indices).
 */
export function getFrameKeys(atlas: Atlas): string[] {
  return Object.keys(atlas.frames);
}

export function getFrameTag(
  atlas: Atlas,
  name: string,
): FrameTag | undefined {
  return atlas.meta.frameTags.find((tag) => tag.name === name);
}

/** Returns the frame keys (in order) that make up a specific frameTag. */
export function getFrameKeysForTag(atlas: Atlas, name: string): string[] {
  const tag = getFrameTag(atlas, name);
  if (!tag) return [];
  return getFrameKeys(atlas).slice(tag.from, tag.to + 1);
}

export function getFrameDuration(frame: Frame | undefined): number {
  return frame?.duration || DEFAULT_FRAME_DURATION;
}

/**
 * Native size of a frame (unscaled), used to size the canvas
 * when `size` is not explicitly specified in the component.
 */
export function getNativeFrameSize(
  atlas: Atlas,
  frameName?: string,
): { w: number; h: number } {
  const keys = getFrameKeys(atlas);
  const key = frameName ?? keys[0];
  const frame = key ? atlas.frames[key] : undefined;

  const w = frame?.sourceSize?.w ?? frame?.frame.w ?? DEFAULT_FRAME_WIDTH;
  const h = frame?.sourceSize?.h ?? frame?.frame.h ?? DEFAULT_FRAME_HEIGHT;

  return { w, h };
}
// #endregion


// #region Animations Definition

/**
 * Contexto que el hook inyecta a cada efecto en start/update/draw/finish.
 * `state` es privado del efecto (se crea vía createState y vive mientras el
 * efecto está activo).
 */
export type AnimationRuntime<TState = unknown> = {
  state: TState;
  /** Sprite "activo" en el momento en que se disparó el efecto. */
  sprite: Sprite | null;
  atlas: Atlas;
  /** Paso fijo (ms) recomendado para avanzar animaciones de frameTag de forma determinista. */
  tick: number;
  /** Tamaño nativo (sin escalar) de un frame del atlas, para posicionar partículas/efectos. */
  frameW: number;
  frameH: number;
  createSprite: (src: string|string[], atlas?: Atlas) => Sprite;
  setSprite: (sprite: Sprite) => void;
}

export type DrawContext = {
  ctx: CanvasRenderingContext2D;
  zoom: number;
}

/**
 * Una "animación ad-hoc": toma el control total del render mientras está activa
 * (evolution, choice, transition son implementaciones de esto). Se registra en
 * el hook vía la prop `effects` y se dispara con play(effect.name, ...).
 */
export type AnimationEffect<TPayload = unknown, TState = unknown> = {
  /** Nombre usado para disparar el efecto a través de play(name, ...). */
  name: string;
  /** Duración (ms) usada cuando play() no especifica una explícitamente. */
  defaultDuration?: number;
  createState(): TState;
  start(runtime: AnimationRuntime<TState>, payload: TPayload, duration: number): void;
  /** Avanza la simulación. Devolver false para señalar que terminó antes de tiempo. */
  update(
    runtime: AnimationRuntime<TState>,
    dt: number,
    elapsedMs: number,
    durationMs: number,
  ): boolean;
  draw(runtime: AnimationRuntime<TState>, context: DrawContext): void;
  /**
   * Se llama una vez al terminar (duración alcanzada o update() devolvió false).
   * Si devuelve un sprite, ese pasa a ser el sprite "activo" (p.ej. la nueva forma
   * tras una evolución).
   */
  finish?(runtime: AnimationRuntime<TState>): Sprite | void;
}

export type DrawOptions = {
  /** Offset de dibujo en px "lógicos" (antes de aplicar scale), útil para shakes/saltos. */
  dx?: number;
  dy?: number;
  /** Si se define, sobreescribe el flip calculado por flipOverride/frame. */
  flip?: boolean | null;
};
// #endregion

// #region Sprite

export type SpriteSize = "xs" | "sm" | "md" | "lg" | "xl";

export const SPRITE_SIZE_MAP: Record<SpriteSize, number> = {
  xs: 32,
  sm: 48,
  md: 64,
  lg: 96,
  xl: 128,
};

export type Options = {
  scale?: number;
  /**
   * Tag al que volver automáticamente cuando termina una animación "de una vez"
   * (duration undefined/0) o cuando expira una animación con duración finita.
   * Equivalente al antiguo `idleAnimationId`.
   */
  idleTag?: string | null;
  /** Frame estático inicial (si no se quiere arrancar reproduciendo idleTag). */
  frame?: string;
};
export class Sprite {
  img?: HTMLImageElement[];
  scale: number;

  /** Cuando no es null, fuerza el flip en draw() en vez del definido por el frame. */
  flipOverride: boolean | null = null;
  /** 0..1: mezcla un tint blanco sobre el sprite (usado por efectos tipo evolution/choice). */
  whiteRatio = 0;

  readonly atlas: Atlas;
  private readonly frameKeys: string[];
  private readonly idleTag: string | null;

  private staticFrameIndex = 0;
  private currentTag: string | null = null;
  private playingKeys: string[] | null = null;
  private playingPos = 0;
  private acc = 0;
  private elapsed = 0;
  private duration = 0;
  private onComplete?: () => void;

  private offscreen?: HTMLCanvasElement;
  private offscreenCtx?: CanvasRenderingContext2D | null;

  constructor(src: string|string[], atlas: Atlas, options: Options = {}) {
    this.atlas = atlas;
    this.frameKeys = getFrameKeys(atlas);
    this.scale = options.scale ?? 1;
    this.idleTag = options.idleTag ?? null;

    if (options.frame) {
      this.setStaticFrame(options.frame);
    } else if (this.idleTag) {
      this.playTag(this.idleTag, Infinity);
    }

    this.loadImage(src);
  }

  private loadImage(src: string|string[]) {
    if (!src) return;

    const sources = Array.isArray(src) ? src : [src];
    this.img = [];

    for (const key of sources.keys()) {
      const img = new Image();
      img.onload = () => {
        // biome-ignore lint/style/noNonNullAssertion: initialised above
        this.img![key] = img;
      };
      img.src = sources[key];
    }
  }

  get currentFrameKey(): string | undefined {
    if (this.playingKeys) return this.playingKeys[this.playingPos];
    return this.frameKeys[this.staticFrameIndex];
  }

  get currentFrame(): Frame | undefined {
    const key = this.currentFrameKey;
    return key ? this.atlas.frames[key] : undefined;
  }

  /** Muestra un frame concreto de forma estática (sin reproducir ningún tag). */
  setStaticFrame(name: string) {
    this.playingKeys = null;
    this.currentTag = null;
    const index = this.frameKeys.indexOf(name);
    this.staticFrameIndex = index >= 0 ? index : 0;
  }

  /**
   * Reproduce un frameTag del atlas.
   *
   * duration:
   *  - undefined / 0 -> reproduce el tag una vez y vuelve a idleTag.
   *  - Infinity      -> loop infinito (no vuelve a idleTag por sí solo).
   *  - N (ms)        -> hace loop del tag hasta que pasen N ms, luego vuelve a idleTag.
   */
  playTag(tagName: string, duration = 0, onComplete?: () => void) {
    if (this.currentTag === tagName) return;

    const tag = getFrameTag(this.atlas, tagName);
    if (!tag) {
      console.warn(`[AsepriteSprite] Frame tag desconocido: "${tagName}"`);
      return;
    }

    this.currentTag = tagName;
    this.playingKeys = this.frameKeys.slice(tag.from, tag.to + 1);
    this.playingPos = 0;
    this.acc = 0;
    this.elapsed = 0;
    this.duration = duration;
    this.onComplete = onComplete;
  }

  update(dtMs: number) {
    if (!this.playingKeys || this.playingKeys.length === 0) return;

    this.acc += dtMs;
    this.elapsed += dtMs;

    const currentFrameDuration = () =>
      getFrameDuration(this.atlas.frames[this.playingKeys![this.playingPos]]);

    const isTimed = this.duration > 0 && Number.isFinite(this.duration);
    const isInfinite = this.duration > 0 && !Number.isFinite(this.duration);

    while (this.acc >= currentFrameDuration()) {
      this.acc -= currentFrameDuration();
      this.playingPos++;

      if (this.playingPos >= this.playingKeys.length) {
        if (isTimed) {
          if (this.elapsed >= this.duration) {
            this.finishPlayback();
            return;
          }
          this.playingPos = 0;
        } else if (isInfinite) {
          this.playingPos = 0;
        } else {
          // duration <= 0: reproducir una vez y terminar
          this.finishPlayback();
          return;
        }
      }
    }

    if (isTimed && this.elapsed >= this.duration) {
      this.finishPlayback();
    }
  }

  private finishPlayback() {
    const cb = this.onComplete;
    this.onComplete = undefined;
    this.duration = 0;
    this.currentTag = null;
    if (this.idleTag) {
      this.playTag(this.idleTag, Infinity);
    }
    cb?.();
  }

  draw(ctx: CanvasRenderingContext2D, options: DrawOptions = {}) {
    if (!this.img) return;
    const frame = this.currentFrame;
    if (!frame) return;

    const { x, y, w, h } = frame.frame;
    const dw = w * this.scale;
    const dh = h * this.scale;
    const dx = options.dx ?? 0;
    const dy = options.dy ?? 0;
    const shouldFlip =
      options.flip !== undefined ? options.flip : this.flipOverride;

    ctx.save();
    ctx.translate(dx * this.scale, dy * this.scale);

    if (shouldFlip) {
      ctx.scale(-1, 1);
      for (const img of this.img) {
        ctx.drawImage(img, x, y, w, h, -dw, 0, dw, dh);
      }
    } else {
      for (const img of this.img) {
        ctx.drawImage(img, x, y, w, h, 0, 0, dw, dh);
      }
    }

    if (this.whiteRatio > 0) {
      this.drawWhiteOverlay(ctx, x, y, w, h, dw, dh, !!shouldFlip);
    }

    ctx.restore();
  }

  private drawWhiteOverlay(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    dw: number,
    dh: number,
    flip: boolean,
  ) {
    if (!this.img) return;

    if (
      !this.offscreen ||
      this.offscreen.width !== w ||
      this.offscreen.height !== h
    ) {
      this.offscreen = document.createElement("canvas");
      this.offscreen.width = w;
      this.offscreen.height = h;
      this.offscreenCtx = this.offscreen.getContext("2d");
    }

    const oCtx = this.offscreenCtx;
    if (!oCtx) return;

    oCtx.clearRect(0, 0, w, h);
    for (const img of this.img) {
      oCtx.drawImage(img, x, y, w, h, 0, 0, w, h);
    }
    oCtx.globalCompositeOperation = "source-in";
    oCtx.fillStyle = "#ffffff";
    oCtx.fillRect(0, 0, w, h);
    oCtx.globalCompositeOperation = "source-over";

    ctx.save();
    ctx.globalAlpha = Math.min(1, Math.max(0, this.whiteRatio));
    ctx.drawImage(this.offscreen, 0, 0, w, h, flip ? -dw : 0, 0, dw, dh);
    ctx.restore();
  }
}

// #endregion