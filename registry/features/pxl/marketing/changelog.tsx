import type { ComponentProps } from "react";

import { SectionHeading } from "@/components/features/pxl/marketing/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/pxl/accordion";
import { Badge } from "@/components/ui/pxl/badge";
import { Markdown } from "@/components/ui/pxl/markdown";
import type { Changelog as Types } from "@/lib/schemas/pxl/changelog";

const ParsedVariants: Record<
  string,
  NonNullable<ComponentProps<typeof Badge>["variant"]>
> = {
  Added: "success",
  Changed: "info",
  Fixed: "warning",
  Removed: "danger",
};

function Parsed({ parsed }: { parsed: Record<string, string[]> }) {
  const entries = Object.entries(parsed).filter(([t]) => t !== "_");

  return (
    <Accordion>
      {entries.map(([title, items]) => (
        <AccordionItem key={title}>
          <AccordionTrigger>
            <Badge
              font="sans"
              size="md"
              variant={ParsedVariants[title] ?? "default"}
            >
              {title}
            </Badge>
          </AccordionTrigger>
          <AccordionContent className="typeset">
            <ul>
              {items.map((item, i) => (
                <li key={i.toString()}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Version({ version }: { version: Types.Version }) {
  const formattedDate = version.date
    ? new Date(version.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : undefined;

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-y-6">
        <div className="md:w-48 shrink-0">
          <div className="md:sticky md:top-8 pb-10">
            <time className="text-sm font-medium text-muted-foreground block mb-3">
              {formattedDate}
            </time>

            {version.version && (
              <Badge className="relative z-10">{version.version}</Badge>
            )}
          </div>
        </div>

        <div className="flex-1 md:pl-8 relative pb-10">
          <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
            <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-foreground pixel-rounded pixel-size-md z-10" />
          </div>

          <div className="space-y-6">
            <div className="relative z-10 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-tight text-balance">
                {version.title}
              </h2>
            </div>
            {version.parsed && <Parsed parsed={version.parsed} />}

            {!version.parsed && version.body && (
              <Markdown>{version.body}</Markdown>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Changelog({ document }: { document: Types.Document }) {
  return (
    <div className="min-h-screen bg-background relative">
      <SectionHeading>
        <SectionHeading.Title font="heading">
          {document.title ?? "Changelog"}
        </SectionHeading.Title>
        <SectionHeading.Body>
          <Markdown>{document.description}</Markdown>
        </SectionHeading.Body>
      </SectionHeading>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-10">
        <div className="relative">
          {document.versions.map((version) => (
            <Version key={version.title} version={version} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Changelog };
