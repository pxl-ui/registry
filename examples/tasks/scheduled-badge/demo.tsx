import { ScheduledBadge } from "@/components/features/pxl/tasks/scheduled-badge";

const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};


const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export default function ScheduledBadgeDemo() {
  const today = new Date();

  return (
    <div className="flex flex-col gap-4">
      <ScheduledBadge value={formatDate(today)} />

      <ScheduledBadge value={formatDate(addDays(today, 2))} />

      <ScheduledBadge value={formatDate(addDays(today, 30))} />
    </div>
  );
}
