import { z } from "zod";

import { AcquisitionObjectSchema } from "@/schemas/pxl/opds/acquisition-object";
import { DateOrDateTimeSchema, hasUniqueItems } from "@/schemas/pxl/opds/shared";

const PropertiesSchema = z
  .looseObject({
    numberOfItems: z
      .number()
      .int()
      .min(0)
      .describe("Provide a hint about the expected number of items returned")
      .optional(),
    price: z
      .looseObject({
        value: z.number().min(0),
        currency: z.enum([
          "AED",
          "AFN",
          "ALL",
          "AMD",
          "ANG",
          "AOA",
          "ARS",
          "AUD",
          "AWG",
          "AZN",
          "BAM",
          "BBD",
          "BDT",
          "BGN",
          "BHD",
          "BIF",
          "BMD",
          "BND",
          "BOB",
          "BOV",
          "BRL",
          "BSD",
          "BTN",
          "BWP",
          "BYN",
          "BZD",
          "CAD",
          "CDF",
          "CHE",
          "CHF",
          "CHW",
          "CLF",
          "CLP",
          "CNY",
          "COP",
          "COU",
          "CRC",
          "CUC",
          "CUP",
          "CVE",
          "CZK",
          "DJF",
          "DKK",
          "DOP",
          "DZD",
          "EGP",
          "ERN",
          "ETB",
          "EUR",
          "FJD",
          "FKP",
          "GBP",
          "GEL",
          "GHS",
          "GIP",
          "GMD",
          "GNF",
          "GTQ",
          "GYD",
          "HKD",
          "HNL",
          "HRK",
          "HTG",
          "HUF",
          "IDR",
          "ILS",
          "INR",
          "IQD",
          "IRR",
          "ISK",
          "JMD",
          "JOD",
          "JPY",
          "KES",
          "KGS",
          "KHR",
          "KMF",
          "KPW",
          "KRW",
          "KWD",
          "KYD",
          "KZT",
          "LAK",
          "LBP",
          "LKR",
          "LRD",
          "LSL",
          "LYD",
          "MAD",
          "MDL",
          "MGA",
          "MKD",
          "MMK",
          "MNT",
          "MOP",
          "MRU",
          "MUR",
          "MVR",
          "MWK",
          "MXN",
          "MXV",
          "MYR",
          "MZN",
          "NAD",
          "NGN",
          "NIO",
          "NOK",
          "NPR",
          "NZD",
          "OMR",
          "PAB",
          "PEN",
          "PGK",
          "PHP",
          "PKR",
          "PLN",
          "PYG",
          "QAR",
          "RON",
          "RSD",
          "RUB",
          "RWF",
          "SAR",
          "SBD",
          "SCR",
          "SDG",
          "SEK",
          "SGD",
          "SHP",
          "SLL",
          "SOS",
          "SRD",
          "SSP",
          "STN",
          "SVC",
          "SYP",
          "SZL",
          "THB",
          "TJS",
          "TMT",
          "TND",
          "TOP",
          "TRY",
          "TTD",
          "TWD",
          "TZS",
          "UAH",
          "UGX",
          "USD",
          "USN",
          "UYI",
          "UYU",
          "UZS",
          "VEF",
          "VES",
          "VND",
          "VUV",
          "WST",
          "XAF",
          "XAG",
          "XAU",
          "XBA",
          "XBB",
          "XBC",
          "XBD",
          "XCD",
          "XDR",
          "XOF",
          "XPD",
          "XPF",
          "XPT",
          "XSU",
          "XTS",
          "XUA",
          "XXX",
          "YER",
          "ZAR",
          "ZMW",
          "ZWL",
        ]),
      })
      .describe("The price of a publication is tied to its acquisition link")
      .optional(),
    indirectAcquisition: z
      .array(AcquisitionObjectSchema)
      .describe(
        "Indirect acquisition provides a hint for the expected media type that will be acquired after additional steps",
      )
      .optional(),
    holds: z
      .looseObject({
        total: z.number().int().min(0).optional(),
        position: z.number().int().min(0).optional(),
      })
      .describe(
        "Library-specific feature for unavailable books that support a hold list",
      )
      .optional(),
    copies: z
      .looseObject({
        total: z.number().int().min(0).optional(),
        available: z.number().int().min(0).optional(),
      })
      .describe(
        "Library-specific feature that contains information about the copies that a library has acquired",
      )
      .optional(),
    availability: z
      .looseObject({
        state: z.enum(["available", "unavailable", "reserved", "ready"]),
        since: DateOrDateTimeSchema.optional(),
        until: DateOrDateTimeSchema.optional(),
      })
      .describe("Indicates the availability of a given resource")
      .optional(),
    contains: z
      .array(z.enum(["mathml", "onix", "remote-resources", "js", "svg", "xmp"]))
      .refine(hasUniqueItems, { message: "Array items must be unique" })
      .describe(
        "Identifies content contained in the linked resource, that cannot be strictly identified using a media type.",
      )
      .optional(),
    layout: z
      .enum(["reflowable", "fixed"])
      .describe("Hint about the nature of the layout for the linked resources.")
      .optional(),
    encrypted: z
      .looseObject({
        algorithm: z
          .url()
          .describe("Identifies the algorithm used to encrypt the resource"),
        compression: z
          .string()
          .describe("Compression method used on the resource")
          .optional(),
        originalLength: z
          .number()
          .int()
          .describe(
            "Original length of the resource in bytes before compression and/or encryption",
          )
          .optional(),
        profile: z
          .url()
          .describe(
            "Identifies the encryption profile used to encrypt the resource",
          )
          .optional(),
        scheme: z
          .url()
          .describe(
            "Identifies the encryption scheme used to encrypt the resource",
          )
          .optional(),
      })
      .describe(
        "Indicates that a resource is encrypted/obfuscated and provides relevant information for decryption",
      )
      .optional(),
    page: z
      .enum(["left", "right", "center"])
      .describe("Display position in synthetic spreads.")
      .optional(),
  })
  .describe("OPDS and Readium link properties.");

type Properties = z.infer<typeof PropertiesSchema>;

export type { Properties };
export { PropertiesSchema };
