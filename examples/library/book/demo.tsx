import { BookBackCover, BookBackCoverBlurb, BookCover, BookCoverAuthor, BookCoverMeta, BookCoverTitle, BookSpine, BookSpineAuthor, BookSpineMeta, BookSpineTitle } from "@/components/features/pxl/library/book";
import { book } from "~/examples/book/__fixtures__/opdf";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookDemo() {
  return (
    <div className="flex gap-0.5">

      <BookBackCover size="sm" className="bg-[#E9CA4E]">
        <BookBackCoverBlurb>
          "Dracula" by Bram Stoker is a Gothic horror novel published in 1897. Told through letters, diary entries, and newspaper articles, the story follows solicitor Jonathan Harker's terrifying encounter with Count Dracula in Transylvania. When the vampire Count travels to England and begins preying on victims in Whitby, a small group led by Professor Abraham Van Helsing must hunt him down. This seminal work of Gothic fiction has become the centrepiece of vampire literature, profoundly shaping the popular conception of vampires for generations.
        </BookBackCoverBlurb>
      </BookBackCover>

      <BookSpine size="sm" className="bg-[#E9CA4E]">
        <BookSpineMeta>
          <BookSpineTitle className="font-not-jam-blackletter-16">
            {book.title.value}
          </BookSpineTitle>
          <BookSpineAuthor>
            {book.content?.value}
          </BookSpineAuthor>
        </BookSpineMeta>
      </BookSpine>
      
      <BookCover size="sm">
        <img alt="cover" 
          src={"https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg"}
          className="object-cover size-full"
          />
        <BookCoverMeta>
          <BookCoverTitle className="font-not-jam-blackletter-16">
            {book.title.value}
          </BookCoverTitle>
          <BookCoverAuthor>
            {book.content?.value}
          </BookCoverAuthor>
        </BookCoverMeta>
      </BookCover>
    </div>
  )
}