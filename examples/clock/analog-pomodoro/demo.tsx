import { AnalogPomodoro } from "@/components/features/pxl/clock/analog-pomodoro";

export default function AnalogPomodoroDemo() {
  return (
    <AnalogPomodoro
      size="sm"
      focusDuration={60}
      shortBreakDuration={15}
      longBreakDuration={30}
    />
  );
}
