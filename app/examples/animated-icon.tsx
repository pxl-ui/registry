import type { SVGProps } from "react";

import AnimatedIcon from "@/registry/pxl-ui/animated-icon/animated-icon";

function PixelarticonsAlarmClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M8 5h8v2H8zm0 14h8v2H8zM6 7h2v2H6zm0 10h2v2H6zM16 7h2v2h-2zm0 10h2v2h-2zM4 9h2v8H4zm14 0h2v8h-2zM4 2h2v2H4zm0 17h2v2H4zm14 0h2v2h-2zm0-17h2v2h-2zM2 4h2v2H2zm18 0h2v2h-2zm-9 5h2v4h-2zm2 4h2v2h-2z"></path>
    </svg>
  );
}

export function BlinkAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Blink</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="blink" icon={PixelarticonsAlarmClock} />
    </div>
  );
}

export function BounceAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Bounce</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="bounce" icon={PixelarticonsAlarmClock} />
    </div>
  );
}


export function FloatAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Float</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="float" icon={PixelarticonsAlarmClock} />
    </div>
  );
}

export function PingAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Ping</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="ping" icon={PixelarticonsAlarmClock} />
    </div>
  );
}


export function PopAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Pop</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="pop" icon={PixelarticonsAlarmClock} />
    </div>
  );
}

export function PulseAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Pulse</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="pulse" icon={PixelarticonsAlarmClock} />
    </div>
  );
}

export function ShakeAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Shake</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="shake" icon={PixelarticonsAlarmClock} />
    </div>
  );
}

export function SpinAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Spin</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="spin" icon={PixelarticonsAlarmClock} />
    </div>
  );
}

export function SwingAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Swing</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="swing" icon={PixelarticonsAlarmClock} />
    </div>
  );
}

export function TadaAnimationAnimatedIcon() {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <label className="text-sm font-medium">Tada</label>
        <p className="text-sm text-muted-foreground"></p>
      </div>

      <AnimatedIcon className="size-4" animation="tada" icon={PixelarticonsAlarmClock} />
    </div>
  );
}

export default function AnimatedIconExamples() {
  return (
    <div className="grid grid-cols-4 w-full gap-2">
      <BlinkAnimationAnimatedIcon />
      <BounceAnimationAnimatedIcon />
      <FloatAnimationAnimatedIcon />
      <PingAnimationAnimatedIcon />
      <PopAnimationAnimatedIcon />
      <PulseAnimationAnimatedIcon />
      <ShakeAnimationAnimatedIcon />
      <SpinAnimationAnimatedIcon />
      <SwingAnimationAnimatedIcon />
      <TadaAnimationAnimatedIcon />
    </div>
  )
}