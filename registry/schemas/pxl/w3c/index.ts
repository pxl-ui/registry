import {
  type Annotation,
  type AnnotationCollection,
  AnnotationCollectionSchema,
  AnnotationSchema,
} from "@/schemas/pxl/w3c/annotation";

const W3CSchemas = {
  Annotation: AnnotationSchema,
  AnnotationCollection: AnnotationCollectionSchema,
};

declare namespace W3C {
  export type { Annotation, AnnotationCollection };
}

export type { Annotation, AnnotationCollection, W3C };
export { AnnotationCollectionSchema, AnnotationSchema, W3CSchemas };

export default W3CSchemas;
