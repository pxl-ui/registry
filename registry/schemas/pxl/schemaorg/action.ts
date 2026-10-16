import { z } from "zod";

import { HowToSchema } from "@/lib/schemas/pxl/schemaorg/how-to";
import {
  PlaceSchema,
  PostalAddressSchema,
  VirtualLocationSchema,
} from "@/lib/schemas/pxl/schemaorg/location";
import { EntrypointSchema } from "@/lib/schemas/pxl/schemaorg/software-application";

const PersonSchema = z
  .looseObject({
    identifier: z.union([z.string(), z.array(z.string())]).optional(),
    name: z.string().optional(),
    email: z.union([z.string(), z.array(z.string())]).optional(),
    description: z.string().optional(),
  })
  .meta({
    title: "Person",
    description: "A person (alive, dead, undead, or fictional).",
  });

const OrganizationSchema = z
  .looseObject({
    identifier: z.union([z.string(), z.array(z.string())]).optional(),
    name: z.string().optional(),
    email: z.union([z.string(), z.array(z.string())]).optional(),
    description: z.string().optional(),
  })
  .meta({
    title: "Organization",
    description:
      "An organization such as a school, NGO, corporation, club, etc.",
  });

const Instrument = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
  })
  .meta({
    title: "Instrument",
    description:
      "The object that helped the agent perform the action. E.g. John wrote a book with a pen.",
  });

const ObjectSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
  })
  .meta({
    title: "Object",
    description:
      "The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read a book.",
  });

const ErrorSchema = z
  .looseObject({
    errorCode: z
      .string()
      .optional()
      .describe("Application or platform dependant error code."),
    data: z
      .record(z.string(), z.unknown())
      .optional()
      .describe(
        "Data associated with the event, like for instance a log message.",
      ),
    source: z
      .record(z.string(), z.unknown())
      .optional()
      .describe("The source or cause of the event."),
    timestamp: z.iso.datetime().describe("The instant the event occured."),
  })
  .meta({
    title: "Error",
    description: "Representation of an Error.",
  });

const ResultSchema = z
  .looseObject({
    data: z
      .record(z.string(), z.unknown())
      .optional()
      .describe(
        "Data associated with the event, like for instance a log message.",
      ),
    source: z
      .record(z.string(), z.unknown())
      .optional()
      .describe("The source or cause of the event."),
    timestamp: z.iso.datetime().describe("The instant the event occured."),
  })
  .meta({
    title: "Result",
    description: "The result produced in the action. E.g. John wrote a book.",
  });

const ActionStatusType = z
  .union([
    z
      .literal("ActiveActionStatus")
      .describe(
        "An in-progress action (e.g., while watching the movie, or driving to a location).",
      ),
    z
      .literal("CompletedActionStatus")
      .describe("An action that has already taken place."),
    z
      .literal("FailedActionStatus")
      .describe(
        "An action that failed to complete. The action's error property and the HTTP return code contain more information about the failure.",
      ),
    z
      .literal("PotentialActionStatus")
      .describe("A description of an action that is supported."),
  ])
  .meta({
    title: "ActionStatusType",
    description: "The status of an Action.",
  });

const ActionSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
    actionProcess: HowToSchema.optional().describe(
      "Description of the process by which the action was performed.",
    ),
    actionStatus: ActionStatusType.optional().describe(
      "Indicates the current disposition of the Action.",
    ),
    agent: z
      .array(z.union([PersonSchema, OrganizationSchema]))
      .optional()
      .describe(
        "The direct performer or driver of the action (animate or inanimate). E.g. John wrote a book.",
      ),
    endTime: z
      .union([z.iso.date(), z.iso.datetime()])
      .optional()
      .describe("The endTime of something."),
    error: z
      .array(ErrorSchema)
      .optional()
      .describe(
        "	For failed actions, more information on the cause of the failure.",
      ),
    instrument: z
      .array(Instrument)
      .optional()
      .describe(
        "The object that helped the agent perform the action. E.g. John wrote a book with a pen.",
      ),
    location: z
      .union([
        PlaceSchema,
        PostalAddressSchema,
        VirtualLocationSchema,
        z.string(),
      ])
      .optional()
      .describe(
        "The object that helped the agent perform the action. E.g. John wrote a book with a pen.",
      ),
    object: z
      .array(ObjectSchema)
      .optional()
      .describe(
        "The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read a book.",
      ),
    participant: z
      .array(z.union([PersonSchema, OrganizationSchema]))
      .optional()
      .describe(
        "Other co-agents that participated in the action indirectly. E.g. John wrote a book with Steve.",
      ),
    provider: z
      .array(z.union([PersonSchema, OrganizationSchema]))
      .optional()
      .describe(
        "The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. Supersedes carrier.",
      ),
    result: z
      .array(ResultSchema)
      .optional()
      .describe("The result produced in the action. E.g. John wrote a book."),
    startTime: z
      .union([z.iso.date(), z.iso.datetime()])
      .optional()
      .describe("The startTime of something."),
    target: z
      .union([z.string(), EntrypointSchema])
      .optional()
      .describe("Indicates a target EntryPoint, or url, for an Action."),
  })
  .meta({
    title: "Action",
    description:
      "An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.",
  });

const ActionSchemas = {
  Action: ActionSchema,
};

type Action = z.infer<typeof ActionSchema>;

declare namespace Action {
  export type { Action };
}

export type { Action };
export { ActionSchema, ActionSchemas };

export default ActionSchemas;
