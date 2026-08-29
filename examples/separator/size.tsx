import { Separator } from "@/components/ui/pxl/separator"

export default function SeparatorSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
      <p>Small</p>
      <Separator size="sm" border="dashed" />
      <p>Medium</p>
      <Separator size="md" border="dashed" />
      <p>Large</p>
      <Separator size="lg" border="dashed" />
    </div>
  )
}
