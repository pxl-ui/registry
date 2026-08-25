import type { AnimationEffect, Sprite } from "@/lib/pxl/sprite";

type EvolutionPayload = {
  /** New sprite's src */
  src: string|string[];
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  maxLife: number;
  size: number;
};

type EvolutionState = {
  oldSprite: Sprite | null;
  newSprite: Sprite | null;
  spriteToDraw: Sprite | null;
  particles: Particle[];
  acc: number;
};

/**
 * Animación de evolución tipo Digimon: 3 fases (shake+flash creciente,
 * alternancia rápida entre forma vieja/nueva, asentamiento en la forma nueva),
 * con flashes blancos y partículas ascendentes. Portado del useCanvas original.
 */
export const evolutionEffect: AnimationEffect<
  EvolutionPayload,
  EvolutionState
> = {
  name: "Evolution",
  defaultDuration: 4000,

  createState: () => ({
    oldSprite: null,
    newSprite: null,
    spriteToDraw: null,
    particles: [],
    acc: 0,
  }),

  start(runtime, payload) {
    runtime.state.oldSprite = runtime.sprite;
    runtime.state.newSprite = runtime.createSprite(payload.src);
  },

  update(runtime, dt, elapsedMs, durationMs) {
    const { state, tick, frameW, frameH } = runtime;
    const { oldSprite, newSprite } = state;

    // Ticka la animación de frame de ambos sprites a paso fijo.
    state.acc += dt;
    while (state.acc >= tick) {
      oldSprite?.update(tick);
      newSprite?.update(tick);
      state.acc -= tick;
    }

    const progress = Math.min(1, elapsedMs / durationMs);
    let phase: 1 | 2 | 3;
    let phaseProgress: number;

    if (progress < 0.3) {
      phase = 1;
      phaseProgress = progress / 0.3;
    } else if (progress < 0.7) {
      phase = 2;
      phaseProgress = (progress - 0.3) / 0.4;
    } else {
      phase = 3;
      phaseProgress = (progress - 0.7) / 0.3;
    }

    // Frecuencia de flip (ms por flip).
    let flipPeriod = 150;
    if (phase === 1) {
      flipPeriod = 150 - (150 - 30) * phaseProgress;
    } else if (phase === 2) {
      flipPeriod = 30;
    } else {
      flipPeriod = 30 + (200 - 30) * phaseProgress;
    }

    const shouldFlip =
      phase === 3 && phaseProgress > 0.85
        ? false
        : Math.floor(elapsedMs / flipPeriod) % 2 === 0;

    if (oldSprite) oldSprite.flipOverride = shouldFlip;
    if (newSprite) newSprite.flipOverride = shouldFlip;

    // Ratio de overlay blanco.
    let whiteRatio = 0;
    if (phase === 1) whiteRatio = phaseProgress;
    else if (phase === 2) whiteRatio = 1;
    else whiteRatio = 1 - phaseProgress;

    if (oldSprite) oldSprite.whiteRatio = whiteRatio;
    if (newSprite) newSprite.whiteRatio = whiteRatio;

    // Qué forma se dibuja en cada fase.
    if (phase === 1) {
      state.spriteToDraw = oldSprite;
    } else if (phase === 2) {
      const alternatePeriod = 60;
      const alternateOn = Math.floor(elapsedMs / alternatePeriod) % 2 === 0;
      state.spriteToDraw = alternateOn ? oldSprite : newSprite;
    } else {
      state.spriteToDraw = newSprite;
    }

    // Probabilidad de spawn de partículas.
    let spawnProbability = 0.1;
    if (phase === 1) spawnProbability = 0.05 + 0.15 * phaseProgress;
    else if (phase === 2) spawnProbability = 0.35;
    else spawnProbability = 0.35 * (1 - phaseProgress);

    if (Math.random() < spawnProbability) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.008 + Math.random() * 0.015;
      const size = Math.random() < 0.3 ? 2 : 1;
      state.particles.push({
        x: frameW / 2 + (Math.random() - 0.5) * frameW * 0.5,
        y: frameH / 2 + (Math.random() - 0.5) * frameH * 0.5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.008,
        maxLife: 400 + Math.random() * 400,
        size,
      });
    }

    state.particles = state.particles
      .map((p) => ({
        ...p,
        x: p.x + p.vx * dt,
        y: p.y + p.vy * dt,
        vy: p.vy - 0.000015 * dt,
        maxLife: p.maxLife - dt,
      }))
      .filter((p) => p.maxLife > 0);

    return elapsedMs < durationMs;
  },

  draw(runtime, { ctx }) {
    const { state } = runtime;

    if (state.spriteToDraw) {
      state.spriteToDraw.draw(ctx);
    }

    ctx.fillStyle = "#ffffff";
    state.particles.forEach((p) => {
      ctx.save();
      ctx.globalAlpha = p.maxLife > 150 ? 1 : p.maxLife / 150;
      ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      ctx.restore();
    });
  },

  finish(runtime) {
    const { state } = runtime;

    if (state.oldSprite) {
      state.oldSprite.flipOverride = null;
      state.oldSprite.whiteRatio = 0;
    }
    if (state.newSprite) {
      state.newSprite.flipOverride = null;
      state.newSprite.whiteRatio = 0;
    }

    return state.newSprite ?? undefined;
  },
};
