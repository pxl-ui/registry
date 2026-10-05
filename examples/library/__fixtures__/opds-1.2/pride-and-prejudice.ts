import type { OPDS } from "@/lib/schemas/pxl/opds";

export const prideAndPrejudice: OPDS.v1_2.Feed = {
  "authors": [
    {
      "name": "Project Gutenberg",
      "uri": "https://www.gutenberg.org",
      "email": "webmaster@gutenberg.org"
    }
  ],
  "icon": "https://www.gutenberg.org/gutenberg/favicon.ico",
  "id": "http://www.gutenberg.org/ebooks/1342.opds",
  "links": [
    {
      "href": "https://www.gutenberg.org/catalog/osd-books.xml",
      "rel": "search",
      "type": "application/opensearchdescription+xml",
      "title": "Project Gutenberg Catalog Search"
    },
    {
      "href": "/ebooks/1342.opds",
      "rel": "self",
      "type": "application/atom+xml;profile=opds-catalog",
      "title": "This Page"
    },
    {
      "href": "/ebooks/1342",
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
    "value": "Pride and Prejudice by Jane Austen"
  },
  "updated": "2026-10-04T19:27:15Z",
  "entries": [
    {
      "authors": [
        {
          "name": "Austen, Jane"
        }
      ],
      "categories": [
        {
          "term": "England -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Young women -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Love stories",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Sisters -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Domestic fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Courtship -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Social classes -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "PR",
          "scheme": "http://purl.org/dc/terms/LCC",
          "label": "Language and Literatures: English literature"
        },
        {
          "term": "Text",
          "scheme": "http://purl.org/dc/terms/DCMIType"
        }
      ],
      "content": {
        "value": "<p>\"Pride and Prejudice\" by Jane Austen is a novel published in 1813. It follows Elizabeth Bennet, who must learn to see past first impressions and hasty judgments. With five daughters and an estate that can only pass to male heirs, the Bennet family faces financial pressure to marry well. When wealthy Mr. Darcy arrives in their countryside neighborhood, his pride and Elizabeth's prejudice set the stage for misunderstandings, hidden truths, and unexpected revelations about character and love.</p>",
        "type": "xhtml"
      },
      "id": "urn:gutenberg:1342:2",
      "links": [
        {
          "href": "https://www.gutenberg.org/ebooks/1342.epub.noimages",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB (older e-readers, no images)",
          "length": 561102
        },
        {
          "href": "https://www.gutenberg.org/ebooks/1342.kindle.noimages",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Kindle (no images)",
          "length": 540013
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
          "rel": "http://opds-spec.org/image",
          "type": "image/jpeg"
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.small.jpg",
          "rel": "http://opds-spec.org/image/thumbnail",
          "type": "image/jpeg"
        },
        {
          "href": "/ebooks/author/68.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "By Austen, Jane…"
        },
        {
          "href": "/ebooks/subject/1702.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On England -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2481.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Young women -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2487.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Love stories…"
        },
        {
          "href": "/ebooks/subject/2489.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Sisters -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2514.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Domestic fiction…"
        },
        {
          "href": "/ebooks/subject/2578.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Courtship -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2906.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Social classes -- Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/13.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Best Books Ever Listings…"
        },
        {
          "href": "/ebooks/bookshelf/40.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Harvard Classics…"
        },
        {
          "href": "/ebooks/bookshelf/639.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Romance…"
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
      "published": "1998-06-01T00:00:00+00:00",
      "rights": {
        "value": "Public domain in the USA."
      },
      "title": {
        "value": "Pride and Prejudice"
      },
      "updated": "2026-10-04T19:27:15Z",
      "dcterms": {
        "languages": [
          "en"
        ]
      }
    },
    {
      "authors": [
        {
          "name": "Austen, Jane"
        }
      ],
      "categories": [
        {
          "term": "England -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Young women -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Love stories",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Sisters -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Domestic fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Courtship -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Social classes -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "PR",
          "scheme": "http://purl.org/dc/terms/LCC",
          "label": "Language and Literatures: English literature"
        },
        {
          "term": "Text",
          "scheme": "http://purl.org/dc/terms/DCMIType"
        }
      ],
      "content": {
        "value": "<p>This edition has images.</p>\n<p>\nTitle:\nPride and Prejudice\n</p>\n<p>\nNote:\nWikipedia page about this book: https:<a href=\"//en.wikipedia.org/wiki/Pride_and_Prejudice\">//en.wikipedia.org/wiki/Pride_and_Prejudice</a>\n</p>\n<p>\nNote:\nThis title is also available as eBook <a href=\"/ebooks/42671.bibrec.mobile\">#42671</a>.\n</p>\n<p>\nCredits:\nChuck Greif and the Online Distributed Proofreading Team at http:<a href=\"//www.pgdp.net\">//www.pgdp.net</a> (This file was produced from images available at The Internet Archive)\n</p>\n<p>\nSummary:\n\"Pride and Prejudice\" by Jane Austen is a novel published in 1813. It follows Elizabeth Bennet, who must learn to see past first impressions and hasty judgments. With five daughters and an estate that can only pass to male heirs, the Bennet family faces financial pressure to marry well. When wealthy Mr. Darcy arrives in their countryside neighborhood, his pride and Elizabeth's prejudice set the stage for misunderstandings, hidden truths, and unexpected revelations about character and love. (This is an automatically generated summary.)\n</p>\n<p>\nReading Level:\nReading ease score: 69.2 (8th &amp; 9th grade). Neither easy nor difficult to read.\n</p>\n<p>Author: Austen, Jane, 1775-1817</p>\n<p>EBook No.: 1342</p>\n<p>Published: Jun 1, 1998</p>\n<p>Downloads: 188329</p>\n<p>Language: English</p>\n<p>Subject: England -- Fiction</p><p>Subject: Young women -- Fiction</p><p>Subject: Love stories</p><p>Subject: Sisters -- Fiction</p><p>Subject: Domestic fiction</p><p>Subject: Courtship -- Fiction</p><p>Subject: Social classes -- Fiction</p>\n<p>LoCC: Language and Literatures: English literature</p>\n<p>Category: Text</p>\n<p>Rights: Public domain in the USA.</p>",
        "type": "xhtml"
      },
      "id": "urn:gutenberg:1342:3",
      "links": [
        {
          "href": "https://www.gutenberg.org/ebooks/1342.epub3.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB3 (E-readers incl. Send-to-Kindle)",
          "length": 24836548
        },
        {
          "href": "https://www.gutenberg.org/ebooks/1342.epub.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB (older e-readers)",
          "length": 24848783
        },
        {
          "href": "https://www.gutenberg.org/ebooks/1342.kf8.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Kindles (kf8)",
          "length": 25333914
        },
        {
          "href": "https://www.gutenberg.org/ebooks/1342.kindle.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Older Kindles",
          "length": 25224289
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
          "rel": "http://opds-spec.org/image",
          "type": "image/jpeg"
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.small.jpg",
          "rel": "http://opds-spec.org/image/thumbnail",
          "type": "image/jpeg"
        },
        {
          "href": "/ebooks/author/68.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "By Austen, Jane…"
        },
        {
          "href": "/ebooks/subject/1702.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On England -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2481.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Young women -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2487.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Love stories…"
        },
        {
          "href": "/ebooks/subject/2489.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Sisters -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2514.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Domestic fiction…"
        },
        {
          "href": "/ebooks/subject/2578.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Courtship -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2906.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Social classes -- Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/13.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Best Books Ever Listings…"
        },
        {
          "href": "/ebooks/bookshelf/40.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Harvard Classics…"
        },
        {
          "href": "/ebooks/bookshelf/639.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Romance…"
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
      "published": "1998-06-01T00:00:00+00:00",
      "rights": {
        "value": "Public domain in the USA."
      },
      "title": {
        "value": "Pride and Prejudice"
      },
      "updated": "2026-10-04T19:27:15Z",
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