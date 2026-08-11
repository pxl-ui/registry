import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/pxl/avatar";

export default function AvatarPreview() {
  return (
    <Avatar>
      <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}