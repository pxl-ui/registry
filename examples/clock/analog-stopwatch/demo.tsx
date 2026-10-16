import { AnalogStopwatch } from "@/components/features/pxl/clock/analog-stopwatch";

export default function AnalogStopwatchDemo() {
  return (
    <AnalogStopwatch
      size="sm"
      onLap={(elapsedSeconds) => {
        console.log(elapsedSeconds);
      }}
    />
  );
}
