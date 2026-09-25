import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/pxl/accordion";
import { Button } from "@/components/ui/pxl/button";
import { Markdown } from "@/components/ui/pxl/markdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/pxl/table";

type JsonSchemaType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "object"
  | "array"
  | "null";

type JsonSchema = {
  $ref?: string;
  type?: JsonSchemaType | JsonSchemaType[];
  title?: string;
  description?: string;
  properties?: Record<string, JsonSchema>;
  required?: string[];
  items?: JsonSchema;
  enum?: string[];
  const?: unknown;
  default?: unknown;
  format?: string;
  pattern?: string;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  minItems?: number;
  maxItems?: number;
  anyOf?: JsonSchema[];
  oneOf?: JsonSchema[];
  allOf?: JsonSchema[];
  $defs?: Record<string, JsonSchema>;
  definitions?: Record<string, JsonSchema>;
  [key: string]: unknown;
};

function resolveRef(
  ref: string | undefined,
  rootSchema: JsonSchema,
): JsonSchema | null {
  if (!ref?.startsWith("#/")) return null;
  const path = ref.slice(2).split("/");
  let node = rootSchema;
  for (const segment of path) {
    if (node == null) return null;
    node = node[segment] as JsonSchema;
  }
  return node;
}

function typeLabel(
  schema: JsonSchema | undefined,
  rootSchema: JsonSchema,
): string {
  if (!schema) return "any";
  if (schema.$ref) {
    const resolved = resolveRef(schema.$ref, rootSchema);
    const name = schema.$ref.split("/").pop();
    return resolved ? typeLabel(resolved, rootSchema) : (name as string);
  }
  if (schema.const !== undefined) return `${JSON.stringify(schema.const)}`;
  if (Array.isArray(schema.type)) return schema.type.join(" | ");
  if (schema.type === "array") {
    const items = schema.items;
    return `${typeLabel(items as JsonSchema, rootSchema)}[]`;
  }
  if (schema.enum) return "enum";
  if (schema.anyOf)
    return schema.anyOf.map((s) => typeLabel(s, rootSchema)).join(" | ");
  if (schema.oneOf)
    return schema.oneOf.map((s) => typeLabel(s, rootSchema)).join(" | ");
  if (schema.allOf) return "object";
  return schema.type || "any";
}

function isExpandable(
  schema: JsonSchema | undefined,
  rootSchema: JsonSchema,
): boolean {
  if (!schema) return false;
  let resolved = schema;
  if (schema.$ref) resolved = resolveRef(schema.$ref, rootSchema) || schema;
  if (resolved.type === "object" && resolved.properties) return true;
  if (resolved.type === "array" && resolved.items) {
    const items = resolved.items.$ref
      ? resolveRef(resolved.items.$ref, rootSchema) || resolved.items
      : resolved.items;
    return items?.type === "object" && !!items.properties;
  }
  return false;
}

function getExpandedSchema(
  schema: JsonSchema,
  rootSchema: JsonSchema,
): JsonSchema {
  let resolved = schema;
  if (schema.$ref) resolved = resolveRef(schema.$ref, rootSchema) || schema;
  if (resolved.type === "array") {
    const items = resolved.items?.$ref
      ? resolveRef(resolved.items.$ref, rootSchema) || resolved.items
      : resolved.items;
    return items as JsonSchema;
  }
  return resolved;
}

function constraints(schema: JsonSchema): string[] {
  const out = [];
  if (schema.format) out.push(`format: ${schema.format}`);
  if (schema.pattern) out.push(`pattern: ${schema.pattern}`);
  if (schema.minimum !== undefined) out.push(`min: ${schema.minimum}`);
  if (schema.maximum !== undefined) out.push(`max: ${schema.maximum}`);
  if (schema.minLength !== undefined)
    out.push(`minLength: ${schema.minLength}`);
  if (schema.maxLength !== undefined)
    out.push(`maxLength: ${schema.maxLength}`);
  if (schema.minItems !== undefined) out.push(`minItems: ${schema.minItems}`);
  if (schema.maxItems !== undefined) out.push(`maxItems: ${schema.maxItems}`);
  if (schema.enum)
    out.push(`enum: ${schema.enum.map((v) => JSON.stringify(v)).join(", ")}`);
  if (schema.default !== undefined)
    out.push(`default: ${JSON.stringify(schema.default)}`);
  return out;
}

// ---------- fila individual (recursiva) ----------

