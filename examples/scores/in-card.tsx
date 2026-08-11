import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/pxl/card";
import { Scores } from "@/components/ui/pxl/scores";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function InCardPreview() {
  return (
    <div className="flex items-center justify-center min-h-23">
      <WidgetArea size="sm">
        <Card size="lg" className="size-full">
          <CardHeader>
            <CardTitle>High Scores</CardTitle>
            <CardDescription>Play to climb the ladder</CardDescription>
          </CardHeader>
          <CardContent scrollable>
            <Scores
              className="w-full"
              items={[
                { avatar: "https://github.com/shadcn.png", description: "AAA", title: "1,000,000", },
                { avatar: "https://github.com/shadcn.png", description: "ABB", title: "900,000", },
                { avatar: "https://github.com/shadcn.png", description: "KNM", title: "700,000", },
                { avatar: "https://github.com/shadcn.png", description: "XLL", title: "550,000", },
                { avatar: "https://github.com/shadcn.png", description: "RSS", title: "90,000", },
                { avatar: "https://github.com/shadcn.png", description: "AAA", title: "75,000", },
                { avatar: "https://github.com/shadcn.png", description: "CKL", title: "60,000", },
                { avatar: "https://github.com/shadcn.png", description: "ABB", title: "1,000", }
              ]} 
            />
          </CardContent>
        </Card>
      </WidgetArea>
    </div>
  );
}
