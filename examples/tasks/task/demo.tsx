import { DueBadge } from "@/components/features/pxl/tasks/due-badge";
import {
  Task,
  TaskActions,
  TaskActionsMenu,
  TaskActionsMenuItem,
  TaskContent,
  TaskDescription,
  TaskEstimate,
  TaskGroup,
  TaskHeader,
  TaskMedia,
  TaskSeparator,
  TaskStatus,
  TaskTitle,
} from "@/components/features/pxl/tasks/task";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";

const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};


const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const tasks: TaskNotes.Task[] = [
  {
    title: "Buy groceries",
    status: "in-progress",
    priority: "low",
    description: `
- [ ] Milk
- [x] Eggs
- [ ] Bread   
`
  },
  {
    title: "Medical Appointment",
    status: "open",
    priority: "high",
  },
  {
    title: "Yoga class",
    status: "done",
    priority: "normal",
    timeEstimate: 60,
  }
]

export default function TaskDemo() {
  const today = new Date();

  tasks[1].due = formatDate(addDays(today, 2));

  return (
    <TaskGroup className="w-full max-w-md has-data-[size=xs]:gap-0">
      {
        tasks.map((t, i) => (
          <>
            <Task key={t.title} collapsible={Boolean(t.description)}>
              <TaskHeader>
                <TaskMedia variant="status">
                  <TaskStatus.TaskNotes task={t} />
                </TaskMedia>
                <TaskTitle.TaskNotes task={t} />
                {t.due && <DueBadge.TaskNotes task={t} />}
                {t.timeEstimate && <TaskEstimate.TaskNotes task={t} />}
                <TaskActions>
                  <TaskActionsMenu>
                    <TaskActionsMenuItem>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z" />
                      </svg>
                      Complete
                    </TaskActionsMenuItem>
                    <TaskActionsMenuItem>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 2h18v2H3zm0 5h18v2H3zM1 4h2v3H1zm20 0h2v3h-2zm-2 5h2v11h-2zM3 9h2v11H3zm2 11h14v2H5zm4-9h6v2H9z" />
                      </svg>
                      Archive
                    </TaskActionsMenuItem>
                    <TaskActionsMenuItem variant="destructive">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 22H6V20H18V22ZM9 6H15V4H17V6H22V8H20V20H18V8H6V20H4V8H2V6H7V4H9V6ZM15 4H9V2H15V4Z" />
                      </svg>
                      Delete
                    </TaskActionsMenuItem>
                  </TaskActionsMenu>
                </TaskActions>
              </TaskHeader>
              {t.description && (
                <TaskContent>
                  <TaskDescription.TaskNotes task={t} />
                </TaskContent>
              )}
            </Task>

            {i !== tasks.length -1 && (<TaskSeparator className="m-0" />)}
          </>
        ))
      }
    </TaskGroup>
  );
}
