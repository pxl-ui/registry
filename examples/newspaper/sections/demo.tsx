import { Fragment } from "react";

import {
  Sections,
  SectionsItem,
  SectionsListItem,
} from "@/components/features/pxl/newspaper/sections";
import { Separator } from "@/components/ui/pxl/separator";
import type { Opml } from "@/lib/schemas/pxl/opml";

const sources: Opml.Outline[] = [
  {
    text: "Local",
    outlines: [
      {
        text: "EL PAÍS",
        description:
          "Noticias de última hora sobre la actualidad en España y el mundo: política, economía, deportes, cultura, sociedad, tecnología, gente, opinión, viajes, moda, televisión, los blogs y las firmas de EL PAÍS. Además especiales, vídeos, fotos, audios, gráficos, entrevistas, promociones y todos los servicios de EL PAÍS.",
      },
    ],
  },
  {
    text: "World",
    outlines: [
      {
        text: "CNBC",
        description:
          "CNBC International is the world leader for news on business, technology, China, trade, oil prices, the Middle East and markets.",
      },

      {
        text: "NDTV",
        description:
          "NDTV.com provides the latest information from and in-depth coverage of India and the world. Find breaking news, India news, top stories, elections, politics, business, cricket, movies, lifestyle, health, live TV, videos, photos and more.",
      },
      {
        text: "New York Times",
      },
    ],
  },
  {
    text: "Culture",
    outlines: [
      {
        text: "Mythology",
        outlines: [
          {
            text: "Devdutt Pattanaik Myths",
            description:
              "Devdutt Pattanaik writes on relevance of mythology in modern times, especially in areas of management, governance and leadership. He defines mythology as cultural truths revealed through stories, symbols and rituals.",
          },
        ],
      },
      {
        text: "History",
        outlines: [
          {
            text: "JSTOR Daily",
          },
        ],
      },
      {
        text: "Science",
        outlines: [
          {
            text: "Nature",
            description:
              "Nature is the foremost international weekly scientific journal in the world and is the flagship journal for Nature Portfolio. It publishes the finest peer-reviewed research in all fields of science and technology on the basis of its originality, importance, interdisciplinary interest, timeliness, accessibility, elegance and surprising conclusions. Nature publishes landmark papers, award winning news, leading comment and expert opinion on important, topical scientific news and events that enable readers to share the latest discoveries in science and evolve the discussion amongst the global scientific community.",
          },
          {
            text: "Phys.org",
            description:
              "Phys.org internet news portal provides the latest news on science including: Physics, Nanotechnology, Life Sciences, Space Science, Earth Science, Environment, Health and Medicine.",
          },
        ],
      },
    ],
  },
  {
    text: "Tech",
    outlines: [
      {
        text: "Technology",
        outlines: [
          {
            text: "MIT News",
          },
          {
            text: "CNET News",
            description:
              "CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.",
          },
        ],
      },
      {
        text: "DIY",
        outlines: [
          {
            text: "Doityourself.com",
            description:
              "Do it yourself home improvement and diy repair at Doityourself.com. Includes home improvement projects, home repair, kitchen remodeling, plumbing, electrical, painting, real estate, and decorating",
          },
        ],
      },
    ],
  },
  {
    text: "Lifestyle",
  },
  {
    text: "Entertainment",
  },
];

const SourcesIcons = {
  Local() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13 23h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 17H5v-3h2v3Zm12 0h-2v-3h2v3ZM5 14H3V6h2v8Zm9 0h-4v-2h4v2Zm7 0h-2V6h2v8Zm-11-2H8V8h2v4Zm6 0h-2V8h2v4Zm-2-4h-4V6h4v2ZM7 6H5V4h2v2Zm12 0h-2V4h2v2Zm-2-2H7V2h10v2Z" />
      </svg>
    );
  },
  World() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 3h12v2H6zm0 16h12v2H6zM4 5h2v2H4zm5 0h2v2H9zm0 12h2v2H9zm4 0h2v2h-2zM7 7h2v10H7zm8 0h2v10h-2zm-2-2h2v2h-2zm7 0h-2v2h2zM2 7h2v10H2zm20 0h-2v10h2zM4 17h2v2H4zm16 0h-2v2h2z" />
        <path d="M3 11h18v2H3z" />
      </svg>
    );
  },
  Culture() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M15 17h5v-2h2v7h-2v-3h-5v3h-2v-7h2v2Zm-8-2H5v-2h2v2Zm4 0H9v-2h2v2Zm9 0h-5v-2h5v2ZM9 13H7v-2h2v2Zm-2-2H5V9h2v2Zm4 0H9V9h2v2Zm5-4h-3v2h-2V7H2V5h14v2Zm-5-3H7V2h4v2Z" />
      </svg>
    );
  },
  Tech() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 22H7v-2h2v2Zm12-6h2v6h-6v-6h2v-6h2v6Zm-2 2v2h2v-2h-2ZM7 20H5v-8h2v8Zm4 0H9v-8h2v8Zm-6-8H3v-2h2v2Zm8 0h-2v-2h2v2ZM3 10H1V4h2v6Zm12 0h-2V4h2v6Zm4 0h-2V4h2v6Zm4 0h-2V4h2v6ZM7 6h2V2h4v2h-2v4H5V4H3V2h4v4Zm14-2h-2V2h2v2Z" />
      </svg>
    );
  },
  Lifestyle() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13 18h5v2h-5v2h-2v-2H6v-2h5v-2h2v2Zm-7 0H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 16H2v-6h2v6Zm7 0H9v-4h2v4Zm4 0h-2v-2h2v2Zm7 0h-2v-6h2v6ZM6 10H4V6h2v4Zm14 0h-2V8h2v2Zm-2-2h-2V4h2v4ZM8 6H6V4h2v2Zm8-2H8V2h8v2Z"></path>
      </svg>
    );
  },
  Entertainment() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M11 20h2v-4h2v6H9v-6h2v4Zm2-4h-2v-2h2v2ZM8 9v2H4v2h4v2H2V9h6Zm14 6h-6v-2h4v-2h-4V9h6v6Zm-12-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-3-3h-2V8h2v2Zm2-2h-2V4h-2v4H9V2h6v6Z"></path>
      </svg>
    );
  },
};

export default function SectionsDemo() {
  return (
    <Sections>
      <Separator className="h-7" border="solid" orientation="vertical" />
      {sources.map((s, i) => (
        <Fragment key={s.text}>
          <SectionsItem.Outline outline={s} icons={SourcesIcons}>
            {s.outlines?.map((outline) => (
              <SectionsListItem.Outline key={outline.text} outline={outline} />
            ))}
          </SectionsItem.Outline>
          {i !== sources.length - 1 && (
            <Separator className="h-7" border="solid" orientation="vertical" />
          )}
        </Fragment>
      ))}
      <Separator className="h-7" border="solid" orientation="vertical" />
    </Sections>
  );
}
