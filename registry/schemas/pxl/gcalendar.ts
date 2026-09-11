import z from "zod";

const CalendarAccessRoleSchema = z
  .union([
    z
      .literal("freeBusyReader")
      .describe("Provides read access to free/busy information."),
    z
      .literal("reader")
      .describe(
        "Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.",
      ),
    z
      .literal("writer")
      .describe(
        "Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.",
      ),
    z
      .literal("owner")
      .describe(
        "Provides manager access to the calendar. This role has all of the permissions of the writer role with the additional ability to see and modify access levels of other users.",
      ),
  ])
  .describe(
    "The effective access role that the authenticated user has on the calendar. Read-only. Important: the owner role is different from the calendar's data owner. A calendar has a single data owner, but can have multiple users with owner role.",
  );

const AttendeeResponseStatusSchema = z
  .union([
    z
      .literal("needsAction")
      .describe(
        "The attendee has not responded to the invitation (recommended for new events)",
      ),
    z.literal("declined").describe("The attendee has declined the invitation."),
    z
      .literal("tentative")
      .describe("The attendee has tentatively accepted the invitation."),
    z
      .literal("accepted")
      .describe(
        "The attendee has accepted the invitation.  Warning: If you add an event using the values declined, tentative, or accepted, attendees with the 'Add invitations to my calendar' setting set to 'When I respond to invitation in email' or 'Only if the sender is known' might have their response reset to needsAction and won't see an event in their calendar unless they change their response in the event invitation email. Furthermore, if more than 200 guests are invited to the event, response status is not propagated to the guests.",
      ),
  ])
  .describe("The attendee's response status.");

const AttendeeSchema = z
  .object({
    displayName: z
      .string()
      .nullish()
      .describe("The attendee's name, if available. Optional."),
    email: z
      .email()
      .nullish()
      .describe(
        "The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322. * Required when adding an attendee.",
      ),
    id: z
      .string()
      .nullish()
      .describe("The attendee's Profile ID, if available."),
    optional: z
      .boolean()
      .nullish()
      .describe(
        "Whether this is an optional attendee. Optional. The default is False.",
      ),
    organizer: z
      .boolean()
      .nullish()
      .describe(
        "Whether the attendee is the organizer of the event. Read-only. The default is False.",
      ),
    responseStatus: AttendeeResponseStatusSchema.nullish(),
  })
  .describe(
    "The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list.",
  );

const DateTimeSchema = z.object({
  date: z
    .string()
    .nullish()
    .describe(
      "The date, in the format 'yyyy-mm-dd', if this is an all-day event.",
    ),
  dateTime: z
    .string()
    .nullish()
    .describe(
      "The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.",
    ),
  timeZone: z
    .string()
    .nullish()
    .describe(
      "The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. 'Europe/Zurich'.) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.",
    ),
});

const ReminderSchema = z.object({
  method: z
    .union([
      z.literal("email").describe("Reminders are sent via email."),
      z.literal("popup").describe("Reminders are sent via a UI popup."),
    ])
    .nullish()
    .describe("The method used by this reminder."),
  minutes: z
    .number()
    .nullish()
    .describe(
      "Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).",
    ),
});

const EventStatusSchema = z.union([
  z
    .literal("confirmed")
    .describe("The event is confirmed. This is the default status."),
  z.literal("tentative").describe("The event is tentatively confirmed."),
  z
    .literal("cancelled")
    .describe(`The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
         A cancelled status represents two different states depending on the event type:
         - Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
         Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
         - All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
         Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
         If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.`),
]);

