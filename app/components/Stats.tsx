import { Card, CardContent } from "@/components/ui/pxl/card";
import { Separator } from "@/components/ui/pxl/separator";
import { count } from "~/lib/registry";
import { url } from "~/lib/utils";

const backgrounds = count({ categories: ["background"] });
const ui = count({ categories: ["components"] });
const features = count({ categories: ["features"] });
const widgets = count({ categories: ["widgets"] });
const colors = count({ categories: ["color-palette"] });
const displays = count({ categories: ["displays"] });
const fonts = count({ categories: ["font-family"] });
const icons = count({ categories: ["icons"] });
const schemas = count({ categories: ["schemas"]});


const components = ui + features + widgets;
const customizationOptions = colors + fonts + icons + backgrounds;
const utilities = schemas + displays;

export default function LandingPageStats() {
  return (
    <div className="not-content mb-16">
      <div className="w-full grid grid-cols-3 gap-4">
        <a href={url("components")}>
          <Card size="lg" className="h-32 pixel-color-border! hover:pixel-color-foreground!">
            <CardContent className="flex flex-col justify-center items-center">
              <span className="font-mono font-bold text-2xl md:text-4xl">
                +{components}
              </span>
              <span className="font-heading text-sm md:text-lg">
              Components
              </span>
            </CardContent>
          </Card>
        </a>
        <a href={url("customization")}>
          <Card size="lg" className="h-32 pixel-color-border! hover:pixel-color-foreground!">
            <CardContent className="flex flex-col justify-center items-center">
              <span className="font-mono font-bold text-2xl md:text-4xl">
              +{customizationOptions}
              </span>
              <span className="font-heading text-sm md:text-lg text-center">
              Customization Options
              </span>
            </CardContent>
          </Card>
        </a>
        <a href={url("utilities/pixels")}>
          <Card size="lg" className="h-32 pixel-color-border! hover:pixel-color-foreground!">
            <CardContent className="flex flex-col justify-center items-center">
              <span className="font-mono font-bold text-2xl md:text-4xl">
              +{utilities}
              </span>
              <span className="font-heading text-sm md:text-lg">
              Utilities
              </span>
            </CardContent>
          </Card>
        </a>
      </div>
      <Separator size="lg" border="dashed" className="mt-12" />
    </div>
  );
}
