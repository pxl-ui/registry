import z from "zod";

const MessageSchema = z
  .object({
    html: z
      .union([z.string(), z.literal(false)])
      .describe(
        "The HTML body of the message. Sets to `false` when there is no HTML body. If the message included embedded images as cid: urls then these are all replaced with base64 formatted data: URIs.",
      ),
    text: z.string().optional().describe("The plaintext body of the message."),
    textAsHtml: z
      .string()
      .optional()
      .describe("The plaintext body of the message formatted as HTML."),
  })
  .describe("A Message object from mailparser");

const MailParserSchemas = {
  Message: MessageSchema,
};

type Message = z.infer<typeof MessageSchema>;

declare namespace MailParser {
  export type { Message };
}

export type { MailParser, Message };
export { MailParserSchemas, MessageSchema };
export default MailParserSchemas;
