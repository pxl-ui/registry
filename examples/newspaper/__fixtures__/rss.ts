import type { Rss } from "@/lib/schemas/pxl/rss";

export const item: Rss.Item = {
  title:
    "Silvester Stallone hid his struggles for decades. Now he's coming clean.",
  link: "https://www.nytimes.com/2026/09/26/magazine/sylvester-stallone-interview.html",
  description: "The legendary actor on his disturbing childhood, his Hollywood missteps and the pain he caused to his loved ones, his body and himself.",
  guid: {
    value: "https://www.nytimes.com/2026/09/26/magazine/sylvester-stallone-interview.html",
    isPermaLink: true
  },
  pubDate: "Thu, 09 Sep 2026 09:15:07 +0000",
  atom: {
    links: [
      {
        href: "https://www.nytimes.com/2026/09/26/magazine/sylvester-stallone-interview.html",
        rel: "standout",
      },
    ],
  },
  dc: {
    creators: ["Lulu Garcia-Navarro"],
    creator: "Lulu Garcia-Navarro",
  },
  content: {
    encoded: `Sylvester Stallone has loomed large in our popular imagination for 50 years, ever since he exploded onto the screen playing the iconic underdog boxer Rocky Balboa in a film he wrote and that won the best picture Oscar. Many more “Rocky” films came after that, and also another franchise, “Rambo,” which heralded a new era of action movies in which Stallone and his one-time nemesis Arnold Schwarzenegger modeled a very specific type of masculinity: physically imposing, morally unambiguous and emotionally aloof.

Now 80, and with a new memoir, titled “The Steps” (a nod to the Philadelphia Museum of Art stairs he famously scaled in “Rocky”), Stallone is ready to examine his own life, his work and the impact it has had on our culture. As he told me in our candid and at times shocking conversations, he can “make a castle out of regrets” for what his drive and fame did to his mind and his body. He also explained how his very difficult childhood, with abusive and neglectful parents, motivated the tough-guy image he showed the world.

**You wrote in “The Steps” that at difficult moments in your life, you told yourself to put those memories “away in a box” and avoid them, just move forward. What was it like to go back and revisit some of these things for this book?** It was some mixed emotion. There were some tears, some laughter, some anger and bitterness. And then I thought, Maybe that was the motivation to do something extraordinary as opposed to having no angst inside of me. It’s like, The guy punched you in your mouth, but did he do you a favor? I truly believe that the parents are the sculptors, and they’re sculpting their masterpiece, or their disaster.

**How you came into the world was, in many ways, how you have inhabited it, with a lot of turmoil and drama. Can you tell me about the day you were born?** My mother also came from a lot of turmoil, and she really wasn’t mother material. She had grandiose plans for her life, so her pregnancy with me was a big-time interruption. I don’t think she wanted to believe it was happening, even though it was in the ninth month. She was finally on a bus and she goes into labor. It was bad. She just happened to be near a medical center, you might call it, like a charity ward.

**And the people who delivered you used forceps and partially paralyzed your face.** It could have been worse, because sometimes you get brain damage from it, but maybe that happened too. [_Laughs_] It was a terrible thing growing up because I slurred and I mumbled. It was like 10 times worse than Rocky.

**Did you see yourself as having a disability when you were young?** Yeah. If you have a lisp or a stutter, you’re so familiar with it. But other people are like: “What? What language is that?”

**In the book you seem to suggest that both your parents saw your arrival as having ruined their ambitions in some way. You wrote, “Can you really make people proud who never wanted you in the first place?” And when you were very little, you were sent to go live in a boardinghouse, and your parents only visited you once a month. How did you understand that as a kid?** I don’t know if there was some preventive thing or some blockage from being completely abandoned, but I was just raised by strangers and it became a natural environment. My parents were never nurturing, so this was actually a bonus compared to where I was living.

**I think if you are emotionally deprived when you’re younger, you learn to lock things away, which is why I started with that quote about you locking things away. Do you think it made you tough?** In the wrong way, it did. It made me very tough. And I literally didn’t figure out real, true love until I was 70. To really have unequivocally true love, that total abandonment, that reckless love that you would jump into a volcano for someone, that came late. And that’s a big pity. I was so consumed with not being another bum from the neighborhood. I was very, very competitive, like a pit bull. That’s what got me going. It’s not healthy.

**Your parents had this very hostile and violent marriage, and they divorced when you were about 11 years old. What do you remember about that separation?** It was traumatic. When my mom goes, “I’m leaving, I won’t be living here anymore,” I remember holding onto her leg, like being literally dragged. And she pulled the leg away, walked out the door and that was it. My brother came home a little bit after that and there was nobody there. I guess my father took me to the shop or something, so he was abandoned and he never got over that. Ever.

**That scene of you holding your mother’s leg. I’m so sorry. What was going on?** I don’t know because she never was a loving person. But there’s a connection at birth that some people have that is so palpable, that no matter what, you cannot break away from this need to have this person’s attention. It’s electric. And then being deprived and put into the dark, it’s terrible.

**It’s 100 percent true: You can never get rid of the connection to your parents. You end up living with your dad. He loved horses and played polo. But what was it like living alone with your dad? Because that didn’t sound like a great time, either.** It would be these constant bombastic explosions and then total silence. If he and I were talking and I said, “I don’t know if I agree with that,” he’d start spinning his fork and suck his teeth, and you knew what was coming. The next thing you know, _wham!_ He had very big hands. You learn to duck. I didn’t put a lot of stuff in the book because I didn’t want a pity party, but it was insane. For example, before we go to church he said, “Go to the store and buy some bread.” I bring home sandwich _spread,_ not bread, and he kicked me in the stomach, laid me out, got in the car and went to church. I’m there in the street with mayonnaise. Really, it’s unbelievable.
`,
  },
  media: {
    contents: [
      {
        url: "https://vp.nyt.com/video/2026/09/25/179553_1_04mag-interview-1_wg_720p.mp4",
        medium: "video"
      },
    ],
    description: {
      value:
        "Philip Montgomery for The New York Times.",
    },
    credits: [
      {
        value: "Philip Montgomery for The New York Times",
      },
    ],
  },
};

