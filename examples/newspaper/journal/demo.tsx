import { Fragment } from "react";

import {
  Journal,
  JournalContent,
} from "@/components/features/pxl/newspaper/journal";
import {
  Sections,
  SectionsItem,
  SectionsListItem,
} from "@/components/features/pxl/newspaper/sections";

import "@/components/features/pxl/newspaper/typeset.css";
import "~/examples/fonts/not-jam-blackletter-16.css";

import {
  TeaserDescription as AtomTeaserDescription,
  TeaserTitle as AtomTeaserTitle,
} from "@/components/features/pxl/newspaper/atom/teaser";
import { Columns } from "@/components/features/pxl/newspaper/columns";
import {
  Header,
  HeaderDate,
  HeaderIssueNumber,
  HeaderLanguage,
  HeaderLogo,
  HeaderMasthead,
  HeaderMastheadContent,
  HeaderNav,
  HeaderSeparator,
  HeaderSubtitle,
  HeaderTitle,
  HeaderTopMeta,
} from "@/components/features/pxl/newspaper/header";
import {
  Hero,
  HeroContent,
  HeroFigure,
} from "@/components/features/pxl/newspaper/hero";
import { List } from "@/components/features/pxl/newspaper/list";
import {
  HeroCaption,
  HeroHeadline,
  HeroVideo,
} from "@/components/features/pxl/newspaper/rss/hero";
import {
  TeaserDescription as RssTeaserDescription,
  TeaserTitle as RssTeaserTitle,
} from "@/components/features/pxl/newspaper/rss/teaser";
import {
  Teaser,
  TeaserContent,
} from "@/components/features/pxl/newspaper/teaser";
import { Separator } from "@/components/ui/pxl/separator";

import { feed as asideFeed } from "../__fixtures__/atom";
import { icons } from "../__fixtures__/icons";
import { outlines } from "../__fixtures__/opml";
import { item as heroArticle, feed as mainFeed } from "../__fixtures__/rss";

export default function JournalDemo() {
  return (
    <Journal className="w-full max-w-5xl max-h-240 overflow-auto scrollbar-thin">
      <Header>
        <HeaderTopMeta>
          <HeaderIssueNumber issueNumber={20247} prefix="#" />
          <HeaderDate date={new Date()} locale="en-GB" />
          <HeaderLanguage>English</HeaderLanguage>
        </HeaderTopMeta>
        <HeaderSeparator />
        <HeaderMasthead>
          <HeaderLogo>
            <img
              src="https://raw.githubusercontent.com/pxl-ui/registry/refs/heads/main/app/public/logos/tmh.png"
              alt="The Morning Herald logo"
              width="100"
              height="120"
              className="pixelated grayscale"
            />
          </HeaderLogo>
          <HeaderMastheadContent>
            <HeaderTitle className="font-not-jam-blackletter-16">
              The Morning Herald
            </HeaderTitle>
            <HeaderSubtitle>International</HeaderSubtitle>
          </HeaderMastheadContent>
        </HeaderMasthead>
        <HeaderSeparator />
        <HeaderNav>
          <Sections>
            {outlines.map((s) => (
              <Fragment key={s.text}>
                <SectionsItem.Outline outline={s} icons={icons}>
                  {s.outlines?.map((outline) => (
                    <SectionsListItem.Outline
                      key={outline.text}
                      outline={outline}
                    />
                  ))}
                </SectionsItem.Outline>
              </Fragment>
            ))}
          </Sections>
        </HeaderNav>
        <HeaderSeparator />
      </Header>
      <JournalContent>
        <Hero lang="es" className="w-full md:w-8/12">
          <HeroHeadline item={heroArticle} />
          <HeroFigure>
            <HeroVideo item={heroArticle} />
            <HeroCaption item={heroArticle} />
          </HeroFigure>

          <Columns>
            <HeroContent className="[--font-heading:var(--font-serif)] [--font-drop-cap:'Not_Jam_Blackletter_16',serif]">
              {heroArticle.content?.encoded}
            </HeroContent>
            {mainFeed.items?.map((item, idx) => (
              <Teaser key={item.guid?.value ?? idx}>
                <TeaserContent>
                  <RssTeaserTitle item={item} />
                  <RssTeaserDescription lineClamp="none" item={item} />
                </TeaserContent>
              </Teaser>
            ))}
          </Columns>
        </Hero>
        <Separator orientation="horizontal" className="md:hidden" />
        <Separator orientation="vertical" className="hidden md:flex h-auto" />
        <List className="min-w-0 flex-1">
          {asideFeed.entries?.map((entry) => (
            <Teaser key={entry.id}>
              <TeaserContent>
                <AtomTeaserTitle entry={entry} />
                <AtomTeaserDescription lineClamp="none" entry={entry} />
              </TeaserContent>
            </Teaser>
          ))}
        </List>
      </JournalContent>
    </Journal>
  );
}
