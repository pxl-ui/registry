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

import { book } from "../__fixtures__/opds";

export default function BookShelfDemo() {
  return (
    <Shelf>
      <Book view={"spine"} size="md">
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
    </Shelf>
  );
}
