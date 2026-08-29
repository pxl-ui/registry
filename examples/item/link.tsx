/** biome-ignore-all lint/a11y/useValidAnchor: example */
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/pxl/item";

export default function ItemLinkExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item
        render={
          <a href="#">
            <ItemContent>
              <ItemTitle>Visit our documentation</ItemTitle>
              <ItemDescription>
                Learn how to get started with our components.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 13v-2h-2v2h2Zm-2-2V9h-2v2h2Zm0 4v-2h-2v2h2Zm-2-6V7h-2v2h2Zm0 8v-2h-2v2h2ZM10 7V5H8v2h2Zm0 12v-2H8v2h2Z" />
              </svg>
            </ItemActions>
          </a>
        }
      />
      <Item
        variant="outline"
        render={
          <a href="#" target="_blank" rel="noopener noreferrer">
            <ItemContent>
              <ItemTitle>External resource</ItemTitle>
              <ItemDescription>
                Opens in a new tab with security attributes.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 21H5v-2h12v2ZM5 19H3V7h2v12Zm14 0h-2v-6h2v6Zm-8-4H9v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V9h2v2Zm6 0h-2V7h-2V5h-4V3h8v8Zm-4-2h-2V7h2v2Zm-6-2H5V5h6v2Z" />
              </svg>
            </ItemActions>
          </a>
        }
      />
    </div>
  );
}
