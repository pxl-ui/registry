import {
  BookCover,
  BookCoverMeta,
  BookCoverTitle,
} from "@/components/features/pxl/library/book";

import "~/examples/fonts/not-jam-blackletter-16.css";

export default function BookGenres() {
  return (
    <div className="flex flex-row justify-center items-end gap-6 flex-wrap">
      <BookCover size="sm" genre="adventure">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Adventure
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="crime-fiction">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Crime Fiction
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="erotic">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Erotic
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="fantasy">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Fantasy
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="historical-fiction">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Historical Fiction
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="horror">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Horror
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="literary-fiction">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Literary Fiction
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="romance">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Romance
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="science-fiction">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Science Fiction
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="thriller">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Thriller
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
      <BookCover size="sm" genre="unknown">
        <BookCoverMeta>
          <BookCoverTitle
            className="font-not-jam-blackletter-16"
          >
            Unknown
          </BookCoverTitle>
        </BookCoverMeta>
      </BookCover>
    </div>
  );
}
