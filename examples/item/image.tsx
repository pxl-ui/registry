/** biome-ignore-all lint/a11y/useValidAnchor: example */

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/pxl/item";

export default function ItemImageExample() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        <Item variant="outline" role="listitem" render={
          <a href="#">
            <ItemMedia variant="image">
              <img
                src={`https://avatar.vercel.sh/midnight-city-lights`}
                alt="Midnight City Lights"
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                Midnight City Lights -{" "}
                <span className="text-muted-foreground">Electric Nights</span>
              </ItemTitle>
              <ItemDescription>Neon Dreams</ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>3:45</ItemDescription>
            </ItemContent>
          </a>} 
          />
        <Item variant="outline" role="listitem" render={
          <a href="#">
            <ItemMedia variant="image">
              <img
                src={`https://avatar.vercel.sh/coffee-shop-conversations`}
                alt="Coffee Shop Conversations"
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                Midnight City Lights -{" "}
                <span className="text-muted-foreground">Urban Stories</span>
              </ItemTitle>
              <ItemDescription>The Morning Brew</ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>4:05</ItemDescription>
            </ItemContent>
          </a>} 
          />
        <Item variant="outline" role="listitem" render={
          <a href="#">
            <ItemMedia variant="image">
              <img
                src={`https://avatar.vercel.sh/coffee-shop-conversations`}
                alt="Coffee Shop Conversations"
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                Digital Rain -{" "}
                <span className="text-muted-foreground">Binary Beats</span>
              </ItemTitle>
              <ItemDescription>Cyber Symphony</ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>3:30</ItemDescription>
            </ItemContent>
          </a>} 
          />
      </ItemGroup>
    </div>
  )
}
