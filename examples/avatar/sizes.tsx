import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pxl/avatar";

export default function SizesExample() {
  return (
    <div className="flex flex-wrap items-center gap-2 grayscale">
      <Avatar size="sm">
        <AvatarImage
          alt="@hero"
          className="bg-primary"
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
        />
        <AvatarFallback>IHS</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage
          alt="@hero"
          className="bg-primary"
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
        />
        <AvatarFallback>IHS</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage
          alt="@hero"
          className="bg-primary"
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
        />
        <AvatarFallback>IHS</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage
          alt="@hero"
          className="bg-primary"
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
        />
        <AvatarFallback>IHS</AvatarFallback>
      </Avatar>
    </div>
  );
}
