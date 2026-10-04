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
import { book } from "~/examples/library/__fixtures__/opds";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookDemo() {
  const [hover, setHover] = useState(false);
  return (
    <Book
      view={hover ? "back-cover" : "cover"}
      size="lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BookBackCover className="bg-[#E9CA4E]">
        <BookBackCoverBlurb catalog={book} />
      </BookBackCover>

      <BookSpine className="bg-[#E9CA4E]">
        <BookSpineMeta>
          <BookSpineTitle
            className="font-not-jam-blackletter-16"
            catalog={book}
          />
          <BookSpineAuthor catalog={book} />
        </BookSpineMeta>
      </BookSpine>

      <BookCover>
        <BookCoverImage catalog={book} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            catalog={book}
          />
          <BookCoverAuthor catalog={book} />
        </BookCoverMeta>
      </BookCover>
    </Book>
  );
}
