import { List } from "@/components/features/pxl/newspaper/list";
import {
  TeaserDescription,
  TeaserImage,
  TeaserTitle,
} from "@/features/pxl/newspaper/atom/teaser";
import {
  Teaser,
  TeaserContent,
  TeaserMedia,
} from "@/features/pxl/newspaper/teaser";

import { feed } from "../__fixtures__/atom";

export default function NewspaperListDemo() {
  return (
    <List className="w-full max-w-md max-h-142 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-border">
      {feed.entries?.map((entry) => (
        <Teaser key={entry.id}>
          <TeaserContent>
            <TeaserTitle entry={entry} />
            <TeaserDescription entry={entry} />
          </TeaserContent>
          <TeaserMedia color="grayscale" variant="image">
            <TeaserImage entry={entry} />
          </TeaserMedia>
        </Teaser>
      ))}
    </List>
  );
}
