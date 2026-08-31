import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pxl/avatar"

export default function AvatarWithBadge() {
  return (
    <Avatar>
      <AvatarImage
        src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png" 
        alt="@hero" />
      <AvatarFallback>HR</AvatarFallback>
      <AvatarBadge className="bg-success-foreground" />
    </Avatar>
  )
}
