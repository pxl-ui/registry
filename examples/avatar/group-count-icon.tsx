import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/pxl/avatar";

export default function AvatarGroupCountIconExample() {
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
      <AvatarGroupCount>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z" />
        </svg>
      </AvatarGroupCount>
    </AvatarGroup>
  );
}
