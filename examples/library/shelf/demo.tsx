import { type FocusEvent, type KeyboardEvent, useState } from "react";

import {
  Book,
  BookBackCover,
  BookCover,
  BookCoverMeta,
  BookSpine,
  BookSpineMeta,
} from "@/components/features/pxl/library/book";
import {
  BookBackCoverBlurb as BookBackCoverBlurbV2,
  BookCoverAuthor as BookCoverAuthorV2,
  BookCoverImage as BookCoverImageV2,
  BookCoverTitle as BookCoverTitleV2,
  BookSpineAuthor as BookSpineAuthorV2,
  BookSpineTitle as BookSpineTitleV2,
} from "@/components/features/pxl/library/opds/book";
import {
  BookBackCoverBlurb,
  BookCoverAuthor,
  BookCoverImage,
  BookCoverTitle,
  BookSpineAuthor,
  BookSpineTitle,
} from "@/components/features/pxl/library/opds-1.2/book";
import {
  Shelf,
  ShelfContent,
  ShelfSupport,
} from "@/components/features/pxl/library/shelf";

import {
  aliceInWonderland,
  dracula,
  mobyDick,
  prideAndPrejudice,
} from "../__fixtures__/opds-1.2";
import { publication } from "../__fixtures__/opds-2.0";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookShelfDemo() {
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const [focusedBook, setFocusedBook] = useState<string | null>(null);
  const [backCoverBook, setBackCoverBook] = useState<string | null>(null);

  function getBookView(book: string) {
    if (hoveredBook !== book && focusedBook !== book) return "spine";
    return backCoverBook === book ? "back-cover" : "cover";
  }

  function toggleBookCover(book: string) {
    if (getBookView(book) === "spine") return;
    setBackCoverBook((current) => (current === book ? null : book));
  }

  function handleKeydown(event: KeyboardEvent<HTMLDivElement>, book: string) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleBookCover(book);
    }
  }

  function handleMouseEnter(book: string) {
    setHoveredBook(book);
  }

  function handleMouseLeave() {
    setHoveredBook(null);
    setFocusedBook(null);
    setBackCoverBook(null);
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setFocusedBook(null);
      setBackCoverBook(null);
    }
  }

  return (
    <Shelf>
      <ShelfContent>
        <Book
          layout="spine"
          view={getBookView("disloyal")}
          role="button"
          aria-pressed={getBookView("disloyal") === "back-cover"}
          size="md"
          aria-label="Disloyal"
          tabIndex={0}
          onClick={() => toggleBookCover("disloyal")}
          onKeyDown={(event) => handleKeydown(event, "disloyal")}
          onMouseEnter={() => handleMouseEnter("disloyal")}
          onMouseLeave={handleMouseLeave}
          onFocus={() => setFocusedBook("disloyal")}
          onBlur={handleBlur}
          className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BookBackCover className="bg-[#202220]">
            <BookBackCoverBlurbV2
              className="text-white/60"
              publication={publication}
            />
          </BookBackCover>

          <BookSpine className="bg-[#202220]" pages={publication.metadata.numberOfPages}>
            <BookSpineMeta>
              <BookSpineTitleV2
                className="font-not-jam-blackletter-16 text-white"
                publication={publication}
              />
              <BookSpineAuthorV2
                className="text-white/60"
                publication={publication}
              />
            </BookSpineMeta>
          </BookSpine>

          <BookCover>
            <BookCoverImageV2 publication={publication} />
            <BookCoverMeta>
              <BookCoverTitleV2
                className="font-not-jam-blackletter-16"
                publication={publication}
              />
              <BookCoverAuthorV2 publication={publication} />
            </BookCoverMeta>
          </BookCover>
        </Book>
        <Book
          layout="spine"
          view={getBookView("dracula")}
          role="button"
          aria-pressed={getBookView("dracula") === "back-cover"}
          size="lg"
          aria-label="Dracula"
          tabIndex={0}
          onClick={() => toggleBookCover("dracula")}
          onKeyDown={(event) => handleKeydown(event, "dracula")}
          onMouseEnter={() => handleMouseEnter("dracula")}
          onMouseLeave={handleMouseLeave}
          onFocus={() => setFocusedBook("dracula")}
          onBlur={handleBlur}
          className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BookBackCover className="bg-[#E9CA4E]">
            <BookBackCoverBlurb feed={dracula} />
          </BookBackCover>

          <BookSpine className="bg-[#E9CA4E]" pages={399}>
            <BookSpineMeta>
              <BookSpineTitle
                className="font-not-jam-blackletter-16"
                feed={dracula}
              />
              <BookSpineAuthor feed={dracula} />
            </BookSpineMeta>
          </BookSpine>

          <BookCover>
            <BookCoverImage feed={dracula} />
            <BookCoverMeta>
              <BookCoverTitle
                className="font-not-jam-blackletter-16"
                feed={dracula}
              />
              <BookCoverAuthor feed={dracula} />
            </BookCoverMeta>
          </BookCover>
        </Book>
        <Book
          layout="spine"
          view={getBookView("prideAndPrejudice")}
          role="button"
          aria-pressed={getBookView("prideAndPrejudice") === "back-cover"}
          size="md"
          aria-label="Pride and Prejudice"
          tabIndex={0}
          onClick={() => toggleBookCover("prideAndPrejudice")}
          onKeyDown={(event) => handleKeydown(event, "prideAndPrejudice")}
          onMouseEnter={() => handleMouseEnter("prideAndPrejudice")}
          onMouseLeave={handleMouseLeave}
          onFocus={() => setFocusedBook("prideAndPrejudice")}
          onBlur={handleBlur}
          className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BookBackCover className="bg-[#202220]">
            <BookBackCoverBlurb
              className="text-white/60"
              feed={prideAndPrejudice}
            />
          </BookBackCover>

          <BookSpine className="bg-[#202220]" pages={350}>
            <BookSpineMeta>
              <BookSpineTitle
                className="font-not-jam-blackletter-16 text-white"
                feed={prideAndPrejudice}
              />
              <BookSpineAuthor
                className="text-white/60"
                feed={prideAndPrejudice}
              />
            </BookSpineMeta>
          </BookSpine>

          <BookCover>
            <BookCoverImage feed={prideAndPrejudice} />
            <BookCoverMeta>
              <BookCoverTitle
                className="font-not-jam-blackletter-16"
                feed={prideAndPrejudice}
              />
              <BookCoverAuthor feed={prideAndPrejudice} />
            </BookCoverMeta>
          </BookCover>
        </Book>
        <Book
          layout="spine"
          view={getBookView("mobyDick")}
          role="button"
          aria-pressed={getBookView("mobyDick") === "back-cover"}
          size="md"
          aria-label="Moby Dick"
          tabIndex={0}
          onClick={() => toggleBookCover("mobyDick")}
          onKeyDown={(event) => handleKeydown(event, "mobyDick")}
          onMouseEnter={() => handleMouseEnter("mobyDick")}
          onMouseLeave={handleMouseLeave}
          onFocus={() => setFocusedBook("mobyDick")}
          onBlur={handleBlur}
          className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BookBackCover className="bg-[#928D86]">
            <BookBackCoverBlurb feed={mobyDick} />
          </BookBackCover>

          <BookSpine className="bg-[#928D86]" pages={550}>
            <BookSpineMeta>
              <BookSpineTitle
                className="font-not-jam-blackletter-16"
                feed={mobyDick}
              />
              <BookSpineAuthor feed={mobyDick} />
            </BookSpineMeta>
          </BookSpine>

          <BookCover>
            <BookCoverImage feed={mobyDick} />
            <BookCoverMeta>
              <BookCoverTitle
                className="font-not-jam-blackletter-16"
                feed={mobyDick}
              />
              <BookCoverAuthor feed={mobyDick} />
            </BookCoverMeta>
          </BookCover>
        </Book>
        <Book
          layout="spine"
          view={getBookView("aliceInWonderland")}
          role="button"
          aria-pressed={getBookView("aliceInWonderland") === "back-cover"}
          size="sm"
          aria-label="Alicen In Wonderland"
          tabIndex={0}
          onClick={() => toggleBookCover("aliceInWonderland")}
          onKeyDown={(event) => handleKeydown(event, "aliceInWonderland")}
          onMouseEnter={() => handleMouseEnter("aliceInWonderland")}
          onMouseLeave={handleMouseLeave}
          onFocus={() => setFocusedBook("aliceInWonderland")}
          onBlur={handleBlur}
          className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BookBackCover className="bg-[#BBA995]">
            <BookBackCoverBlurb feed={aliceInWonderland} />
          </BookBackCover>

          <BookSpine className="bg-[#BBA995]" pages={125}>
            <BookSpineMeta>
              <BookSpineTitle
                className="font-not-jam-blackletter-16"
                feed={aliceInWonderland}
              />
              <BookSpineAuthor feed={aliceInWonderland} />
            </BookSpineMeta>
          </BookSpine>

          <BookCover>
            <BookCoverImage feed={aliceInWonderland} />
            <BookCoverMeta>
              <BookCoverTitle
                className="font-not-jam-blackletter-16"
                feed={aliceInWonderland}
              />
              <BookCoverAuthor feed={aliceInWonderland} />
            </BookCoverMeta>
          </BookCover>
        </Book>
      </ShelfContent>
      <ShelfSupport />
    </Shelf>
  );
}
