import {
  BookCover,
  BookCoverMeta,
} from "@/components/features/pxl/library/book";
import {
  BookCoverAuthor,
  BookCoverImage,
  BookCoverTitle,
} from "@/components/features/pxl/library/opds-1.2/book";
import { dracula } from "~/examples/library/__fixtures__/opds-1.2";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookSizes() {
  return (
    <div className="flex flex-row items-end gap-6">
      <BookCover size="sm">
        <BookCoverImage feed={dracula} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            feed={dracula}
          />
          <BookCoverAuthor feed={dracula} />
        </BookCoverMeta>
      </BookCover>

      <BookCover size="md">
        <BookCoverImage feed={dracula} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            feed={dracula}
          />
          <BookCoverAuthor feed={dracula} />
        </BookCoverMeta>
      </BookCover>

      <BookCover size="lg">
        <BookCoverImage feed={dracula} />
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
            feed={dracula}
          />
          <BookCoverAuthor feed={dracula} />
        </BookCoverMeta>
      </BookCover>
    </div>
  );
}
