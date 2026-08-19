import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/pxl/avatar";

export default function AvatarPreview() {
  return (
    <Avatar>
      <AvatarImage alt="@hero" className="bg-primary" src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png" />
      <AvatarFallback>IHS</AvatarFallback>
    </Avatar>
  );
}