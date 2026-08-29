import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/pxl/item";

export default function ItemVariantExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item>
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
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>
            Transparent background with no border.
          </ItemDescription>
        </ItemContent>
      </Item>
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
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with a visible border.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
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
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>
            Muted background for secondary content.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="primary">
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
          <ItemTitle>Primary Variant</ItemTitle>
          <ItemDescription>
            Primary background for secondary content.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="success">
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
          <ItemTitle>Success Variant</ItemTitle>
          <ItemDescription>
            Success background for secondary content.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="danger">
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
          <ItemTitle>Danger Variant</ItemTitle>
          <ItemDescription>
            Danger background for secondary content.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="warning">
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
          <ItemTitle>Warning Variant</ItemTitle>
          <ItemDescription>
            Warning background for secondary content.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="info">
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
          <ItemTitle>Info Variant</ItemTitle>
          <ItemDescription>
            Info background for secondary content.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
