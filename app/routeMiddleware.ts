import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

import { fromRouteId } from "./lib/registry";

export const onRequest = defineRouteMiddleware((context) => {
  // Get the content collection entry for this page.
  const { entry, id } = context.locals.starlightRoute;

  const item = fromRouteId(id);

  if (item) {
    entry.data.description = entry.data.description ?? item.description;
    // Update the title to add an exclamation mark.
    entry.data.title = entry.data.title ?? item.title;
  }
});
