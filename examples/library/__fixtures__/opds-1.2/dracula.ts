import type { OPDS } from "@/lib/schemas/pxl/opds";

export const dracula: OPDS.v1_2.Catalog = {
  "authors": [
    {
      "name": "Project Gutenberg",
      "uri": "https://www.gutenberg.org",
      "email": "webmaster@gutenberg.org"
    }
  ],
  "icon": "https://www.gutenberg.org/gutenberg/favicon.ico",
  "id": "http://www.gutenberg.org/ebooks/345.opds",
  "links": [
    {
      "href": "https://www.gutenberg.org/catalog/osd-books.xml",
      "rel": "search",
      "type": "application/opensearchdescription+xml",
      "title": "Project Gutenberg Catalog Search"
    },
    {
      "href": "/ebooks/345.opds",
      "rel": "self",
      "type": "application/atom+xml;profile=opds-catalog",
      "title": "This Page"
    },
    {
      "href": "/ebooks/345",
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
    "value": "Dracula by Bram Stoker"
  },
  "updated": "2026-10-04T14:43:54Z",
  "entries": [
    {
      "authors": [
        {
          "name": "Stoker, Bram"
        }
      ],
      "categories": [
        {
          "term": "Horror tales",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Epistolary fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Gothic fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Vampires -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Dracula, Count (Fictitious character) -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Transylvania (Romania) -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Whitby (England) -- Fiction",
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
        "value": "<p>\"Dracula\" by Bram Stoker is a Gothic horror novel published in 1897. Told through letters, diary entries, and newspaper articles, the story follows solicitor Jonathan Harker's terrifying encounter with Count Dracula in Transylvania. When the vampire Count travels to England and begins preying on victims in Whitby, a small group led by Professor Abraham Van Helsing must hunt him down. This seminal work of Gothic fiction has become the centrepiece of vampire literature, profoundly shaping the popular conception of vampires for generations.</p>",
        "type": "xhtml"
      },
      "id": "urn:gutenberg:345:2",
      "links": [
        {
          "href": "https://www.gutenberg.org/ebooks/345.epub.noimages",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB (older e-readers, no images)",
          "length": 433654
        },
        {
          "href": "https://www.gutenberg.org/ebooks/345.kindle.noimages",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Kindle (no images)",
          "length": 606305
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg",
          "rel": "http://opds-spec.org/image",
          "type": "image/jpeg"
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/345/pg345.cover.small.jpg",
          "rel": "http://opds-spec.org/image/thumbnail",
          "type": "image/jpeg"
        },
        {
          "href": "/ebooks/author/190.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "By Stoker, Bram…"
        },
        {
          "href": "/ebooks/subject/1222.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Horror tales…"
        },
        {
          "href": "/ebooks/subject/2547.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Epistolary fiction…"
        },
        {
          "href": "/ebooks/subject/2586.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Gothic fiction…"
        },
        {
          "href": "/ebooks/subject/2692.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Vampires -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2713.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Dracula, Count (Fictitious character) -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2714.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Transylvania (Romania) -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2715.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Whitby (England) -- Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/42.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Horror…"
        },
        {
          "href": "/ebooks/bookshelf/39.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Gothic Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/51.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Mystery Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/49.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Movie Books…"
        },
        {
          "href": "/ebooks/bookshelf/638.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Science-Fiction & Fantasy…"
        },
        {
          "href": "/ebooks/bookshelf/640.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Crime, Thrillers and Mystery…"
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
      "published": "1995-10-01T00:00:00+00:00",
      "rights": {
        "value": "Public domain in the USA."
      },
      "title": {
        "value": "Dracula"
      },
      "updated": "2026-10-04T14:43:54Z",
      "dcterms": {
        "languages": [
          "en"
        ]
      }
    },
    {
      "authors": [
        {
          "name": "Stoker, Bram"
        }
      ],
      "categories": [
        {
          "term": "Horror tales",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {

          "term": "Epistolary fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Gothic fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Vampires -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Dracula, Count (Fictitious character) -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Transylvania (Romania) -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Whitby (England) -- Fiction",
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
        "value": "<p>This edition has images.</p>\n<p>\nTitle:\nDracula\n</p>\n<p>\nNote:\nWikipedia page about this book: https:<a href=\"//en.wikipedia.org/wiki/Dracula\">//en.wikipedia.org/wiki/Dracula</a>\n</p>\n<p>\nCredits:\nChuck Greif and the Online Distributed Proofreading Team\n</p>\n<p>\nSummary:\n\"Dracula\" by Bram Stoker is a Gothic horror novel published in 1897. Told through letters, diary entries, and newspaper articles, the story follows solicitor Jonathan Harker's terrifying encounter with Count Dracula in Transylvania. When the vampire Count travels to England and begins preying on victims in Whitby, a small group led by Professor Abraham Van Helsing must hunt him down. This seminal work of Gothic fiction has become the centrepiece of vampire literature, profoundly shaping the popular conception of vampires for generations. (This is an automatically generated summary.)\n</p>\n<p>\nReading Level:\nReading ease score: 86.3 (6th grade). Easy to read.\n</p>\n<p>Author: Stoker, Bram, 1847-1912</p>\n<p>EBook No.: 345</p>\n<p>Published: Oct 1, 1995</p>\n<p>Downloads: 73161</p>\n<p>Language: English</p>\n<p>Subject: Horror tales</p><p>Subject: Epistolary fiction</p><p>Subject: Gothic fiction</p><p>Subject: Vampires -- Fiction</p><p>Subject: Dracula, Count (Fictitious character) -- Fiction</p><p>Subject: Transylvania (Romania) -- Fiction</p><p>Subject: Whitby (England) -- Fiction</p>\n<p>LoCC: Language and Literatures: English literature</p>\n<p>Category: Text</p>\n<p>Rights: Public domain in the USA.</p>",
        "type": "xhtml"
      },
      "id": "urn:gutenberg:345:3",
      "links": [
        {
          "href": "https://www.gutenberg.org/ebooks/345.epub3.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB3 (E-readers incl. Send-to-Kindle)",
          "length": 602902
        },
        {
          "href": "https://www.gutenberg.org/ebooks/345.epub.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB (older e-readers)",
          "length": 602043
        },
        {
          "href": "https://www.gutenberg.org/ebooks/345.kf8.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Kindles (kf8)",
          "length": 816744
        },
        {
          "href": "https://www.gutenberg.org/ebooks/345.kindle.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Older Kindles",
          "length": 774463
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg",
          "rel": "http://opds-spec.org/image",
          "type": "image/jpeg"
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/345/pg345.cover.small.jpg",
          "rel": "http://opds-spec.org/image/thumbnail",
          "type": "image/jpeg"
        },
        {
          "href": "/ebooks/author/190.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "By Stoker, Bram…"
        },
        {
          "href": "/ebooks/subject/1222.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Horror tales…"
        },
        {
          "href": "/ebooks/subject/2547.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Epistolary fiction…"
        },
        {
          "href": "/ebooks/subject/2586.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Gothic fiction…"
        },
        {
          "href": "/ebooks/subject/2692.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Vampires -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2713.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Dracula, Count (Fictitious character) -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2714.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Transylvania (Romania) -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2715.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Whitby (England) -- Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/42.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Horror…"
        },
        {
          "href": "/ebooks/bookshelf/39.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Gothic Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/51.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Mystery Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/49.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Movie Books…"
        },
        {
          "href": "/ebooks/bookshelf/638.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Science-Fiction & Fantasy…"
        },
        {
          "href": "/ebooks/bookshelf/640.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Crime, Thrillers and Mystery…"
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
      "published": "1995-10-01T00:00:00+00:00",
      "rights": {
        "value": "Public domain in the USA."
      },
      "title": {
        "value": "Dracula"
      },
      "updated": "2026-10-04T14:43:54Z",
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