import type { AnimationEffect } from "../sprite-canvas/utils";

export type ChoicePayload = {
  /** Tag a reproducir durante la celebración. Por defecto "Action". */
  celebrateTag?: string;
  /** Tag al que volver al terminar. Por defecto "Idle". */
  idleTag?: string;
}

type ConfettiParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  maxLife: number;
  size: number;
  color: string;
}

type ChoiceState = {
  particles: ConfettiParticle[];
  dx: number;
  dy: number;
  bracketOpacity: number;
  idleTag: string;
}

const CONFETTI_COLORS = ["#000000", "#555555", "#aaaaaa", "#ffffff"];

/**
 * Animación de confirmación de selección: flash táctil inicial, wiggle +
 * brackets parpadeando, salto de celebración con confetti, aterrizaje con
 * squash y fade de brackets. Portado del useCanvas de StarterSelector.
 *
 * Las coordenadas de los brackets de selección se escalan proporcionalmente
 * al tamaño real del frame (originalmente fijas para un frame de 16x16).
 */
export const choiceEffect: AnimationEffect<ChoicePayload | undefined, ChoiceState> = {
  name: "Choice",
  defaultDuration: 1800,

  createState: () => ({
    particles: [],
    dx: 0,
    dy: 0,
    bracketOpacity: 0,
    idleTag: "Idle",
  }),

  start(runtime, payload) {
    runtime.state.idleTag = payload?.idleTag ?? "Idle";
    runtime.sprite?.playTag(payload?.celebrateTag ?? "Action", Infinity);
  },

  update(runtime, dt, elapsedMs, durationMs) {
    const { state, sprite, tick } = runtime;

    sprite?.update(tick);

    let dx = 0;
    let dy = 0;
    let whiteRatio = 0;
    let bracketOpacity = 0;

    // Flash táctil al inicio.
    if (elapsedMs < 80) {
      whiteRatio = 1;
    }

    // Etapa 1 (0-500ms): shake + brackets parpadeando.
    if (elapsedMs < 500) {
      dx = Math.floor(elapsedMs / 60) % 2 === 0 ? 1 : -1;
      bracketOpacity = Math.floor(elapsedMs / 120) % 2 === 0 ? 0.8 : 0.2;
    }
    // Etapa 2 (500-1100ms): salto parabólico de celebración + confetti.
    else if (elapsedMs < 1100) {
      const jumpDuration = 600;
      const t = (elapsedMs - 500) / jumpDuration;
      dy = -Math.round(8 * 4 * t * (1 - t));
      bracketOpacity = 1;

      if (Math.random() < 0.35) {
        const angle = -Math.PI / 4 - (Math.random() * Math.PI) / 2;
        const speed = 0.015 + Math.random() * 0.02;
        const size = Math.random() < 0.4 ? 2 : 1;
        const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        state.particles.push({
          x: runtime.frameW / 2 + (Math.random() - 0.5) * 4,
          y: runtime.frameH / 2 + (Math.random() - 0.5) * 4 + dy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          maxLife: 400 + Math.random() * 400,
          size,
          color,
        });
      }
    }
    // Etapa 3 (1100-1800ms): aterrizaje con squash + fade de brackets.
    else {
      if (elapsedMs < 1250) {
        dy = 1;
        dx = Math.floor(elapsedMs / 40) % 2 === 0 ? 1 : -1;
      }
      const fadeProgress = (elapsedMs - 1100) / 700;
      const flash = Math.floor(elapsedMs / 65) % 2 === 0;
      bracketOpacity = flash ? Math.max(0, 1 - fadeProgress) : 0;
    }

    if (sprite) {
      sprite.whiteRatio = whiteRatio;
      sprite.flipOverride = null;
    }

    state.dx = dx;
    state.dy = dy;
    state.bracketOpacity = bracketOpacity;

    state.particles = state.particles
      .map((p) => ({
        ...p,
        x: p.x + p.vx * dt,
        y: p.y + p.vy * dt,
        vy: p.vy + 0.00005 * dt,
        maxLife: p.maxLife - dt,
      }))
      .filter((p) => p.maxLife > 0);

    return elapsedMs < durationMs;
  },

  draw(runtime, { ctx }) {
    const { state, sprite, frameW } = runtime;

    if (sprite) {
      sprite.draw(ctx, { dx: state.dx, dy: state.dy });
    }

    if (state.bracketOpacity > 0) {
      const s = frameW / 16; // escala respecto al frame de referencia (16x16)
      ctx.fillStyle = `rgba(0, 0, 0, ${state.bracketOpacity})`;
      const rect = (x: number, y: number, w: number, h: number) =>
        ctx.fillRect(x * s, y * s, Math.max(1, w * s), Math.max(1, h * s));

      rect(1, 1, 3, 1);
      rect(1, 2, 1, 2);
      rect(12, 1, 3, 1);
      rect(14, 2, 1, 2);
      rect(1, 14, 3, 1);
      rect(1, 12, 1, 2);
      rect(12, 14, 3, 1);
      rect(14, 12, 1, 2);
    }

    state.particles.forEach((p) => {
      ctx.save();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.maxLife > 120 ? 1 : p.maxLife / 120;
      ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      ctx.restore();
    });
  },

  finish(runtime) {
    runtime.sprite?.playTag(runtime.state.idleTag, Infinity);
  },
};
