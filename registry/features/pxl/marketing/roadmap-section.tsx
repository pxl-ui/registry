import type { ComponentProps } from "react";

import {
  Section,
  SectionContent,
} from "@/components/features/pxl//marketing/section";
import {
  SectionHeading,
  SectionHeadingTitle,
} from "@/components/features/pxl//marketing/section-heading";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/pxl/timeline";

function RoadmapSection({
  currentItem = 0,
  heading,
  items,
  ...props
}: ComponentProps<"section"> & {
  currentItem?: number;
  heading?: string;
  items: {
    date?: string;
    title?: string;
    description?: string;
  }[];
}) {
  return (
    <Section {...props}>
      {heading && (
        <SectionHeading>
          <SectionHeadingTitle className="font-bold tracking-tighter">
            {heading}
          </SectionHeadingTitle>
        </SectionHeading>
      )}
      <SectionContent>
        <Timeline
          defaultValue={2}
          orientation="horizontal"
          className="w-full mt-12"
        >
          {items.map((p, idx) => (
            <TimelineItem key={idx.toString()} step={idx}>
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate size="sm">{p.date}</TimelineDate>
                <TimelineTitle size="xl">{p.title}</TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent>{p.description}</TimelineContent>
            </TimelineItem>
          ))}
          {/* Include extra hidden item so the line continues */}
          <TimelineItem className="hidden" step={items.length}>
            <TimelineHeader>
              <TimelineSeparator />
            </TimelineHeader>
          </TimelineItem>
        </Timeline>
      </SectionContent>
    </Section>
  );
}

export { RoadmapSection };
