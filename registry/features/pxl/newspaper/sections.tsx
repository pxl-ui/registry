import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ComponentType,
  SVGProps,
} from "react";

import type { Outline } from "@/lib/schemas/pxl/opml";
import { cn } from "@/lib/utils";

function SectionsPositioner({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:-top-2.5 data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0",
          className,
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup className="data-[ending-style]:easing-[ease] xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) pixel-border pixel-size-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0">
          <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  );
}


function SectionsList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-0",
        className,
      )}
      {...props}
    />
  );
}

function Sections({
  align = "start",
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align">) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      <SectionsList>
        {children}
      </SectionsList>
      <SectionsPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  );
}

function SectionsLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "font-serif flex items-center gap-2 p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function SectionsTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "group/navigation-menu-trigger gap-2 inline-flex font-serif h-7 w-max items-center justify-center px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        "group",
        className,
      )}
      {...props}
    >
      {children}{" "}
    </NavigationMenuPrimitive.Trigger>
  );
}

function SectionsContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] h-full w-auto p-[calc(var(--pixel-size)+(--spacing(1)))] transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:pixel-rounded group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10 group-data-[viewport=false]/navigation-menu:duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
        className,
      )}
      {...props}
    />
  );
}

function SectionsItem({
  children,
  icon: Icon,
  title,
  href,
  className,
  ...props
}: ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item> & {
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
}) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    >
      {children ? (
        <NavigationMenuPrimitive.Link
          href={href}
          render={
            <a href={href}>
              <SectionsTrigger>
                {Icon && <Icon />}
                {title}
              </SectionsTrigger>
              <SectionsContent>
                <ul className="w-96">                
                  {children}
                </ul>
              </SectionsContent>
            </a>
          }
        />
      ) : (
        <SectionsLink className="h-7" href={href}>
          {Icon && <Icon />}
          {title}
        </SectionsLink>
      )}
    </NavigationMenuPrimitive.Item>
  );
}

function SectionsListItem({
  title,
  children,
  href,
  className,
  ...props
}: ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuPrimitive.Link
        data-slot="navigation-menu-link"
        className={cn(
          "flex items-center gap-2 pixel-rounded pixel-size-md p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
          className,
        )}
        render={
          <a href={href}>
            <div className="font-serif flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </a>
        }
      />
    </li>
  );
}

function OutlineSectionsItem({
  children,
  icons,
  outline,
}: ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item> & {
  icons?: Record<string, ComponentType<SVGProps<SVGSVGElement>>>,
  outline: Outline;
}) {
  return (
    <SectionsItem
      href={outline.url ?? "#"}
      title={outline.title ?? outline.text}
      icon={icons?.[outline.text]}
    >
      {children}
    </SectionsItem>
  );
}
SectionsItem.Outline = OutlineSectionsItem;

function OutlineSectionsListItem({
  outline,
}: ComponentPropsWithoutRef<"li"> & {
  outline: Outline 
}) {
  return (
    <SectionsListItem
      href={outline.url ?? "#"}
      title={outline.title ?? outline.text}
    >
      {outline.description}
      {outline.outlines?.map((o) => o.text).join(", ")}
    </SectionsListItem>
  );
}
SectionsListItem.Outline = OutlineSectionsListItem;

export {
  Sections,
  SectionsItem,
  SectionsListItem
};

