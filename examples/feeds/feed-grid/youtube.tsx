import {
  FeedGrid,
  FeedGridItem,
  FeedGridItemContent,
  FeedGridItemDescription,
  FeedGridItemTitle,
} from "@/features/pxl/feeds/feed-grid";
import type { Atom } from "@/lib/schemas/pxl/atom";

export default function FeedGridYoutubeAtomExample() {
  const atomFeed: Atom.Feed = {
    authors: [
      {
        name: "Unbox Therapy",
        uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
      },
    ],
    id: "yt:channel:sTcErHg8oDvUnTzoqsYeNw",
    links: [
      {
        href: "http://www.youtube.com/feeds/videos.xml?user=unboxtherapy",
        rel: "self",
      },
      {
        href: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
        rel: "alternate",
      },
    ],
    title: "Unbox Therapy",
    entries: [
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:ppH3kW0h_fc",
        links: [
          {
            href: "https://www.youtube.com/shorts/ppH3kW0h_fc",
            rel: "alternate",
          },
        ],
        published: "2026-09-03T21:00:32+00:00",
        title: "How do they get them So Light?",
        updated: "2026-09-08T10:50:57+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/ppH3kW0h_fc?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "How do they get them So Light?",
              },
              description: {
                value:
                  'Check out the New LG gram Book 16" Here: https://bit.ly/4ycfftn\nThanks to  @LGGlobal for partnering on this video\nThe LG gram Book comes with Copilot+ PC, Windows 11 Home and Dual AI Touchscreen.\nCheck out the Best Buy Link here: https://bit.ly/3UEIwOE\n\n#Windows11Home #Copilot+PC #Sponsored #LGgram #LGgramBook\n#BestLaptop #16inchLaptop #BackToSchool #StudentLaptop',
              },
              thumbnails: [
                {
                  url: "https://i1.ytimg.com/vi/ppH3kW0h_fc/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 4783,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 1241708,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/ppH3kW0h_fc?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "How do they get them So Light?",
            },
            description: {
              value:
                'Check out the New LG gram Book 16" Here: https://bit.ly/4ycfftn\nThanks to  @LGGlobal for partnering on this video\nThe LG gram Book comes with Copilot+ PC, Windows 11 Home and Dual AI Touchscreen.\nCheck out the Best Buy Link here: https://bit.ly/3UEIwOE\n\n#Windows11Home #Copilot+PC #Sponsored #LGgram #LGgramBook\n#BestLaptop #16inchLaptop #BackToSchool #StudentLaptop',
            },
            thumbnails: [
              {
                url: "https://i1.ytimg.com/vi/ppH3kW0h_fc/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 4783,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 1241708,
              },
            },
          },
        },
        yt: {
          videoId: "ppH3kW0h_fc",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:3DVKs1wFoFw",
        links: [
          {
            href: "https://www.youtube.com/watch?v=3DVKs1wFoFw",
            rel: "alternate",
          },
        ],
        published: "2026-09-03T16:58:33+00:00",
        title: "LG’s New Budget Laptop...",
        updated: "2026-09-03T19:21:52+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/3DVKs1wFoFw?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "LG’s New Budget Laptop...",
              },
              description: {
                value:
                  'Check out the New LG gram Book 16" Here: https://bit.ly/4ycfftn\nThanks to @LGGlobal for partnering on this video\nThe LG gram Book comes with Copilot+ PC, Windows 11 Home and Dual AI Touchscreen.\nCheck out the Best Buy Link here: https://bit.ly/3UEIwOE\n\n#Windows11Home #copilotpc #Sponsored #LGgram #LGgramBook\n#BestLaptop #16inchLaptop #BackToSchool #StudentLaptop\n\nFOLLOW ME IN THESE PLACES FOR UPDATES\nTwitter - http://twitter.com/unboxtherapy\nInstagram - http://instagram.com/unboxtherapy\nTikTok - http://tiktok.com/@unboxtherapyofficial',
              },
              thumbnails: [
                {
                  url: "https://i4.ytimg.com/vi/3DVKs1wFoFw/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 1630,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 1009511,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/3DVKs1wFoFw?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "LG’s New Budget Laptop...",
            },
            description: {
              value:
                'Check out the New LG gram Book 16" Here: https://bit.ly/4ycfftn\nThanks to @LGGlobal for partnering on this video\nThe LG gram Book comes with Copilot+ PC, Windows 11 Home and Dual AI Touchscreen.\nCheck out the Best Buy Link here: https://bit.ly/3UEIwOE\n\n#Windows11Home #copilotpc #Sponsored #LGgram #LGgramBook\n#BestLaptop #16inchLaptop #BackToSchool #StudentLaptop\n\nFOLLOW ME IN THESE PLACES FOR UPDATES\nTwitter - http://twitter.com/unboxtherapy\nInstagram - http://instagram.com/unboxtherapy\nTikTok - http://tiktok.com/@unboxtherapyofficial',
            },
            thumbnails: [
              {
                url: "https://i4.ytimg.com/vi/3DVKs1wFoFw/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 1630,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 1009511,
              },
            },
          },
        },
        yt: {
          videoId: "3DVKs1wFoFw",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:TLl027cYgY4",
        links: [
          {
            href: "https://www.youtube.com/watch?v=TLl027cYgY4",
            rel: "alternate",
          },
        ],
        published: "2026-09-01T15:39:42+00:00",
        title: "This New Phone Has a Subwoofer...",
        updated: "2026-09-04T12:37:27+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/TLl027cYgY4?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "This New Phone Has a Subwoofer...",
              },
              description: {
                value:
                  "Is this the new best-value flagship? Check out more on the POCO F9 Series here: https://www.mi.com/global/launch/poco-f9-series-launch/\n\n#POCOF9Series #POCOF9Ultra #POCOF9Pro #UltrapowerUnbound #POCOLaunch\nThanks to @POCOGlobal for partnering on this video\n\nFOLLOW ME IN THESE PLACES FOR UPDATES\nTwitter - http://twitter.com/unboxtherapy\nInstagram - http://instagram.com/unboxtherapy\nTikTok - http://tiktok.com/@unboxtherapyofficial",
              },
              thumbnails: [
                {
                  url: "https://i1.ytimg.com/vi/TLl027cYgY4/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 3976,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 2093234,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/TLl027cYgY4?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "This New Phone Has a Subwoofer...",
            },
            description: {
              value:
                "Is this the new best-value flagship? Check out more on the POCO F9 Series here: https://www.mi.com/global/launch/poco-f9-series-launch/\n\n#POCOF9Series #POCOF9Ultra #POCOF9Pro #UltrapowerUnbound #POCOLaunch\nThanks to @POCOGlobal for partnering on this video\n\nFOLLOW ME IN THESE PLACES FOR UPDATES\nTwitter - http://twitter.com/unboxtherapy\nInstagram - http://instagram.com/unboxtherapy\nTikTok - http://tiktok.com/@unboxtherapyofficial",
            },
            thumbnails: [
              {
                url: "https://i1.ytimg.com/vi/TLl027cYgY4/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 3976,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 2093234,
              },
            },
          },
        },
        yt: {
          videoId: "TLl027cYgY4",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:XI_VXoP9C28",
        links: [
          {
            href: "https://www.youtube.com/shorts/XI_VXoP9C28",
            rel: "alternate",
          },
        ],
        published: "2026-08-30T17:24:58+00:00",
        title: "Heat Testing Against a Flagship… 🔥",
        updated: "2026-08-31T16:57:12+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/XI_VXoP9C28?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "Heat Testing Against a Flagship… 🔥",
              },
              description: {
                value:
                  "Check out more on the POCO F9 Series here: https://www.mi.com/global/launch/poco-f9-series-launch/ Full Unboxing to come. \n#POCOF9Series #POCOF9Ultra #POCOF9Pro #UltrapowerUnbound #POCOLaunch\nThanks to  @POCOGlobal   for partnering on this video",
              },
              thumbnails: [
                {
                  url: "https://i1.ytimg.com/vi/XI_VXoP9C28/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 25773,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 995070,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/XI_VXoP9C28?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "Heat Testing Against a Flagship… 🔥",
            },
            description: {
              value:
                "Check out more on the POCO F9 Series here: https://www.mi.com/global/launch/poco-f9-series-launch/ Full Unboxing to come. \n#POCOF9Series #POCOF9Ultra #POCOF9Pro #UltrapowerUnbound #POCOLaunch\nThanks to  @POCOGlobal   for partnering on this video",
            },
            thumbnails: [
              {
                url: "https://i1.ytimg.com/vi/XI_VXoP9C28/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 25773,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 995070,
              },
            },
          },
        },
        yt: {
          videoId: "XI_VXoP9C28",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:LyxJWtoyK0o",
        links: [
          {
            href: "https://www.youtube.com/watch?v=LyxJWtoyK0o",
            rel: "alternate",
          },
        ],
        published: "2026-08-29T19:38:22+00:00",
        title: "This is the iPhone 18 Pro Max",
        updated: "2026-08-29T19:44:47+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/LyxJWtoyK0o?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "This is the iPhone 18 Pro Max",
              },
              description: {
                value:
                  "iPhone 18 Pro Max or iPhone Fold?\nUpgrade Your Workflow with Comu Action Pro! Claim $10 Off Now (Only $169.99 at checkout). Also valid in the UK for up to £11 off. \nUse code: COMUUNBOX \nUS：\nAmazon：https://amzn.to/4c4ua00 \nWebsite：https://bit.ly/4hZyxgx \nUK： \nAmazon: https://amzn.to/3UEFZnC\nLifetime Value: Pay once, get unlimited live transcription & AI summaries.\n100% Privacy Compliant: Built with GDPR, HIPAA, and SOC 2 compliance.\nFast & Free Shipping, 12-Month Warranty, Lifetime Customer Support.\nThanks to Comu for partnering on this video\n\nFOLLOW ME IN THESE PLACES FOR UPDATES\nTwitter - http://twitter.com/unboxtherapy\nInstagram - http://instagram.com/unboxtherapy\nTikTok - http://tiktok.com/@unboxtherapyofficial",
              },
              thumbnails: [
                {
                  url: "https://i1.ytimg.com/vi/LyxJWtoyK0o/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 18147,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 2498248,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/LyxJWtoyK0o?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "This is the iPhone 18 Pro Max",
            },
            description: {
              value:
                "iPhone 18 Pro Max or iPhone Fold?\nUpgrade Your Workflow with Comu Action Pro! Claim $10 Off Now (Only $169.99 at checkout). Also valid in the UK for up to £11 off. \nUse code: COMUUNBOX \nUS：\nAmazon：https://amzn.to/4c4ua00 \nWebsite：https://bit.ly/4hZyxgx \nUK： \nAmazon: https://amzn.to/3UEFZnC\nLifetime Value: Pay once, get unlimited live transcription & AI summaries.\n100% Privacy Compliant: Built with GDPR, HIPAA, and SOC 2 compliance.\nFast & Free Shipping, 12-Month Warranty, Lifetime Customer Support.\nThanks to Comu for partnering on this video\n\nFOLLOW ME IN THESE PLACES FOR UPDATES\nTwitter - http://twitter.com/unboxtherapy\nInstagram - http://instagram.com/unboxtherapy\nTikTok - http://tiktok.com/@unboxtherapyofficial",
            },
            thumbnails: [
              {
                url: "https://i1.ytimg.com/vi/LyxJWtoyK0o/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 18147,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 2498248,
              },
            },
          },
        },
        yt: {
          videoId: "LyxJWtoyK0o",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:gTP8orDab0w",
        links: [
          {
            href: "https://www.youtube.com/shorts/gTP8orDab0w",
            rel: "alternate",
          },
        ],
        published: "2026-08-28T16:30:48+00:00",
        title: "Watch This Lens Swap (SOUND ON 🔊)",
        updated: "2026-08-29T08:43:32+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/gTP8orDab0w?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "Watch This Lens Swap (SOUND ON 🔊)",
              },
              description: {
                value:
                  "Get the Insta360 X4 Air and a free replaceable lens kit with my code: “Unbox” \nClick the link here: https://bit.ly/Unbox26X4Air\n#LaborDaySale #Insta360 #insta360x4air \nThanks to @insta360 for partnering on this video",
              },
              thumbnails: [
                {
                  url: "https://i4.ytimg.com/vi/gTP8orDab0w/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 3965,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 1230141,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/gTP8orDab0w?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "Watch This Lens Swap (SOUND ON 🔊)",
            },
            description: {
              value:
                "Get the Insta360 X4 Air and a free replaceable lens kit with my code: “Unbox” \nClick the link here: https://bit.ly/Unbox26X4Air\n#LaborDaySale #Insta360 #insta360x4air \nThanks to @insta360 for partnering on this video",
            },
            thumbnails: [
              {
                url: "https://i4.ytimg.com/vi/gTP8orDab0w/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 3965,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 1230141,
              },
            },
          },
        },
        yt: {
          videoId: "gTP8orDab0w",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:ihxHk6wYj8c",
        links: [
          {
            href: "https://www.youtube.com/shorts/ihxHk6wYj8c",
            rel: "alternate",
          },
        ],
        published: "2026-08-27T20:09:40+00:00",
        title: "10,000 mAh Battery… In a Smartphone...",
        updated: "2026-09-02T10:58:15+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/ihxHk6wYj8c?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "10,000 mAh Battery… In a Smartphone...",
              },
              description: {
                value:
                  "Check out the New REDMI Note 17 Pro Max 5G Here: http://mi.com/\n#REDMINote17ProMax5G #REDMINote17Series\nThanks to @xiaomi for partnering on this video",
              },
              thumbnails: [
                {
                  url: "https://i2.ytimg.com/vi/ihxHk6wYj8c/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 38687,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 12094022,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/ihxHk6wYj8c?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "10,000 mAh Battery… In a Smartphone...",
            },
            description: {
              value:
                "Check out the New REDMI Note 17 Pro Max 5G Here: http://mi.com/\n#REDMINote17ProMax5G #REDMINote17Series\nThanks to @xiaomi for partnering on this video",
            },
            thumbnails: [
              {
                url: "https://i2.ytimg.com/vi/ihxHk6wYj8c/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 38687,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 12094022,
              },
            },
          },
        },
        yt: {
          videoId: "ihxHk6wYj8c",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:mB0r2bWS-jY",
        links: [
          {
            href: "https://www.youtube.com/shorts/mB0r2bWS-jY",
            rel: "alternate",
          },
        ],
        published: "2026-08-27T14:33:03+00:00",
        title: "Competitive Advantage…",
        updated: "2026-09-01T09:05:38+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/mB0r2bWS-jY?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "Competitive Advantage…",
              },
              description: {
                value:
                  "Check out more on the POCO F9 Series here: https://www.mi.com/global/launch/poco-f9-series-launch/ Full Unboxing to come. \n#POCOF9Series #POCOF9Ultra #POCOF9Pro #UltrapowerUnbound #POCOLaunch\nThanks to @POCOGlobal for partnering on this video",
              },
              thumbnails: [
                {
                  url: "https://i2.ytimg.com/vi/mB0r2bWS-jY/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 4879,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 2689475,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/mB0r2bWS-jY?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "Competitive Advantage…",
            },
            description: {
              value:
                "Check out more on the POCO F9 Series here: https://www.mi.com/global/launch/poco-f9-series-launch/ Full Unboxing to come. \n#POCOF9Series #POCOF9Ultra #POCOF9Pro #UltrapowerUnbound #POCOLaunch\nThanks to @POCOGlobal for partnering on this video",
            },
            thumbnails: [
              {
                url: "https://i2.ytimg.com/vi/mB0r2bWS-jY/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 4879,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 2689475,
              },
            },
          },
        },
        yt: {
          videoId: "mB0r2bWS-jY",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:A02r1oFeMmo",
        links: [
          {
            href: "https://www.youtube.com/shorts/A02r1oFeMmo",
            rel: "alternate",
          },
        ],
        published: "2026-08-26T17:49:46+00:00",
        title: "This Phone Has a Subwoofer 🔊...",
        updated: "2026-09-01T09:04:45+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/A02r1oFeMmo?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "This Phone Has a Subwoofer 🔊...",
              },
              description: {
                value:
                  "Check out more on the POCO F9 Series here: https://www.mi.com/global/launch/poco-f9-series-launch/ Full Unboxing to come. \n#POCOF9Series #POCOF9Ultra #POCOF9Pro #UltrapowerUnbound #POCOLaunch\nThanks to @POCOGlobal for partnering on this video",
              },
              thumbnails: [
                {
                  url: "https://i2.ytimg.com/vi/A02r1oFeMmo/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 53376,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 8354094,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/A02r1oFeMmo?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "This Phone Has a Subwoofer 🔊...",
            },
            description: {
              value:
                "Check out more on the POCO F9 Series here: https://www.mi.com/global/launch/poco-f9-series-launch/ Full Unboxing to come. \n#POCOF9Series #POCOF9Ultra #POCOF9Pro #UltrapowerUnbound #POCOLaunch\nThanks to @POCOGlobal for partnering on this video",
            },
            thumbnails: [
              {
                url: "https://i2.ytimg.com/vi/A02r1oFeMmo/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 53376,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 8354094,
              },
            },
          },
        },
        yt: {
          videoId: "A02r1oFeMmo",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:ip0W9lCXpio",
        links: [
          {
            href: "https://www.youtube.com/shorts/ip0W9lCXpio",
            rel: "alternate",
          },
        ],
        published: "2026-08-24T16:16:23+00:00",
        title: "The Snapdragon Multi-Day Battery Laptop",
        updated: "2026-09-04T19:12:34+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/ip0W9lCXpio?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "The Snapdragon Multi-Day Battery Laptop",
              },
              description: {
                value: "Sponsored by @snapdragon",
              },
              thumbnails: [
                {
                  url: "https://i2.ytimg.com/vi/ip0W9lCXpio/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 3577,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 1787928,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/ip0W9lCXpio?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "The Snapdragon Multi-Day Battery Laptop",
            },
            description: {
              value: "Sponsored by @snapdragon",
            },
            thumbnails: [
              {
                url: "https://i2.ytimg.com/vi/ip0W9lCXpio/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 3577,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 1787928,
              },
            },
          },
        },
        yt: {
          videoId: "ip0W9lCXpio",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:F2uHTrbQQVE",
        links: [
          {
            href: "https://www.youtube.com/shorts/F2uHTrbQQVE",
            rel: "alternate",
          },
        ],
        published: "2026-08-22T15:12:34+00:00",
        title: "This Limited Edition Unboxing is 🥶...",
        updated: "2026-08-24T16:48:17+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/F2uHTrbQQVE?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "This Limited Edition Unboxing is 🥶...",
              },
              description: {
                value:
                  'Use code "UNBOX" for a FREE Ultra Wide Lens with the purchase of your Insta360 Ace Pro 2 Plus, starting August 27, Insta360 Labor Day Sale brings even more savings on your next camera upgrade. Purchase Link:https://bit.ly/Unbox26AcePro2 #Insta360 #Insta360AcePro2 #ActionCamera Thanks to @insta360  for partnering on this video.',
              },
              thumbnails: [
                {
                  url: "https://i3.ytimg.com/vi/F2uHTrbQQVE/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 8869,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 1921267,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/F2uHTrbQQVE?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "This Limited Edition Unboxing is 🥶...",
            },
            description: {
              value:
                'Use code "UNBOX" for a FREE Ultra Wide Lens with the purchase of your Insta360 Ace Pro 2 Plus, starting August 27, Insta360 Labor Day Sale brings even more savings on your next camera upgrade. Purchase Link:https://bit.ly/Unbox26AcePro2 #Insta360 #Insta360AcePro2 #ActionCamera Thanks to @insta360  for partnering on this video.',
            },
            thumbnails: [
              {
                url: "https://i3.ytimg.com/vi/F2uHTrbQQVE/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 8869,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 1921267,
              },
            },
          },
        },
        yt: {
          videoId: "F2uHTrbQQVE",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:b0x8sFBJr7Q",
        links: [
          {
            href: "https://www.youtube.com/shorts/b0x8sFBJr7Q",
            rel: "alternate",
          },
        ],
        published: "2026-08-20T17:06:18+00:00",
        title: "World’s Lightest 17” Laptop With RTX...",
        updated: "2026-08-28T16:42:06+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/b0x8sFBJr7Q?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "World’s Lightest 17” Laptop With RTX...",
              },
              description: {
                value:
                  "Check out the New LG Gram Lineup below. Thanks to LG for partnering on this video.\n\n16Z90U - https://bit.ly/4xtRMnG\n17Z90UR - https://bit.ly/4otJYOR\n17Z90UB - https://bit.ly/43UJyrr\n \n#lggram #17inchLaptop #LightweightLaptop #Aerominum\n @LGGlobal \n\n*Detailed specifications may vary depending on the country of purchase and purchase period",
              },
              thumbnails: [
                {
                  url: "https://i3.ytimg.com/vi/b0x8sFBJr7Q/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 2384,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 1838568,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/b0x8sFBJr7Q?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "World’s Lightest 17” Laptop With RTX...",
            },
            description: {
              value:
                "Check out the New LG Gram Lineup below. Thanks to LG for partnering on this video.\n\n16Z90U - https://bit.ly/4xtRMnG\n17Z90UR - https://bit.ly/4otJYOR\n17Z90UB - https://bit.ly/43UJyrr\n \n#lggram #17inchLaptop #LightweightLaptop #Aerominum\n @LGGlobal \n\n*Detailed specifications may vary depending on the country of purchase and purchase period",
            },
            thumbnails: [
              {
                url: "https://i3.ytimg.com/vi/b0x8sFBJr7Q/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 2384,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 1838568,
              },
            },
          },
        },
        yt: {
          videoId: "b0x8sFBJr7Q",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:SUA2xGy-beg",
        links: [
          {
            href: "https://www.youtube.com/shorts/SUA2xGy-beg",
            rel: "alternate",
          },
        ],
        published: "2026-08-18T14:54:12+00:00",
        title: 'They Call it Your "SecondBrain"',
        updated: "2026-08-28T08:16:03+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/SUA2xGy-beg?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: 'They Call it Your "SecondBrain"',
              },
              description: {
                value:
                  "Check out the SecondBrain Note AI Voice Recorder Here: https://shop.genspark.ai/s/unboxtherapy. Get 10% Off for a final price of $179. Press once, and every meeting turns itself into notes, saved straight into your SecondBrain. \nThanks to @GensparkProduct for partnering on this video.\n#secondbrain  #SecondBrainNote #Genspark",
              },
              thumbnails: [
                {
                  url: "https://i4.ytimg.com/vi/SUA2xGy-beg/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 2615,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 799923,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/SUA2xGy-beg?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: 'They Call it Your "SecondBrain"',
            },
            description: {
              value:
                "Check out the SecondBrain Note AI Voice Recorder Here: https://shop.genspark.ai/s/unboxtherapy. Get 10% Off for a final price of $179. Press once, and every meeting turns itself into notes, saved straight into your SecondBrain. \nThanks to @GensparkProduct for partnering on this video.\n#secondbrain  #SecondBrainNote #Genspark",
            },
            thumbnails: [
              {
                url: "https://i4.ytimg.com/vi/SUA2xGy-beg/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 2615,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 799923,
              },
            },
          },
        },
        yt: {
          videoId: "SUA2xGy-beg",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:5eEjWmsoB7w",
        links: [
          {
            href: "https://www.youtube.com/shorts/5eEjWmsoB7w",
            rel: "alternate",
          },
        ],
        published: "2026-08-17T14:00:32+00:00",
        title: "The New Insta360 Is Here...",
        updated: "2026-08-29T01:57:49+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/5eEjWmsoB7w?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "The New Insta360 Is Here...",
              },
              description: {
                value:
                  "Check out the Insta360 X6: https://bit.ly/UnboxX6\nThe first 10 orders get Free Dual replaceable lens Kit. \nIf you are looking for an upgrade to your kit, and you have the old models not only from Insta360, even GoPro or DJ, you can head to Insta360 Trade In Program and get up to US$50 on your new Insta360 X6. https://www.insta360.com/support/workorder/trade-in/create\nThanks to @insta360 for partnering on this video. #insta360",
              },
              thumbnails: [
                {
                  url: "https://i2.ytimg.com/vi/5eEjWmsoB7w/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 4354,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 2047914,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/5eEjWmsoB7w?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "The New Insta360 Is Here...",
            },
            description: {
              value:
                "Check out the Insta360 X6: https://bit.ly/UnboxX6\nThe first 10 orders get Free Dual replaceable lens Kit. \nIf you are looking for an upgrade to your kit, and you have the old models not only from Insta360, even GoPro or DJ, you can head to Insta360 Trade In Program and get up to US$50 on your new Insta360 X6. https://www.insta360.com/support/workorder/trade-in/create\nThanks to @insta360 for partnering on this video. #insta360",
            },
            thumbnails: [
              {
                url: "https://i2.ytimg.com/vi/5eEjWmsoB7w/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 4354,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 2047914,
              },
            },
          },
        },
        yt: {
          videoId: "5eEjWmsoB7w",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
      {
        authors: [
          {
            name: "Unbox Therapy",
            uri: "https://www.youtube.com/channel/UCsTcErHg8oDvUnTzoqsYeNw",
          },
        ],
        id: "yt:video:8Ddp5WaMp_8",
        links: [
          {
            href: "https://www.youtube.com/shorts/8Ddp5WaMp_8",
            rel: "alternate",
          },
        ],
        published: "2026-08-13T17:52:31+00:00",
        title: "New Ninja Water Gadget",
        updated: "2026-08-26T14:09:40+00:00",
        media: {
          groups: [
            {
              contents: [
                {
                  url: "https://www.youtube.com/v/8Ddp5WaMp_8?version=3",
                  type: "application/x-shockwave-flash",
                  height: 390,
                  width: 640,
                },
              ],
              title: {
                value: "New Ninja Water Gadget",
              },
              description: {
                value:
                  "Check out the New Ninja HydraSense Intelligent Water Filtration System. Raise your water standards with an in-home water filtration system. Thanks to @NinjaKitchen  for partnering on this video. Check out the Link Here: https://creatorlink.shop/3TUDTjg #NinjaHydraSense #waterfilter #NinjaPartner",
              },
              thumbnails: [
                {
                  url: "https://i1.ytimg.com/vi/8Ddp5WaMp_8/hqdefault.jpg",
                  height: 360,
                  width: 480,
                },
              ],
              community: {
                starRating: {
                  average: 5,
                  count: 3688,
                  min: 1,
                  max: 5,
                },
                statistics: {
                  views: 1534266,
                },
              },
            },
          ],
          group: {
            contents: [
              {
                url: "https://www.youtube.com/v/8Ddp5WaMp_8?version=3",
                type: "application/x-shockwave-flash",
                height: 390,
                width: 640,
              },
            ],
            title: {
              value: "New Ninja Water Gadget",
            },
            description: {
              value:
                "Check out the New Ninja HydraSense Intelligent Water Filtration System. Raise your water standards with an in-home water filtration system. Thanks to @NinjaKitchen  for partnering on this video. Check out the Link Here: https://creatorlink.shop/3TUDTjg #NinjaHydraSense #waterfilter #NinjaPartner",
            },
            thumbnails: [
              {
                url: "https://i1.ytimg.com/vi/8Ddp5WaMp_8/hqdefault.jpg",
                height: 360,
                width: 480,
              },
            ],
            community: {
              starRating: {
                average: 5,
                count: 3688,
                min: 1,
                max: 5,
              },
              statistics: {
                views: 1534266,
              },
            },
          },
        },
        yt: {
          videoId: "8Ddp5WaMp_8",
          channelId: "UCsTcErHg8oDvUnTzoqsYeNw",
        },
      },
    ],
    yt: {
      channelId: "sTcErHg8oDvUnTzoqsYeNw",
    },
  };

  return (
    <FeedGrid className="w-full max-w-md max-h-142 overflow-x-hidden overflow-y-auto">
      {atomFeed.entries?.map((entry) => (
        <FeedGridItem key={entry.id}>
          <FeedGridItemContent>
            <FeedGridItemTitle.Atom entry={entry} />
            <FeedGridItemDescription.Atom entry={entry} />
          </FeedGridItemContent>
        </FeedGridItem>
      ))}
    </FeedGrid>
  );
}
