import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/pxl/item";

export default function ItemHeaderExample() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <ItemGroup className="grid grid-cols-3 gap-4">
        <Item variant="outline">
          <ItemHeader>
            <img
              src="https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop"
              alt="v0-1.5-sm"
              width={128}
              height={128}
              className="aspect-square w-full rounded-sm object-cover"
            />
          </ItemHeader>
          <ItemContent>
            <ItemTitle>v0-1.5-sm</ItemTitle>
            <ItemDescription>Everyday tasks and UI generation.</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline">
          <ItemHeader>
            <img
              src="https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop"
              alt="v0-1.5-lg"
              width={128}
              height={128}
              className="aspect-square w-full rounded-sm object-cover"
            />
          </ItemHeader>
          <ItemContent>
            <ItemTitle>v0-1.5-lg</ItemTitle>
            <ItemDescription>Advanced thinking or reasoning.</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline">
          <ItemHeader>
            <img
              src="https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop"
              alt="v0-2.0-mini"
              width={128}
              height={128}
              className="aspect-square w-full rounded-sm object-cover"
            />
          </ItemHeader>
          <ItemContent>
            <ItemTitle>v0-2.0-mini</ItemTitle>
            <ItemDescription>Open Source model for everyone.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  );
}
