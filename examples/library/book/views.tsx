import {
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
} from "@/components/features/pxl/library/opds-1.2/book";
import { dracula } from "~/examples/library/__fixtures__/opds-1.2";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookViews() {
  return (
    <div className="flex flex-row items-end gap-6">
      <BookBackCover className="bg-[#E9CA4E]">
        <BookBackCoverBlurb feed={dracula} />
      </BookBackCover>

      <BookSpine className="bg-[#E9CA4E]">
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
    </div>
  );
}
