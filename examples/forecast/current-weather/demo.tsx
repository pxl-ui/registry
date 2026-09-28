import { useMemo } from "react";

import {
  CurrentWeather,
  CurrentWeatherDate,
} from "@/components/features/pxl/forecast/current-weather";
import {
  CurrentWeatherDescription,
  CurrentWeatherIcon,
  CurrentWeatherMinMax,
  CurrentWeatherTemperature,
} from "@/components/features/pxl/forecast/openmeteo/current-weather";
import type { OpenMeteo } from "@/lib/schemas/pxl/openmeteo";

export default function CurrentWeatherDemo() {
  const hourlyTimeRange = useMemo(() => {
    // sv-SE returns date in correct ISO format (YYYY-MM-DD)
    const isoDate = new Date().toLocaleDateString("sv-SE");

    return Array(24)
      .fill(null)
      .map((_, idx) => `${isoDate}T${idx.toString().padStart(2, "0")}:00`);
  }, []);

  const forecast = {
    hourly_units: {
      temperature_2m: "°C",
    },
    hourly: {
      time: hourlyTimeRange,
      temperature_2m: [
        23.6, 23.3, 23, 23, 23, 22.5, 22.4, 22.4, 22.4, 23.3, 24.6, 25.6, 25.4,
        25.4, 25.4, 25.3, 25.3, 25.5, 25.1, 25.4, 25.3, 24.5, 25, 24.7,
      ],
      weather_code: [
        0, 0, 3, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 1, 3, 3, 3, 1, 3, 3, 3, 3, 51, 3,
      ],
      is_day: [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      ],
    },
    daily: {
      temperature_2m_max: [25.6],
      temperature_2m_min: [22.4],
    },
  } as OpenMeteo.Forecast;

  return (
    <CurrentWeather className="h-36">
      <CurrentWeatherIcon forecast={forecast} />

      <CurrentWeatherDate />

      <div className="flex flex-col">
        <CurrentWeatherTemperature forecast={forecast} />
        <div className="flex flex-col">
          <CurrentWeatherDescription forecast={forecast} />
          <CurrentWeatherMinMax forecast={forecast} />
        </div>
      </div>
    </CurrentWeather>
  );
}
