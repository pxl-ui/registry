import { Markdown } from "@/components/ui/pxl/markdown";
import {
  TimescaleAge,
  TimescaleContent,
  TimescaleHeader,
  TimescaleIntroScroll,
  TimescaleItem,
  TimescaleRail,
  TimescaleRoot,
  TimescaleTick,
  TimescaleTrack,
  TimescaleViewport,
  TimescaleYear,
} from "@/components/ui/pxl/timescale";

const BIRTH_YEAR = 2000;

const MILESTONES: {
  year: number;
  content?: string;
}[] = [
  {
    year: 2000,
    content: "Born in Can Tho, Viet Nam.",
  },
  { year: 2001 },
  { year: 2002 },
  { year: 2003 },
  { year: 2004 },
  { year: 2005 },
  {
    year: 2006,
    content: "Started at Thuan Hung Primary School.",
  },
  { year: 2007 },
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  {
    year: 2011,
    content: "Started at Thuan Hung Secondary School.",
  },
  { year: 2012 },
  { year: 2013 },
  {
    year: 2014,
    content: `Started learning to code and built my first website.

Visited Ha Noi, the capital, for the first time.`,
  },
  {
    year: 2015,
    content: `Won awards:

- 3rd Prize — Can Tho City Young Informatics Contest 2015
`,
  },
  {
    year: 2016,
    content: `Won awards:

- Consolation Prize — Can Tho City Young Informatics Contest 2016

Visited Quy Nhon, Binh Dinh for the first time, and returned to Ha Noi.`,
  },
  {
    year: 2017,
    content: `Won awards:

- 2nd Prize — Can Tho City Outstanding Student Selection Exam 2016-2017
- Consolation Prize — Can Tho City Young Informatics Contest 2017
- Creative Award — Binh Duong Hackathon 2017`,
  },
  {
    year: 2018,
    content: `Won awards:

- 1st Prize — Can Tho City Science and Engineering Fair 2018
- 3rd Prize — Can Tho City Outstanding Student Selection Exam 2017-2018

Began freelancing and joined Tung Tung as a UI/UX Designer.
`,
  },
  {
    year: 2019,
    content: `Became a Mobile Developer at Tung Tung.

Won 2nd Prize — Business Startup Competition 2019.`,
  },
  {
    year: 2020,
    content: "Became a Web Developer at Tung Tung.",
  },
  { year: 2021 },
  {
    year: 2022,
    content: `Joined Simplamo as a Senior Frontend Developer and UI Lead.

Launched [ZaDark](https://zadark.com) — 80k+ downloads, 30k+ active users.

Won Bronze Medal — 10th Design, Manufacturing, and Application Award 2022.`,
  },
  { year: 2023 },
  {
    year: 2024,
    content: "Founded [Quaric](https://quaric.com).",
  },
  {
    year: 2025,
    content: `Open-sourced [chanhdai.com](https://github.com/ncdai/chanhdai.com) — 2.2k+ stars on GitHub.

Released [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — 50k+ weekly downloads, selected for the [Vercel OSS Program](https://vercel.com/open-source-program).

Followed by [shadcn](https://x.com/shadcn) on X.`,
  },
  {
    year: 2026,
    content: `Joined [shadcncraft](https://shadcncraft.com) as a Design Engineer.

Selected for the [Claude for Open Source Program](https://claude.com/contact-sales/claude-for-oss).`,
  },
];

export default function TimescaleDemo() {
  return (
    <TimescaleIntroScroll>
      <TimescaleRoot className="mt-4">
        <TimescaleHeader>
          <TimescaleAge>Age</TimescaleAge>
          <TimescaleYear>Years</TimescaleYear>
        </TimescaleHeader>

        <TimescaleViewport>
          <TimescaleTrack>
            <TimescaleRail />

            {MILESTONES.map((milestone) => (
              <TimescaleItem key={milestone.year}>
                <TimescaleTick />

                <TimescaleAge>{milestone.year - BIRTH_YEAR}</TimescaleAge>
                <TimescaleYear>{milestone.year}</TimescaleYear>

                {milestone.content && (
                  <TimescaleContent>
                    <Markdown>{milestone.content}</Markdown>
                  </TimescaleContent>
                )}
              </TimescaleItem>
            ))}
          </TimescaleTrack>
        </TimescaleViewport>
      </TimescaleRoot>
    </TimescaleIntroScroll>
  );
}
