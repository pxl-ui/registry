import { Separator } from "@/components/ui/pxl/separator"

export default function SeparatorVariants() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
      <p className="text-primary-foreground">Primary</p>
      <Separator variant="primary" />
      <p className="text-success-foreground">Success</p>
      <Separator variant="success" />
      <p className="text-warning-foreground">Warning</p>
      <Separator variant="warning" />
      <p className="text-danger-foreground">Danger</p>
      <Separator variant="danger" />
      <p className="text-info-foreground">Info</p>
      <Separator variant="info" />
    </div>
  )
}
