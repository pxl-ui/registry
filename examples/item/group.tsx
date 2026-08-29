import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pxl/avatar";
import { Button } from "@/components/ui/pxl/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/pxl/item";

export default function ItemGroupExample() {
  return (
    <ItemGroup className="max-w-sm">
      <Item variant="outline">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
              className="grayscale"
            />
            <AvatarFallback>H</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent className="gap-1">
          <ItemTitle>Hero</ItemTitle>
          <ItemDescription>hero@pxl-ui.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z" />
            </svg>
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png"
              className="grayscale"
            />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent className="gap-1">
          <ItemTitle>Princess</ItemTitle>
          <ItemDescription>princess@pxl-ui.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z" />
            </svg>
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/wizard.png"
              className="grayscale"
            />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent className="gap-1">
          <ItemTitle>wizard</ItemTitle>
          <ItemDescription>wizard@pxl-ui.com</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z" />
            </svg>
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  );
}
