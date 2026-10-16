import { z } from "zod";

const DigitalPlatformEnumerationSchema = z.union([
  z.literal("AndroidPlatform").describe("Represents the broad notion of Android-based operating systems."),
  z.literal("DesktopWebPlatform").describe("Represents the broad notion of 'desktop' browsers as a Web Platform."),
  z.literal("GenericWebPlatform").describe("Represents the generic notion of the Web Platform. More specific codes include MobileWebPlatform and DesktopWebPlatform, as an incomplete list."),
  z.literal("IOSPlatform").describe("Represents the broad notion of iOS-based operating systems."),
  z.literal("MobileWebPlatform").describe("Represents the broad notion of 'mobile' browsers as a Web Platform."),
]).meta({
  title: "DigitalPlatformEnumeration",
  description: "Enumerates some common technology platforms, for use with properties such as actionPlatform. It is not supposed to be comprehensive - when a suitable code is not enumerated here, textual or URL values can be used instead. These codes are at a fairly high level and do not deal with versioning and other nuance. Additional codes can be suggested in github."
})

const SoftwareApplicationSchema = z
  .looseObject({
    applicationCategory: z
      .array(z.string())
      .describe("Type of software application, e.g. 'Game, Multimedia'."),
    applicationSubCategory: z
      .array(z.string())
      .describe("Subcategory of the application, e.g. 'Arcade Game'."),
    applicationSuite: z
      .string()
      .optional()
      .describe(
        "The name of the application suite to which the application belongs (e.g. Excel belongs to Office).",
      ),
    availableOnDevice: z
      .array(z.string())
      .optional()
      .describe(
        "Device required to run the application. Used in cases where a specific make/model is required to run the application. Supersedes device.",
      ),
    featureList: z
      .array(z.string())
      .optional()
      .describe(
        "Features or modules provided by this application (and possibly required by other applications).",
      ),
  })
  .meta({
    title: "SoftwareApplication",
    description: "A software application.",
  });

const EntrypointSchema = z
  .looseObject({
    actionApplication: z
      .union([z.string(), SoftwareApplicationSchema])
      .optional()
      .describe("An application that can complete the request."),
    actionPlatform: z
      .union([z.string(), DigitalPlatformEnumerationSchema])
      .optional()
      .describe("The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication."),
    contentType: z
      .array(z.string())
      .describe("The supported content type(s) for an EntryPoint response."),
    encodingType: z
      .array(z.string())
      .describe("The supported encoding type(s) for an EntryPoint response."),
    httpMethod: z
      .array(z.string())
      .describe("An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP."),
    urlTemplate: z
      .array(z.string())
      .describe("An url template (RFC6570) that will be used to construct the target of the execution of the action."),
  })
  .meta({
    title: "Entrypoint",
    description: "An entry point, within some Web-based protocol.",
  });

const SoftwareApplicationSchemas = {
  SoftwareApplication: SoftwareApplicationSchema,
};

type SoftwareApplication = z.infer<typeof SoftwareApplicationSchema>;
type Entrypoint = z.infer<typeof EntrypointSchema>;

declare namespace SoftwareApplication {
  export type { Entrypoint, SoftwareApplication };
}

export type { Entrypoint, SoftwareApplication };
export {
  EntrypointSchema,
  SoftwareApplicationSchema,
  SoftwareApplicationSchemas,
};
export default SoftwareApplicationSchemas;
