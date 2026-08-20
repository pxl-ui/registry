import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/pxl/card";
import { WheelList, WheelOption } from "@/components/ui/pxl/wheel-list";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

const ITEMS: string[] = [
  "POKÉDEX",
  "POKÉMON",
  "ITEM",
  "TRAINER",
  "SAVE",
  "OPTION",
  "EXIT",
];

export default function InCardPreview() {
  return (
    <WidgetArea size="sm">
      <Card size="lg" className="size-full">
        <CardHeader>
          <CardTitle>Menu</CardTitle>
          <CardDescription>Ash Ketchum</CardDescription>
        </CardHeader>
        <CardContent>
          <WheelList
            align="start"
            visibleCount={3}
            label="Pick a start time"
            defaultValue="ITEM"
            onChange={(evt) =>
              console.log(evt.settled ? `selected ${evt.value}` : "coasting")
            }
            onSelect={(value) => console.log(value)}
          >
            {ITEMS.map((i) => (
              <WheelOption key={i} value={i}>
                {i}
              </WheelOption>
            ))}
          </WheelList>
        </CardContent>
      </Card>
    </WidgetArea>
  );
}
