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

const gitActivity = [
  {
    id: 1,
    date: "15 minutes ago",
    title: "Forked Repository",
    description:
      "Forked the repository to create a new branch for development.",
    icon: (
      <svg
        className="size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z" />
      </svg>
    ),
  },
  {
    id: 2,
    date: "10 minutes ago",
    title: "Pull Request Submitted",
    description:
      "Submitted PR #342 with new feature implementation. Waiting for code review.",
    icon: (
      <svg
        className="size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 12v10H5V12h2Zm13 10h-4v-2h4v2Zm-4-2h-2v-4h2v4Zm6 0h-2v-4h2v4Zm-2-4h-4v-2h4v2ZM8 10H4V8h4v2ZM4 8H2V4h2v4Zm6 0H8V4h2v4Zm7-1h-5V5h5v2ZM8 4H4V2h4v2Z" />
      </svg>
    ),
  },
  {
    id: 3,
    date: "5 minutes ago",
    title: "Comparing Branches",
    description:
      "Received comments on PR. Minor adjustments needed in error handling.",
    icon: (
      <svg
        className="size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 22H4v-2h4v2Zm-4-2H2v-4h2v4Zm6 0H8v-4h2v4Zm7-1h-5v-2h5v2Zm2-2h-2v-5h2v5ZM8 16H4v-2h4v2Zm-1-4H5V2h2v10Zm13-2h-4V8h4v2Zm-4-2h-2V4h2v4Zm6 0h-2V4h2v4Zm-2-4h-4V2h4v2Z" />
      </svg>
    ),
  },
  {
    id: 4,
    date: "Just now",
    title: "Merged Branch",
    description:
      "Merged the feature branch into the main branch. Ready for deployment.",
    icon: (
      <svg
        className="size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 22H5V12h2v10Zm13 0h-4v-2h4v2Zm-4-2h-2v-4h2v4Zm6 0h-2v-4h2v4Zm-2-4h-4v-2h4v2Zm-6-2h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-4-2H4V8h4v2ZM4 8H2V4h2v4Zm6 0H8V4h2v4ZM8 4H4V2h4v2Z" />
      </svg>
    ),
  },
];

export default function TimelineIconsExample() {
  return (
    <Timeline defaultValue={3} className="w-full max-w-md">
      {gitActivity.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
            <TimelineTitle className="mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator className="bg-foreground/10 group-data-completed/timeline-item:bg-foreground group-data-completed/timeline-item:text-background flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
              {item.icon}
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent>
            {item.description}
            <TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
