import { Button } from "@/components/ui/pxl/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/pxl/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="link">Hover Here</Button>} />
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@pxl-ui</div>
        <div>The React Framework – created and maintained by @gotchu-creatures.</div>
        <div className="mt-1 text-xs text-muted-foreground">
          Joined December 2026
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
