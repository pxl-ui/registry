import { useEffect, useState } from "react";

import { EstimateBadge } from "@/components/features/pxl/tasks/estimate-badge";

export default function StatusBadgeDemo() {
  const [value, setValue] = useState<number>(60 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setValue(60 * 60);
    setIsRunning((value) => !value);
  };

  useEffect(() => {
    if (!isRunning || value <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setValue((current) => {
        if (current <= 1) {
          setIsRunning(false);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, value]);

  return (
    <div className="flex flex-col gap-4">
      <EstimateBadge onClick={startTimer} value={value} />
    </div>
  );
}
