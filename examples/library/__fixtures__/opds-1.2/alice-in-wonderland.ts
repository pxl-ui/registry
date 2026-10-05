import type { OPDS } from "@/lib/schemas/pxl/opds";

export const aliceInWonderland: OPDS.v1_2.Catalog = {
  "authors": [
    {
      "name": "Project Gutenberg",
      "uri": "https://www.gutenberg.org",
      "email": "webmaster@gutenberg.org"
    }
  ],
  "icon": "https://www.gutenberg.org/gutenberg/favicon.ico",
  "id": "http://www.gutenberg.org/ebooks/11.opds",
  "links": [
    {
      "href": "https://www.gutenberg.org/catalog/osd-books.xml",
      "rel": "search",
      "type": "application/opensearchdescription+xml",
      "title": "Project Gutenberg Catalog Search"
    },
    {
      "href": "/ebooks/11.opds",
      "rel": "self",
      "type": "application/atom+xml;profile=opds-catalog",
      "title": "This Page"
    },
    {
      "href": "/ebooks/11",
      "rel": "alternate",
      "type": "text/html",
      "title": "HTML Page"
    },
    {
      "href": "/ebooks.opds/",
      "rel": "start",
      "type": "application/atom+xml;profile=opds-catalog",
      "title": "Start Page"
    }
  ],
  "subtitle": {
    "value": "Free eBooks since 1971."
  },
  "title": {
    "value": "Alice's Adventures in Wonderland by Lewis Carroll"
  },
  "updated": "2026-10-05T10:41:13Z",
  "entries": [
    {
      "authors": [
        {
          "name": "Carroll, Lewis"
        }
      ],
      "categories": [
        {
          "term": "Fantasy fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Children's stories",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Imaginary places -- Juvenile fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Alice (Fictitious character from Carroll) -- Juvenile fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "PR",
          "scheme": "http://purl.org/dc/terms/LCC",
          "label": "Language and Literatures: English literature"
        },
        {
          "term": "PZ",
          "scheme": "http://purl.org/dc/terms/LCC",
          "label": "Language and Literatures: Juvenile belles lettres"
        },
        {
          "term": "Text",
          "scheme": "http://purl.org/dc/terms/DCMIType"
        }
      ],
      "content": {
        "value": "<p>\"Alice's Adventures in Wonderland\" by Lewis Carroll is a children's novel published in 1865. When a curious girl named Alice spots a White Rabbit with a pocket watch, she tumbles down a rabbit hole into an extraordinary fantasy world filled with peculiar anthropomorphic creatures. This pioneering work of literary nonsense plays with logic and language, creating a whimsical tale that delights both children and adults. Illustrated by John Tenniel, it helped transform children's literature from didactic instruction to pure entertainment.</p>",
        "type": "xhtml"
      },
      "id": "urn:gutenberg:11:2",
      "links": [
        {
          "href": "https://www.gutenberg.org/ebooks/11.epub.noimages",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB (older e-readers, no images)",
          "length": 136756
        },
        {
          "href": "https://www.gutenberg.org/ebooks/11.kindle.noimages",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Kindle (no images)",
          "length": 190274
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",
          "rel": "http://opds-spec.org/image",
          "type": "image/jpeg"
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/11/pg11.cover.small.jpg",
          "rel": "http://opds-spec.org/image/thumbnail",
          "type": "image/jpeg"
        },
        {
          "href": "/ebooks/author/7.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "By Carroll, Lewis…"
        },
        {
          "href": "/ebooks/subject/138.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Fantasy fiction…"
        },
        {
          "href": "/ebooks/subject/1415.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Children's stories…"
        },
        {
          "href": "/ebooks/subject/4873.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Imaginary places -- Juvenile fiction…"
        },
        {
          "href": "/ebooks/subject/31575.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Alice (Fictitious character from Carroll) -- Juvenile fiction…"
        },
        {
          "href": "/ebooks/bookshelf/20.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Children's Literature…"
        },
        {
          "href": "/ebooks/bookshelf/636.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Children & Young Adult Reading…"
        },
        {
          "href": "/ebooks/bookshelf/645.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Novels…"
        },
        {
          "href": "/ebooks/bookshelf/649.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Classics of Literature…"
        },
        {
          "href": "/ebooks/bookshelf/653.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: British Literature…"
        }
      ],
      "published": "2008-06-27T00:00:00+00:00",
      "rights": {
        "value": "Public domain in the USA."
      },
      "title": {
        "value": "Alice's Adventures in Wonderland"
      },
      "updated": "2026-10-05T10:41:13Z",
      "dcterms": {
        "languages": [
          "en"
        ]
      }
    },
    {
      "authors": [
        {
          "name": "Carroll, Lewis"
        }
      ],
      "categories": [
        {
          "term": "Fantasy fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Children's stories",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Imaginary places -- Juvenile fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Alice (Fictitious character from Carroll) -- Juvenile fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "PR",
          "scheme": "http://purl.org/dc/terms/LCC",
          "label": "Language and Literatures: English literature"
        },
        {
          "term": "PZ",
          "scheme": "http://purl.org/dc/terms/LCC",
          "label": "Language and Literatures: Juvenile belles lettres"
        },
        {
          "term": "Text",
          "scheme": "http://purl.org/dc/terms/DCMIType"
        }
      ],
      "content": {
        "value": "<p>This edition has images.</p>\n<p>\nTitle:\nAlice's Adventures in Wonderland\n</p>\n<p>\nAlternate Title:\nAlice in Wonderland\n</p>\n<p>\nNote:\nWikipedia page about this book: https:<a href=\"//en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland\">//en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland</a>\n</p>\n<p>\nCredits:\nArthur DiBianca and David Widger\n</p>\n<p>\nSummary:\n\"Alice's Adventures in Wonderland\" by Lewis Carroll is a children's novel published in 1865. When a curious girl named Alice spots a White Rabbit with a pocket watch, she tumbles down a rabbit hole into an extraordinary fantasy world filled with peculiar anthropomorphic creatures. This pioneering work of literary nonsense plays with logic and language, creating a whimsical tale that delights both children and adults. Illustrated by John Tenniel, it helped transform children's literature from didactic instruction to pure entertainment. (This is an automatically generated summary.)\n</p>\n<p>\nReading Level:\nReading ease score: 87.5 (6th grade). Easy to read.\n</p>\n<p>Author: Carroll, Lewis, 1832-1898</p>\n<p>EBook No.: 11</p>\n<p>Published: Jun 27, 2008</p>\n<p>Downloads: 122378</p>\n<p>Language: English</p>\n<p>Subject: Fantasy fiction</p><p>Subject: Children's stories</p><p>Subject: Imaginary places -- Juvenile fiction</p><p>Subject: Alice (Fictitious character from Carroll) -- Juvenile fiction</p>\n<p>LoCC: Language and Literatures: English literature</p><p>LoCC: Language and Literatures: Juvenile belles lettres</p>\n<p>Category: Text</p>\n<p>Rights: Public domain in the USA.</p>",
        "type": "xhtml"
      },
      "id": "urn:gutenberg:11:3",
      "links": [
        {
          "href": "https://www.gutenberg.org/ebooks/11.epub3.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB3 (E-readers incl. Send-to-Kindle)",
          "length": 189249
        },
        {
          "href": "https://www.gutenberg.org/ebooks/11.epub.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB (older e-readers)",
          "length": 187950
        },
        {
          "href": "https://www.gutenberg.org/ebooks/11.kf8.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Kindles (kf8)",
          "length": 255506
        },
        {
          "href": "https://www.gutenberg.org/ebooks/11.kindle.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Older Kindles",
          "length": 241000
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",
          "rel": "http://opds-spec.org/image",
          "type": "image/jpeg"
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/11/pg11.cover.small.jpg",
          "rel": "http://opds-spec.org/image/thumbnail",
          "type": "image/jpeg"
        },
        {
          "href": "/ebooks/author/7.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "By Carroll, Lewis…"
        },
        {
          "href": "/ebooks/subject/138.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Fantasy fiction…"
        },
        {
          "href": "/ebooks/subject/1415.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Children's stories…"
        },
        {
          "href": "/ebooks/subject/4873.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Imaginary places -- Juvenile fiction…"
        },
        {
          "href": "/ebooks/subject/31575.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Alice (Fictitious character from Carroll) -- Juvenile fiction…"
        },
        {
          "href": "/ebooks/bookshelf/20.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Children's Literature…"
        },
        {
          "href": "/ebooks/bookshelf/636.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Children & Young Adult Reading…"
        },
        {
          "href": "/ebooks/bookshelf/645.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Novels…"
        },
        {
          "href": "/ebooks/bookshelf/649.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Classics of Literature…"
        },
        {
          "href": "/ebooks/bookshelf/653.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: British Literature…"
        }
      ],
      "published": "2008-06-27T00:00:00+00:00",
      "rights": {
        "value": "Public domain in the USA."
      },
      "title": {
        "value": "Alice's Adventures in Wonderland"
      },
      "updated": "2026-10-05T10:41:13Z",
      "dcterms": {
        "languages": [
          "en"
        ]
      }
    }
  ],
  "opensearch": {
    "startIndex": 1,
    "itemsPerPage": 25
  }
}