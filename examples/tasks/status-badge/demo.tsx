import { useState } from "react";

import { StatusBadge } from "@/components/features/pxl/tasks/status-badge";

export default function StatusBadgeDemo() {
  const [status, setStatus] = useState<"open" | "in-progress" | "done">("open");

  const toggle = () => {
    setStatus(
      status === "open"
        ? "in-progress"
        : status === "in-progress"
          ? "done"
          : "open",
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <StatusBadge onClick={toggle} value={status} />
    </div>
  );
}
