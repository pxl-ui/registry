import z from "zod";

const SpecialUseFlagSchema = z.union([
  z.literal("\\All"),
  z.literal("\\Trash"),
  z.literal("\\Junk"),
  z.literal("\\Sent"),
  z.literal("\\Flagged"),
  z.literal("\\Drafts"),
  z.literal("\\Inbox"),
]);

const MailBoxSchema = z.object({
  path: z.string().describe("Mailbox path (unicode string)"),
  name: z.string().describe("Mailbox name (last part of path after delimiter)"),
  parent: z
    .array(z.string())
    .describe("An array of parent folder names. All names are in unicode"),
  parentPath: z
    .string()
    .describe("Same as parent, but as a complete string path (unicode string)"),
  flags: z.array(z.string()).describe("A set of flags for this mailbox"),
  specialUse: SpecialUseFlagSchema.optional().describe(
    "One of special-use flags (if applicable)",
  ),
}).describe("A Mailbox object from imapflow");

const MessageAddressSchema = z.object({
  name: z.string().optional().describe("Name of the address object (unicode)"),
  address: z.email().optional().describe("Email address"),
});

const MessageEnvelopeSchema = z.object({
  date: z.string().optional().describe("Header date"),
  subject: z.string().optional().describe("Message subject (unicode)"),
  messageId: z.string().optional().describe("Message ID of the message"),
  inReplyTo: z
    .string()
    .optional()
    .describe("Message ID from In-Reply-To header"),
  from: z
    .array(MessageAddressSchema)
    .optional()
    .describe("Array of addresses from the From: header"),
  sender: z
    .array(MessageAddressSchema)
    .optional()
    .describe("Array of addresses from the Sender: header"),
  replyTo: z
    .array(MessageAddressSchema)
    .optional()
    .describe("Array of addresses from the Reply-To: header"),
  to: z
    .array(MessageAddressSchema)
    .optional()
    .describe("Array of addresses from the To: header"),
  cc: z
    .array(MessageAddressSchema)
    .optional()
    .describe("Array of addresses from the Cc: header"),
  bcc: z
    .array(MessageAddressSchema)
    .optional()
    .describe("Array of addresses from the Bcc: header"),
});

const MessageSchema = z.object({
  uid: z
    .number()
    .describe("Message UID number. Always included in the response"),
  flags: z.array(z.string()).optional().describe("A set of message flags"),
  flagColor: z
    .string()
    .optional()
    .describe(
      "Flag color like 'red', or 'yellow'. This value is derived from the flags Set",
    ),
  envelope: MessageEnvelopeSchema.optional().describe("Message envelope"),
  source: z
    .string()
    .optional()
    .describe("Message source for the requested byte range"),
}).describe("A Message object from imapflow");

const ParsedMessageSchema = z.object({
  html: z.union([
    z.string(),
    z.literal(false)
  ]).describe("The HTML body of the message. Sets to `false` when there is no HTML body. If the message included embedded images as cid: urls then these are all replaced with base64 formatted data: URIs."),
  text: z.string().optional().describe("The plaintext body of the message."),
  textAsHtml: z.string().optional().describe("The plaintext body of the message formatted as HTML."),
}).describe("A Message object from mailparser")

const ImapFlowSchemas = {
  MailBox: MailBoxSchema,
  Message: MessageSchema,
  MessageAddress: MessageAddressSchema,
  MessageEnvelope: MessageEnvelopeSchema,
};

type MailBox = z.infer<typeof MailBoxSchema>;
type Message = z.infer<typeof MessageSchema>;
type MessageAddress = z.infer<typeof MessageAddressSchema>;
type MessageEnvelope = z.infer<typeof MessageEnvelopeSchema>;
type ParsedMessage = z.infer<typeof ParsedMessageSchema>;

declare namespace ImapFlow {
  export type { MailBox, Message, MessageAddress, MessageEnvelope, ParsedMessage };
}

export type { ImapFlow, MailBox, Message, MessageAddress, MessageEnvelope, ParsedMessage };
export {
  ImapFlowSchemas,
  MailBoxSchema,
  MessageAddressSchema,
  MessageEnvelopeSchema,
  MessageSchema,
  ParsedMessageSchema,
};
export default ImapFlowSchemas;