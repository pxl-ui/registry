import {
  type AcquisitionObject,
  AcquisitionObjectSchema,
} from "@/schemas/pxl/opds/acquisition-object";
import { type Feed, FeedSchema } from "@/schemas/pxl/opds/feed";
import {
  type FeedMetadata,
  FeedMetadataSchema,
} from "@/schemas/pxl/opds/feed-metadata";
import { type Link, LinkSchema } from "@/schemas/pxl/opds/link";
import { type Metadata, MetadataSchema } from "@/schemas/pxl/opds/metadata";
import {
  type Properties,
  PropertiesSchema,
} from "@/schemas/pxl/opds/properties";
import {
  type Publication,
  PublicationSchema,
  type WebPublication,
  WebPublicationSchema,
} from "@/schemas/pxl/opds/publication";
import {
  type Subcollection,
  SubcollectionSchema,
} from "@/schemas/pxl/opds/subcollection";
import {
  type Feed as FeedV1_2,
  OPDS_1_2_Schemas,
} from "@/schemas/pxl/opds/v1.2";

const OPDSSchemas = {
  "v1.2": OPDS_1_2_Schemas,
  AcquisitionObject: AcquisitionObjectSchema,
  FeedMetadata: FeedMetadataSchema,
  Feed: FeedSchema,
  Link: LinkSchema,
  Metadata: MetadataSchema,
  Properties: PropertiesSchema,
  Publication: PublicationSchema,
  WebPublication: WebPublicationSchema,
  Subcollection: SubcollectionSchema,
};

declare namespace OPDS_1_2 {
  type Feed = FeedV1_2;
}

declare namespace OPDS {
  export type {
    WebPublication,
    AcquisitionObject,
    FeedMetadata,
    Feed,
    Link,
    Metadata,
    Properties,
    Publication,
    Subcollection,
  };
  export import v1_2 = OPDS_1_2;
}

export type {
  AcquisitionObject,
  Feed,
  FeedMetadata,
  Link,
  Metadata,
  OPDS,
  Properties,
  Publication,
  Subcollection,
  WebPublication,
};
export {
  AcquisitionObjectSchema,
  FeedMetadataSchema,
  FeedSchema,
  LinkSchema,
  MetadataSchema,
  OPDSSchemas,
  PropertiesSchema,
  PublicationSchema,
  SubcollectionSchema,
  WebPublicationSchema,
};
export default OPDSSchemas;
