import { formatColor } from "gimp-palette";
import { Fragment } from "react";

import { Card, CardContent } from "@/components/ui/pxl/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/pxl/tabs";
import { cn } from "@/lib/utils";
import { palettes } from "~/lib/colors";

export default function ColorPreview({
  activeTab = "swatches",
  gradients  = [],
  palette: paletteName,
  theme = [
    { label: "Shadcn", className: "" }
  ],
  variants = [
    { label: "Primary", className: "bg-primary text-primary-foreground"},
    { label: "Success", className: "bg-success text-success-foreground"},
    { label: "Danger", className: "bg-danger text-danger-foreground"},
    { label: "Warning", className: "bg-warning text-warning-foreground"},
    { label: "Info", className: "bg-info text-info-foreground"},
  ]
}: {
  activeTab?: "swatches" | "theme" | "variants" | "gradients",
  gradients?: {
    label?: string;
    className: string;
  }[];
  palette: string;
  theme?: {
    label?: string;
    className: string;
  }[];
  variants?: {
    label?: string;
    className: string;
  }[];
}) {
  const palette = palettes.get(paletteName);

  if (!palette) {
    return null;
  }

  const { colors, columns = 1 } = palette;

  const rows = Math.ceil(colors.length / columns);

  return (
    <div className="mt-0 not-content">
      <Tabs className="size-full" defaultValue={activeTab}>
        <TabsList>
          <TabsTrigger value="swatches">Swatches</TabsTrigger>
          {theme.length > 0 && <TabsTrigger value="theme">Theme</TabsTrigger>}
          {variants.length > 0 && (<TabsTrigger value="variants">Variants</TabsTrigger>)}
          {gradients.length > 0 && (<TabsTrigger value="gradients">Gradients</TabsTrigger>)}
        </TabsList>
        <TabsContent value="swatches">
          <Card className="size-full pixel-color-border!">
            <CardContent scrollable>
              <div
                className="grid gap-0.5 sm:gap-2 md:gap-3 justify-center"
                style={{
                  gridTemplateColumns:
                    columns > 1
                      ? `max-content repeat(${columns}, minmax(0, 50px))`
                      : `max-content 1fr`,
                }}
              >
                {columns > 1 && (
                  <p className="text-muted-foreground self-center text-xs w-fit my-2">
                    {columns > 1 && rows > 1 ? `${rows} rows` : ""}
                  </p>
                )}
                {columns > 1 &&
                  Array(columns)
                    .fill(null)
                    .map((_, idx) => {

                      const label = colors[idx].name.split(" ").reverse()[0];

                      return (
                        <p key={`col-${idx.toString()}`}
                          className="[writing-mode:horizontal-tb] rotate-270 w-fit my-2 md:[writing-mode:unset] md:rotate-0">
                          {label ?? idx}
                        </p>
                      );
                    })}
                {colors.map((c, idx) => {
                  if (columns === 1) {
                    return (
                      <Fragment key={c.name}>
                        <p className="flex items-center">{c.name}</p>
                        <p
                          className={cn(
                            "pixel-rounded pixel-size-lg w-full h-10",
                            `bg-pico-${c.name}`,
                          )}
                          style={{
                            backgroundColor: formatColor(c, "oklch"), // We need to force the color because this classes are only available on run time
                          }}
                        ></p>
                      </Fragment>
                    );
                  }

                  const isStart = idx % columns === 0;
                  let label = c.name;
                  if (c.name.includes(" ")) {
                    const [_, ...labelParts] = c.name.split(" ").reverse();
                    label = labelParts.reverse().join(" ");
                  }

                  return (
                    <Fragment key={c.name}>
                      {isStart && (
                        <p className="flex items-center">
                          {label}
                        </p>
                      )}
                      <div>
                        <p
                          className={cn(
                            "pixel-rounded pixel-size-lg w-full aspect-square",
                            `bg-pico-${c.name}`,
                          )}
                          style={{
                            backgroundColor: formatColor(c, "oklch"), // We need to force the color because this classes are only available on run time
                          }}
                        ></p>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {theme.length > 0 && (
          <TabsContent value="theme">
            <Card className="size-full pixel-color-border!">
              <CardContent>
                <div className={cn("flex flex-col gap-2", `colors-${paletteName}`)}>
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <p className="pixel-rounded pixel-size-lg bg-background text-foreground font-sans text-sm w-full h-10 px-3 flex items-center">
                      Background
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <p className="pixel-rounded pixel-size-lg bg-card text-card-foreground font-sans text-sm w-full h-10 px-3 flex items-center">
                      Card
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <p className="pixel-rounded pixel-size-lg bg-popover text-popover-foreground font-sans text-sm w-full h-10 px-3 flex items-center">
                      Popover
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <p className="pixel-rounded pixel-size-lg bg-muted text-muted-foreground font-sans text-sm w-full h-10 px-3 flex items-center">
                      Muted
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <p className="pixel-rounded pixel-size-lg bg-accent text-accent-foreground font-sans text-sm w-full h-10 px-3 flex items-center">
                      Accent
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <h2 className="font-sans text-sm sm:w-30">Border</h2>
                    <div className="p-1 pixel-border pixel-color-border pixel-size-lg w-full h-10">
                      <div className="size-full bg-background"></div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <h2 className="font-sans text-sm sm:w-30">Input</h2>
                    <div className="p-1 pixel-border pixel-color-input pixel-size-lg w-full h-10">
                      <div className="size-full bg-background"></div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <h2 className="font-sans text-sm sm:w-30">Ring</h2>
                    <div className="p-1 pixel-border pixel-color-ring pixel-size-lg w-full h-10">
                      <div className="size-full bg-background"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
        {variants.length > 0 && (<TabsContent value="variants">
          <Card className="size-full pixel-color-border!">
            <CardContent>
              <div className={cn("flex flex-col gap-2", `colors-${paletteName}`)}>
                {variants.map(v => (
                  <div key={v.label ?? v.className} className="flex flex-col sm:flex-row gap-2 items-center">
                    <p className={cn("pixel-rounded pixel-size-lg w-full h-10 font-sans text-sm px-3 flex items-center", v.className)}>
                      {v.label ?? v.className}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>)}
        {gradients.length > 0 && (
          <TabsContent value="gradients">
            <Card className="size-full pixel-color-border!">
              <CardContent>
                <div className={cn("flex flex-col gap-2", `colors-${paletteName}`)}>
                  {gradients.map(g => (
                    <div key={g.className} className="flex flex-col sm:flex-row gap-2 items-center">
                      <h2 className="font-sans text-sm sm:w-30">{g.label ?? g.className}</h2>
                      <p className={cn("w-full h-10", g.className)}></p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
