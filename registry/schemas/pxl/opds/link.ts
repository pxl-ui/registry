import { z } from "zod";

import { type Properties, PropertiesSchema } from "@/schemas/pxl/opds/properties";
import { LanguageTagSchema } from "@/schemas/pxl/opds/shared";

type Link = {
  href: string;
  type?: string;
  templated?: boolean;
  title?: string;
  rel?: string | string[];
  properties?: Properties;
  height?: number;
  width?: number;
  size?: number;
  bitrate?: number;
  duration?: number;
  language?: string | string[];
  alternate?: Link[];
  children?: Link[];
  [key: string]: unknown;
};

function isUriReference(value: string): boolean {
  if (/[^\x21-\x7e]|[<>"{}|\\^`]|%(?![0-9a-f]{2})/i.test(value)) return false;
  try {
    new URL(value, "https://example.org/");
    return true;
  } catch {
    return false;
  }
}

function isUriTemplate(value: string): boolean {
  const expression =
    /\{[+#./;?&=,!@|]?(?:[A-Za-z0-9_]|%[0-9A-Fa-f]{2})+(?:\.(?:[A-Za-z0-9_]|%[0-9A-Fa-f]{2})+)*(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[A-Za-z0-9_]|%[0-9A-Fa-f]{2})+(?:\.(?:[A-Za-z0-9_]|%[0-9A-Fa-f]{2})+)*(?::[1-9][0-9]{0,3}|\*)?)*\}/g;
  return isUriReference(value.replace(expression, "template"));
}

const LinkSchema: z.ZodType<Link> = z
  .looseObject({
    href: z.string().describe("URI or URI template of the linked resource"),
    type: z.string().describe("MIME type of the linked resource").optional(),
    templated: z
      .boolean()
      .describe("Indicates that a URI template is used in href")
      .optional(),
    title: z.string().describe("Title of the linked resource").optional(),
    rel: z
      .union([
        z
          .string()
          .describe(
            "Relation between the linked resource and its containing collection",
          ),
        z
          .array(z.string())
          .describe(
            "Relation between the linked resource and its containing collection",
          ),
      ])
      .describe(
        "Relation between the linked resource and its containing collection",
      )
      .optional(),
    properties: PropertiesSchema.describe(
      "Properties associated with the linked resource.",
    ).optional(),
    height: z
      .number()
      .int()
      .gt(0)
      .describe("Height of the linked resource in pixels")
      .optional(),
    width: z
      .number()
      .int()
      .gt(0)
      .describe("Width of the linked resource in pixels")
      .optional(),
    size: z
      .number()
      .int()
      .gt(0)
      .describe(
        "Original size of the resource in bytes, prior to any use of encryption or compression in an archive",
      )
      .optional(),
    bitrate: z
      .number()
      .gt(0)
      .describe("Bitrate of the linked resource in kbps")
      .optional(),
    duration: z
      .number()
      .gt(0)
      .describe("Length of the linked resource in seconds")
      .optional(),
    language: z
      .union([
        LanguageTagSchema.describe("Expected language of the linked resource"),
        z
          .array(LanguageTagSchema)
          .describe("Expected language of the linked resource"),
      ])
      .describe("Expected language of the linked resource")
      .optional(),
    alternate: z
      .array(z.lazy(() => LinkSchema))
      .describe("Alternate resources for the linked resource")
      .optional(),
    children: z
      .array(z.lazy(() => LinkSchema))
      .describe(
        "Resources that are children of the linked resource, in the context of a given collection role",
      )
      .optional(),
  })
  .superRefine((link, ctx) => {
    if (
      !(link.templated ? isUriTemplate(link.href) : isUriReference(link.href))
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["href"],
        message: link.templated
          ? "Expected a URI template"
          : "Expected a URI reference",
      });
    }
  })
  .describe("A Readium link, including OPDS acquisition properties.");

export type { Link };
export { LinkSchema };
