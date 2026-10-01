import { Shelf } from "@/components/features/pxl/book/shelf";

import { catalog } from "../__fixtures__/opdf";

export default function BookShelfDemo() {
  console.log(catalog);

  return <Shelf />;
}