export const feed: Rss.Feed = {
  title: "NYT > World News",
  description: "New York Times",
  link: "https://www.nytimes.com/section/world",
  language: "en-us",
  copyright: "Copyright 2026 The New York Times Company",
  pubDate: "Thu, 10 Sep 2026 11:02:50 +0000",
  lastBuildDate: "Thu, 10 Sep 2026 11:23:28 +0000",
  image: {
    url: "https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png",
    title: "NYT > World News",
    link: "https://www.nytimes.com/section/world",
  },
  items: [
    {
      title: "Yemen’s Houthis Seize Strategic Red Sea Port, Officials Say",
      link: "https://www.nytimes.com/2026/09/10/world/middleeast/yemens-houthis-seize-strategic-red-sea-port-officials-say.html",
      description:
        "The Iran-backed militia routed Yemeni government forces in Mokha, putting the group in a stronger position to attack ships in a crucial waterway for global trade.",
      categories: [
        {
          name: "War and Armed Conflicts",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Ships and Shipping",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "US and Israeli Attack on Iran (2026)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Trade and World Market",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Iran-Israel Proxy Conflict",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Houthis",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Bab al-Mandab Strait",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Red Sea",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Saudi Arabia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Yemen",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Iran",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/middleeast/yemens-houthis-seize-strategic-red-sea-port-officials-say.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 10:31:22 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/middleeast/yemens-houthis-seize-strategic-red-sea-port-officials-say.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Saeed Al-Batati, Shuaib Almosawa and Vivian Nereim"],
        creator: "Saeed Al-Batati, Shuaib Almosawa and Vivian Nereim",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/10/multimedia/10int-yemen-mokha-hztm/10int-yemen-mokha-hztm-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1799,
            width: 1800,
          },
        ],
        description: {
          value:
            "Soldiers at a recruitment event in Houthi-controlled Sanaa, Yemen, on Thursday.",
        },
        credits: [
          {
            value: "Mohammed Huwais/Agence France-Presse — Getty Images",
          },
        ],
      },
    },
    {
      title: "The ‘Forever War’ in Afghanistan: 25 Years in Pictures",
      link: "https://www.nytimes.com/2026/09/10/world/asia/afghanistan-war-photojournalism.html",
      description: "TK great summary will go here",
      categories: [
        {
          name: "Afghanistan War (2001- )",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "vis-photo",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/asia/afghanistan-war-photojournalism.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 09:12:12 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/asia/afghanistan-war-photojournalism.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["The New York Times"],
        creator: "The New York Times",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/08/25/multimedia/00int-afghanistan-25years-photos-promo-fkcm/00int-afghanistan-25years-photos-promo-fkcm-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1801,
            width: 1800,
          },
        ],
        credits: [
          {
            value: "Jim Huylebroek for The New York Times",
          },
        ],
      },
    },
    {
      title:
        "After a Difficult Loss, Nigeria Has Become a Source of Pain for Chimamanda Ngozi Adichie",
      link: "https://www.nytimes.com/2026/09/10/world/africa/chimamanda-ngozi-adichie-nigeria-son-death.html",
      description:
        "Chimamanda Ngozi Adichie has moved countless readers with her novels about Nigerians at home and abroad. After the death in Lagos of her toddler son, her homeland no longer feels as much like home.",
      categories: [
        {
          name: "Medicine and Health",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Children and Childhood",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Grief (Emotion)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Johns Hopkins Hospital (Baltimore, Md)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Adichie, Chimamanda Ngozi",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Baltimore (Md)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Lagos (Nigeria)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "vis-design",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/africa/chimamanda-ngozi-adichie-nigeria-son-death.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 09:03:16 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/africa/chimamanda-ngozi-adichie-nigeria-son-death.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Veronica Chambers"],
        creator: "Veronica Chambers",
      },
    },
    {
      title:
        "With Messaging That Mirrors Putin’s, Germany’s Far-Right Party Gains Ground",
      link: "https://www.nytimes.com/2026/09/10/world/europe/germany-russia-afd-putin.html",
      description:
        "Embracing positions extolled by the Kremlin, the Alternative for Germany party may govern for the first time in a German state.",
      categories: [
        {
          name: "Russian Invasion of Ukraine (2022)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Right-Wing Extremism and Alt-Right",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Alternative for Germany",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Putin, Vladimir V",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Merz, Friedrich",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Germany",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Russia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/europe/germany-russia-afd-putin.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 09:44:32 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/europe/germany-russia-afd-putin.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Paul Sonne, Jim Tankersley and Christopher F. Schuetze"],
        creator: "Paul Sonne, Jim Tankersley and Christopher F. Schuetze",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/10/multimedia/10int-russia-germany-01-tmzc/10int-russia-germany-01-tmzc-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Ulrich Siegmund, left, the lead Alternative for Germany candidate in the Saxony-Anhalt state election, with the party’s co-leaders, Tino Chrupalla and Alice Weidel, in Magdeburg, Germany, on Sunday.",
        },
        credits: [
          {
            value: "Ronny Hartmann/Agence France-Presse — Getty Images",
          },
        ],
      },
    },
    {
      title: "Why Yemen Is Back on the Brink of War",
      link: "https://www.nytimes.com/2026/09/10/world/middleeast/yemen-houthis-saudis-war.html",
      description:
        "The Houthi militia, the Yemeni government, Iran and Saudi Arabia all have reasons to escalate the conflict.",
      categories: [
        {
          name: "War and Armed Conflicts",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "US and Israeli Attack on Iran (2026)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Houthis",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Iran",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Yemen",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Saudi Arabia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Red Sea",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Middle East",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Strait of Hormuz",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/middleeast/yemen-houthis-saudis-war.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 09:08:43 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/middleeast/yemen-houthis-saudis-war.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Vivian Nereim and Ismaeel Naar"],
        creator: "Vivian Nereim and Ismaeel Naar",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/10/08/multimedia/10Yemen-War-Explainer/10Yemen-War-Explainer-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value: "Supporters of the Houthi militia in Sanaa, Yemen, in July.",
        },
        credits: [
          {
            value: "Osamah Abdulrahman/Associated Press",
          },
        ],
      },
    },
    {
      title:
        "Gander Welcomed Americans in 2001. Now, U.S.-Canada Tensions Hit Home",
      link: "https://www.nytimes.com/2026/09/10/world/canada/9-11-gander-newfoundland-canada-us.html",
      description:
        "The Newfoundland town welcomed thousands of frightened airline passengers on Sept. 11, but 25 years later, mixed emotions run through anniversary plans amid an escalating trade war.",
      categories: [
        {
          name: "September 11 (2001)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Gander (Newfoundland)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Canada",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Newfoundland (Canada)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "New York City",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "United States",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Carney, Mark J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Hoekstra, Peter",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "United States International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Friendship",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Airports",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/canada/9-11-gander-newfoundland-canada-us.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 09:00:41 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/canada/9-11-gander-newfoundland-canada-us.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Norimitsu Onishi and Renaud Philippe"],
        creator: "Norimitsu Onishi and Renaud Philippe",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/04/world/04int-canada-911-gander-promo/04int-canada-911-gander-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "A scene from the play Come From Away, performed in Gander, Newfoundland and Labrador. The musical tells the story of the 6,579 passengers and crew aboard 38 planes diverted to Gander after the Sept. 11, 2001, attacks, and of the local residents who welcomed and cared for them.",
        },
        credits: [
          {
            value: "Renaud Philippe for The New York Times",
          },
        ],
      },
    },
    {
      title:
        "At Least 5 Dead, More Than 80 Missing After Ferry Fire in the Philippines",
      link: "https://www.nytimes.com/2026/09/09/world/asia/philippines-ferry-fire-palawan.html",
      description:
        "The June Aster was sailing from Manila to Coron, a popular tourist destination, when a fire broke out aboard the vessel.",
      categories: [
        {
          name: "Fires and Firefighters",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Maritime Accidents and Safety",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Ferries",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Deaths (Fatalities)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Rescues",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Philippines",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Manila (Philippines)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/asia/philippines-ferry-fire-palawan.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 04:49:27 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/asia/philippines-ferry-fire-palawan.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Aie Balagtas See"],
        creator: "Aie Balagtas See",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/10/multimedia/10int-philippines-ferry-zfjg/10int-philippines-ferry-zfjg-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1170,
            width: 1171,
          },
        ],
        description: {
          value:
            "A screen grab from a video released by the Philippine Coast Guard showing the ferry that caught fire off Palawan on Wednesday.",
        },
        credits: [
          {
            value: "Philippine Coast Guard",
          },
        ],
      },
    },
    {
      title:
        "Carney, at a Cabinet Retreat, Considers Further Trade Strikes Against the U.S.",
      link: "https://www.nytimes.com/2026/09/10/world/canada/carney-trump-canada-us-trade-war-tariffs.html",
      description:
        "Canada’s retaliation this week against President Trump’s tariffs was met with more American tariffs and a closed U.S. border on some Canadian products.",
      categories: [
        {
          name: "Customs (Tariff)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Canada",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Carney, Mark J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "LeBlanc, Dominic (1967- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Ford, Doug Jr (1964- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "United States",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Banff (Alberta)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Bombardier Inc",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Harley-Davidson Inc",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Motorcycles, Motor Bikes and Motorscooters",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Trade and World Market",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Aluminum",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Paper and Pulp",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/canada/carney-trump-canada-us-trade-war-tariffs.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 09:04:54 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/canada/carney-trump-canada-us-trade-war-tariffs.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Ian Austen"],
        creator: "Ian Austen",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/10/multimedia/10int-canada-trade-klgv/10int-canada-trade-klgv-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1798,
            width: 1800,
          },
        ],
        description: {
          value:
            "Prime Minister Mark Carney of Canada will decide whether to impose more tariffs against the United States during his cabinet retreat on Thursday.",
        },
        credits: [
          {
            value: "Chris Tanouye/Reuters",
          },
        ],
      },
    },
    {
      title: "Kenneth Feinberg Recalls Running the 9/11 Compensation Fund",
      link: "https://www.nytimes.com/2026/09/10/world/kenneth-feinberg-sept-11-compensation.html",
      description:
        "Kenneth Feinberg says the nearly three years he spent running the Sept. 11 compensation fund changed his life view forever.",
      categories: [
        {
          name: "Feinberg, Kenneth R",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "September 11 Victim Compensation Fund",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Compensation for Damages (Law)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "September 11 (2001)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Deaths (Fatalities)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Grief (Emotion)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Terrorism",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Al Qaeda",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Pennsylvania",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "New York City",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "United States",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/kenneth-feinberg-sept-11-compensation.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 09:04:18 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/kenneth-feinberg-sept-11-compensation.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Ephrat Livni"],
        creator: "Ephrat Livni",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/10/multimedia/10int-feinberg-sept11-1-zwbv/10int-feinberg-sept11-1-zwbv-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value: "“You cannot outfox time.” Kenneth Feinberg in 2016.",
        },
        credits: [
          {
            value: "T.J. Kirkpatrick for The New York Times",
          },
        ],
      },
    },
    {
      title: "25 Years After 9/11, Al Qaeda Still Has a Home in Afghanistan",
      link: "https://www.nytimes.com/2026/09/10/world/asia/25-years-after-9-11-al-qaeda-still-has-a-home-in-afghanistan.html",
      description:
        "The Taliban claim that Afghanistan is no longer a sanctuary for terrorist groups, but Al Qaeda and others are still present, reviving old fears.",
      categories: [
        {
          name: "vis-photo",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Afghanistan",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Kabul (Afghanistan)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Al Qaeda",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Islamic State Khorasan",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Taliban",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Tehrik-e-Taliban",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "War and Armed Conflicts",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Terrorism",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "September 11 (2001)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/asia/25-years-after-9-11-al-qaeda-still-has-a-home-in-afghanistan.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 09:02:44 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/asia/25-years-after-9-11-al-qaeda-still-has-a-home-in-afghanistan.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Elian Peltier and Tomás Munita"],
        creator: "Elian Peltier and Tomás Munita",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/10/multimedia/10int-afghanistan-sept10-promo-gbhp/10int-afghanistan-sept10-promo-gbhp-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        credits: [
          {
            value: "Tomas Munita for The New York Times",
          },
        ],
      },
    },
    {
      title:
        "Russian Drone Incursion Delayed Zelensky Flight to Oslo, Moldova Says",
      link: "https://www.nytimes.com/2026/09/10/world/europe/zelensky-plane-drone-moldova.html",
      description:
        "An airspace closure delayed the Ukrainian leader’s trip between Moldova and Norway, officials said. They did not confirm a claim by Norway’s prime minister that a drone had “almost hit” the plane.",
      categories: [
        {
          name: "Ukraine",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Moldova",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Drones (Pilotless Planes)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Russian Invasion of Ukraine (2022)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Airlines and Airplanes",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Delays (Transportation)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Gahr Store, Jonas",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Sandu, Maia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Zelensky, Volodymyr",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Europe",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Oslo (Norway)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Norway",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Russia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Kyiv (Ukraine)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/world/europe/zelensky-plane-drone-moldova.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 10:49:54 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/world/europe/zelensky-plane-drone-moldova.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Francesca Regalado and Lynsey Chutel"],
        creator: "Francesca Regalado and Lynsey Chutel",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/10/multimedia/10xp-drones-Zelensky-gbzw/10xp-drones-Zelensky-gbzw-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1483,
            width: 1482,
          },
        ],
        description: {
          value:
            "President Volodymyr Zelensky of Ukraine, second from left, at the funeral of King Harald V of Norway in Oslo on Wednesday. His plane’s departure from Moldova on Tuesday was delayed by a Russian drone near Chisinau, officials said.",
        },
        credits: [
          {
            value: "Odd Andersen/Agence France-Presse — Getty Images",
          },
        ],
      },
    },
    {
      title: "14 Killed in Weapons Depot Blast in Northwest Syria",
      link: "https://www.nytimes.com/2026/09/09/world/middleeast/syria-weapons-depot-blast.html",
      description:
        "Officials said they had not determined the cause of the explosion. Years of fighting have left Syria littered with weapons and ordnance left over from the civil war.",
      categories: [
        {
          name: "Syria",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "al-Shara, Ahmed (Abu Mohammad al-Jolani) (1982- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Explosions (Accidental)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/middleeast/syria-weapons-depot-blast.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 18:24:17 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/middleeast/syria-weapons-depot-blast.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Reham Mourshed and Abdi Latif Dahir"],
        creator: "Reham Mourshed and Abdi Latif Dahir",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-syria-explosion-zqkt/09int-syria-explosion-zqkt-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "An overhead view of collapsed buildings, burned vehicles and other damage after an explosion at what Syria’s Defense Ministry said was a storage facility for weapons near Sarmada, in Idlib Province.",
        },
        credits: [
          {
            value: "Omar Albam/Associated Press",
          },
        ],
      },
    },
    {
      title:
        "Spain Declassifies Warning to Morocco About Migrant Crossing Plans",
      link: "https://www.nytimes.com/2026/09/09/world/europe/spain-ceuta-migrants-report.html",
      description:
        "Spain’s intelligence service had alerted Morocco about social media calls for a border exodus into Ceuta, which led to more than 100 deaths and a political crisis in Spain.",
      categories: [
        {
          name: "Migrant Surge into Ceuta, Spain (2026)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Ceuta (Spain)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Spain",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Classified Information and State Secrets",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Morocco",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Illegal Immigration",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Sanchez Perez-Castejon, Pedro (1972- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Espionage and Intelligence Services",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Africa",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/spain-ceuta-migrants-report.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 18:56:11 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/spain-ceuta-migrants-report.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Carlos Barragán"],
        creator: "Carlos Barragán",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-spain-ceuta-1-jgzc/09int-spain-ceuta-1-jgzc-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1801,
            width: 1800,
          },
        ],
        description: {
          value:
            "Migrants waiting for humanitarian assistance on Aug. 1 after tens of thousands crossed into Ceuta, Spain, on the northern tip of Africa.",
        },
        credits: [
          {
            value: "Finbarr O'Reilly for The New York Times",
          },
        ],
      },
    },
    {
      title: "How a Driver’s Sudden Death Triggered Ebola Panic in Congo",
      link: "https://www.nytimes.com/2026/09/09/world/africa/ebola-congo-truck-driver.html",
      description:
        "When a truck driver unexpectedly collapsed and died in a remote village, frontline medical staff scrambled to safely isolate his body, triggering a standoff.",
      categories: [
        {
          name: "Bunia (Congo, Democratic Republic of)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Congo, Democratic Republic of (Congo-Kinshasa)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Goma (Congo, Democratic Republic of)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "World Health Organization",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Ebola Virus",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Coffins",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Disease Rates",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Cemeteries",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Health Care Workers",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Deaths (Fatalities)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Funerals and Memorials",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "vis-photo",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/africa/ebola-congo-truck-driver.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 19:43:37 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/africa/ebola-congo-truck-driver.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Matthew Mpoke Bigg and Arlette Bashizi"],
        creator: "Matthew Mpoke Bigg and Arlette Bashizi",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-ebola-congo-driver-promo-pwth/09int-ebola-congo-driver-promo-pwth-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        credits: [
          {
            value: "Arlette Bashizi for The New York Times",
          },
        ],
      },
    },
    {
      title: "Where to See the World’s Bayeux Tapestry Replicas",
      link: "https://www.nytimes.com/2026/09/10/arts/design/bayeux-tapestry-replicas.html",
      description:
        "There are full-size replicas in a U.S. sports arena, an abbey in Denmark and a home in rural New Zealand. There’s even a more modest version for those who don’t like the original’s nudity.",
      categories: [
        {
          name: "Museums",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Textiles",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "British Museum",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "University of North Georgia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "London (England)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Bayeux (France)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/10/arts/design/bayeux-tapestry-replicas.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 09:02:42 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/10/arts/design/bayeux-tapestry-replicas.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Alex Marshall"],
        creator: "Alex Marshall",
      },
    },
    {
      title:
        "Fighting Wildfire Haze With an Airplane and Lots of Salt and Water",
      link: "https://www.nytimes.com/2026/09/09/world/asia/indonesia-wildfires-malaysia-cloud-seeding.html",
      description:
        "The authorities in Malaysian Borneo have been trying to seed clouds to counteract the effects of smoke wafting in from neighboring Indonesia.",
      categories: [
        {
          name: "Borneo (Indonesia)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Borneo (Malaysia)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Sarawak (Malaysia)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Wildfires",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Air Pollution",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Weather",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "internal-open-access-from-nl",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/asia/indonesia-wildfires-malaysia-cloud-seeding.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 05:26:38 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/asia/indonesia-wildfires-malaysia-cloud-seeding.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Zunaira Saieed"],
        creator: "Zunaira Saieed",
      },
    },
    {
      title: "August Ties for Hottest Month on Record",
      link: "https://www.nytimes.com/2026/09/09/climate/august-hottest-month-global-warming.html",
      description:
        "Sweltering summer temperatures put last month on par with July 2023 for global warmth, scientists said. More records could be broken in the months ahead.",
      categories: [
        {
          name: "Global Warming",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Heat and Heat Waves",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Oceans and Seas",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Greenhouse Gas Emissions",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "United Nations Framework Convention on Climate Change",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "United Nations",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/climate/august-hottest-month-global-warming.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 02:00:12 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/climate/august-hottest-month-global-warming.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Raymond Zhong"],
        creator: "Raymond Zhong",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09cli-hottestmonth-bmgh/09cli-hottestmonth-bmgh-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1799,
            width: 1800,
          },
        ],
        description: {
          value:
            "A vendor cooled off with a frozen water bottle in a market in Seoul on Aug. 6.",
        },
        credits: [
          {
            value: "Yonhap News Agency, via Reuters",
          },
        ],
      },
    },
    {
      title: "How Fighting Fires Became an All-of-Europe Project",
      link: "https://www.nytimes.com/2026/09/09/world/europe/eu-fire-fighting.html",
      description:
        "The European Union isn’t known for firefighting expertise. But with the continent ablaze, Brussels is playing a growing role.",
      categories: [
        {
          name: "Wildfires",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Fires and Firefighters",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Disasters and Emergencies",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "European Union",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Europe",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Sardinia (Italy)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Italy",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Estonia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "France",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/eu-fire-fighting.html",
        isPermaLink: true,
      },
      pubDate: "Thu, 10 Sep 2026 02:44:43 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/eu-fire-fighting.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Jeanna Smialek"],
        creator: "Jeanna Smialek",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-EU-firefighting-ftzb/08int-EU-firefighting-ftzb-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Firefighters near Lacanau, France, in July. Some French firefighters are learning new techniques fighting blazes elsewhere in Europe.",
        },
        credits: [
          {
            value: "Julien De Rosa/Agence France-Presse — Getty Images",
          },
        ],
      },
    },
    {
      title: "Back to School, Now With A.I.",
      link: "https://www.nytimes.com/2026/09/09/world/10int-theworld-web-ai-education.html",
      description:
        "This year is shaping up to be a global experiment in education: Can students embrace tech innovation without losing critical thinking skills?",
      categories: [
        {
          name: "Artificial Intelligence",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Education (K-12)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Yemen",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Oil (Petroleum) and Gasoline",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "War and Armed Conflicts",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/10int-theworld-web-ai-education.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 21:00:16 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/10int-theworld-web-ai-education.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Katrin Bennhold"],
        creator: "Katrin Bennhold",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/10/multimedia/10int-theworld-ai-schools-01-mfhv-promo/10int-theworld-ai-schools-01-mfhv-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1801,
            width: 1800,
          },
        ],
        description: {
          value: "Google’s Gemini chatbot.",
        },
        credits: [
          {
            value: "Ysa Pérez for The New York Times",
          },
        ],
      },
    },
    {
      title: "U.S. Designates Ecuador’s Los Tiguerones Gang as Terrorist Group",
      link: "https://www.nytimes.com/2026/09/09/world/americas/ecuador-los-tiguerones-terrorist.html",
      description:
        "The sanctions on Los Tiguerones imposed by Secretary of State Marco Rubio are an increasingly common U.S. tactic, though they will likely not hurt the gang’s finances.",
      categories: [
        {
          name: "Ecuador",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Gangs",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Embargoes and Sanctions",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Drug Abuse and Traffic",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "United States International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Drug Cartels",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Terrorism",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Noboa, Daniel",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Rubio, Marco",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Latin America",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/americas/ecuador-los-tiguerones-terrorist.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 21:50:48 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/americas/ecuador-los-tiguerones-terrorist.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Edward Wong, Genevieve Glatsky and Annie Correal"],
        creator: "Edward Wong, Genevieve Glatsky and Annie Correal",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/world/09int-ecuador-rubio/09int-ecuador-rubio-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1798,
            width: 1800,
          },
        ],
        description: {
          value:
            "The “Tiger Zone” graffiti in Guayaquil, Ecuador, refers to the gang that controls the sector.",
        },
        credits: [
          {
            value: "Marcos Pin/Agence France-Presse — Getty Images",
          },
        ],
      },
    },
    {
      title: "Misery at Heathrow: ‘Never Seen Chaos Like That’",
      link: "https://www.nytimes.com/2026/09/09/world/europe/heathrow-uk-flights-travel.html",
      description:
        "Over 2,000 flights have been disrupted in the past two days, as an air-traffic control problem has stymied British airports.",
      categories: [
        {
          name: "Air Traffic Control",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Airports",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Airlines and Airplanes",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Travel and Vacations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Delays (Transportation)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Heathrow Airport (London, England)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Great Britain",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "London (England)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/heathrow-uk-flights-travel.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 20:35:25 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/heathrow-uk-flights-travel.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Isabella Kwai"],
        creator: "Isabella Kwai",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-airport-scene-1-gmcp/09int-airport-scene-1-gmcp-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Chaos and confusion were abundant at Heathrow Terminal 5 in London on Tuesday. The authorities attributed the disruption to a technical problem in the air-traffic control system.",
        },
        credits: [
          {
            value: "Daniel Berehulak/The New York Times",
          },
        ],
      },
    },
    {
      title:
        "Yemen Tilts Toward Full-Scale War as Saudi-Houthi Clashes Escalate",
      link: "https://www.nytimes.com/2026/09/09/world/middleeast/saudi-yemen-strilkes.html",
      description:
        "With its oil-export routes once again under threat, Saudi Arabia is stepping up its military campaign against an old antagonist.",
      categories: [
        {
          name: "Yemen",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Saudi Arabia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Houthis",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "War and Armed Conflicts",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Oil (Petroleum) and Gasoline",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Ships and Shipping",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Red Sea",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Strait of Hormuz",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Iran",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/middleeast/saudi-yemen-strilkes.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 21:09:08 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/middleeast/saudi-yemen-strilkes.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Pranav Baskar"],
        creator: "Pranav Baskar",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-yemen-1-zpjm/09int-yemen-1-zpjm-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "A vendor follows the war news at his shop in Sanaa, Yemen, Wednesday.",
        },
        credits: [
          {
            value: "Osamah Abdulrahman/Associated Press",
          },
        ],
      },
    },
    {
      title:
        "Police Expand Investigation Into Reform U.K. After Undercover Sting",
      link: "https://www.nytimes.com/2026/09/09/world/europe/reform-uk-investigation-nigel-farage.html",
      description:
        "The Metropolitan Police are investigating Nigel Farage’s right-wing populist party after footage appeared to show party officials arranging secret contributions from a foreign donor.",
      categories: [
        {
          name: "Great Britain",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Reform UK (British Political Party)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Farage, Nigel (1964- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Ethics and Official Misconduct",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "England",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Gifts to Public Officials",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Campaign Finance",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Channel 4",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Orr, James (1978- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Dan Jukes",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/reform-uk-investigation-nigel-farage.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 19:40:51 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/reform-uk-investigation-nigel-farage.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Stephen Castle"],
        creator: "Stephen Castle",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09uk-reform-police-tcpj/09uk-reform-police-tcpj-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1798,
            width: 1800,
          },
        ],
        description: {
          value:
            "Nigel Farage, leader of Reform U.K., with his security team during the party’s annual conference in Birmingham, England, on Saturday.",
        },
        credits: [
          {
            value: "Isabel Infantes/Reuters",
          },
        ],
      },
    },
    {
      title:
        "Video Shows Grocery Store Manager Saving Toddler From Oncoming Traffic",
      link: "https://www.nytimes.com/2026/09/09/world/americas/video-mexico-toddler-traffic-rescue.html",
      description:
        "Luis Cruz dashed into a busy street in Puebla, Mexico, to pull a girl out of the path of an approaching S.U.V. Footage of the rescue has made him a local sensation.",
      categories: [
        {
          name: "Video Recordings, Downloads and Streaming",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Rescues",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Puebla (Mexico)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Traffic Accidents and Safety",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Awards, Decorations and Honors",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "internal-eafs",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/americas/video-mexico-toddler-traffic-rescue.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 17:20:48 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/americas/video-mexico-toddler-traffic-rescue.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Jonathan Wolfe"],
        creator: "Jonathan Wolfe",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/world/americas/new-still/new-still-mediumSquareAt3X.png",
            medium: "image",
            height: 1080,
            width: 1080,
          },
        ],
        credits: [
          {
            value: "Newsflare, via Associated Press",
          },
        ],
      },
    },
    {
      title:
        "Why Israel Reacted With Fury to U.K. Sanctions on West Bank Settlements",
      link: "https://www.nytimes.com/2026/09/09/world/middleeast/israel-uk-west-bank-sanctions.html",
      description:
        "The fierce retaliation of Prime Minister Benjamin Netanyahu’s government to the new restrictions is a reflection of his tough re-election fight, analysts say.",
      categories: [
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Israel-Gaza War (2023- )",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Israeli Settlements",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Palestinians",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Embargoes and Sanctions",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Diplomatic Service, Embassies and Consulates",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Palestinian Authority",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Netanyahu, Benjamin",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Great Britain",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Israel",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "West Bank",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/middleeast/israel-uk-west-bank-sanctions.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 17:13:11 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/middleeast/israel-uk-west-bank-sanctions.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["David M. Halbfinger"],
        creator: "David M. Halbfinger",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-netanyahu-assess-qpwf/09int-netanyahu-assess-qpwf-mediumSquareAt3X-v2.jpg",
            medium: "image",
            height: 1799,
            width: 1800,
          },
        ],
        description: {
          value:
            "Prime Minister Benjamin Netanyahu of Israel in Jerusalem on Tuesday. He has sought to convince voters that the diplomatic pressure from Europe is another reason to rally around him.",
        },
        credits: [
          {
            value: "Ammar Awad/Reuters",
          },
        ],
      },
    },
    {
      title: "U.S. Takes Aim at New Target in Deadly Boat Strike Campaign",
      link: "https://www.nytimes.com/2026/09/09/world/americas/us-boat-strikes-south-america.html",
      description:
        "U.S. military officials in the past two weeks have sunk six large fishing vessels accused of providing fuel to fast boats carrying drugs from South America.",
      categories: [
        {
          name: "Ecuador",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Noboa, Daniel",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Rubio, Marco",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "United States Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Drug Abuse and Traffic",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "South America",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/americas/us-boat-strikes-south-america.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 15:12:59 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/americas/us-boat-strikes-south-america.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Annie Correal and Eric Schmitt"],
        creator: "Annie Correal and Eric Schmitt",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-ecuador-boat-strikes-wfvb/09int-ecuador-boat-strikes-wfvb-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "An image released by the U.S. military shows what it says is a floating refueling station being boarded last week. The Trump administration has said that refueling vessels support drug trafficking operations.",
        },
        credits: [
          {
            value: "U.S. Southern Command, via Reuters",
          },
        ],
      },
    },
    {
      title: "Thousands Gather for Funeral of Norway’s King Harald",
      link: "https://www.nytimes.com/2026/09/09/world/europe/norway-king-harald-funeral.html",
      description:
        "Royal families and heads of state, including President Volodymyr Zelensky of Ukraine, attended the funeral of King Harald V in Oslo.",
      categories: [
        {
          name: "Royal Families",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Funerals and Memorials",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Palaces and Castles",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Frederiksen, Mette",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Haakon, Crown Prince of Norway",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Harald V, King of Norway",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Mette-Marit, Crown Princess of Norway",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Norway",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/norway-king-harald-funeral.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 19:28:37 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/norway-king-harald-funeral.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Lynsey Chutel"],
        creator: "Lynsey Chutel",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-norway-funeral-01-kgwt/09int-norway-funeral-01-kgwt-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1801,
            width: 1800,
          },
        ],
        description: {
          value:
            "The funeral procession for King Harald V in Oslo on Wednesday. The king was a popular figure, affectionately called the “Grandfather of Norway,”",
        },
        credits: [
          {
            value:
              "Hakon Mosvold Larsen/NTB., via Agence France-Presse — Getty Images",
          },
        ],
      },
    },
    {
      title: "Singapore’s Prime Minister Gets a Big Raise",
      link: "https://www.nytimes.com/2026/09/09/world/asia/singapore-minister-salary.html",
      description:
        "Singapore’s prime minister, Lawrence Wong, got the bump as part of a longstanding policy to pay high salaries to public servants in order to attract top talent and prevent corruption.",
      categories: [
        {
          name: "Wages and Salaries",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Corruption (Institutional)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Government Employees",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Singapore",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/asia/singapore-minister-salary.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 10:42:21 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/asia/singapore-minister-salary.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Max Kim"],
        creator: "Max Kim",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-singapore-salaries-zgtq/09int-singapore-salaries-zgtq-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Prime Minister Lawrence Wong of Singapore arriving for the ASEAN summit in the Philippines in May.",
        },
        credits: [
          {
            value: "Lisa Marie David/Reuters",
          },
        ],
      },
    },
    {
      title:
        "In England — Yes, England — Tea and Cantaloupe Grow as the Climate Warms",
      link: "https://www.nytimes.com/2026/09/09/world/europe/england-climate-tea-cantaloupe.html",
      description:
        "As British farmers confront intense heat waves tied to climate change, some are cultivating new crops rarely grown in their country.",
      categories: [
        {
          name: "England",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Agriculture and Farming",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Global Warming",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Tea",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Cantaloupes",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Cambridgeshire (England)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Great Britain",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Sussex (England)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "projects-temperaturecheck",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/england-climate-tea-cantaloupe.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 22:35:42 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/england-climate-tea-cantaloupe.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Stephen Castle"],
        creator: "Stephen Castle",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/07/multimedia/07int-uk-tea-01-fkpb/07int-uk-tea-01-fkpb-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value: "Farming tea on Mark Wyatt’s land in Sussex, England.",
        },
        credits: [
          {
            value: "Andrew Testa for The New York Times",
          },
        ],
      },
    },
    {
      title:
        "This Tiny Anti-Establishment Party May Put Germany’s Far Right in Power",
      link: "https://www.nytimes.com/2026/09/09/world/europe/afd-bsw-sahra-wagenknecht.html",
      description:
        "Germany’s far right won a state election but fell short of a majority. Its path to power depends on a small populist group that defies traditional labels.",
      categories: [
        {
          name: "Saxony-Anhalt (Germany)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Wagenknecht, Sahra (1969- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Siegmund, Ulrich (1990- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Left Party (Germany)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Alternative for Germany",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Sahra Wagenknecht Alliance (BSW)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Right-Wing Extremism and Alt-Right",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Germany",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "East Germany",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/afd-bsw-sahra-wagenknecht.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 09:06:37 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/afd-bsw-sahra-wagenknecht.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Christopher F. Schuetze"],
        creator: "Christopher F. Schuetze",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-germany-1-whvt/09int-germany-1-whvt-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Sahra Wagenknecht, founder of Germany’s Sahra Wagenknecht Alliance, campaigning in Saxony-Anhalt this month.",
        },
        credits: [
          {
            value: "Liesa Johannssen/Reuters",
          },
        ],
      },
    },
    {
      title: "Israel’s Election Campaign Is Heating Up. Here’s Who’s Running.",
      link: "https://www.nytimes.com/2026/09/09/world/middleeast/israels-election-campaign-is-heating-up-heres-whos-running.html",
      description:
        "The contest is shaping up to be a referendum on Prime Minister Benjamin Netanyahu. It is considered the most consequential in Israel’s history.",
      categories: [
        {
          name: "Abbas, Mansour",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Ben-Gvir, Itamar",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Bennett, Naftali",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Deri, Aryeh",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Eisenkot, Gadi",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Gantz, Benny",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Lapid, Yair",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Lieberman, Avigdor",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Netanyahu, Benjamin",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Smotrich, Bezalel (1980- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Legislatures and Parliaments",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Elections",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Israel-Gaza War (2023- )",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Israel",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Blue and White (Israeli Political Party)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Jewish Power Party (Otzma Yehudit)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Joint List (Israel)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Likud Party (Israel)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Raam Party (Israel)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Religious Zionism (Israeli Political Party)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Shas Party (Israel)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Yesh Atid",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Yisrael Beiteinu (Israeli Political Party)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/middleeast/israels-election-campaign-is-heating-up-heres-whos-running.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 09:06:14 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/middleeast/israels-election-campaign-is-heating-up-heres-whos-running.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Johnatan Reiss"],
        creator: "Johnatan Reiss",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09israel-election-explainer-01-lcbm/09israel-election-explainer-01-lcbm-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "A campaign event in Jerusalem last month for the Likud party, led by Prime Minister Benjamin Netanyahu.",
        },
        credits: [
          {
            value: "Ronen Zvulun/Reuters",
          },
        ],
      },
    },
    {
      title: "Ukraine’s Unexpected $27 Billion Budget Gap Rattles Europe",
      link: "https://www.nytimes.com/2026/09/09/world/europe/ukraine-war-cost.html",
      description:
        "An unexpected request from President Volodymyr Zelensky offered a stark reminder that the cost of the war will rise, challenging Europe.",
      categories: [
        {
          name: "Russian Invasion of Ukraine (2022)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Budgets and Budgeting",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Assets, Frozen",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Euroclear",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "European Union",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "European Commission",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Brussels (Belgium)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Belgium",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Kyiv (Ukraine)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Russia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/ukraine-war-cost.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 09:05:51 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/ukraine-war-cost.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Jeanna Smialek and Siobhán O’Grady"],
        creator: "Jeanna Smialek and Siobhán O’Grady",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-Ukraine-Funding-Gap-jkbt/09int-Ukraine-Funding-Gap-jkbt-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1801,
            width: 1800,
          },
        ],
        description: {
          value:
            "President Volodymyr Zelensky addressed military forces and European leaders during Ukraine’s Independence Day in Kyiv last month.",
        },
        credits: [
          {
            value: "Pool photo by Henry Nicholls",
          },
        ],
      },
    },
    {
      title: "Making Coffins in Ebola’s Epicenter",
      link: "https://www.nytimes.com/video/world/africa/100000011104028/making-coffins-in-ebolas-epicenter.html",
      description:
        "A coffin maker in the Democratic Republic of Congo has seen a significant increase in the number of coffins needed in Bunia since the latest Ebola outbreak began in May.",
      categories: [
        {
          name: "Ebola Virus",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Epidemics",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Bunia (Congo, Democratic Republic of)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Congo, Democratic Republic of (Congo-Kinshasa)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/video/world/africa/100000011104028/making-coffins-in-ebolas-epicenter.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 10:20:07 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/video/world/africa/100000011104028/making-coffins-in-ebolas-epicenter.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Matthew Mpoke Bigg, Arlette Bashizi and Sutton Raphael"],
        creator: "Matthew Mpoke Bigg, Arlette Bashizi and Sutton Raphael",
      },
    },
    {
      title: "Why This Small Dutch Town Is Teaching ‘Adolescence’ in School",
      link: "https://www.nytimes.com/2026/09/09/world/europe/netherlands-adolescence-manophere-education.html",
      description:
        "The Netflix series is seen as a way to kindle debate about gender roles and to confront online bullying.",
      categories: [
        {
          name: "Education (K-12)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Social Media",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Men and Boys",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Netherlands",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/netherlands-adolescence-manophere-education.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 09:00:12 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/netherlands-adolescence-manophere-education.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Koba Ryckewaert"],
        creator: "Koba Ryckewaert",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/01/multimedia/01netherlands-adolescence-01-kwcb/01netherlands-adolescence-01-kwcb-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Gijs Korenblik, center left, a teacher in Warnsveld, the Netherlands, showing a scene from the Netflix series “Adolescence” to one of his classes in May.",
        },
        credits: [
          {
            value: "Ilvy Njiokiktjien for The New York Times",
          },
        ],
      },
    },
    {
      title: "Europe Unites to Pressure Israel, Breaking With U.S.",
      link: "https://www.nytimes.com/2026/09/09/world/europe/britain-france-israel-settlements-trade.html",
      description:
        "Britain once followed in France’s slipstream when it came to pressuring Israel. Under new leadership, it is spearheading opposition to Israeli settlements, risking American anger.",
      categories: [
        {
          name: "East Jerusalem",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "West Bank",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Jerusalem (Israel)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Israel",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Burnham, Andrew M (1970- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Kurtzer, Daniel C",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Miliband, Edward S",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Labour Party (Great Britain)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Israel-Gaza War (2023- )",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Israeli Settlements",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Palestinians",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/britain-france-israel-settlements-trade.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 12:15:45 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/britain-france-israel-settlements-trade.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Mark Landler"],
        creator: "Mark Landler",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/10/multimedia/10int-europe-israel-assess-mfcp/10int-europe-israel-assess-mfcp-mediumSquareAt3X-v2.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Prime Minister Andy Burnham of Britain, right, meeting last week with President Emmanuel Macron of France. They have united to pile pressure on Israel.",
        },
        credits: [
          {
            value: "Ludovic Marin/Agence France-Presse — Getty Images",
          },
        ],
      },
    },
    {
      title:
        "Travelers Face More Flight Delays After Major Air Traffic Disruption at UK Airports",
      link: "https://www.nytimes.com/2026/09/09/world/europe/uk-air-traffic-control-flight-delays-london.html",
      description:
        "An air traffic control failure prompted 1,700 flight cancellations on Tuesday and more than 300 on Wednesday.",
      categories: [
        {
          name: "Airlines and Airplanes",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Air Traffic Control",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Heathrow Airport (London, England)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Gatwick Airport (London)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Great Britain",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "British Airways PLC",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Ryanair Holdings PLC",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "internal-eafs",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/uk-air-traffic-control-flight-delays-london.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 20:07:15 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/uk-air-traffic-control-flight-delays-london.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Isabella Kwai and John Yoon"],
        creator: "Isabella Kwai and John Yoon",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09xp-heathrow-gqhw/09xp-heathrow-gqhw-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1801,
            width: 1800,
          },
        ],
        description: {
          value:
            "People in line at the check-in desks at London’s Heathrow Airport on Tuesday.",
        },
        credits: [
          {
            value: "Henry Nicholls/Agence France-Presse — Getty Images",
          },
        ],
      },
    },
    {
      title:
        "Nepal’s Flood Relief Workers Feel the Pain of Trump’s Cuts to U.S.A.I.D.",
      link: "https://www.nytimes.com/2026/09/09/world/asia/nepal-floods-usaid-trump-relief.html",
      description:
        "The agency played an important role in responding to earlier disasters like the 2015 earthquake. But the U.S. and other countries have pulled back, Nepali officials and humanitarian groups say.",
      categories: [
        {
          name: "Nepal-Tibet Floods (August 2026)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "United States Agency for International Development",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Floods",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Disasters and Emergencies",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Foreign Aid",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Humanitarian Aid",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Food Aid",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "United States Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Catholic Relief Services",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Earthquakes",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Global Warming",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Nepal",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "United States",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/asia/nepal-floods-usaid-trump-relief.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 18:44:13 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/asia/nepal-floods-usaid-trump-relief.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Anupreeta Das, Sajal Pradhan and Binod Ghimire"],
        creator: "Anupreeta Das, Sajal Pradhan and Binod Ghimire",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-nepal-aid-01-mcfq/08int-nepal-aid-01-mcfq-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Houses buried in mud and debris in the Nuwakot district of Nepal on Aug. 28, two days after a glacial collapse caused devastating floods.",
        },
        credits: [
          {
            value: "Atul Loke for The New York Times",
          },
        ],
      },
    },
    {
      title: "The Theme Park at the Heart of France’s Culture War",
      link: "https://www.nytimes.com/2026/09/09/world/europe/theme-park-france-right-culture-war.html",
      description:
        "The Puy du Fou is one of France’s most visited theme parks. Its founder says it gives the French a “founding narrative,” but critics say it peddles “far-right propaganda.”",
      categories: [
        {
          name: "France",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Amusement and Theme Parks",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Puy du Fou",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Right-Wing Extremism and Alt-Right",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "National Rally (France)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "de Villiers, Philippe",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "de Villiers, Nicolas",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Ruffin, Francois (1975- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Bollore, Vincent",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Le Pen, Marine",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Disneyland Paris",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "vis-photo",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/europe/theme-park-france-right-culture-war.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 15:00:15 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/europe/theme-park-france-right-culture-war.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Catherine Porter, Giulia Imbert and William Daniels"],
        creator: "Catherine Porter, Giulia Imbert and William Daniels",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/01/multimedia/00Int-France-themepark-dispatch-promo-agnaio/00Int-France-themepark-dispatch-fgkc-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        credits: [
          {
            value: "William Daniels for The New York Times",
          },
        ],
      },
    },
    {
      title:
        "Iran Signals Readiness to Escalate War With U.S. Amid Rising Economic Pressure",
      link: "https://www.nytimes.com/2026/09/09/world/middleeast/iran-war-us-aggression-hormuz.html",
      description:
        "The Iranian government is taking an increasingly aggressive approach as it confronts a growing economic threat and worries that its grip on the Strait of Hormuz is slipping, analysts say.",
      categories: [
        {
          name: "US and Israeli Attack on Iran (2026)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Iran",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Economic Conditions and Trends",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Strait of Hormuz",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Persian Gulf",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Ships and Shipping",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Oil (Petroleum) and Gasoline",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "United States International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "United States Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/09/world/middleeast/iran-war-us-aggression-hormuz.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 12:04:46 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/09/world/middleeast/iran-war-us-aggression-hormuz.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Erika Solomon"],
        creator: "Erika Solomon",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-iran-assess-wmjt/08int-iran-assess-wmjt-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Iranians are feeling the strain of the war, which has made a longstanding economic crisis worse.",
        },
        credits: [
          {
            value: "Arash Khamooshi/Polaris for The New York Times",
          },
        ],
      },
    },
    {
      title:
        "Tung Chee-hwa, Who Led Hong Kong After Its Return to China, Dies at 89",
      link: "https://www.nytimes.com/2026/09/08/world/asia/tung-chee-hwa-dead.html",
      description:
        "As the first leader of the former British colony after its handover, he balanced the demands of Beijing and Hong Kongers, making it clear that Beijing was now in charge.",
      categories: [
        {
          name: "Tung Chee-hwa",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Deaths (Obituaries)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "SARS (Severe Acute Respiratory Syndrome)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Ships and Shipping",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Hong Kong",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "China",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Jiang Zemin",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/asia/tung-chee-hwa-dead.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 02:44:07 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/asia/tung-chee-hwa-dead.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Austin Ramzy and Keith Bradsher"],
        creator: "Austin Ramzy and Keith Bradsher",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2022/08/31/world/00tung-obit-top/00tung-obit-top-mediumSquareAt3X-v3.jpg",
            medium: "image",
            height: 1453,
            width: 1453,
          },
        ],
        description: {
          value:
            "Tung Chee-hwa on July 1, 1997, the day he became Hong Kong’s first leader after it was returned to Chinese control.",
        },
        credits: [
          {
            value: "Mike Fiala/Hulton Archive, via Getty Images",
          },
        ],
      },
    },
    {
      title:
        "U.S. Hits 5 Iranian Oil Tankers, Citing Attempted Strikes on Warship",
      link: "https://www.nytimes.com/2026/09/08/world/middleeast/us-strikes-iran-tankers.html",
      description:
        "Iran retaliated by launching missiles at Jordan, raising the specter of still more fighting.",
      categories: [
        {
          name: "US and Israeli Attack on Iran (2026)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Strait of Hormuz",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Ships and Shipping",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Oil (Petroleum) and Gasoline",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Iran",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Kharg Island (Iran)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/middleeast/us-strikes-iran-tankers.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 00:50:19 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/middleeast/us-strikes-iran-tankers.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Helene Cooper and Pranav Baskar"],
        creator: "Helene Cooper and Pranav Baskar",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08iran-1-lptm/08iran-1-lptm-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "A satellite image released by the European Space Agency showing Kharg Island, a key oil export terminal for Iran.",
        },
        credits: [
          {
            value: "European Space Agency",
          },
        ],
      },
    },
    {
      title:
        "Canada’s Carney Doubles Down on Pivot Away from the United States",
      link: "https://www.nytimes.com/2026/09/08/world/canada/carney-trump-canada-us-trade-war.html",
      description:
        "With tariffs on U.S. goods in effect and high-profile international engagements coming up, the Canadian leader keeps moving toward his goal.",
      categories: [
        {
          name: "Canada",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Carney, Mark J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Foreign Investments",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Europe",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "European Union",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "International Trade and World Market",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Customs (Tariff)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "United States",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "United States International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/canada/carney-trump-canada-us-trade-war.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 23:22:20 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/canada/carney-trump-canada-us-trade-war.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Matina Stevis-Gridneff"],
        creator: "Matina Stevis-Gridneff",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-canada-trade-assess-hlwp/08int-canada-trade-assess-hlwp-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Prime Minister Mark Carney, a former investment banker and central bank governor, is working to draw global investors to Canada.",
        },
        credits: [
          {
            value: "Justin Tang/The Canadian Press, via Associated Press",
          },
        ],
      },
    },
    {
      title:
        "Before Oct. 7 Attack, Netanyahu Was Warned, Report Says. He Denies It.",
      link: "https://www.nytimes.com/2026/09/08/world/middleeast/israel-netanyahu-2023-hamas-attack.html",
      description:
        "Prime Minister Benjamin Netanyahu said he would sue the newspaper Haaretz after it reported that the Emirati president had warned him Hamas was planning a major operation against Israel.",
      categories: [
        {
          name: "Israel",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Netanyahu, Benjamin",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Haaretz",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Hamas",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Israel-Gaza War (2023- )",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Eisenkot, Gadi",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Gaza Strip",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Elections",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Nahyan, Mohamed bin Zayed al- (1961- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "United Arab Emirates",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/middleeast/israel-netanyahu-2023-hamas-attack.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 08:57:03 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/middleeast/israel-netanyahu-2023-hamas-attack.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Ephrat Livni and Isabel Kershner"],
        creator: "Ephrat Livni and Isabel Kershner",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-israel-1-ptfk/08int-israel-1-ptfk-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Prime Minister Benjamin Netanyahu of Israel at a news conference in Jerusalem on Tuesday.",
        },
        credits: [
          {
            value: "Ammar Awad/Reuters",
          },
        ],
      },
    },
    {
      title: "Impunity in the West Bank",
      link: "https://www.nytimes.com/2026/09/08/world/israel-west-bank-canada-us-trade.html",
      description:
        "Former Israeli military officers warn that settler violence in the West Bank is destroying Israel’s democratic values from within.",
      categories: [
        {
          name: "War and Armed Conflicts",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Israeli Settlements",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Palestinians",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Trade and World Market",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Israel",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Canada",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "West Bank",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Netanyahu, Benjamin",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Customs (Tariff)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "internal-open-access-from-nl",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/israel-west-bank-canada-us-trade.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 04:16:47 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/israel-west-bank-canada-us-trade.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Katrin Bennhold"],
        creator: "Katrin Bennhold",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/09/multimedia/09int-theworld-west-bank-01-ghml-promo/09int-theworld-west-bank-01-ghml-promo-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1801,
            width: 1800,
          },
        ],
        description: {
          value: "A Palestinian and a settler in a West Bank village in July.",
        },
        credits: [
          {
            value: "Ivor Prickett for The New York Times",
          },
        ],
      },
    },
    {
      title: "Carney Says Retaliation Against U.S. Tariffs Was Unavoidable",
      link: "https://www.nytimes.com/2026/09/08/world/canada/carney-tariffs-trade.html",
      description:
        "In a video address, the prime minister said the United States was seeking “dependency, not a true economic partnership” from Canada.",
      categories: [
        {
          name: "Canada",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Carney, Mark J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Customs (Tariff)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Trade and World Market",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Bombardier Inc",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "McKinley, William",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "United States",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "United States International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/canada/carney-tariffs-trade.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 02:33:37 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/canada/carney-tariffs-trade.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Ian Austen"],
        creator: "Ian Austen",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-canada-carney-lhvp/08int-canada-carney-lhvp-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1799,
            width: 1800,
          },
        ],
        description: {
          value:
            "Prime Minister Mark Carney said on Tuesday that American trade negotiators were seeking Canadian dependency, not partnership.",
        },
        credits: [
          {
            value: "Justin Tang/The Canadian Press, via Associated Press",
          },
        ],
      },
    },
    {
      title: "Hungary Expels 10 Russian Diplomats, Signaling a Shift",
      link: "https://www.nytimes.com/2026/09/08/world/europe/hungary-russia-diplomats-expulsion.html",
      description:
        "The housecleaning puts the new government more in line with how European allies relate to Moscow, tempering cozy ties developed under Viktor Orban’s administration.",
      categories: [
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Russian Invasion of Ukraine (2022)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Diplomatic Service, Embassies and Consulates",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Espionage and Intelligence Services",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "European Union",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Magyar, Peter",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Orban, Viktor",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Hungary",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Europe",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Fidesz Party",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Tisza (Hungarian Political Party)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/europe/hungary-russia-diplomats-expulsion.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 02:35:16 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/europe/hungary-russia-diplomats-expulsion.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Andrew Higgins"],
        creator: "Andrew Higgins",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08INT-HUNGARY-RUSSIA-tgwp/08INT-HUNGARY-RUSSIA-tgwp-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1801,
            width: 1800,
          },
        ],
        description: {
          value:
            "Hungary’s foreign minister, Anita Orban, in May. She accused the expelled Russians of having acted in ways unacceptable under a convention that bars diplomatic interference.",
        },
        credits: [
          {
            value: "Virginia Mayo/Associated Press",
          },
        ],
      },
    },
    {
      title: "Iceland Summons U.S. Ambassador Over Provocative Trump Map",
      link: "https://www.nytimes.com/2026/09/08/world/europe/iceland-summon-ambassador-trump-map-greenland.html",
      description:
        "After voting against talks to join the European Union, Iceland is reacting forcefully to a slight against its sovereignty.",
      categories: [
        {
          name: "United States International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Territorial Disputes",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "North Atlantic Treaty Organization",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "European Union",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Iceland",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Greenland",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Arctic Regions",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/europe/iceland-summon-ambassador-trump-map-greenland.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 18:14:53 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/europe/iceland-summon-ambassador-trump-map-greenland.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Amelia Nierenberg"],
        creator: "Amelia Nierenberg",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-iceland-map-gbzf/08int-iceland-map-gbzf-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Prime Minister Kristrun Frostadottir of Iceland, in Reykjavik, the Icelandic capital, in August. She has been a forceful critic of President Trump.",
        },
        credits: [
          {
            value: "Agence France-Presse — Getty Images",
          },
        ],
      },
    },
    {
      title:
        "Bombardier Shares Down as Trump’s Trade War Targets Canadian Jet Maker",
      link: "https://www.nytimes.com/2026/09/08/business/bombardier-trump-canada-us-sales-planes.html",
      description:
        "The Montreal-based company’s share price dropped after President Trump threatened to bar it from selling in the United States.",
      categories: [
        {
          name: "Airlines and Airplanes",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Trade and World Market",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Protectionism (Trade)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Bombardier Inc",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "United States",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Canada",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "internal-eafs",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/business/bombardier-trump-canada-us-sales-planes.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 16:28:58 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/business/bombardier-trump-canada-us-sales-planes.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["John Yoon"],
        creator: "John Yoon",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08xp-bombardier1-qcwh/08xp-bombardier1-qcwh-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1801,
            width: 1800,
          },
        ],
        description: {
          value:
            "Planes in production on the factory floor at a Bombardier plant in Mississauga, Ontario, in 2024.",
        },
        credits: [
          {
            value: "Carlos Osorio/Reuters",
          },
        ],
      },
    },
    {
      title:
        "Eiffel Tower Workers Strike, Saying Women Were Excluded From Hindu Group’s Visit",
      link: "https://www.nytimes.com/2026/09/08/world/europe/paris-eiffel-tower-closed-strike-hindu-temple.html",
      description:
        "The tower was closed on Monday, after the workers’ union said female staff members had been asked to leave their stations for a visit from a group known as BAPS.",
      categories: [
        {
          name: "Women and Girls",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Discrimination",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Strikes",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Eiffel Tower (Paris)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Bochasanwasi Akshar Purushottam Swaminarayan Sanstha (BAPS)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Hinduism",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Confederation Generale du Travail (France)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Societe d'Exploitation de la Tour Eiffel",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "internal-eafs",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/europe/paris-eiffel-tower-closed-strike-hindu-temple.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 18:11:52 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/europe/paris-eiffel-tower-closed-strike-hindu-temple.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Francesca Regalado"],
        creator: "Francesca Regalado",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08xp-tower-flgm/08xp-tower-flgm-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1703,
            width: 1703,
          },
        ],
        description: {
          value:
            "A delegation from the Bochasanwasi Akshar Purushottam Swaminarayan Sanstha group, known as BAPS, visited the Eiffel Tower on Saturday.",
        },
        credits: [
          {
            value: "Yara Nardi/Reuters",
          },
        ],
      },
    },
    {
      title:
        "Israeli Allies Ban Trade With Settlements as U.K. Cites ‘Ethnic Cleansing’",
      link: "https://www.nytimes.com/2026/09/08/world/europe/uk-sanctions-israel-west-bank-settlements.html",
      description:
        "Britain, Canada and France on Tuesday announced sanctions on Israeli settlements in the West Bank, with Britain saying Israel had “turned a blind eye” to violence against Palestinians.",
      categories: [
        {
          name: "Israel",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Israeli Settlements",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "West Bank",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Palestinians",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Embargoes and Sanctions",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Great Britain",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Canada",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "France",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Miliband, Edward S",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Europe",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Gaza Strip",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Israel-Gaza War (2023- )",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "War Crimes, Genocide and Crimes Against Humanity",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/europe/uk-sanctions-israel-west-bank-settlements.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 21:49:47 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/europe/uk-sanctions-israel-west-bank-settlements.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: [
          "Stephen Castle, Adam Rasgon, Aaron Boxerman and Isabel Kershner",
        ],
        creator:
          "Stephen Castle, Adam Rasgon, Aaron Boxerman and Isabel Kershner",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-UK-ISRAEL-SETTLEMENTS-hqtv/08int-UK-ISRAEL-SETTLEMENTS-hqtv-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Palestinian villagers harvesting olives in the village of Turmus Aya, with Israeli settlements in the background, northeast of Ramallah in the occupied West Bank in 2025.",
        },
        credits: [
          {
            value: "Daniel Berehulak/The New York Times",
          },
        ],
      },
    },
    {
      title: "AfD’s Far Right Win Puts New Pressure on Germany’s Leader Merz",
      link: "https://www.nytimes.com/2026/09/08/world/europe/germany-merz-pressure-afd.html",
      description:
        "Antipathy to Chancellor Friedrich Merz was a reason the far right surged in a state election. Though he does not face a national election until 2029, his leadership is under increasing scrutiny.",
      categories: [
        {
          name: "Germany",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Merz, Friedrich",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Saxony-Anhalt (Germany)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Alternative for Germany",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Right-Wing Extremism and Alt-Right",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Christian Democratic Union (Germany)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/europe/germany-merz-pressure-afd.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 14:46:39 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/europe/germany-merz-pressure-afd.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Jim Tankersley"],
        creator: "Jim Tankersley",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-Germany-Merz-wjlb/08int-Germany-Merz-wjlb-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1798,
            width: 1800,
          },
        ],
        description: {
          value:
            "Friedrich Merz, Germany’s chancellor and the Christian Democratic Union party leader, at a press briefing in Berlin on Monday.",
        },
        credits: [
          {
            value: "Nadja Wohlleben/Reuters",
          },
        ],
      },
    },
    {
      title:
        "Australian Social Media Users Could Get Power to Switch Off Algorithms",
      link: "https://www.nytimes.com/2026/09/08/world/australia/social-media-law-algorithms-digital-duty-care.html",
      description:
        "Technology companies have been “running real-time, unregulated product testing on Australians” for too long, communications minister says.",
      categories: [
        {
          name: "Computers and the Internet",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Social Media",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Regulation and Deregulation of Industry",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Law and Legislation",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Children and Childhood",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Albanese, Anthony (1963- )",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Australia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/australia/social-media-law-algorithms-digital-duty-care.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 18:29:10 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/australia/social-media-law-algorithms-digital-duty-care.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Laura Chung"],
        creator: "Laura Chung",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-oz-algorithm-pfth/08int-oz-algorithm-pfth-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Australian Prime Minister Anthony Albanese and Australian Communications Minister Anika Wells last year.",
        },
        credits: [
          {
            value: "Lukas Coch/Australian Associated Press, via Reuters",
          },
        ],
      },
    },
    {
      title: "Russia Bombards Kyiv Soon After Witkoff, Kushner Leave",
      link: "https://www.nytimes.com/2026/09/08/world/europe/russia-ukraine-kyiv-attacks.html",
      description:
        "Russia agreed not to bomb Ukraine’s capital during Steve Witkoff and Jared Kushner’s visit there. The respite was short-lived.",
      categories: [
        {
          name: "Russian Invasion of Ukraine (2022)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Ukraine",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Russia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Putin, Vladimir V",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Zelensky, Volodymyr",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Witkoff, Steven",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Kushner, Jared",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Trump, Donald J",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/europe/russia-ukraine-kyiv-attacks.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 17:24:39 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/europe/russia-ukraine-kyiv-attacks.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Siobhán O’Grady"],
        creator: "Siobhán O’Grady",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-ukraine-strikes-lgvf/08int-ukraine-strikes-lgvf-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Firefighters at the site of a Russian missile attack, in Kyiv, Ukraine, on Tuesday. By early Tuesday morning, waves of Russian ballistic and cruise missiles were once again headed toward Kyiv.",
        },
        credits: [
          {
            value: "Francisco Seco/Associated Press",
          },
        ],
      },
    },
    {
      title:
        "Rubio Meets Colombia’s Leader, Cites Progress on Security and Tariffs",
      link: "https://www.nytimes.com/2026/09/08/world/americas/rubio-colombia-cocaine.html",
      description:
        "Secretary of State Marco Rubio said he would talk with leaders in Colombia, Ecuador and Peru this week about drug-traffickers and trade deals.",
      categories: [
        {
          name: "Rubio, Marco",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Colombia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "De La Espriella, Abelardo",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_per",
        },
        {
          name: "Drug Abuse and Traffic",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Cocaine and Crack Cocaine",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Ecuador",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Peru",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/americas/rubio-colombia-cocaine.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 01:34:37 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/americas/rubio-colombia-cocaine.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Annie Correal and Genevieve Glatsky"],
        creator: "Annie Correal and Genevieve Glatsky",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08int-rubio-colombia-preview-gmqv/08int-rubio-colombia-preview-gmqv-mediumSquareAt3X-v2.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Secretary of State Marco Rubio speaking at a cabinet meeting last week.",
        },
        credits: [
          {
            value: "Pete Marovich for The New York Times",
          },
        ],
      },
    },
    {
      title:
        "Seaweed Is Their Way of Life. A Company’s Sweeping Plan Threatens It.",
      link: "https://www.nytimes.com/2026/09/08/world/europe/ireland-seaweed-harvesting.html",
      description:
        "As global demand for seaweed surges, a Canadian corporation’s bid for exclusive harvesting rights in the west of Ireland has upended a once-sleepy industry.",
      categories: [
        {
          name: "Seaweed",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Agriculture and Farming",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Regulation and Deregulation of Industry",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Land Use Policies",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Conservation of Resources",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Connemara (Ireland)",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Ireland",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Canada",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Acadian Seaplants Ltd",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "internal-eafs",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/europe/ireland-seaweed-harvesting.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 09:00:36 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/europe/ireland-seaweed-harvesting.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Ali Watkins and Paulo Nunes dos Santos"],
        creator: "Ali Watkins and Paulo Nunes dos Santos",
      },
    },
    {
      title:
        "Chinese Ship Takes Arctic Shortcut: Smart Business? Or a Political Flex?",
      link: "https://www.nytimes.com/2026/09/08/world/europe/china-arctic-shipping-trade-route.html",
      description:
        "Melting ice is opening a trade route through the Arctic. China has begun the first regular service, part of its polar ambitions.",
      categories: [
        {
          name: "China",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Arctic Ocean",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Ships and Shipping",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Freight (Cargo)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Trade and World Market",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Politics and Government",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Global Warming",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Russia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/europe/china-arctic-shipping-trade-route.html",
        isPermaLink: true,
      },
      pubDate: "Wed, 09 Sep 2026 13:54:01 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/europe/china-arctic-shipping-trade-route.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Jeffrey Gettleman, Jenny Gross and Lily Kuo"],
        creator: "Jeffrey Gettleman, Jenny Gross and Lily Kuo",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/2026-08-24-dubai-tower-index/2026-08-24-dubai-tower-index-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1000,
            width: 1000,
          },
        ],
        credits: [
          {
            value: "Pablo Robles/The New York Times",
          },
        ],
      },
    },
    {
      title: "Saudi Arabia and Yemen’s Houthis Edge Back to the Brink of War",
      link: "https://www.nytimes.com/2026/09/08/world/middleeast/saudi-arabia-yemen-houthis-energy-attack.html",
      description:
        "The Saudi authorities said dozens were injured in attacks by the Iran-backed militia and vowed to retaliate.",
      categories: [
        {
          name: "War and Armed Conflicts",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "US and Israeli Attack on Iran (2026)",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "International Relations",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Ships and Shipping",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Defense and Military Forces",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Civilian Casualties",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
        {
          name: "Houthis",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_org",
        },
        {
          name: "Middle East",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Red Sea",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Saudi Arabia",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "Yemen",
          domain: "http://www.nytimes.com/namespaces/keywords/nyt_geo",
        },
        {
          name: "internal-eafs",
          domain: "http://www.nytimes.com/namespaces/keywords/des",
        },
      ],
      guid: {
        value:
          "https://www.nytimes.com/2026/09/08/world/middleeast/saudi-arabia-yemen-houthis-energy-attack.html",
        isPermaLink: true,
      },
      pubDate: "Tue, 08 Sep 2026 16:35:08 +0000",
      atom: {
        links: [
          {
            href: "https://www.nytimes.com/2026/09/08/world/middleeast/saudi-arabia-yemen-houthis-energy-attack.html",
            rel: "standout",
          },
        ],
      },
      dc: {
        creators: ["Qasim Nauman and Vivian Nereim"],
        creator: "Qasim Nauman and Vivian Nereim",
      },
      media: {
        contents: [
          {
            url: "https://static01.nyt.com/images/2026/09/08/multimedia/08xp-saudi-tbwm/08xp-saudi-tbwm-mediumSquareAt3X.jpg",
            medium: "image",
            height: 1800,
            width: 1800,
          },
        ],
        description: {
          value:
            "Members of the Houthi security force standing guard in Sanaa, Yemen, in July.",
        },
        credits: [
          {
            value: "Khaled Abdullah/Reuters",
          },
        ],
      },
    },
  ],
  atom: {
    links: [
      {
        href: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
        rel: "self",
        type: "application/rss+xml",
      },
    ],
  },
};
