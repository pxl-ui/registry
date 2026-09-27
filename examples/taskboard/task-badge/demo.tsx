import { useEffect, useState } from "react";

import {
  DueBadge,
  EstimateBadge,
  IdBadge,
  PriorityBadge,
  ProjectBadge,
  ScheduledBadge,
  StatusBadge,
} from "@/components/features/pxl/taskboard/task-badge";

const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export default function TaskBadgeDemo() {
  const today = new Date();
  const [priority, setPriority] = useState<"low" | "normal" | "high">("low");
  const [estimate, setEstimate] = useState<number>(3_600);
  const [countdownIsRunning, setCountdownIsRunning] = useState(false);
  const [status, setStatus] = useState<"open" | "in-progress" | "done">("open");

  const togglePriority = () => {
    setPriority(
      priority === "low" ? "normal" : priority === "normal" ? "high" : "low",
    );
  };
  const toggleStatus = () => {
    setStatus(
      status === "open"
        ? "in-progress"
        : status === "in-progress"
          ? "done"
          : "open",
    );
  };
  const startEstimateCountdown = () => {
    setEstimate(60 * 60);
    setCountdownIsRunning((value) => !value);
  };

  useEffect(() => {
    if (!countdownIsRunning || estimate <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setEstimate((current) => {
        if (current <= 1) {
          setCountdownIsRunning(false);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownIsRunning, estimate]);

  return (
    <div className="min-h-23 flex items-center justify-center">
      <div className="flex flex-row flex-wrap gap-2.5">
        <IdBadge>PXL-001</IdBadge>
        <ProjectBadge>PXL-UI</ProjectBadge>
        <StatusBadge onClick={toggleStatus} value={status} />
        <PriorityBadge onClick={togglePriority} value={priority} />
        <EstimateBadge onClick={startEstimateCountdown} value={estimate} />
        <DueBadge value={formatDate(today)} />
        <DueBadge value={formatDate(addDays(today, 2))} />
        <DueBadge value={formatDate(addDays(today, 30))} />
        <ScheduledBadge value={formatDate(today)} />
        <ScheduledBadge value={formatDate(addDays(today, 2))} />
        <ScheduledBadge value={formatDate(addDays(today, 30))} />
      </div>
    </div>
  );
}