function SchemaRow({
  name,
  schema,
  required,
  rootSchema,
  depth,
}: {
  name: string;
  schema: JsonSchema;
  required: boolean;
  rootSchema: JsonSchema;
  depth: number;
}) {
  const [open, setOpen] = useState(depth < 1);
  const expandable = isExpandable(schema, rootSchema);
  const cons = constraints(
    schema.$ref ? resolveRef(schema.$ref, rootSchema) || schema : schema,
  );

  return (
    <>
      <TableRow className="align-top">
        <TableCell className="font-mono text-sm">
          <div
            className="flex items-center gap-1"
            style={{ paddingLeft: depth * 16 }}
          >
            {expandable ? (
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 shrink-0"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? (
                  <svg
                    className="size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 9v2h-2v2h-2v2h-2v-2H9v-2H7V9h10Z" />
                  </svg>
                ) : (
                  <svg
                    className="size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 17h2v-2h2v-2h2v-2h-2V9h-2V7H9v10Z" />
                  </svg>
                )}
              </Button>
            ) : (
              <span className="inline-block w-5 shrink-0" />
            )}
            <span className="truncate" title={name}>
              {name}
            </span>
          </div>
        </TableCell>
        <TableCell className="font-mono text-sm text-muted-foreground whitespace-normal wrap-break-word">
          {typeLabel(schema, rootSchema)}
        </TableCell>
        <TableCell>
          {required && (
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z" />
            </svg>
          )}
        </TableCell>
        <TableCell className="text-sm whitespace-normal wrap-break-word">
          <div>{schema.description || "—"}</div>
          {cons.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {cons.map((c, i) => (
                <code
                  key={i.toString()}
                  className="text-[11px] px-1.5 py-0.5 bg-muted text-muted-foreground break-all"
                >
                  {c}
                </code>
              ))}
            </div>
          )}
        </TableCell>
      </TableRow>

      {expandable && open && (
        <SchemaProperties
          schema={getExpandedSchema(schema, rootSchema)}
          rootSchema={rootSchema}
          depth={depth + 1}
        />
      )}
    </>
  );
}

// ---------- lista de propiedades de un objeto ----------

function SchemaProperties({
  schema,
  rootSchema,
  depth,
}: {
  schema: JsonSchema;
  rootSchema: JsonSchema;
  depth: number;
}) {
  if (!schema?.properties) return null;
  const required = new Set(schema.required || []);
  return (
    <>
      {Object.entries(schema.properties).map(([propName, propSchema]) => (
        <SchemaRow
          key={propName}
          name={propName}
          schema={propSchema}
          required={required.has(propName)}
          rootSchema={rootSchema}
          depth={depth}
        />
      ))}
    </>
  );
}

function JsonSchemaTable({ schema }: { schema: JsonSchema }) {
  if (!schema) return null;

  const hasProperties = schema.type === "object" && schema.properties;
  const isEnum = schema.type === "string" && schema.enum;
  const isDescriptiveEnum = schema.anyOf?.every((s) => s.type === "string");
  const isUnion = schema.anyOf && !isDescriptiveEnum;

  if (isUnion) {
    return (
      <div>
        <div className="mb-2">Union:</div>
        <div className="flex flex-col gap-4 ps-2">
          {schema.anyOf?.map((sch, idx) => (
            <JsonSchemaTable key={idx.toString()} schema={sch} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="w-full overflow-x-auto">
        {hasProperties ? (
          <Table className="table-fixed w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-45">Property</TableHead>
                <TableHead className="w-35">Type</TableHead>
                <TableHead className="w-25">Required</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <SchemaProperties schema={schema} rootSchema={schema} depth={0} />
            </TableBody>
          </Table>
        ) : (
          !isEnum &&
          !isDescriptiveEnum && (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              This schema is not an object with properties (type:{" "}
              {typeLabel(schema, schema)}).
            </div>
          )
        )}
        {isEnum && (
          <Table className="table-fixed w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Possible Values</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schema.enum?.map((v) => (
                <TableRow key={v?.toString()} className="align-top">
                  <TableCell className="text-sm">{v}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {isDescriptiveEnum && (
          <Table className="table-fixed w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-45">Value</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schema.anyOf?.map((v) => (
                <TableRow key={v.const as string} className="align-top">
                  <TableCell className="text-sm">{v.const as string}</TableCell>
                  <TableCell className="text-sm whitespace-normal wrap-break-word">
                    {v.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

function JsonSchemasAccordion({
  schemas,
}: {
  schemas: Record<string, JsonSchema>;
}) {
  return (
    <Accordion>
      {Object.entries(schemas).map(([k, schema]) => (
        <AccordionItem value={k} key={k}>
          <AccordionTrigger
            nativeButton={false}
            render={
              <div
                data-slot="accordion-trigger"
                className= "group/accordion-trigger relative flex flex-1 items-start justify-between pixel-rounded pixel-size-[5px] px-ring pixel-color-background py-2.5 text-left text-sm outline-none hover:pixel-color-secondary hover:text-secondary-foreground aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:[--px-ring-color:transparent] **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground hover:**:data-[slot=accordion-trigger-icon]:text-secondary-foreground"
              >
                <div>
                  <h3 className="font-heading text-sm">{schema.title ?? k}</h3>
                  {schema.description && (
                    <Markdown className="font-mono text-sm text-muted-foreground mt-0.5">
                      {schema.description}
                    </Markdown>
                  )}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-slot="accordion-trigger-icon"
                  className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                >
                  <path d="M13 16h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 10H5V8h2v2Zm12 0h-2V8h2v2Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-slot="accordion-trigger-icon"
                  className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                >
                  <path d="M13 8h-2v2h2V8Zm-2 2H9v2h2v-2Zm4 0h-2v2h2v-2Zm-6 2H7v2h2v-2Zm8 0h-2v2h2v-2ZM7 14H5v2h2v-2Zm12 0h-2v2h2v-2Z" />
                </svg>
              </div>
            }
          ></AccordionTrigger>
          <AccordionContent>
            <JsonSchemaTable schema={schema} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export { JsonSchemasAccordion, JsonSchemaTable };
