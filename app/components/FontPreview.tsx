import { Card, CardContent } from "@/components/ui/pxl/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/pxl/tabs";
import { cn } from "@/lib/utils";

export default function FontPreview({
  font: fontName,
  sampleText = "The quick brown fox jumps over the lazy dog",
  sizes = [
    { label: "4xs", className: "text-4xs" },
    { label: "3xs", className: "text-3xs" },
    { label: "2xs", className: "text-2xs" },
    { label: "xs", className: "text-xs" },
    { label: "sm", className: "text-sm" },
    { label: "base", className: "text-base" },
    { label: "lg", className: "text-lg" },
    { label: "xl", className: "text-xl" },
    { label: "2xl", className: "text-2xl" },
    { label: "3xl", className: "text-3xl" },
    { label: "4xl", className: "text-4xl" },
    { label: "5xl", className: "text-5xl" },
    { label: "6xl", className: "text-6xl" },
    { label: "7xl", className: "text-7xl" },
    { label: "8xl", className: "text-8xl" },
    { label: "9xl", className: "text-9xl" },
  ],
  variants = [],
}: {
  font: string;
  sampleText?: string;
  sizes?: {
    label?: string;
    className: string;
  }[];
  variants?: {
    label?: string;
    className: string;
  }[];
}) {
  if (variants.length === 0) {
    return (
      <div className="not-content space-y-2">
        <Card className="size-full pixel-color-border!">
          <CardContent>
            {sizes.map((s) => (
              <div
                key={s.className}
                className="flex flex-col sm:flex-row gap-2 items-center"
              >
                <h2 className="font-heading sm:w-12">{s.label}</h2>
                <p
                  className={cn(
                    "flex-1 truncate",
                    s.className,
                    `font-${fontName}`,
                  )}
                >
                  {sampleText}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-0 not-content">
      <Tabs className="size-full" defaultValue={variants[0].className}>
        <TabsList>
          {variants.map(v => (
            <TabsTrigger key={v.className} value={v.className}>{v.label ?? v.className}</TabsTrigger>
          ))}
        </TabsList>
        {variants.map(v => (
          <TabsContent key={v.className} value={v.className}>
            <Card className="size-full pixel-color-border!">
              <CardContent>
                {sizes.map((s) => (
                  <div
                    key={s.className}
                    className="flex flex-col sm:flex-row gap-2 items-center"
                  >
                    <h2 className="font-heading sm:w-12">{s.label}</h2>
                    <p
                      className={cn(
                        "flex-1 truncate",
                        s.className,
                        v.className,
                        `font-${fontName}`,
                      )}
                    >
                      {sampleText}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
