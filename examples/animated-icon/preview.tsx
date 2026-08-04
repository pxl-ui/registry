import type { ComponentProps, SVGProps } from "react";

import AnimatedIcon from "@/components/ui/pxl/animated-icon";

function PixelarticonsAlarmClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M8 5h8v2H8zm0 14h8v2H8zM6 7h2v2H6zm0 10h2v2H6zM16 7h2v2h-2zm0 10h2v2h-2zM4 9h2v8H4zm14 0h2v8h-2zM4 2h2v2H4zm0 17h2v2H4zm14 0h2v2h-2zm0-17h2v2h-2zM2 4h2v2H2zm18 0h2v2h-2zm-9 5h2v4h-2zm2 4h2v2h-2z"></path>
    </svg>
  );
}

type Props = ComponentProps<typeof AnimatedIcon> & {
  label: string;
  description?: string;
}

function AnimatedIconExample({ label, description, ...props }: Props) {
  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <div className="space-y-2">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <AnimatedIcon className="size-4" {...props} />
    </div>
  );

}

export default function AnimatedIconPreview() {
  return (
    <div className="w-full min-h-92 flex items-center justify-center">
      <div className="grid grid-cols-4 w-full gap-2">
        <AnimatedIconExample label="Blink" animation="blink" icon={PixelarticonsAlarmClock} />
        <AnimatedIconExample label="Bounce" animation="bounce" icon={PixelarticonsAlarmClock} />
        <AnimatedIconExample label="Float" animation="float" icon={PixelarticonsAlarmClock} />
        <AnimatedIconExample label="Ping" animation="ping" icon={PixelarticonsAlarmClock} />
        <AnimatedIconExample label="Pop" animation="pop" icon={PixelarticonsAlarmClock} />
        <AnimatedIconExample label="Pulse" animation="pulse" icon={PixelarticonsAlarmClock} />
        <AnimatedIconExample label="Shake" animation="shake" icon={PixelarticonsAlarmClock} />
        <AnimatedIconExample label="Spin" animation="spin" icon={PixelarticonsAlarmClock} />
        <AnimatedIconExample label="Swing" animation="swing" icon={PixelarticonsAlarmClock} />
        <AnimatedIconExample label="Tada" animation="tada" icon={PixelarticonsAlarmClock} />
      </div>
    </div>
  )
}