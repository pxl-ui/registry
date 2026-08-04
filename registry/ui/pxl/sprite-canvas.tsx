import { type CSSProperties, forwardRef, useImperativeHandle } from "react";

import { type PlayFn, useSprite } from "@/hooks/pxl/use-sprite";
import {
  type AnimationEffect,
  type Atlas,
  getNativeFrameSize,
  SPRITE_SIZE_MAP,
  type SpriteSize,
} from "@/lib/pxl/sprite";

export type SpriteCanvasHandle = {
  play: PlayFn;
  loadSprite: (src: string, atlas?: Atlas) => void;
};

type Props = {
  /** Spritesheet image url. */
  src: string;
  /** Aseprite atlas spritesheet definition (frames + frameTags). */
  atlas: Atlas;
  /** Size of the sprite. By default, the native size from the atlas. */
  size?: SpriteSize;
  /** frameTag name from the atlas to play in loop. */
  animation?: string;
  animationPayload?: unknown;
  /** static frame to display if there's no animation. */
  frame?: string;
  /** animation to go back after playing other animations. */
  idleTag?: string;
  /** ad-hoc animations registered for this canvas. */
  effects?: AnimationEffect<unknown, unknown>[];
  className?: string;
  style?: CSSProperties;
};

export const SpriteCanvas = forwardRef<SpriteCanvasHandle, Props>(
  function SpriteCanvas(
    {
      src,
      atlas,
      size,
      animation,
      animationPayload,
      frame,
      idleTag,
      effects,
      className,
      style,
    },
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
