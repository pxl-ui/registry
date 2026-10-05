import type { OPDS } from "@/lib/schemas/pxl/opds";

export const mobyDick: OPDS.v1_2.Catalog = {
  authors: [
    {
      name: "Project Gutenberg",
      uri: "https://www.gutenberg.org",
      email: "webmaster@gutenberg.org",
    },
  ],
  icon: "https://www.gutenberg.org/gutenberg/favicon.ico",
  id: "http://www.gutenberg.org/ebooks/2701.opds",
  links: [
    {
      href: "https://www.gutenberg.org/catalog/osd-books.xml",
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "Project Gutenberg Catalog Search",
    },
    {
      href: "/ebooks/2701.opds",
      rel: "self",
      type: "application/atom+xml;profile=opds-catalog",
      title: "This Page",
    },
    {
      href: "/ebooks/2701",
      rel: "alternate",
      type: "text/html",
      title: "HTML Page",
    },
    {
      href: "/ebooks.opds/",
      rel: "start",
      type: "application/atom+xml;profile=opds-catalog",
      title: "Start Page",
    },
  ],
  subtitle: {
    value: "Free eBooks since 1971.",
  },
  title: {
    value: "Moby Dick; Or, The Whale by Herman Melville",
  },
  updated: "2026-10-04T19:31:51Z",
  entries: [
    {
      authors: [
        {
          name: "Melville, Herman",
        },
      ],
      categories: [
        {
          term: "Whaling -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Sea stories",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Psychological fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Ship captains -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Adventure stories",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Mentally ill -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Ahab, Captain (Fictitious character) -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Whales -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Whaling ships -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "PS",
          scheme: "http://purl.org/dc/terms/LCC",
          label: "Language and Literatures: American and Canadian literature",
        },
        {
          term: "Text",
          scheme: "http://purl.org/dc/terms/DCMIType",
        },
      ],
      content: {
        value:
          "<p>\"Moby Dick; Or, The Whale\" by Herman Melville is an epic novel published in 1851. Sailor Ishmael narrates the obsessive quest of Captain Ahab, who commands the whaling ship Pequod in pursuit of Moby Dick, a giant white sperm whale that destroyed his leg. Ahab's monomaniacal hunt for vengeance drives the ship and its diverse crew across the world's oceans, blending realistic whaling details with profound explorations of good, evil, fate, and human nature in this cornerstone of American literature. </p>",
        type: "xhtml",
      },
      id: "urn:gutenberg:2701:2",
      links: [
        {
          href: "https://www.gutenberg.org/ebooks/2701.epub.noimages",
          rel: "http://opds-spec.org/acquisition",
          type: "application/epub+zip",
          title: "EPUB (older e-readers, no images)",
          length: 728811,
        },
        {
          href: "https://www.gutenberg.org/ebooks/2701.kindle.noimages",
          rel: "http://opds-spec.org/acquisition",
          type: "application/x-mobipocket-ebook",
          title: "Kindle (no images)",
          length: 935512,
        },
        {
          href: "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
          rel: "http://opds-spec.org/image",
          type: "image/jpeg",
        },
        {
          href: "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.small.jpg",
          rel: "http://opds-spec.org/image/thumbnail",
          type: "image/jpeg",
        },
        {
          href: "/ebooks/author/9.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "By Melville, Herman…",
        },
        {
          href: "/ebooks/subject/11.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Whaling -- Fiction…",
        },
        {
          href: "/ebooks/subject/115.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Sea stories…",
        },
        {
          href: "/ebooks/subject/2430.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Psychological fiction…",
        },
        {
          href: "/ebooks/subject/2486.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Ship captains -- Fiction…",
        },
        {
          href: "/ebooks/subject/2849.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Adventure stories…",
        },
        {
          href: "/ebooks/subject/3315.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Mentally ill -- Fiction…",
        },
        {
          href: "/ebooks/subject/8143.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Ahab, Captain (Fictitious character) -- Fiction…",
        },
        {
          href: "/ebooks/subject/8144.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Whales -- Fiction…",
        },
        {
          href: "/ebooks/subject/18044.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Whaling ships -- Fiction…",
        },
        {
          href: "/ebooks/bookshelf/13.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Best Books Ever Listings…",
        },
        {
          href: "/ebooks/bookshelf/644.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Category: Adventure…",
        },
        {
          href: "/ebooks/bookshelf/645.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Category: Novels…",
        },
        {
          href: "/ebooks/bookshelf/649.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Category: Classics of Literature…",
        },
        {
          href: "/ebooks/bookshelf/654.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Category: American Literature…",
        },
      ],
      published: "2001-07-01T00:00:00+00:00",
      rights: {
        value: "Public domain in the USA.",
      },
      title: {
        value: "Moby Dick; Or, The Whale",
      },
      updated: "2026-10-04T19:31:51Z",
      dcterms: {
        languages: ["en"],
      },
    },
    {
      authors: [
        {
          name: "Melville, Herman",
        },
      ],
      categories: [
        {
          term: "Whaling -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Sea stories",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Psychological fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Ship captains -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Adventure stories",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Mentally ill -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Ahab, Captain (Fictitious character) -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Whales -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "Whaling ships -- Fiction",
          scheme: "http://purl.org/dc/terms/LCSH",
        },
        {
          term: "PS",
          scheme: "http://purl.org/dc/terms/LCC",
          label: "Language and Literatures: American and Canadian literature",
        },
        {
          term: "Text",
          scheme: "http://purl.org/dc/terms/DCMIType",
        },
      ],
      content: {
        value:
          '<p>This edition has images.</p>\n<p>\nTitle:\nMoby Dick; Or, The Whale\n</p>\n<p>\nNote:\nWikipedia page about this book: https:<a href="//en.wikipedia.org/wiki/Moby-Dick">//en.wikipedia.org/wiki/Moby-Dick</a>\n</p>\n<p>\nNote:\nProject Gutenberg eBook <a href="/ebooks/15.bibrec.mobile">#15</a> is believed to have the highest quality of the three editions of this eBook in the Project Gutenberg collection. <a href="/ebooks/2701.bibrec.mobile">#2701</a> and <a href="/ebooks/2489.bibrec.mobile">#2489</a> are the others. In addition, there is a computer-generated audio eBook, <a href="/ebooks/9147.bibrec.mobile">#9147</a>, and a human audio performance, <a href="/ebooks/28794.bibrec.mobile">#28794</a>.\n</p>\n<p>\nCredits:\nDaniel Lazarus, Jonesey, and David Widger\n</p>\n<p>\nSummary:\n"Moby Dick; Or, The Whale" by Herman Melville is an epic novel published in 1851. Sailor Ishmael narrates the obsessive quest of Captain Ahab, who commands the whaling ship Pequod in pursuit of Moby Dick, a giant white sperm whale that destroyed his leg. Ahab\'s monomaniacal hunt for vengeance drives the ship and its diverse crew across the world\'s oceans, blending realistic whaling details with profound explorations of good, evil, fate, and human nature in this cornerstone of American literature. (This is an automatically generated summary.)\n</p>\n<p>\nReading Level:\nReading ease score: 73.3 (7th grade). Fairly easy to read.\n</p>\n<p>Author: Melville, Herman, 1819-1891</p>\n<p>EBook No.: 2701</p>\n<p>Published: Jul 1, 2001</p>\n<p>Downloads: 166800</p>\n<p>Language: English</p>\n<p>Subject: Whaling -- Fiction</p><p>Subject: Sea stories</p><p>Subject: Psychological fiction</p><p>Subject: Ship captains -- Fiction</p><p>Subject: Adventure stories</p><p>Subject: Mentally ill -- Fiction</p><p>Subject: Ahab, Captain (Fictitious character) -- Fiction</p><p>Subject: Whales -- Fiction</p><p>Subject: Whaling ships -- Fiction</p>\n<p>LoCC: Language and Literatures: American and Canadian literature</p>\n<p>Category: Text</p>\n<p>Rights: Public domain in the USA.</p>',
        type: "xhtml",
      },
      id: "urn:gutenberg:2701:3",
      links: [
        {
          href: "https://www.gutenberg.org/ebooks/2701.epub3.images",
          rel: "http://opds-spec.org/acquisition",
          type: "application/epub+zip",
          title: "EPUB3 (E-readers incl. Send-to-Kindle)",
          length: 814108,
        },
        {
          href: "https://www.gutenberg.org/ebooks/2701.epub.images",
          rel: "http://opds-spec.org/acquisition",
          type: "application/epub+zip",
          title: "EPUB (older e-readers)",
          length: 837232,
        },
        {
          href: "https://www.gutenberg.org/ebooks/2701.kf8.images",
          rel: "http://opds-spec.org/acquisition",
          type: "application/x-mobipocket-ebook",
          title: "Kindles (kf8)",
          length: 1231626,
        },
        {
          href: "https://www.gutenberg.org/ebooks/2701.kindle.images",
          rel: "http://opds-spec.org/acquisition",
          type: "application/x-mobipocket-ebook",
          title: "Older Kindles",
          length: 1096776,
        },
        {
          href: "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
          rel: "http://opds-spec.org/image",
          type: "image/jpeg",
        },
        {
          href: "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.small.jpg",
          rel: "http://opds-spec.org/image/thumbnail",
          type: "image/jpeg",
        },
        {
          href: "/ebooks/author/9.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "By Melville, Herman…",
        },
        {
          href: "/ebooks/subject/11.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Whaling -- Fiction…",
        },
        {
          href: "/ebooks/subject/115.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Sea stories…",
        },
        {
          href: "/ebooks/subject/2430.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Psychological fiction…",
        },
        {
          href: "/ebooks/subject/2486.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Ship captains -- Fiction…",
        },
        {
          href: "/ebooks/subject/2849.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Adventure stories…",
        },
        {
          href: "/ebooks/subject/3315.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Mentally ill -- Fiction…",
        },
        {
          href: "/ebooks/subject/8143.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Ahab, Captain (Fictitious character) -- Fiction…",
        },
        {
          href: "/ebooks/subject/8144.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Whales -- Fiction…",
        },
        {
          href: "/ebooks/subject/18044.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "On Whaling ships -- Fiction…",
        },
        {
          href: "/ebooks/bookshelf/13.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Best Books Ever Listings…",
        },
        {
          href: "/ebooks/bookshelf/644.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Category: Adventure…",
        },
        {
          href: "/ebooks/bookshelf/645.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Category: Novels…",
        },
        {
          href: "/ebooks/bookshelf/649.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Category: Classics of Literature…",
        },
        {
          href: "/ebooks/bookshelf/654.opds",
          rel: "related",
          type: "application/atom+xml;profile=opds-catalog",
          title: "In Category: American Literature…",
        },
      ],
      published: "2001-07-01T00:00:00+00:00",
      rights: {
        value: "Public domain in the USA.",
      },
      title: {
        value: "Moby Dick; Or, The Whale",
      },
      updated: "2026-10-04T19:31:51Z",
      dcterms: {
        languages: ["en"],
      },
    },
  ],
  opensearch: {
    startIndex: 1,
    itemsPerPage: 25,
  },
};
