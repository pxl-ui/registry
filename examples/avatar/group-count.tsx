import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/pxl/avatar";

export default function AvatarGroupCountExample() {
  return (
    <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
          alt="@hero"
        />
        <AvatarFallback>HR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png"
          alt="@princess"
        />
        <AvatarFallback>PR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/wizard.png"
          alt="@wizard"
        />
        <AvatarFallback>WZ</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  );
}
