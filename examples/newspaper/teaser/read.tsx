import {
  TeaserAuthor,
  TeaserDate,
  TeaserDescription,
  TeaserImage,
  TeaserTitle,
  TeaserVideo,
} from "@/features/pxl/newspaper/rss/teaser";
import {
  Teaser,
  TeaserContent,
  TeaserMedia,
  TeaserMeta,
} from "@/features/pxl/newspaper/teaser";
import type { Rss } from "@/lib/schemas/pxl/rss";

export default function TeaserReadExample() {
  const rssItem: Rss.Item = {
    title: "Babies born to anaemic mothers have smaller brains, study finds",
    link: "https://www.theguardian.com/global-development/2026/sep/09/babies-born-to-anaemic-mothers-have-smaller-brains-study-finds",
    description:
      '<p>Key regions of the brain linked to movement, learning and emotions were affected and may lead to cognitive problems </p><p>Babies born to mothers with anaemia have smaller brains, particularly in key regions linked to movement, learning and the regulation of emotion, according to a study.</p><p>Researchers said the differences, first detected at the age of one, could lead to cognitive problems when children started school.</p> <a href="https://www.theguardian.com/global-development/2026/sep/09/babies-born-to-anaemic-mothers-have-smaller-brains-study-finds">Continue reading...</a>',
    categories: [
      {
        name: "Global development",
        domain:
          "https://www.theguardian.com/global-development/global-development",
      },
      {
        name: "Global health",
        domain: "https://www.theguardian.com/global-development/global-health",
      },
      {
        name: "Children's health",
        domain: "https://www.theguardian.com/society/childrens-health",
      },
      {
        name: "Early years education",
        domain: "https://www.theguardian.com/education/earlyyearseducation",
      },
      {
        name: "Society",
        domain: "https://www.theguardian.com/society/society",
      },
      {
        name: "Children",
        domain: "https://www.theguardian.com/society/children",
      },
      {
        name: "Pregnancy",
        domain: "https://www.theguardian.com/lifeandstyle/pregnancy",
      },
      {
        name: "Parents and parenting",
        domain:
          "https://www.theguardian.com/lifeandstyle/parents-and-parenting",
      },
      {
        name: "Education",
        domain: "https://www.theguardian.com/education/education",
      },
      {
        name: "Life and style",
        domain: "https://www.theguardian.com/lifeandstyle/lifeandstyle",
      },
      {
        name: "Health & wellbeing",
        domain: "https://www.theguardian.com/lifeandstyle/health-and-wellbeing",
      },
      {
        name: "Family",
        domain: "https://www.theguardian.com/lifeandstyle/family",
      },
      {
        name: "South Africa",
        domain: "https://www.theguardian.com/world/southafrica",
      },
      {
        name: "World news",
        domain: "https://www.theguardian.com/world/world",
      },
      {
        name: "Africa",
        domain: "https://www.theguardian.com/world/africa",
      },
      {
        name: "Neuroscience",
        domain: "https://www.theguardian.com/science/neuroscience",
      },
      {
        name: "Science",
        domain: "https://www.theguardian.com/science/science",
      },
    ],
    guid: {
      value:
        "https://www.theguardian.com/global-development/2026/sep/09/babies-born-to-anaemic-mothers-have-smaller-brains-study-finds",
    },
    pubDate: "Wed, 09 Sep 2026 04:00:58 GMT",
    dc: {
      creators: ["Kat Lay, Global health correspondent"],
      dates: ["2026-09-09T04:00:58Z"],
      creator: "Kat Lay, Global health correspondent",
      date: "2026-09-09T04:00:58Z",
    },
    media: {
      contents: [
        {
          url: "https://i.guim.co.uk/img/media/b51e55df330640864b621f7eafdfd622daf8756e/1297_888_3180_2544/master/3180.jpg?width=140&quality=85&auto=format&fit=max&s=df3f4a0cc5e7a1153c834b40c1d32543",
          width: 140,
          credits: [
            {
              value:
                "Photograph: the Institute of Psychiatry, Psychology & Neuroscience, King’s College London.",
              scheme: "urn:ebu",
            },
          ],
        },
        {
          url: "https://i.guim.co.uk/img/media/b51e55df330640864b621f7eafdfd622daf8756e/1297_888_3180_2544/master/3180.jpg?width=460&quality=85&auto=format&fit=max&s=84dc5af9d9660f3ac3383a29879b6511",
          width: 460,
          credits: [
            {
              value:
                "Photograph: the Institute of Psychiatry, Psychology & Neuroscience, King’s College London.",
              scheme: "urn:ebu",
            },
          ],
        },
        {
          url: "https://i.guim.co.uk/img/media/b51e55df330640864b621f7eafdfd622daf8756e/1297_888_3180_2544/master/3180.jpg?width=700&quality=85&auto=format&fit=max&s=9fc70dfc347c4ab81d7a2831be7fa150",
          width: 700,
          credits: [
            {
              value:
                "Photograph: the Institute of Psychiatry, Psychology & Neuroscience, King’s College London.",
              scheme: "urn:ebu",
            },
          ],
        },
      ],
    },
  };

  return (
    <Teaser state="read">
      <TeaserContent>
        <TeaserTitle item={rssItem} />
        <TeaserDescription lineClamp={3} item={rssItem} />
      </TeaserContent>
      <TeaserMedia color="grayscale" variant="image">
        <TeaserImage item={rssItem} />
      </TeaserMedia>
    </Teaser>
  );
}
