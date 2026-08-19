import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/pxl/avatar";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row gap-2">
        <Avatar size="sm">
          <AvatarImage alt="@hero" className="bg-primary" src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png" />
          <AvatarFallback>IHS</AvatarFallback>
        </Avatar>
        <span className="ftext-2xl">
          SM
        </span>
      </div>
      <div className="flex flex-row gap-2">
        <Avatar size="md">
          <AvatarImage alt="@hero" className="bg-primary" src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png" />
          <AvatarFallback>IHS</AvatarFallback>
        </Avatar>
        <span className="text-2xl">
          MD
        </span>
      </div>
      <div className="flex flex-row gap-2">
        <Avatar size="lg">
          <AvatarImage alt="@hero" className="bg-primary" src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png" />
          <AvatarFallback>IHS</AvatarFallback>
        </Avatar>
        <span className="text-2xl">
          LG
        </span>
      </div>
      <div className="flex flex-row gap-2">
        <Avatar size="xl">
          <AvatarImage alt="@hero" className="bg-primary" src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png" />
          <AvatarFallback>IHS</AvatarFallback>
        </Avatar>
        <span className="text-2xl">
          XL
        </span>
      </div>
    </div>
  );
}