import {
  BookCover,
  BookCoverMeta,
} from "@/components/features/pxl/library/book";
import {
  BookCoverAuthor,
  BookCoverImage,
  BookCoverTitle,
} from "@/components/features/pxl/library/opds/book";
import { book } from "~/examples/library/__fixtures__/opds";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookSizes() {
  return (
    <div className="flex flex-row items-end gap-6">
      <BookCover size="sm">
        <BookCoverImage catalog={book} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            catalog={book}
          />
          <BookCoverAuthor catalog={book} />
        </BookCoverMeta>
      </BookCover>

      <BookCover size="md">
        <BookCoverImage catalog={book} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            catalog={book}
          />
          <BookCoverAuthor catalog={book} />
        </BookCoverMeta>
      </BookCover>

      <BookCover size="lg">
        <BookCoverImage catalog={book} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            catalog={book}
          />
          <BookCoverAuthor catalog={book} />
        </BookCoverMeta>
      </BookCover>
    </div>
  );
}
