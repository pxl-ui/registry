import { 
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/pxl/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
      <Avatar>
        <AvatarImage
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
          alt="@hero"
          className="grayscale group-hover/avatar:bg-primary group-hover/avatar:grayscale-0"
        />
        <AvatarFallback>HR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png"
          alt="@princess"
          className="bg-success"
        />
        <AvatarFallback>PR</AvatarFallback>
        <AvatarBadge className="bg-success-foreground" />
      </Avatar>
      <AvatarGroup className="grayscale hover:grayscale-0">
        <Avatar>
          <AvatarImage 
            src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
            alt="@hero"
            className="bg-primary" 
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png"
            alt="@princess"
            className="bg-success"
          />
          <AvatarFallback>PR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/wizard.png"
            alt="@wizard"
            className="bg-warning"
          />
          <AvatarFallback>WZ</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}
