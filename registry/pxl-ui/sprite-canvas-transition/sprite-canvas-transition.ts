import type { AnimationEffect, Sprite } from "../sprite-canvas/utils";

type TransitionPayload = {
  /** Src de la imagen del nuevo sprite hacia el que se transiciona. */
  src: string;
  /** -1: el nuevo entra desde la derecha (slide izquierda). 1: entra desde la izquierda. */
  direction: 1 | -1;
};

type TransitionState = {
  oldSprite: Sprite | null;
  newSprite: Sprite | null;
  direction: 1 | -1;
  progress: number;
};

/**
 * Transición de slide entre dos formas (p.ej. al navegar entre starters).
 * Portado de transitionTo() en el useCanvas de StarterSelector; el desplazamiento
 * usa el ancho real del frame en vez del valor fijo de 16px original.
 */
export const transitionEffect: AnimationEffect<
  TransitionPayload,
  TransitionState
> = {
  name: "Transition",
  defaultDuration: 250,

  createState: () => ({
    oldSprite: null,
    newSprite: null,
    direction: -1,
    progress: 0,
  }),

  start(runtime, payload) {
    runtime.state.oldSprite = runtime.sprite;
    runtime.state.newSprite = runtime.createSprite(payload.src);
    runtime.state.direction = payload.direction;
  },

  update(runtime, _dt, elapsedMs, durationMs) {
    const { state, tick } = runtime;
    state.oldSprite?.update(tick);
    state.newSprite?.update(tick);
    state.progress = Math.min(1, elapsedMs / durationMs);
    return elapsedMs < durationMs;
  },

  draw(runtime, { ctx }) {
    const { state, frameW } = runtime;
    const { oldSprite, newSprite, direction, progress } = state;

    let oldDx = 0;
    let newDx = 0;

    if (direction === -1) {
      oldDx = Math.round(-frameW * progress);
      newDx = Math.round(frameW - frameW * progress);
    } else {
      oldDx = Math.round(frameW * progress);
      newDx = Math.round(-frameW + frameW * progress);
    }

    oldSprite?.draw(ctx, { dx: oldDx });
    newSprite?.draw(ctx, { dx: newDx });
  },

  finish(runtime) {
    return runtime.state.newSprite ?? undefined;
  },
};
