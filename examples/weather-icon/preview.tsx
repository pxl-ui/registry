import type { WMO4677Code } from "weather-i18n/wmo_4677";
import getWeatherCodeI18n from "weather-i18n/wmo_4677/i18n";

import { WeatherIcon } from "@/components/ui/pxl/weather-icon";

const t = getWeatherCodeI18n("en");

export default function WeatherIconDemo() {
  return (
    <div className="flex flex-col gap-2">
      <table>
        <tbody>
          {Array(100)
            .fill(null)
            .map((_, idx) => {
              const code = idx as WMO4677Code;

              const label = t(code);

              if (!label) {
                return null;
              }

              return (
                <tr key={idx.toString()} className="text-muted-foreground hover:text-foreground">
                  <th className="px-1 font-mono font-normal">#{idx.toString().padStart(2, "0")}</th>
                  <th className="px-1 font-normal truncate">{label}</th>
                  <th className="px-1 font-normal">
                    <WeatherIcon className="size-4" code={code} />
                  </th>
                  <th className="px-1 font-normal truncate">{t(code, "night")}</th>
                  <th className="px-1 font-normal">
                    <WeatherIcon
                      className="size-4 "
                      code={code}
                      dayPhase="night"
                    />
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
