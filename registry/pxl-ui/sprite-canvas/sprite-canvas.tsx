import { type CSSProperties, forwardRef, useImperativeHandle } from "react";

import { type PlayFn, useSprite } from "./hooks/use-sprite";
import {
  type AnimationEffect,
  type Atlas,
  getNativeFrameSize,
  SPRITE_SIZE_MAP,
  type SpriteSize,
} from "./utils";

export type SpriteCanvasHandle = {
  play: PlayFn;
  loadSprite: (src: string, atlas?: Atlas) => void;
};

type Props = {
  /** URL de la imagen del spritesheet. */
  src: string;
  /** Definición del atlas de Aseprite (frames + frameTags). */
  atlas: Atlas;
  /** Tamaño del sprite. Por defecto, el tamaño nativo indicado en el atlas. */
  size?: SpriteSize;
  /** Nombre de un frameTag del atlas a reproducir en loop. */
  animation?: string;
  animationPayload?: unknown;
  /** Frame estático a mostrar si no se indica `animation`. */
  frame?: string;
  /** Tag al que volver tras animaciones puntuales (por defecto ninguno). */
  idleTag?: string;
  /** Animaciones ad-hoc registradas para este canvas (evolutionEffect, choiceEffect, ...). */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effects?: AnimationEffect<any, any>[];
  className?: string;
  style?: CSSProperties;
};

/**
 * Canvas de sprite genérico y reutilizable. Renderiza declarativamente según
 * `animation`/`frame`, y expone `play()`/`loadSprite()` vía ref para control
 * imperativo (necesario para animaciones ad-hoc como evolution/choice, que
 * requieren callbacks de finalización y payloads extra).
 */
export const SpriteCanvas = forwardRef<SpriteCanvasHandle, Props>(
  function SpriteCanvas(
    { src, atlas, size, animation, animationPayload, frame, idleTag, effects, className, style },
    ref,
  ) {
    const nativeSize = getNativeFrameSize(atlas, frame);
    const pixelSize = size
      ? SPRITE_SIZE_MAP[size]
      : Math.max(nativeSize.w, nativeSize.h);

    const { canvasRef, play, loadSprite } = useSprite({
      src,
      atlas,
      frame,
      animation,
      animationPayload,
      idleTag,
      effects,
      size: pixelSize,
    });

    useImperativeHandle(ref, () => ({ play, loadSprite }), [play, loadSprite]);

    return (
      <canvas
        ref={canvasRef}
        className={className}
        style={{
          width: pixelSize,
          height: pixelSize,
          imageRendering: "pixelated",
          ...style,
        }}
      />
    );
  },
);

SpriteCanvas.displayName = "SpriteCanvas";