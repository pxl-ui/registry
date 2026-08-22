import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

import { fromRouteId } from "./lib/registry";

export const onRequest = defineRouteMiddleware((context) => {
  // Get the content collection entry for this page.
  const { entry, id } = context.locals.starlightRoute;

  const item = fromRouteId(id);

  if (item) {
    const description = entry.data.description ?? item.description;
    const title = entry.data.title ?? item.title;

    entry.data.description = description;
    entry.data.title = title;

    // Override description meta tags
    for (const headItem of context.locals.starlightRoute.head) {
      if (
        headItem.tag === "meta" &&
        (
          headItem.attrs?.name === "description" ||
          headItem.attrs?.property === "og:description"

        )
      ) {
        headItem.attrs.content = description;
      }
    }
  }

  // Remove generator tags
  context.locals.starlightRoute.head = context.locals.starlightRoute.head?.filter((headItem) => {
    if (headItem.tag === "meta" && headItem.attrs?.name === "generator") {
      return false;
    }

    return true;
  })
});
