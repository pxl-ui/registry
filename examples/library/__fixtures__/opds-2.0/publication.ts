import type { OPDS } from "@/lib/schemas/pxl/opds";

const publication: OPDS.Publication = {
  metadata: {
    "@type": "http://schema.org/Book",
    title: "Disloyal: A Memoir",
    subtitle:
      "The True Story of the Former Personal Attorney to President Donald J. Trump",
    abridged: "false",
    accessibility: {
      feature: ["tableOfContents"],
    },
    language: "en",
    modified: "2026-10-04T15:20:58+02:00",
    published: "2020-09-08T00:00:00+02:00",
    numberOfPages: 432,
    identifier: "urn:ISBN:9781510764705",
    "schema:encodingFormat": "application/epub+zip",
    presentation: {
      layout: "reflowable",
    },
    "schema:workExample": [
      {
        "@type": "http://schema.org/Book",
        "schema:bookFormat": "http://schema.org/Hardcover",
        "schema:isbn": "urn:ISBN:9781510764699",
      },
    ],
    author: [
      {
        name: "Michaël Cohen",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/browse/recent.json?author_ids=39380&languages=en",
          },
        ],
      },
    ],
    publisher: {
      name: "Skyhorse",
      links: [
        {
          type: "application/opds+json",
          href: "https://catalog.feedbooks.com/browse/recent.json?imprint_ids=6093&languages=en",
        },
      ],
    },
    description:
      '<B>A #1 <I>New York Times</I> Bestseller!<BR><BR> "I read it cover-to-cover. I did not intend to, but I started at the beginning and didn&rsquo;t put it down until it was over."&mdash;Rachel Maddow, MSNBC</B><BR><BR><I>This book almost didn&rsquo;t see the light of day as government officials tried to bar its publication.</I><BR><B>The Inside Story of the Real President Trump, by His Former Attorney and Personal Advisor&mdash;The Man Who Helped Get Him Into the Oval Office</B><BR><BR> Once Donald Trump&rsquo;s fiercest surrogate, closest confidant, and staunchest defender, Michael Cohen knows where the skeletons are buried.<BR><BR>This is the most devastating business and political horror story of the century. As Trump&rsquo;s lawyer and &ldquo;fixer,&rdquo; Cohen not only witnessed firsthand but was also an active participant in the inner workings of Trump&rsquo;s business empire, political campaign, and presidential administration.<BR><BR>This is a story that you have not read in newspapers, or on social media, or watched on television. These are accounts that only someone who worked for Trump around the clock for over a decade&mdash;not a few months or even a couple of years&mdash;could know. Cohen describes Trump&rsquo;s racist rants against President Barack Obama, Nelson Mandela, and Black and Hispanic people in general, as well as the cruelty, humiliation, and abuse he leveled at family and staff. Whether he&rsquo;s exposing the fact that Trump engaged in tax fraud by inflating his wealth or electronic fraud by rigging an online survey, or outing Trump&rsquo;s Neanderthal views towards women or his hush-money payments to clandestine lovers, Cohen pulls no punches.<BR><BR>He shows Trump&rsquo;s relentless willingness to lie, exaggerate, mislead, or manipulate. Trump emerges as a man without a soul&mdash;a man who courts evangelicals and then trashes them, panders to the common man, but then rips off small business owners, a con man who will do or say absolutely anything to win, regardless of the cost to his family, his associates, or his country.<BR><BR>At the heart of <I>Disloyal</I>, we see how Cohen came under the spell of his charismatic "Boss" and, as a result, lost all sense of his moral compass.<BR><BR>The real "real" Donald Trump who permeates these pages&mdash;the racist, sexist, homophobic, lying, cheating President&mdash;will be discussed, written about, and analyzed for years to come.',
    subject: [
      {
        code: "FBNFC000000",
        name: "Nonfiction",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBNFC000000.json?languages=en",
          },
        ],
      },
      {
        code: "FBLAW000000",
        name: "Law",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBLAW000000.json?languages=en",
          },
        ],
      },
      {
        code: "FBLAW116000",
        name: "Privacy",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBLAW116000.json?languages=en",
          },
        ],
      },
      {
        code: "FBLAW111000N",
        name: "Business law",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBLAW111000N.json?languages=en",
          },
        ],
      },
      {
        code: "FBLAW009000",
        name: "Business & financial",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBLAW009000.json?languages=en",
          },
        ],
      },
      {
        code: "FBSOC000000",
        name: "Social science",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBSOC000000.json?languages=en",
          },
        ],
      },
      {
        code: "FBPOL000000",
        name: "Political science",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBPOL000000.json?languages=en",
          },
        ],
      },
      {
        code: "FBPOL039000",
        name: "Censorship",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBPOL039000.json?languages=en",
          },
        ],
      },
      {
        code: "FBLAW075000",
        name: "Public",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBLAW075000.json?languages=en",
          },
        ],
      },
      {
        code: "FBLAW018000",
        name: "Constitutional",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBLAW018000.json?languages=en",
          },
        ],
      },
      {
        code: "FBBIO000000",
        name: "Biography & autobiography",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBBIO000000.json?languages=en",
          },
        ],
      },
      {
        code: "FBBIO024000",
        name: "Criminals & outlaws",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBBIO024000.json?languages=en",
          },
        ],
      },
      {
        code: "FBPOL007000",
        name: "Democracy",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBPOL007000.json?languages=en",
          },
        ],
      },
      {
        code: "FBPOL008000",
        name: "Elections",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBPOL008000.json?languages=en",
          },
        ],
      },
      {
        code: "FBPOL040000",
        name: "Government",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBPOL040000.json?languages=en",
          },
        ],
      },
      {
        code: "FBPOL040010",
        name: "Executive branch",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBPOL040010.json?languages=en",
          },
        ],
      },
      {
        code: "FBBIO020000",
        name: "Lawyers & judges",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBBIO020000.json?languages=en",
          },
        ],
      },
      {
        code: "FBBIO026000",
        name: "Personal memoirs",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBBIO026000.json?languages=en",
          },
        ],
      },
      {
        code: "FBBIO010000",
        name: "Political",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBBIO010000.json?languages=en",
          },
        ],
      },
      {
        code: "FBPOL016000",
        name: "Political process",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBPOL016000.json?languages=en",
          },
        ],
      },
      {
        code: "FBBIO011000",
        name: "Presidents & heads of State",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBBIO011000.json?languages=en",
          },
        ],
      },
      {
        code: "FBSACT000000",
        name: "News and investigations",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBSACT000000.json?languages=en",
          },
        ],
      },
      {
        code: "FBTRU000000",
        name: "True crime",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBTRU000000.json?languages=en",
          },
        ],
      },
      {
        code: "FBHIS000000",
        name: "History",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBHIS000000.json?languages=en",
          },
        ],
      },
      {
        code: "FBHIS000000N",
        name: "History by country",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBHIS000000N.json?languages=en",
          },
        ],
      },
      {
        code: "FBHIS036000",
        name: "United States",
        scheme: "http://www.feedbooks.com/categories",
        links: [
          {
            type: "application/opds+json",
            href: "https://catalog.feedbooks.com/category/FBHIS036000.json?languages=en",
          },
        ],
      },
    ],
  },
  images: [
    {
      href: "https://covers.feedbooks.net/item/3529084.jpg?size=large&t=1601311717",
      type: "image/jpeg",
      width: 260,
      height: 420,
    },
    {
      href: "https://covers.feedbooks.net/item/3529084.jpg?t=1601311717",
      type: "image/jpeg",
      width: 100,
      height: 180,
    },
  ],
  links: [
    {
      rel: "http://opds-spec.org/acquisition/sample",
      href: "https://catalog.feedbooks.com/item/3529084/preview",
      type: "application/epub+zip",
    },
    {
      rel: "http://opds-spec.org/acquisition/sample",
      href: "https://catalog.feedbooks.com/item/3529084/preview.html",
      type: "text/html",
    },
    {
      rel: "self",
      href: "https://catalog.feedbooks.com/item/3529084.json",
      type: "application/opds-publication+json",
      properties: {
        authenticate: {
          href: "https://catalog.feedbooks.com/user/authentication",
          type: "application/opds-authentication+json",
        },
      },
    },
  ],
};

export { publication };
