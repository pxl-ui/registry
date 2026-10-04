import type { OPDS } from "@/lib/schemas/pxl/opds";

export const dracula: OPDS.Catalog = {
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

export const janeAusten: OPDS.Catalog = {
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

export const mobyDick: OPDS.Catalog = {
  "authors": [
    {
      "name": "Project Gutenberg",
      "uri": "https://www.gutenberg.org",
      "email": "webmaster@gutenberg.org"
    }
  ],
  "icon": "https://www.gutenberg.org/gutenberg/favicon.ico",
  "id": "http://www.gutenberg.org/ebooks/2701.opds",
  "links": [
    {
      "href": "https://www.gutenberg.org/catalog/osd-books.xml",
      "rel": "search",
      "type": "application/opensearchdescription+xml",
      "title": "Project Gutenberg Catalog Search"
    },
    {
      "href": "/ebooks/2701.opds",
      "rel": "self",
      "type": "application/atom+xml;profile=opds-catalog",
      "title": "This Page"
    },
    {
      "href": "/ebooks/2701",
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
    "value": "Moby Dick; Or, The Whale by Herman Melville"
  },
  "updated": "2026-10-04T19:31:51Z",
  "entries": [
    {
      "authors": [
        {
          "name": "Melville, Herman"
        }
      ],
      "categories": [
        {
          "term": "Whaling -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Sea stories",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Psychological fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Ship captains -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Adventure stories",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Mentally ill -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Ahab, Captain (Fictitious character) -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Whales -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Whaling ships -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "PS",
          "scheme": "http://purl.org/dc/terms/LCC",
          "label": "Language and Literatures: American and Canadian literature"
        },
        {
          "term": "Text",
          "scheme": "http://purl.org/dc/terms/DCMIType"
        }
      ],
      "content": {
        "value": "<p>\"Moby Dick; Or, The Whale\" by Herman Melville is an epic novel published in 1851. Sailor Ishmael narrates the obsessive quest of Captain Ahab, who commands the whaling ship Pequod in pursuit of Moby Dick, a giant white sperm whale that destroyed his leg. Ahab's monomaniacal hunt for vengeance drives the ship and its diverse crew across the world's oceans, blending realistic whaling details with profound explorations of good, evil, fate, and human nature in this cornerstone of American literature. </p>",
        "type": "xhtml"
      },
      "id": "urn:gutenberg:2701:2",
      "links": [
        {
          "href": "https://www.gutenberg.org/ebooks/2701.epub.noimages",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB (older e-readers, no images)",
          "length": 728811
        },
        {
          "href": "https://www.gutenberg.org/ebooks/2701.kindle.noimages",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Kindle (no images)",
          "length": 935512
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
          "rel": "http://opds-spec.org/image",
          "type": "image/jpeg"
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.small.jpg",
          "rel": "http://opds-spec.org/image/thumbnail",
          "type": "image/jpeg"
        },
        {
          "href": "/ebooks/author/9.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "By Melville, Herman…"
        },
        {
          "href": "/ebooks/subject/11.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Whaling -- Fiction…"
        },
        {
          "href": "/ebooks/subject/115.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Sea stories…"
        },
        {
          "href": "/ebooks/subject/2430.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Psychological fiction…"
        },
        {
          "href": "/ebooks/subject/2486.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Ship captains -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2849.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Adventure stories…"
        },
        {
          "href": "/ebooks/subject/3315.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Mentally ill -- Fiction…"
        },
        {
          "href": "/ebooks/subject/8143.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Ahab, Captain (Fictitious character) -- Fiction…"
        },
        {
          "href": "/ebooks/subject/8144.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Whales -- Fiction…"
        },
        {
          "href": "/ebooks/subject/18044.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Whaling ships -- Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/13.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Best Books Ever Listings…"
        },
        {
          "href": "/ebooks/bookshelf/644.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Adventure…"
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
          "href": "/ebooks/bookshelf/654.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: American Literature…"
        }
      ],
      "published": "2001-07-01T00:00:00+00:00",
      "rights": {
        "value": "Public domain in the USA."
      },
      "title": {
        "value": "Moby Dick; Or, The Whale"
      },
      "updated": "2026-10-04T19:31:51Z",
      "dcterms": {
        "languages": [
          "en"
        ]
      }
    },
    {
      "authors": [
        {
          "name": "Melville, Herman"
        }
      ],
      "categories": [
        {
          "term": "Whaling -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Sea stories",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Psychological fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Ship captains -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Adventure stories",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Mentally ill -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Ahab, Captain (Fictitious character) -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Whales -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "Whaling ships -- Fiction",
          "scheme": "http://purl.org/dc/terms/LCSH"
        },
        {
          "term": "PS",
          "scheme": "http://purl.org/dc/terms/LCC",
          "label": "Language and Literatures: American and Canadian literature"
        },
        {
          "term": "Text",
          "scheme": "http://purl.org/dc/terms/DCMIType"
        }
      ],
      "content": {
        "value": "<p>This edition has images.</p>\n<p>\nTitle:\nMoby Dick; Or, The Whale\n</p>\n<p>\nNote:\nWikipedia page about this book: https:<a href=\"//en.wikipedia.org/wiki/Moby-Dick\">//en.wikipedia.org/wiki/Moby-Dick</a>\n</p>\n<p>\nNote:\nProject Gutenberg eBook <a href=\"/ebooks/15.bibrec.mobile\">#15</a> is believed to have the highest quality of the three editions of this eBook in the Project Gutenberg collection. <a href=\"/ebooks/2701.bibrec.mobile\">#2701</a> and <a href=\"/ebooks/2489.bibrec.mobile\">#2489</a> are the others. In addition, there is a computer-generated audio eBook, <a href=\"/ebooks/9147.bibrec.mobile\">#9147</a>, and a human audio performance, <a href=\"/ebooks/28794.bibrec.mobile\">#28794</a>.\n</p>\n<p>\nCredits:\nDaniel Lazarus, Jonesey, and David Widger\n</p>\n<p>\nSummary:\n\"Moby Dick; Or, The Whale\" by Herman Melville is an epic novel published in 1851. Sailor Ishmael narrates the obsessive quest of Captain Ahab, who commands the whaling ship Pequod in pursuit of Moby Dick, a giant white sperm whale that destroyed his leg. Ahab's monomaniacal hunt for vengeance drives the ship and its diverse crew across the world's oceans, blending realistic whaling details with profound explorations of good, evil, fate, and human nature in this cornerstone of American literature. (This is an automatically generated summary.)\n</p>\n<p>\nReading Level:\nReading ease score: 73.3 (7th grade). Fairly easy to read.\n</p>\n<p>Author: Melville, Herman, 1819-1891</p>\n<p>EBook No.: 2701</p>\n<p>Published: Jul 1, 2001</p>\n<p>Downloads: 166800</p>\n<p>Language: English</p>\n<p>Subject: Whaling -- Fiction</p><p>Subject: Sea stories</p><p>Subject: Psychological fiction</p><p>Subject: Ship captains -- Fiction</p><p>Subject: Adventure stories</p><p>Subject: Mentally ill -- Fiction</p><p>Subject: Ahab, Captain (Fictitious character) -- Fiction</p><p>Subject: Whales -- Fiction</p><p>Subject: Whaling ships -- Fiction</p>\n<p>LoCC: Language and Literatures: American and Canadian literature</p>\n<p>Category: Text</p>\n<p>Rights: Public domain in the USA.</p>",
        "type": "xhtml"
      },
      "id": "urn:gutenberg:2701:3",
      "links": [
        {
          "href": "https://www.gutenberg.org/ebooks/2701.epub3.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB3 (E-readers incl. Send-to-Kindle)",
          "length": 814108
        },
        {
          "href": "https://www.gutenberg.org/ebooks/2701.epub.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/epub+zip",
          "title": "EPUB (older e-readers)",
          "length": 837232
        },
        {
          "href": "https://www.gutenberg.org/ebooks/2701.kf8.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Kindles (kf8)",
          "length": 1231626
        },
        {
          "href": "https://www.gutenberg.org/ebooks/2701.kindle.images",
          "rel": "http://opds-spec.org/acquisition",
          "type": "application/x-mobipocket-ebook",
          "title": "Older Kindles",
          "length": 1096776
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
          "rel": "http://opds-spec.org/image",
          "type": "image/jpeg"
        },
        {
          "href": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.small.jpg",
          "rel": "http://opds-spec.org/image/thumbnail",
          "type": "image/jpeg"
        },
        {
          "href": "/ebooks/author/9.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "By Melville, Herman…"
        },
        {
          "href": "/ebooks/subject/11.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Whaling -- Fiction…"
        },
        {
          "href": "/ebooks/subject/115.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Sea stories…"
        },
        {
          "href": "/ebooks/subject/2430.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Psychological fiction…"
        },
        {
          "href": "/ebooks/subject/2486.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Ship captains -- Fiction…"
        },
        {
          "href": "/ebooks/subject/2849.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Adventure stories…"
        },
        {
          "href": "/ebooks/subject/3315.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Mentally ill -- Fiction…"
        },
        {
          "href": "/ebooks/subject/8143.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Ahab, Captain (Fictitious character) -- Fiction…"
        },
        {
          "href": "/ebooks/subject/8144.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Whales -- Fiction…"
        },
        {
          "href": "/ebooks/subject/18044.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "On Whaling ships -- Fiction…"
        },
        {
          "href": "/ebooks/bookshelf/13.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Best Books Ever Listings…"
        },
        {
          "href": "/ebooks/bookshelf/644.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: Adventure…"
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
          "href": "/ebooks/bookshelf/654.opds",
          "rel": "related",
          "type": "application/atom+xml;profile=opds-catalog",
          "title": "In Category: American Literature…"
        }
      ],
      "published": "2001-07-01T00:00:00+00:00",
      "rights": {
        "value": "Public domain in the USA."
      },
      "title": {
        "value": "Moby Dick; Or, The Whale"
      },
      "updated": "2026-10-04T19:31:51Z",
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
};

export const catalog: OPDS.Catalog = {
    authors: [
      {
        name: "Project Gutenberg",
        uri: "https://www.gutenberg.org",
        email: "webmaster@gutenberg.org",
      },
    ],
    icon: "https://www.gutenberg.org/gutenberg/favicon.ico",
    id: "http://www.gutenberg.org/ebooks/search.opds/",
    links: [
      {
        href: "https://www.gutenberg.org/catalog/osd-books.xml",
        rel: "search",
        type: "application/opensearchdescription+xml",
        title: "Project Gutenberg Catalog Search",
      },
      {
        href: "/ebooks/search.opds/",
        rel: "self",
        type: "application/atom+xml;profile=opds-catalog",
        title: "This Page",
      },
      {
        href: "/ebooks/search/",
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
      {
        href: "/ebooks/search.opds/?start_index=26",
        rel: "next",
        type: "application/atom+xml;profile=opds-catalog",
        title: "Next Page",
      },
    ],
    subtitle: {
      value: "Free eBooks since 1971.",
    },
    title: {
      value: "All Books",
    },
    updated: "2026-09-30T23:33:47Z",
    entries: [
      {
        content: {
          value: "Jane Austen",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1342.opds",
        links: [
          {
            href: "/ebooks/1342.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Pride and Prejudice",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Herman Melville",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/2701.opds",
        links: [
          {
            href: "/ebooks/2701.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Moby Dick; Or, The Whale",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Mary Wollstonecraft Shelley",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/84.opds",
        links: [
          {
            href: "/ebooks/84.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Frankenstein; or, the modern prometheus",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Lewis Carroll",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/11.opds",
        links: [
          {
            href: "/ebooks/11.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Alice's Adventures in Wonderland",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Arthur Conan Doyle",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1661.opds",
        links: [
          {
            href: "/ebooks/1661.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Adventures of Sherlock Holmes",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "William Shakespeare",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1513.opds",
        links: [
          {
            href: "/ebooks/1513.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Romeo and Juliet",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Fyodor Dostoyevsky",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/2554.opds",
        links: [
          {
            href: "/ebooks/2554.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Crime and Punishment",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Bram Stoker",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/345.opds",
        links: [
          {
            href: "/ebooks/345.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Dracula",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "William Shakespeare",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/100.opds",
        links: [
          {
            href: "/ebooks/100.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Complete Works of William Shakespeare",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "71874 downloads",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/37683.opds",
        links: [
          {
            href: "/ebooks/37683.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Chambers's Twentieth Century Dictionary (part 1 of 4: A-D)",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Robert Louis Stevenson",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/43.opds",
        links: [
          {
            href: "/ebooks/43.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The strange case of Dr. Jekyll and Mr. Hyde",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "E. M. Forster",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/2641.opds",
        links: [
          {
            href: "/ebooks/2641.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "A Room with a View",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "George Eliot",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/145.opds",
        links: [
          {
            href: "/ebooks/145.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Middlemarch",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Homer",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1727.opds",
        links: [
          {
            href: "/ebooks/1727.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Odyssey",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "L. M. Montgomery",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/67979.opds",
        links: [
          {
            href: "/ebooks/67979.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Blue Castle: a novel",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Louisa May Alcott",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/37106.opds",
        links: [
          {
            href: "/ebooks/37106.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Little Women; Or, Meg, Jo, Beth, and Amy",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Charlotte Brontë",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1260.opds",
        links: [
          {
            href: "/ebooks/1260.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Jane Eyre: An Autobiography",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "58236 downloads",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/16328.opds",
        links: [
          {
            href: "/ebooks/16328.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Beowulf: An Anglo-Saxon Epic Poem",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "54137 downloads",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/62383.opds",
        links: [
          {
            href: "/ebooks/62383.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value:
            "A Biblia Sagrada, Contendo o Velho e o Novo Testamento (Portuguese)",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Oscar Wilde",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/174.opds",
        links: [
          {
            href: "/ebooks/174.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Picture of Dorian Gray",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Alexandre Dumas and Auguste Maquet",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/1184.opds",
        links: [
          {
            href: "/ebooks/1184.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Count of Monte Cristo",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Richard Wagner",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/5197.opds",
        links: [
          {
            href: "/ebooks/5197.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "My Life — Volume 1",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "F. Scott Fitzgerald",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/64317.opds",
        links: [
          {
            href: "/ebooks/64317.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "The Great Gatsby",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Emperor of Rome Marcus Aurelius",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/2680.opds",
        links: [
          {
            href: "/ebooks/2680.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "Meditations",
        },
        updated: "2026-09-30T23:33:47Z",
      },
      {
        content: {
          value: "Charles Dickens",
          type: "text",
        },
        id: "https://www.gutenberg.org/ebooks/98.opds",
        links: [
          {
            href: "/ebooks/98.opds",
            rel: "subsection",
            type: "application/atom+xml;profile=opds-catalog",
          },
          {
            href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATbSURBVHjaYvz//z8DDDBZzGVg/POP4R8LKwMrEyMDI8M/BmZODgZGRkaG/x+/Mvzj4tBW15YvenNz14dn+5rrGVi4v4A1/vkKNwNmHkAAMTHgAoxA/Pcfw+9ffxl+ffttpGmpPLe8zPHQ3Ik2SY6WCsEMTOLKDGrxDAwcIli1AwQQC3Yz/zP8/vqLhZmH01xLTzol0E871NZIjJuFGeii3wwM8kpqogyKPhEMUuZGDPfXbgZqeYNuBkAAMSIHBaPZHAaG70CdnBy2+paq+YF+mp7W+sJcbEDXf/7OwPDzDwMDOxsDw8N77/5ffv6LcduND38edQfmMny+MQM9KAACCMXFTGysLpqWmgWhflouFvqC7BxAAz8Bg+/DXwaGf0D1QIrh2w+g73l5GD2YnjN8/cHBsphHwRRo8BxQSCObBRBAKAbrOBv0VqTq60mwAw0DGvgRaNLf/xAMjFMIDVT3j4mZ4eXn/wyKYkCF4hpKDM93CAGFXyGbBRBAKJH38/Wrqx8+MzC8/vKf4RswRL4DTfkGxF+B+PtfCAaJf2NgZvjLysmgIsDAwCOvq8bAwCKHHsYAAYRi8OtLBy4+evsPaAAjxBCoYT+gFoANBVkCdP2Xf8wMwix/GGQUZEQZGLgU0Q0GCCAUgz8/u3X59bufv3/8gxgCMhAUl9+ghoMs+Qk1+PlvVmDK+cmgqirFysApr4puMEAAoRj8+6/CvWf37zz79h9i2DeoS78j0yDxX8DgYWYHWsTMoCnFw8AgpKQO1M6JbBZAAKFmkK8Pnz+5fffWB1DS+gc17C/EwO9/US35CYzAp58ZGVRFmBlYpTU0gbpFkY0CCCBUg/8xfXz/9M3NL5//gb0LC+dvSIbCMQMrw6NvbAzSPCwMfHLK0gwMzDLIRgEEEKrBvx8zfHp2+8LPr98YfvxFM+gPwiJQuP8EpvEXwHBmATpAWkFJCORsZKMAAgjFYHbdUIav/8Wvv37x9s2Pv0jB8AfhcpgFP4Hx8PIPC8O7zz8ZdOUEOBi4ZbWRzQMIINR0/Og8w9/7px5+fP7yHYj/Bcm1P35DXApm/4GmDk4uhpdfGRl05YEJWlARFIECMLMAAgg1KF6dAhYnJ149v//w4T+gq76AkhxS6gCxf4KSJdC1z7/+Z3jy6S/DpYc/GLSkuRlYJZWVkMMZIIBQSzcJO2A4//795N6T8+Y//rj+Anr1HyMoToFZmRWYaICp5dPbrwys798xaLB8ZLAS+cpgpczB8PQXKwOXtLL4RyY+UA68BDIKIIBYMFI1MxPD92cPr/76AiwsePkZ3nwClhkffzD8e3CPQZflHYOr0B8GIWFgscrCxXDlIyvDqk0fGW7dvc3w9fa5TwyMP+HmAQQQC0bxDKw5fvxkvHjp0pPf//nfsTI8ecQQf3gag+KzEwybg5sYdn2Q+n/3/osv3x7ffM3w8todhne3bjF8fXCJ4f/XG0ADrsJMAggg1PJY1BlUoAIZjCyMMvozedUM4gRZmBmXXahjkPhwj9nhq/aRxz+/bmD49foBw7+v94BaHgPxB+QiE2YeQACBGTCM6ngObgY+BXc+NuHUM+JMVx/LMvy3ZWCYC0qVDHgAzCyAAGLBXecxf2X48W7nn1+fmCa9Y/j3nJHB4QIDwyFobUgQAAQYACmANJDUx0lSAAAAAElFTkSuQmCC",
            rel: "http://opds-spec.org/image/thumbnail",
            type: "image/png",
          },
        ],
        title: {
          value: "A Tale of Two Cities",
        },
        updated: "2026-09-30T23:33:47Z",
      },
    ],
    opensearch: {
      startIndex: 1,
      itemsPerPage: 25,
    },
  };