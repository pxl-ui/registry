import { DueBadge } from "@/components/features/pxl/tasks/due-badge";

const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};


const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export default function DueBadgeDemo() {
  const today = new Date();

  return (
    <div className="flex flex-col gap-4">
      <DueBadge value={formatDate(today)} />

      <DueBadge value={formatDate(addDays(today, 2))} />

      <DueBadge value={formatDate(addDays(today, 30))} />
    </div>
  );
}
