import {
  Sections,
  SectionsItem,
  SectionsListItem,
} from "@/components/features/pxl/newspaper/sections";
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

export default function SectionsDemo() {
  return (
    <Sections>
      {sources.map((s) => (
        <SectionsItem.Outline key={s.text} outline={s}>
          {s.outlines?.map((outline) => (
            <SectionsListItem.Outline key={outline.text} outline={outline} />
          ))}
        </SectionsItem.Outline>
      ))}
    </Sections>
  );
}
