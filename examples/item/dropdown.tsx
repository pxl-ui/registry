import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pxl/avatar";
import { Button } from "@/components/ui/pxl/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/pxl/dropdown-menu";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/pxl/item";

export default function ItemDropdownExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline">
            Select{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 16h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 10H5V8h2v2Zm12 0h-2V8h2v2Z" />
            </svg>
          </Button>
        }
      />
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Item size="xs" className="w-full p-2">
              <ItemMedia>
                <Avatar className="size-6.5">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
                    className="grayscale"
                  />
                  <AvatarFallback>H</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-0">
                <ItemTitle>Hero</ItemTitle>
                <ItemDescription className="leading-none">
                  hero@pxl-ui.com
                </ItemDescription>
              </ItemContent>
            </Item>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Item size="xs" className="w-full p-2">
              <ItemMedia>
                <Avatar className="size-6.5">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png"
                    className="grayscale"
                  />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-0">
                <ItemTitle>Princess</ItemTitle>
                <ItemDescription className="leading-none">
                  princess@pxl-ui.com
                </ItemDescription>
              </ItemContent>
            </Item>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Item size="xs" className="w-full p-2">
              <ItemMedia>
                <Avatar className="size-6.5">
                  <AvatarImage
                    src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/wizard.png"
                    className="grayscale"
                  />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-0">
                <ItemTitle>Wizard</ItemTitle>
                <ItemDescription className="leading-none">
                  wizard@pxl-ui.com
                </ItemDescription>
              </ItemContent>
            </Item>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
