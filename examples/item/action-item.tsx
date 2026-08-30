import { Button } from "@/components/ui/pxl/button";
import {
  Item,
  ItemActions,
  ItemActionsMenu,
  ItemActionsMenuItem,
  ItemContent,
  ItemGroup,
  ItemSeparator,
  ItemTitle
} from "@/components/ui/pxl/item";

export default function ActionItemDemo() {
  return (
    <ItemGroup className="w-full max-w-md has-data-[size=xs]:gap-0">
      <Item variant="default" size="xs">
        <ItemActions>
          <Button
            className="size-4 transition-all animation-duration-1000 hover:animate-pulse"
            size="icon-lg"
            variant="ghost"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 22H4v-2h16v2ZM4 20H2V4h2v16Zm18 0h-2V4h2v16ZM20 4H4V2h16v2Z"/></svg>
          </Button>
        </ItemActions>
        <ItemContent>
          <ItemTitle font="sans">Buy groceries</ItemTitle>
          {/* <ItemDescription>You have a new direct message.</ItemDescription> */}
        </ItemContent>
        <ItemActions>
          <ItemActionsMenu>
            <ItemActionsMenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z"/></svg>
              Complete
            </ItemActionsMenuItem>
            <ItemActionsMenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M3 2h18v2H3zm0 5h18v2H3zM1 4h2v3H1zm20 0h2v3h-2zm-2 5h2v11h-2zM3 9h2v11H3zm2 11h14v2H5zm4-9h6v2H9z"/></svg>
              Archive
            </ItemActionsMenuItem>
            <ItemActionsMenuItem variant="destructive">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6V20H18V22ZM9 6H15V4H17V6H22V8H20V20H18V8H6V20H4V8H2V6H7V4H9V6ZM15 4H9V2H15V4Z"/></svg>
              Delete
            </ItemActionsMenuItem>
          </ItemActionsMenu>
        </ItemActions>
      </Item>
      <ItemSeparator className="m-0" />
      <Item variant="default" size="xs">
        <ItemActions>
          <Button
            className="size-4 transition-all animation-duration-1000 hover:animate-pulse"
            size="icon-lg"
            variant="ghost"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 22H4v-2h16v2ZM4 20H2V4h2v16Zm18 0h-2V4h2v16ZM20 4H4V2h16v2Z"/></svg>
          </Button>
        </ItemActions>
        <ItemContent>
          <ItemTitle font="sans">Buy groceries</ItemTitle>
          {/* <ItemDescription>You have a new direct message.</ItemDescription> */}
        </ItemContent>
        <ItemActions>
          <ItemActionsMenu>
            <ItemActionsMenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z"/></svg>
              Complete
            </ItemActionsMenuItem>
            <ItemActionsMenuItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M3 2h18v2H3zm0 5h18v2H3zM1 4h2v3H1zm20 0h2v3h-2zm-2 5h2v11h-2zM3 9h2v11H3zm2 11h14v2H5zm4-9h6v2H9z"/></svg>
              Archive
            </ItemActionsMenuItem>
            <ItemActionsMenuItem variant="destructive">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6V20H18V22ZM9 6H15V4H17V6H22V8H20V20H18V8H6V20H4V8H2V6H7V4H9V6ZM15 4H9V2H15V4Z"/></svg>
              Delete
            </ItemActionsMenuItem>
          </ItemActionsMenu>
        </ItemActions>
      </Item>
      <ItemSeparator className="m-0" />
      <Item variant="default" size="xs">
        <ItemActions>
          <Button
            className="size-4 transition-all animation-duration-1000 hover:animate-pulse"
            size="icon-lg"
            variant="ghost"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 22H4v-2h16v2ZM4 20H2V4h2v16Zm18 0h-2V4h2v16Zm-11-4H9v-2h2v2Zm-2-2H7v-2h2v2Zm4 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm3-6H4V2h16v2Z"/></svg>
          </Button>
        </ItemActions>
        <ItemContent>
          <ItemTitle font="sans" className="line-through text-muted-foreground">Yoga class</ItemTitle>
          {/* <ItemDescription>You have a new direct message.</ItemDescription> */}
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-xs"
            variant="ghost"
          >
            <svg className="fill-destructive" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6V20H18V22ZM9 6H15V4H17V6H22V8H20V20H18V8H6V20H4V8H2V6H7V4H9V6ZM15 4H9V2H15V4Z"/></svg>
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  );
}
