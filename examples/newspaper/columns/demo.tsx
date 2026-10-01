import { Columns } from "@/components/features/pxl/newspaper/columns";
import {
  TeaserDescription,
  TeaserTitle,
} from "@/features/pxl/newspaper/rss/teaser";
import { Teaser, TeaserContent } from "@/features/pxl/newspaper/teaser";

import { feed } from "../__fixtures__/rss";

export default function ColumnsDemo() {
  return (
    <Columns className="w-full max-w-md max-h-142 overflow-x-hidden overflow-y-auto">
      {feed.items?.map((item, idx) => (
        <Teaser key={item.guid?.value ?? idx}>
          <TeaserContent>
            <TeaserTitle item={item} />
            <TeaserDescription item={item} />
          </TeaserContent>
        </Teaser>
      ))}
    </Columns>
  );
}
