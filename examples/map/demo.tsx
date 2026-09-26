import { MapComponent } from "@/components/ui/pxl/map"

export default function MapDemo() {
  return (
    <div className="h-100 w-full overflow-hidden pixel-rounded pixel-size-lg">
      <MapComponent center={[-3.801302462334239, 40.42856730211706]} zoom={4} />
    </div>
  )
}
