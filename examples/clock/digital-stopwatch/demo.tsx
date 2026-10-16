import { DigitalStopwatch } from "@/components/features/pxl/clock/digital-stopwatch";

export default function DigitalStopwatchDemo() {
  return (
    <DigitalStopwatch
      size="sm"
      onLap={(elapsedSeconds) => {
        console.log(elapsedSeconds);
      }}
    />
  );
}
