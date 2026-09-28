import type { ComponentProps } from "react";
import type { DayPhase, WMO4677Code } from "weather-i18n/wmo_4677";

import {
  CurrentWeatherDescription as BaseCurrentWeatherDescription,
  CurrentWeatherIcon as BaseCurrentWeatherIcon,
  CurrentWeatherMinMax as BaseCurrentWeatherMinMax,
  CurrentWeatherTemperature as BaseCurrentWeatherTemperature,
  useCurrentTime,
} from "@/components/features/pxl/forecast/current-weather";
import type { OpenMeteo } from "@/lib/schemas/pxl/openmeteo";

function CurrentWeatherIcon({
  forecast,
  ...props
}: Omit<ComponentProps<typeof BaseCurrentWeatherIcon>, "code" | "dayPhase"> & {
  forecast: OpenMeteo.Forecast;
}) {
  const currentTime = useCurrentTime();
  const timeIndex = forecast.hourly.time.indexOf(currentTime);

  const code = forecast.hourly.weather_code[timeIndex] as WMO4677Code;
  const dayPhase: DayPhase = forecast.hourly.is_day[timeIndex]
    ? "day"
    : "night";

  return <BaseCurrentWeatherIcon code={code} dayPhase={dayPhase} {...props} />;
}

function CurrentWeatherTemperature({
  forecast,
  ...props
}: Omit<
  ComponentProps<typeof BaseCurrentWeatherTemperature>,
  "value" | "unit"
> & {
  forecast: OpenMeteo.Forecast;
}) {
  const currentTime = useCurrentTime();
  const timeIndex = forecast.hourly.time.indexOf(currentTime);

  const unit = forecast.hourly_units.temperature_2m ?? "°C";
  const current = forecast.hourly.temperature_2m[timeIndex];

  return (
    <BaseCurrentWeatherTemperature value={current} unit={unit} {...props} />
  );
}

function CurrentWeatherDescription({
  forecast,
  ...props
}: Omit<
  ComponentProps<typeof BaseCurrentWeatherDescription>,
  "code" | "dayPhase"
> & {
  forecast: OpenMeteo.Forecast;
}) {
  const currentTime = useCurrentTime();
  const timeIndex = forecast.hourly.time.indexOf(currentTime);

  const code = forecast.hourly.weather_code[timeIndex] as WMO4677Code;
  const dayPhase: DayPhase = forecast.hourly.is_day[timeIndex]
    ? "day"
    : "night";

  return (
    <BaseCurrentWeatherDescription code={code} dayPhase={dayPhase} {...props} />
  );
}

function CurrentWeatherMinMax({
  forecast,
  ...props
}: Omit<ComponentProps<typeof BaseCurrentWeatherMinMax>, "min" | "max"> & {
  forecast: OpenMeteo.Forecast;
}) {
  const max = forecast.daily.temperature_2m_max[0];
  const min = forecast.daily.temperature_2m_min[0];

  return <BaseCurrentWeatherMinMax min={min} max={max} {...props} />;
}

export {
  CurrentWeatherDescription,
  CurrentWeatherIcon,
  CurrentWeatherMinMax,
  CurrentWeatherTemperature,
};
