import { useState } from "react";

import { StatusToggle } from "@/components/features/pxl/tasks/status-toggle";

export default function StatusToggleDemo() {
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
      <StatusToggle onClick={toggle} value={status} />
    </div>
  );
}
