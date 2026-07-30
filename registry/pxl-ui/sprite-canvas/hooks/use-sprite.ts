import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  type AnimationEffect,
  type AnimationRuntime,
  type Atlas,
  getNativeFrameSize,
  Sprite,
} from "../utils";

const DEFAULT_TICK = 1000 / 12; // 83.33ms, igual que el original

export type PlayFn = (
  animation: string,
  duration?: number,
  onAnimationComplete?: () => void,
  payload?: unknown,
) => void;

export type ActiveEffect = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effect: AnimationEffect<any, any>;
  state: unknown;
  elapsed: number;
  duration: number;
  onComplete?: () => void;
};

type UseSpriteOptions = {
  src: string;
  atlas: Atlas;
  /** Tamaño en px al que se renderiza el canvas. */
  size: number;
  /** Frame estático inicial (si no se pasa `animation`). */
  frame?: string;
  /** Tag de frameTag a reproducir en loop de forma declarativa. */
  animation?: string;
  /** Payload for custom animations. */
  animationPayload?: unknown;
  /** Tag al que vuelve el sprite tras animaciones "de una vez". Por defecto ninguno. */
  idleTag?: string;
  /** Animaciones ad-hoc registradas (evolutionEffect, choiceEffect, transitionEffect, ...). */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effects?: AnimationEffect<any, any>[];
  /** Paso fijo (ms) para avanzar animaciones de frame. */
  tick?: number;
};
export function useSprite({
  src,
  atlas,
  size,
  frame,
  animation,
  animationPayload,
  idleTag,
  effects = [],
  tick = DEFAULT_TICK,
}: UseSpriteOptions) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [sprite, setSprite] = useState<Sprite | null>(null);
  const activeEffectRef = useRef<ActiveEffect | null>(null);

  const effectsMap = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const map = new Map<string, AnimationEffect<any, any>>();
    effects.forEach((effect) => {
      map.set(effect.name, effect);
    });
    return map;
  }, [effects]);

  const nativeFrameSize = useMemo(
    () => getNativeFrameSize(atlas, frame),
    [atlas, frame],
  );

  const createSprite = useCallback(
    (spriteSrc: string, spriteAtlas: Atlas = atlas) =>
      new Sprite(spriteSrc, spriteAtlas, { idleTag, frame }),
    [atlas, idleTag, frame],
  );

  const loadSprite = useCallback(
    (spriteSrc: string, spriteAtlas: Atlas = atlas) => {
      const next = createSprite(spriteSrc, spriteAtlas);
      setSprite(next);
      return next;
    },
    [atlas, createSprite],
  );

  // (Re)carga cuando cambia la imagen o el atlas.
  useEffect(() => {
    loadSprite(src, atlas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, atlas]);

  const buildRuntime = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: unknown): AnimationRuntime<any> => ({
      state,
      sprite,
      atlas,
      tick,
      frameW: nativeFrameSize.w,
      frameH: nativeFrameSize.h,
      createSprite,
      setSprite,
    }),
    [sprite, atlas, tick, nativeFrameSize, createSprite],
  );

  const play = useCallback<PlayFn>(
    (animationName, duration, onAnimationComplete, payload) => {
      const effect = effectsMap.get(animationName);

      if (effect) {
        const state = effect.createState();
        const resolvedDuration = duration ?? effect.defaultDuration ?? Infinity;

        activeEffectRef.current = {
          effect,
          state,
          elapsed: 0,
          duration: resolvedDuration,
          onComplete: onAnimationComplete,
        };

        effect.start(buildRuntime(state), payload, resolvedDuration);
        return;
      }

      if (!sprite) return;
      sprite.playTag(animationName, duration ?? 0, onAnimationComplete);
    },
    [effectsMap, sprite, buildRuntime],
  );

  // Modo declarativo: si cambia la prop `animation`/`frame`, refleja el cambio.
  useEffect(() => {
    if (!sprite) return;

    if (animation) {
      play(animation, Infinity, undefined, animationPayload);
    } else if (frame) {
      sprite.setStaticFrame(frame);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sprite, animation, animationPayload, frame]);

  // Render loop principal.
  useEffect(() => {
    if (!canvasRef.current || !sprite) return;

    const activeSprite = sprite;
    const canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;

    const zoom = size / Math.max(nativeFrameSize.w, nativeFrameSize.h);

    const ctx = canvas.getContext("2d", {
      alpha: true,
    }) as CanvasRenderingContext2D;
    ctx.imageSmoothingEnabled = false;

    let frameId: number;
    let last = performance.now();
    let localAcc = 0;

    function loop(now: number) {
      const dt = now - last;
      last = now;

      const active = activeEffectRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.setTransform(zoom, 0, 0, zoom, 0, 0);

      if (active) {
        active.elapsed += dt;
        const runtime = buildRuntime(active.state);
        const stillActive = active.effect.update(
          runtime,
          dt,
          active.elapsed,
          active.duration,
        );

        active.effect.draw(runtime, { ctx, zoom });

        if (!stillActive || active.elapsed >= active.duration) {
          const finalSprite = active.effect.finish?.(runtime);
          activeEffectRef.current = null;
          if (finalSprite) setSprite(finalSprite);
          active.onComplete?.();
        }
      } else {
        localAcc += dt;
        while (localAcc >= tick) {
          activeSprite.update(tick);
          localAcc -= tick;
        }
        activeSprite.draw(ctx);
      }

      ctx.restore();
      frameId = requestAnimationFrame(loop);
    }

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [sprite, size, tick, nativeFrameSize, buildRuntime]);

  return { canvasRef, sprite, play, loadSprite };
}
