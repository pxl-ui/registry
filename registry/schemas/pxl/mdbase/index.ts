import { type Config, ConfigSchema } from "@/schemas/pxl/mdbase/config";
import {
  type ConformanceClaim,
  ConformanceClaimSchema,
} from "@/schemas/pxl/mdbase/conformance-claim";
import {
  type DataContract,
  DataContractSchema,
} from "@/schemas/pxl/mdbase/data-contract";
import {
  type Diagnostic,
  DiagnosticSchema,
} from "@/schemas/pxl/mdbase/diagnostic";
import {
  type OperationResult,
  OperationResultSchema,
} from "@/schemas/pxl/mdbase/operation-result";
import { type Query, QuerySchema } from "@/schemas/pxl/mdbase/query";
import {
  type QueryResult,
  QueryResultSchema,
} from "@/schemas/pxl/mdbase/query-result";
import {
  type RecordDocument,
  RecordDocumentSchema,
} from "@/schemas/pxl/mdbase/record-document";
import { type TypeFile, TypeFileSchema } from "@/schemas/pxl/mdbase/type-file";
import { type TypePack, TypePackSchema } from "@/schemas/pxl/mdbase/type-pack";
import {
  type TypePackLock,
  TypePackLockSchema,
} from "@/schemas/pxl/mdbase/type-pack-lock";
import { type SavedView, SavedViewSchema } from "@/schemas/pxl/mdbase/view";

const MdbaseSchemas = {
  Config: ConfigSchema,
  ConformanceClaim: ConformanceClaimSchema,
  DataContract: DataContractSchema,
  Diagnostic: DiagnosticSchema,
  OperationResult: OperationResultSchema,
  QueryResult: QueryResultSchema,
  Query: QuerySchema,
  RecordDocument: RecordDocumentSchema,
  TypeFile: TypeFileSchema,
  TypePackLock: TypePackLockSchema,
  TypePack: TypePackSchema,
  SavedView: SavedViewSchema,
};

declare namespace Mdbase {
  export type {
    Config,
    ConformanceClaim,
    DataContract,
    Diagnostic,
    OperationResult,
    QueryResult,
    Query,
    RecordDocument,
    TypeFile,
    TypePackLock,
    TypePack,
    SavedView,
  };
}

export type {
  Config,
  ConformanceClaim,
  DataContract,
  Diagnostic,
  Mdbase,
  OperationResult,
  Query,
  QueryResult,
  RecordDocument,
  SavedView,
  TypeFile,
  TypePack,
  TypePackLock,
};
export {
  ConfigSchema,
  ConformanceClaimSchema,
  DataContractSchema,
  DiagnosticSchema,
  MdbaseSchemas,
  OperationResultSchema,
  QueryResultSchema,
  QuerySchema,
  RecordDocumentSchema,
  SavedViewSchema,
  TypeFileSchema,
  TypePackLockSchema,
  TypePackSchema,
};

export default MdbaseSchemas;