const CalendarSchema = z
  .object({
    accessRole: CalendarAccessRoleSchema.nullish(),
    backgroundColor: z
      .string()
      .nullish()
      .describe(
        "The main color of the calendar in the hexadecimal format '#0088aa'. This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.",
      ),
    colorId: z
      .string()
      .nullish()
      .describe(
        "The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.",
      ),
    defaultReminders: z
      .array(ReminderSchema)
      .optional()
      .describe(
        "The default reminders that the authenticated user has for this calendar.",
      ),
    deleted: z
      .boolean()
      .nullish()
      .describe(
        "Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.",
      ),
    description: z
      .string()
      .nullish()
      .describe("Description of the calendar. Optional. Read-only."),
    foregroundColor: z
      .string()
      .nullish()
      .describe(
        "The foreground color of the calendar in the hexadecimal format '#ffffff'. This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.",
      ),
    hidden: z
      .boolean()
      .nullish()
      .describe(
        "Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true.",
      ),
    id: z.string().nullish().describe("Identifier of the calendar."),
    primary: z
      .boolean()
      .nullish()
      .describe(
        "Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.",
      ),
    selected: z
      .boolean()
      .nullish()
      .describe(
        "Whether the calendar content shows up in the calendar UI. Optional. The default is False.",
      ),
    summary: z.string().nullish().describe("Title of the calendar. Read-only."),
    summaryOverride: z
      .string()
      .nullish()
      .describe(
        "The summary that the authenticated user has set for this calendar. Optional.",
      ),
  })
  .describe("from googleapis calendar_v3.Schema$CalendarListEntry");

const EventSchema = z.object({
  attendees: z.array(AttendeeSchema).optional(),
  colorId: z
    .string()
    .nullish()
    .describe(
      "The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional",
    ),
  description: z
    .string()
    .nullish()
    .describe("Description of the event. Can contain HTML. Optional."),
  end: DateTimeSchema.optional().describe(
    "The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.",
  ),
  htmlLink: z
    .string()
    .nullish()
    .describe(
      "An absolute link to this event in the Google Calendar Web UI. Read-only.",
    ),
  iCalUID: z
    .string()
    .nullish()
    .describe(
      "Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method. * Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method.",
    ),
  id: z
    .string()
    .nullish()
    .describe(`Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
         - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
         - the length of the ID must be between 5 and 1024 characters
         - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
         If you do not specify an ID, it will be automatically generated by the server.
         Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.
         `),
  recurrence: z
    .array(z.string())
    .nullish()
    .describe(
      "List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.",
    ),
  recurringEventId: z
    .string()
    .nullish()
    .describe(
      "For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.",
    ),
  reminders: z
    .object({
      overrides: z.array(ReminderSchema).optional(),
      useDefault: z.boolean().optional(),
    })
    .nullish()
    .describe(
      "Information about the event's reminders for the authenticated user. Note that changing reminders does not also change the updated property of the enclosing event.",
    ),
  start: DateTimeSchema.optional().describe(
    "The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.",
  ),
  status: EventStatusSchema.nullish(),
  summary: z.string().nullish().describe("Title of the event."),
});

const GCalendarSchemas = {
  Attendee: AttendeeSchema,
  AttendeeResponseStatus: AttendeeResponseStatusSchema,
  Calendar: CalendarSchema,
  CalendarAccessRole: CalendarAccessRoleSchema,
  DateTime: DateTimeSchema,
  Event: EventSchema,
  EventStatus: EventStatusSchema,
};

type Attendee = z.infer<typeof AttendeeSchema>;
type AttendeeResponseStatus = z.infer<typeof AttendeeResponseStatusSchema>;
type Calendar = z.infer<typeof CalendarSchema>;
type CalendarAccessRole = z.infer<typeof CalendarAccessRoleSchema>;
type DateTime = z.infer<typeof DateTimeSchema>;
type Event = z.infer<typeof EventSchema>;
type EventStatus = z.infer<typeof EventStatusSchema>;

declare namespace GCalendar {
  export type {
    Attendee,
    AttendeeResponseStatus,
    Calendar,
    CalendarAccessRole,
    DateTime,
    Event,
    EventStatus,
  };
}

export type {
  Attendee,
  AttendeeResponseStatus,
  Calendar,
  CalendarAccessRole,
  DateTime,
  Event,
  EventStatus,
  GCalendar,
};
export {
  AttendeeResponseStatusSchema,
  AttendeeSchema,
  CalendarAccessRoleSchema,
  CalendarSchema,
  DateTimeSchema,
  EventSchema,
  EventStatusSchema,
  GCalendarSchemas,
};
