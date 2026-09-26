import "@/components/features/pxl/newspaper/typeset.css";
import "~/examples/fonts/not-jam-blackletter-16.css";

import { Columns } from "@/components/features/pxl/newspaper/columns";
import {
  Hero,
  HeroContent,
  HeroFigure,
} from "@/components/features/pxl/newspaper/hero";
import {
  HeroCaption,
  HeroHeadline,
  HeroVideo,
} from "@/components/features/pxl/newspaper/rss/hero";

import { item as heroArticle } from "../__fixtures__/rss";

export default function JournalDemo() {
  return (
    <Hero lang="es" className="w-full max-w-2xl max-h-240 overflow-auto scrollbar-thin">
      <HeroHeadline item={heroArticle} />
      <HeroFigure>
        <HeroVideo item={heroArticle} />
        <HeroCaption item={heroArticle} />
      </HeroFigure>

      <Columns>
        <HeroContent className="[--font-heading:var(--font-serif)] [--font-drop-cap:'Not_Jam_Blackletter_16',serif]">
          {heroArticle.content?.encoded}
        </HeroContent>
      </Columns>
    </Hero>
  );
}
