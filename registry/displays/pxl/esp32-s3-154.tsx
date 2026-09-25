import { type ComponentProps, useId } from "react";

import { cn } from "@/lib/utils";

const DEVICE_SIZE = 46;

const SCREEN_X = 8.95;
const SCREEN_Y = 9.95;
const SCREEN_SIZE = 28.12;
const SCREEN_RADIUS = 0.6;

const DEVICE_RADIUS = 3.2;

const SCREEN_LEFT_PCT = (SCREEN_X / DEVICE_SIZE) * 100;
const SCREEN_TOP_PCT = (SCREEN_Y / DEVICE_SIZE) * 100;
const SCREEN_WIDTH_PCT = (SCREEN_SIZE / DEVICE_SIZE) * 100;
const SCREEN_HEIGHT_PCT = (SCREEN_SIZE / DEVICE_SIZE) * 100;
const SCREEN_RADIUS_PCT = (SCREEN_RADIUS / SCREEN_SIZE) * 100;

function ESP32S3154({
  children,
  src,
  videoSrc,
  className,
  style,
  ...props
}: ComponentProps<"div"> & {
  src?: string;
  videoSrc?: string;
}) {
  const hasVideo = !!videoSrc;
  const hasMedia = hasVideo || !!src;

  const rawId = useId();
  const id = rawId.replace(/:/g, "");

  const screenMaskId = `esp32-screen-mask-${id}`;

  return (
    <div
      className={cn(
        "aspect-square relative inline-block w-full align-middle leading-none",
        className,
      )}
      style={{
        ...style,
      }}
      {...props}
    >

      <svg
        viewBox={`0 0 ${DEVICE_SIZE} ${DEVICE_SIZE + 1}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 size-full"
        style={{ transform: "translateZ(0)" }}
      >
        <defs>
          <mask id={screenMaskId} maskUnits="userSpaceOnUse">
            <rect
              x="0"
              y="0"
              width={DEVICE_SIZE}
              height={DEVICE_SIZE}
              fill="white"
            />

            <rect
              x={SCREEN_X}
              y={SCREEN_Y}
              width={SCREEN_SIZE}
              height={SCREEN_SIZE}
              rx={SCREEN_RADIUS}
              ry={SCREEN_RADIUS}
              fill="black"
            />
          </mask>
        </defs>

        <rect
          x="9.6"
          y="0"
          width="5.35"
          height="1"
          className="fill-[#d8d8d8] dark:fill-[#5b5b5b]"
        />

        <rect
          x="20.3"
          y="0"
          width="5.35"
          height="1"
          className="fill-[#d8d8d8] dark:fill-[#5b5b5b]"
        />

        <rect
          x="31"
          y="0"
          width="5.35"
          height="1"
          className="fill-[#d8d8d8] dark:fill-[#5b5b5b]"
        />

        <rect
          x="0"
          y="1"
          width="46"
          height="46"
          rx={DEVICE_RADIUS}
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />

        <rect
          x="2.93"
          y="3.93"
          width="40.15"
          height="40.15"
          rx="3.1"
          className="fill-[#111111] dark:fill-[#090909]"
        />

        <rect
          x={SCREEN_X - 0.35}
          y={SCREEN_Y - 0.35}
          width={SCREEN_SIZE + 0.7}
          height={SCREEN_SIZE + 0.7}
          rx={SCREEN_RADIUS + 0.35}
          className="fill-[#181818] dark:fill-[#0D0D0D]"
          mask={hasMedia ? `url(#${screenMaskId})` : undefined}
        />

        <rect
          x={SCREEN_X}
          y={SCREEN_Y}
          width={SCREEN_SIZE}
          height={SCREEN_SIZE}
          rx={SCREEN_RADIUS}
          ry={SCREEN_RADIUS}
          className="fill-[#050505] stroke-[#242424] stroke-[0.15]"
          mask={hasMedia ? `url(#${screenMaskId})` : undefined}
        />
      </svg>
      {children && (
        <div className="absolute z-0 overflow-hidden"
          style={{
            left: `${SCREEN_LEFT_PCT}%`,
            top: `${SCREEN_TOP_PCT}%`,
            width: `${SCREEN_WIDTH_PCT}%`,
            height: `${SCREEN_HEIGHT_PCT}%`,
            borderRadius: `${SCREEN_RADIUS_PCT}%`,
          }}>
          <div
            className="flex size-full object-cover items-center justify-center">
           {children} 
           </div>
        </div>
      )}

      {hasVideo && (
        <div
          className="pointer-events-none absolute z-0 overflow-hidden"
          style={{
            left: `${SCREEN_LEFT_PCT}%`,
            top: `${SCREEN_TOP_PCT}%`,
            width: `${SCREEN_WIDTH_PCT}%`,
            height: `${SCREEN_HEIGHT_PCT}%`,
            borderRadius: `${SCREEN_RADIUS_PCT}%`,
          }}
        >
          <video
            className="block size-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
      )}

      {!hasVideo && src && (
        <div
          className="pointer-events-none absolute z-0 overflow-hidden"
          style={{
            left: `${SCREEN_LEFT_PCT}%`,
            top: `${SCREEN_TOP_PCT}%`,
            width: `${SCREEN_WIDTH_PCT}%`,
            height: `${SCREEN_HEIGHT_PCT}%`,
            borderRadius: `${SCREEN_RADIUS_PCT}%`,
          }}
        >
          <img src={src} alt="" className="block size-full object-cover" />
        </div>
      )}
    </div>
  );
}

export { ESP32S3154 };
