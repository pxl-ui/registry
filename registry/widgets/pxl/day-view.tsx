import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/pxl/card";
import { WeatherIcon } from "@/components/ui/pxl/weather-icon";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function DayView({ className }: Props) {
  return (
    <Card size="lg" className={cn(className)}>
      <CardContent>
        <div className="absolute inset-0 flex items-center justify-start ml-[13%]">
          <WeatherIcon
            className="size-24 fill-foreground/20"
            code={2}
            daylight="day"
          />
        </div>
          <div className="grid grid-cols-2 gap-(--card-spacing) h-full">
              
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="font-sans text-xl leading-3">
                  Viernes, 7 de Julio
                </h2>
                <p className="grayscale line-clamp-1">
                  San Fermín
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-end">
                  <span className="font-heading text-2xl leading-6">
                    25º C
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="leading-4 text-sm">
                    Sol y Nubes
                  </h3>
                  <p className="leading-4 text-sm">
                    21 Mín, 22 Max
                  </p>
                </div>

              </div>

            </div>



          <div className="flex flex-col gap-2">
            <div>
              <h3 className="pixel-notch inline-flex h-4 items-center bg-primary px-4 leading-3 text-primary-foreground font-heading font-bold italic text-2xs truncate">
                Mañana
              </h3>
            </div>

          </div>

          </div>
      </CardContent>
    </Card>
  );
}
