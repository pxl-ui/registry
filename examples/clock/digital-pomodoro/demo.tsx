import { DigitalPomodoro } from "@/components/features/pxl/clock/digital-pomodoro";

export default function DigitalPomodoroDemo() {
  return (
    <DigitalPomodoro
      size="sm"
      focusDuration={60}
      shortBreakDuration={15}
      longBreakDuration={30}
    />
  );
}
