import { cn } from "cn";
import { type ComponentProps, createContext, useContext, useEffect, useMemo, useState } from "react";
import type { DayPhase, Language, WMO4677Code } from "weather-i18n/wmo_4677";
import getWeatherCodeI18n from "weather-i18n/wmo_4677/i18n";

import { WeatherIcon } from "@/components/features/pxl/forecast/weather-icon";

const CurrentTimeContext = createContext<string>("");

function useCurrentTime() {
  return useContext(CurrentTimeContext);
}

function CurrentWeather({ className, ...props }: ComponentProps<"div">) {
  const [now, setNow] = useState(Date.now());

  useEffect(function tick() {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60_000); // each minute

    return () => clearInterval(interval);
  }, []);
  
  const time = useMemo(function evaluateTime() {
    const date = new Date(now);
    const currentTime =
      [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0"),
      ].join("-") +
      "T" +
      String(date.getHours()).padStart(2, "0") +
      ":00";

    return currentTime;
  }, [now]);

  return (
    <CurrentTimeContext.Provider value={time}>
      <div
        data-slot="current-weather"
        className={cn("relative flex flex-col justify-between", className)}
        {...props}
      />
    </CurrentTimeContext.Provider>
  );
}

function CurrentWeatherIcon({
  className,
  code,
  dayPhase = "day",
  ...props
}: ComponentProps<"div"> & {
  code: WMO4677Code;
  dayPhase?: DayPhase;
}) {
  return (
    <div
      data-slot="current-weather-icon"
      className={cn(
        "absolute inset-0 flex items-center justify-start ml-[13%]",
        className,
      )}
      {...props}
    >
      <WeatherIcon
        className="size-24 fill-foreground/20"
        code={code}
        dayPhase={dayPhase}
      />
    </div>
  );
}

function CurrentWeatherDate({
  className,
  date = new Date(),
  locale,
  ...props
}: ComponentProps<"time"> & {
  date?: Date | string | number;
  locale?: string;
}) {
  const formatted = useMemo(
    function formatDate() {
      if (!date) {
        return null;
      }

      const value = new Date(date);

      if (Number.isNaN(value)) {
        return null;
      }

      return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
      }).format(value);
    },
    [date, locale],
  );

  return (
    <time
      data-slot="current-weather-date"
      className="font-sans text-lg leading-4"
      {...props}
    >
      {formatted}
    </time>
  );
}

function CurrentWeatherTemperature({
  className,
  value = 0,
  unit = "°C",
  ...props
}: ComponentProps<"span"> & {
  unit?: string;
  value: number;
}) {
  const formatted = `${Math.round(value)} ${unit}`;
  return (
    <span
      data-slot="current-weather-temperature"
      className={cn("font-heading text-xl leading-6", className)}
      {...props}
    >
     {formatted} 
    </span>
  );
}

function CurrentWeatherDescription({
  className,
  locale,
  code,
  dayPhase,
  ...props
}: ComponentProps<"h3"> & {
  locale?: "en" | "es";
  code: WMO4677Code;
  dayPhase?: DayPhase;
}) {
  const description = useMemo(function getDescription() {
    const availableLanguages =  ["en", "es"];
    let selectedLanguage: Language = "en";
    if (locale) {
      const localeLang = locale.split("-")[0];
      if (availableLanguages.includes(localeLang)) {
        selectedLanguage = localeLang as Language;
      }
    } else {
      const preferred = navigator.languages.find(lang => 
        ["en", "es"].includes(lang.split("-")[0])
      )

      if (preferred) {
        selectedLanguage = preferred.split("-")[0] as Language;
      }
    }

    const t = getWeatherCodeI18n(selectedLanguage);

    return t(code, dayPhase);
  }, [locale, code, dayPhase]);

  return (
    <h3
      data-slot="current-weather-description"
      className={cn("leading-4 text-xs", className)}
      {...props}
    >
     {description} 
    </h3>
  );
}

function CurrentWeatherMinMax({ 
  className, 
  max = 0,
  min = 0,
  labels = {
    max: `Max. {temp}`,
    min: `Min. {temp}`
  },
  ...props
}: ComponentProps<"p"> & {
  max: number;
  min: number;
  labels?: {
    max: string;
    min: string;
  }
}) {
  const formatted = `${labels.max.replace("{temp}", Math.round(max).toString())} ${labels.min.replace("{temp}", Math.round(min).toString())}`

  return (
    <p
      data-slot="current-weather-minmax"
      className={cn("leading-4 text-xs", className)}
      {...props}
    >
      {formatted}
    </p>
  );
}

export {
  CurrentWeather,
  CurrentWeatherDate,
  CurrentWeatherDescription,
  CurrentWeatherIcon,
  CurrentWeatherMinMax,
  CurrentWeatherTemperature,
  useCurrentTime,
};
