import { BarsLoader } from "@/components/ui/pxl/bars-loader";

export default function BarsLoaderDemo() {
  return (
    <div className="flex flex-col gap-2 max-w-32 w-full">
      <BarsLoader
        size="sm"
        variant="primary" />
      <BarsLoader
        size="sm"
        className="max-w-32"
        variant="success" />
      <BarsLoader
        size="sm"
        className="max-w-32"
        variant="danger" />
      <BarsLoader
        size="sm"
        className="max-w-32"
        variant="warning" />
      <BarsLoader
        size="sm"
        className="max-w-32"
        variant="info" />
      <BarsLoader
        size="sm"
        className="max-w-32"
        variant="muted" />
    </div>
  )
}