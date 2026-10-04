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

export default function BookShelfDemo() {
  return (
    <Shelf>
      <Book view={"spine"} size="md">
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
      <Book view={"spine"} size="md">
        <BookBackCover className="bg-[#202220]">
          <BookBackCoverBlurb catalog={janeAusten} />
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
      <Book view={"spine"} size="md">
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
