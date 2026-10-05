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
import { publication } from "~/examples/library/__fixtures__/opds-2.0";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookDemo() {
  const [hover, setHover] = useState(false);
  return (
    <Book
      view={hover ? "back-cover" : "cover"}
      size="md"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BookBackCover className="bg-[#14100D]">
        <BookBackCoverBlurb
          className="text-white/60"
          publication={publication}
        />
      </BookBackCover>

      <BookSpine className="bg-[#14100D]">
        <BookSpineMeta>
          <BookSpineTitle
            className="font-not-jam-blackletter-16 text-white/60"
            publication={publication}
          />
          <BookSpineAuthor
            className="text-white/60"
            publication={publication}
          />
        </BookSpineMeta>
      </BookSpine>

      <BookCover>
        <BookCoverImage publication={publication} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            publication={publication}
          />
          <BookCoverAuthor publication={publication} />
        </BookCoverMeta>
      </BookCover>
    </Book>
  );
}
