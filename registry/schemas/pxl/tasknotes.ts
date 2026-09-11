import z from "zod";

const ReminderSchema = z.union([
  z.object({
    id: z.string(),
    type: z.literal("relative"),
    relatedTo: z.enum(["due", "scheduled"]),
    offset: z.string(),
    description: z.string().optional(),
  }),
  z.object({
    id: z.string(),
    type: z.literal("absolute"),
    description: z.string().optional(),
    absoluteTime: z.string(),
  }),
]);

const TimeEntrySchema = z.object({
  startTime: z.string(),
  endTime: z.string().optional(),
  description: z.string().optional(),
})

const CorePropertiesSchema = z
  .object({
    title: z
      .string()
      .optional()
      .describe(
        "The task name. Can be stored in frontmatter or in the filename (when 'store title in filename' is enabled).",
      ),
    status: z
      .enum(["none", "open", "in-progress", "done"])
      .default("none")
      .describe(
        "Tracks the current state of a task (e.g., todo, in-progress, done). Status determines whether a task appears as completed and can trigger auto-archiving.",
      ),
    priority: z
      .enum(["none", "low", "normal", "high"])
      .default("none")
      .describe(
        "Indicates task importance. Used for sorting and filtering. Values are sorted alphabetically in Bases views, so use prefixes like 1-, 2- to control order.",
      ),
  })
  .describe(
    "Status and priority are the core properties that define a task's state and importance.",
  );

const DatePropertiesSchema = z
  .object({
    due: z
      .string()
      .optional()
      .describe(
        "Indicates task importance. Used for sorting and filtering. Values are sorted alphabetically in Bases views, so use prefixes like 1-, 2- to control order.",
      ),
    scheduled: z
      .string()
      .optional()
      .describe(
        "When you plan to work on a task. Unlike due date, this represents your intended start time. Tasks appear on the calendar at their scheduled date/time.",
      ),
  })
  .describe("Configure when tasks are due and scheduled.");

const OrganizationPropertiesSchema = z
  .object({
    contexts: z
      .array(z.string())
      .optional()
      .describe(
        "Locations or conditions where a task can be done (e.g., @home, @office, @phone). Useful for filtering tasks by your current situation. Stored as a list.",
      ),
    projects: z
      .array(z.string())
      .optional()
      .describe(
        "Links to project notes this task belongs to. Stored as wikilinks (e.g., [[Project Name]]). Tasks can belong to multiple projects.",
      ),
    tags: z
      .array(z.string())
      .optional()
      .describe(
        "Native Obsidian tags for categorizing tasks. These are stored in the tags frontmatter property and work with Obsidian's tag features.",
      ),
  })
  .describe("Organize tasks with contexts, projects, and tags.");

const TaskDetailsSchema = z
  .object({
    timeEstimate: z
      .number()
      .optional()
      .describe(
        "Estimated minutes to complete the task. Used for time-blocking and workload planning. Displayed on task cards and calendar events.",
      ),
    recurrence: z
      .string()
      .optional()
      .describe(
        "Pattern for repeating tasks (daily, weekly, monthly, yearly, or custom RRULE). When a recurring task is completed, its scheduled date is automatically updated to the next occurrence.",
      ),
    recurrence_anchor: z
      .string()
      .optional()
      .describe(
        "Controls how the next occurrence is calculated: 'scheduled' uses the scheduled date, 'completion' uses the actual completion date.",
      ),
    reminders: z
      .array(ReminderSchema)
      .optional()
      .describe(
        "Notifications triggered before due or scheduled dates. Stored as a list of reminder objects with timing and optional description.",
      ),
  })
  .describe(
    "Additional details like time estimates, recurrence, and reminders.",
  );

const MetadataPropertiesSchema = z
  .object({
    dateCreated: z
      .string()
      .optional()
      .describe(
        "Timestamp when the task was first created. Automatically set and used for sorting by creation order.",
      ),
    dateModified: z
      .string()
      .optional()
      .describe(
        "Timestamp of the last change to the task. Automatically updated when any task property changes.",
      ),
    completedDate: z
      .string()
      .optional()
      .describe(
        "Timestamp when the task was marked complete. Set automatically when status changes to a completed state.",
      ),
    timeEntries: z
      .array(TimeEntrySchema)
      .optional()
      .describe(
        "Records of time tracking sessions for this task. Each entry stores start and end timestamps. Used to calculate total time spent.",
      ),
    complete_instances: z
      .array(z.string())
      .optional()
      .describe(
        "Completion history for recurring tasks. Stores dates when each instance was completed to prevent duplicate completions.",
      ),
    skipped_instances: z
      .array(z.string())
      .optional()
      .describe(
        "Skipped occurrences for recurring tasks. Stores dates of instances that were skipped rather than completed.",
      ),
    blockedBy: z
      .array(z.object({
        uid: z.string(),
        reltype: z.literal("FINISHTOSTART"),
      }))
      .optional()
      .describe(
        "Links to tasks that must be completed before this one. Stored as wikilinks. Blocked tasks display a visual indicator.",
      ),
    tasknotes_manual_order: z
      .string()
      .optional()
      .describe(
        "Frontmatter property used for drag-to-reorder manual ordering. A view must be sorted by this property for drag-and-drop reordering to work.",
      ),
  })
  .describe("System-managed properties for tracking task history.");

const FeaturePropertiesSchema = z
  .object({
    icsEventId: z
      .string()
      .optional()
      .describe(
        "Unique identifier linking a note to an ICS calendar event. Added automatically when creating notes from calendar events.",
      ),
  })
  .describe(
    "Properties used by specific TaskNotes features like Pomodoro timer and calendar sync.",
  );

const TaskSchema = z.object({
  ...CorePropertiesSchema,
  ...DatePropertiesSchema,
  ...OrganizationPropertiesSchema,
  ...TaskDetailsSchema,
  ...MetadataPropertiesSchema,
  ...FeaturePropertiesSchema,
});

const TaskNotesSchemas = {
  Reminder: ReminderSchema,
  Task: TaskSchema,
  TimeEntry: TimeEntrySchema,
};

type CoreProperties = z.infer<typeof CorePropertiesSchema>;
type DateProperties = z.infer<typeof DatePropertiesSchema>;
type OrganizationProperties = z.infer<typeof OrganizationPropertiesSchema>;
type TaskDetails = z.infer<typeof TaskDetailsSchema>;
type MetadataProperties = z.infer<typeof MetadataPropertiesSchema>;
type FeatureProperties = z.infer<typeof FeaturePropertiesSchema>;
type Reminder = z.infer<typeof ReminderSchema>;
type Task = z.infer<typeof TaskSchema>;
type TimeEntry = z.infer<typeof TimeEntrySchema>;

declare namespace TaskNotes {
  export type { Reminder, Task, TimeEntry };
}

export type {
  CoreProperties,
  DateProperties,
  FeatureProperties,
  MetadataProperties,
  OrganizationProperties,
  Reminder,
  Task,
  TaskDetails,
  TaskNotes,
  TimeEntry,
};
export {
  CorePropertiesSchema,
  DatePropertiesSchema,
  FeaturePropertiesSchema,
  MetadataPropertiesSchema,
  OrganizationPropertiesSchema,
  ReminderSchema,
  TaskDetailsSchema,
  TaskNotesSchemas,
  TaskSchema,
  TimeEntrySchema,
};
