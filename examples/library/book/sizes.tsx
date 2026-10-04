import {
  BookCover,
  BookCoverMeta,
} from "@/components/features/pxl/library/book";
import {
  BookCoverAuthor,
  BookCoverImage,
  BookCoverTitle,
} from "@/components/features/pxl/library/opds/book";
import { dracula } from "~/examples/library/__fixtures__/opds";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookSizes() {
  return (
    <div className="flex flex-row items-end gap-6">
      <BookCover size="sm">
        <BookCoverImage catalog={dracula} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            catalog={dracula}
          />
          <BookCoverAuthor catalog={dracula} />
        </BookCoverMeta>
      </BookCover>

      <BookCover size="md">
        <BookCoverImage catalog={dracula} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            catalog={dracula}
          />
          <BookCoverAuthor catalog={dracula} />
        </BookCoverMeta>
      </BookCover>

      <BookCover size="lg">
        <BookCoverImage catalog={dracula} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            catalog={dracula}
          />
          <BookCoverAuthor catalog={dracula} />
        </BookCoverMeta>
      </BookCover>
    </div>
  );
}
