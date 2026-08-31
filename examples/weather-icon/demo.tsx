import { WeatherIcon } from "@/components/ui/pxl/weather-icon";

export default function WeatherIconDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2.5">
      <WeatherIcon className="size-12" code={2} />
      <WeatherIcon className="size-12" code={2} dayPhase="night" />
    </div>
  );
}
