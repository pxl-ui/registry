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
  ItemMedia,
  ItemTitle,
} from "@/components/ui/pxl/item";

export default function ItemAvatarExample() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Princess</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            variant="outline"
            className="rounded-full"
            aria-label="Invite"
          >
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
          <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar className="hidden sm:flex">
              <AvatarImage
                src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
                alt="@hero"
              />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <Avatar className="hidden sm:flex">
              <AvatarImage
                src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png"
                alt="@princess"
              />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/wizard.png"
                alt="@wizard"
              />
              <AvatarFallback>W</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>
            Invite your team to collaborate on this project.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}
