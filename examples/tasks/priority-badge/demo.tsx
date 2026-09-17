import { useState } from "react";

import { PriorityBadge } from "@/components/features/pxl/tasks/priority-badge";

export default function PriorityBadgeDemo() {
  const [priority, setPriority] = useState<"low" | "normal" | "high">("low");

  const toggle = () => {
    setPriority(
      priority === "low"
        ? "normal"
        : priority === "normal"
          ? "high"
          : "low",
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <PriorityBadge onClick={toggle} value={priority} />
    </div>
  );
}
