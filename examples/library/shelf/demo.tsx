import { useState } from "react";

import {
  Book,
  BookBackCover,
  BookCover,
  BookCoverMeta,
  BookSpine,
  BookSpineMeta,
} from "@/components/features/pxl/library/book";
import {
  BookBackCoverBlurb,
  BookCoverAuthor,
  BookCoverImage,
  BookCoverTitle,
  BookSpineAuthor,
  BookSpineTitle,
} from "@/components/features/pxl/library/opds/book";
import { Shelf } from "@/components/features/pxl/library/shelf";

import { dracula, janeAusten, mobyDick } from "../__fixtures__/opds";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookShelfDemo() {
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const [focusedBook, setFocusedBook] = useState<string | null>(null);
  return (
    <Shelf>
      <Book
        layout="spine"
        view={
          hoveredBook === "dracula" || focusedBook === "dracula"
            ? "back-cover"
            : "spine"
        }
        size="md"
        aria-label="Dracula"
        tabIndex={0}
        onMouseEnter={() => setHoveredBook("dracula")}
        onMouseLeave={() => setHoveredBook(null)}
        onFocus={() => setFocusedBook("dracula")}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setFocusedBook(null);
          }
        }}
        className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <BookBackCover className="bg-[#E9CA4E]">
          <BookBackCoverBlurb catalog={dracula} />
        </BookBackCover>

        <BookSpine className="bg-[#E9CA4E]">
          <BookSpineMeta>
            <BookSpineTitle
              className="font-not-jam-blackletter-16"
              catalog={dracula}
            />
            <BookSpineAuthor catalog={dracula} />
          </BookSpineMeta>
        </BookSpine>

        <BookCover>
          <BookCoverImage catalog={dracula} />
          <BookCoverMeta>
            <BookCoverTitle
              className="font-not-jam-blackletter-16"
              catalog={dracula}
            />
            <BookCoverAuthor catalog={dracula} />
          </BookCoverMeta>
        </BookCover>
      </Book>
      <Book
        layout="spine"
        view={
          hoveredBook === "janeAusten" || focusedBook === "janeAusten"
            ? "back-cover"
            : "spine"
        }
        size="md"
        aria-label="Pride and Prejudice"
        tabIndex={0}
        onMouseEnter={() => setHoveredBook("janeAusten")}
        onMouseLeave={() => setHoveredBook(null)}
        onFocus={() => setFocusedBook("janeAusten")}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setFocusedBook(null);
          }
        }}
        className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <BookBackCover className="bg-[#202220]">
          <BookBackCoverBlurb className="text-white/60" catalog={janeAusten} />
        </BookBackCover>

        <BookSpine className="bg-[#202220]">
          <BookSpineMeta>
            <BookSpineTitle
              className="font-not-jam-blackletter-16 text-white"
              catalog={janeAusten}
            />
            <BookSpineAuthor className="text-white/60" catalog={janeAusten} />
          </BookSpineMeta>
        </BookSpine>

        <BookCover>
          <BookCoverImage catalog={janeAusten} />
          <BookCoverMeta>
            <BookCoverTitle
              className="font-not-jam-blackletter-16"
              catalog={janeAusten}
            />
            <BookCoverAuthor catalog={janeAusten} />
          </BookCoverMeta>
        </BookCover>
      </Book>
      <Book
        layout="spine"
        view={
          hoveredBook === "mobyDick" || focusedBook === "mobyDick"
            ? "back-cover"
            : "spine"
        }
        size="md"
        aria-label="Moby Dick"
        tabIndex={0}
        onMouseEnter={() => setHoveredBook("mobyDick")}
        onMouseLeave={() => setHoveredBook(null)}
        onFocus={() => setFocusedBook("mobyDick")}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setFocusedBook(null);
          }
        }}
        className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <BookBackCover className="bg-[#928D86]">
          <BookBackCoverBlurb catalog={mobyDick} />
        </BookBackCover>

        <BookSpine className="bg-[#928D86]">
          <BookSpineMeta>
            <BookSpineTitle
              className="font-not-jam-blackletter-16"
              catalog={mobyDick}
            />
            <BookSpineAuthor catalog={mobyDick} />
          </BookSpineMeta>
        </BookSpine>

        <BookCover>
          <BookCoverImage catalog={mobyDick} />
          <BookCoverMeta>
            <BookCoverTitle
              className="font-not-jam-blackletter-16"
              catalog={mobyDick}
            />
            <BookCoverAuthor catalog={mobyDick} />
          </BookCoverMeta>
        </BookCover>
      </Book>
    </Shelf>
  );
}
