import {
  type Annotation,
  AnnotationSchema,
  type AnnotationSet,
  AnnotationSetSchema,
} from "@/schemas/pxl/readium/annotation";

const ReadiumSchemas = {
  Annotation: AnnotationSchema,
  AnnotationSet: AnnotationSetSchema,
};

declare namespace Readium {
  export type { Annotation, AnnotationSet };
}

export type { Annotation, AnnotationSet, Readium };
export { AnnotationSchema, AnnotationSetSchema, ReadiumSchemas };

export default ReadiumSchemas;
