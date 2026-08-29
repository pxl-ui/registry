import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/pxl/item";

export default function ItemSizeExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 22H4v-2h16v2ZM4 14h4v2H4v4H2V4h2v10Zm18 6h-2v-4h-4v-2h4V4h2v16Zm-6-2H8v-2h8v2Zm4-14H4V2h16v2Z"></path>
          </svg>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Size</ItemTitle>
          <ItemDescription>
            The standard size for most use cases.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 22H4v-2h16v2ZM4 14h4v2H4v4H2V4h2v10Zm18 6h-2v-4h-4v-2h4V4h2v16Zm-6-2H8v-2h8v2Zm4-14H4V2h16v2Z"></path>
          </svg>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Small Size</ItemTitle>
          <ItemDescription>A compact size for dense layouts.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 22H4v-2h16v2ZM4 14h4v2H4v4H2V4h2v10Zm18 6h-2v-4h-4v-2h4V4h2v16Zm-6-2H8v-2h8v2Zm4-14H4V2h16v2Z"></path>
          </svg>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Extra Small Size</ItemTitle>
          <ItemDescription>The most compact size available.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
