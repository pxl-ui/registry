import {
  type ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { DayPhase, Language, WMO4677Code } from "weather-i18n/wmo_4677";
import getWeatherCodeI18n from "weather-i18n/wmo_4677/i18n";

import AnimatedIcon from "@/components/ui/pxl/animated-icon";
import { Badge } from "@/components/ui/pxl/badge";
import { Button } from "@/components/ui/pxl/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/pxl/card";
import { ScrollArea } from "@/components/ui/pxl/scroll-area";
import { WeatherIcon } from "@/components/ui/pxl/weather-icon";
import { cn } from "@/lib/utils";

function Weather({
  forecast,
  language = "en",
  texts,
}: {
  /** Partial object of openmeteo forecast data */
  forecast?: {
    daily: {
      temperature_2m_max: number[];
      temperature_2m_min: number[];
    };
    hourly: {
      is_day: (0 | 1)[];
      temperature_2m: number[];
      time: string[];
      weather_code: number[];
    };
    hourly_units: {
      temperature_2m: string;
    };
  };
  language?: Language;
  texts: {
    maxLabel: string;
    minLabel: string;
  };
}) {
  const title = useMemo(() => {
    return new Intl.DateTimeFormat(language, {
      day: "numeric",
      month: "long",
    }).format(new Date());
  }, [language]);

  const [now, setNow] = useState(Date.now());

  useEffect(function tick() {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60_000); // each minute

    return () => clearInterval(interval);
  }, []);

  const index = useMemo(
    function evaluateIndex() {
      if (!forecast) {
        return 0;
      }

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

      return forecast.hourly.time.indexOf(currentTime);
    },
    [forecast, now],
  );

  const weather = useMemo(() => {
    if (!forecast) {
      return null;
    }

    const code = forecast.hourly.weather_code[index] as WMO4677Code;
    const dayPhase: DayPhase = forecast.hourly.is_day[index] ? "day" : "night";

    const unit = forecast.hourly_units.temperature_2m ?? "°C";
    const current = forecast.hourly.temperature_2m[index]
      ? `${Math.round(forecast.hourly.temperature_2m[index])} ${unit}`
      : undefined;
    const summary = code
      ? getWeatherCodeI18n(language)(code, dayPhase)
      : undefined;
    const max = forecast.daily.temperature_2m_max[0]
      ? `${texts.maxLabel} ${Math.round(forecast.daily.temperature_2m_max[0])}`
      : undefined;
    const min = forecast.daily.temperature_2m_min[0]
      ? `${texts.minLabel} ${Math.round(forecast.daily.temperature_2m_min[0])}`
      : undefined;

    return {
      code,
      dayPhase,
      current,
      summary,
      max,
      min,
    };
  }, [index, forecast, texts, language]);

  return (
    <div className="flex flex-col justify-between">
      {weather && (
        <div className="absolute inset-0 flex items-center justify-start ml-[13%]">
          <WeatherIcon
            className="size-24 fill-foreground/20"
            code={weather.code}
            dayPhase={weather.dayPhase}
          />
        </div>
      )}
      <div>
        <h2 className="font-sans text-lg leading-3">{title}</h2>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row gap-1 items-end">
          <span className="font-heading text-xl leading-6">
            {weather?.current}
          </span>
        </div>
        <div className="flex flex-col">
          <h3 className="leading-4 text-xs">{weather?.summary}</h3>
          <p className="leading-4 text-xs">
            {weather?.max} {weather?.min}
          </p>
        </div>
      </div>
    </div>
  );
}

function Schedule({
  events,
  language,
}: {
  /** Partial object of gcalendar event data */
  events?: {
    end?: {
      date?: string;
      endTime?: string;
    };
    htmlLink?: string;
    id?: string;
    start?: {
      date?: string;
      dateTime?: string;
    };
    status?: "confirmed" | "tentative" | "cancelled";
    summary?: string;
  }[];
  language: Language;
}) {
  const formatGroupLabel = useCallback(
    function formatGroupLabel(dateString: string) {
      const date = new Date(dateString);

      if (Number.isNaN(date)) {
        return dateString;
      }

      const now = new Date();

      const MS_PER_DAY = 1000 * 60 * 60 * 24;
      const dateUtc = Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      );
      const nowUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
      const diff = Math.round((dateUtc - nowUtc) / MS_PER_DAY);

      const rtfFormatter = new Intl.RelativeTimeFormat(language, {
        numeric: "auto",
      });

      if (diff >= -1 && diff <= 1) {
        return rtfFormatter.format(diff, "day");
      }

      const weekdayFormatter = new Intl.DateTimeFormat(language, {
        weekday: "long",
      });
      const dateFormatter = new Intl.DateTimeFormat(language, {
        day: "numeric",
        month: "long",
      });

      const nowWeekday = now.getDay();
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - nowWeekday);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 7);

      const weekDay = weekdayFormatter.format(date);
      const monthDate = dateFormatter.format(date);

      return `${weekDay}, ${monthDate}`;
    },
    [language],
  );

  const eventGroups = useMemo(() => {
    if (!events) {
      return [];
    }

    const map = new Map<
      string,
      {
        id?: string;
        summary?: string;
        start?: string;
        sortKey?: string;
      }[]
    >();

    for (const event of events) {
      const start =
        event.start?.dateTime ??
        event.start?.date ??
        event.end?.endTime ??
        event.end?.endTime;

      if (!start) {
        continue;
      }

      try {
        const date = new Date(start);
        const key = date.toISOString().slice(0, 10);

        if (!map.has(key)) {
          map.set(key, []);
        }

        map.get(key)?.push({
          id: event.id,
          summary: event.summary,
          start: event.start?.dateTime
            ? `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`
            : undefined,
          sortKey: event.start?.dateTime,
        });
      } catch {}
    }

    const result = Array.from(map.entries())
      .map(([key, items]) => ({
        key,
        label: formatGroupLabel(key),
        items: items.sort((aI, bI) => {
          const a = aI.sortKey;
          const b = bI.sortKey;

          if (a && b) {
            return a.toString().localeCompare(b.toString());
          }

          if (!a) {
            return -1;
          }

          if (!b) {
            return 1;
          }

          return 0;
        }),
      }))
      .sort((aG, bG) => {
        const a = aG.key;
        const b = bG.key;

        if (a && b) {
          return a.toString().localeCompare(b.toString());
        }

        if (a) {
          return -1;
        }

        if (b) {
          return 1;
        }

        return 0;
      });

    return result;
  }, [formatGroupLabel, events]);

  return (
    <ScrollArea className="flex-1 min-h-0 min-w-0">
      <div className="flex flex-col gap-2 mr-2">
        {eventGroups.map((group) => (
          <div className="flex flex-col" key={group.key}>
            <Badge className="w-fit mb-1" border="notch" size="sm">
              {group.label}
            </Badge>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item, idx) => (
                <li
                  key={item.id ?? idx.toString()}
                  className="flex items-center leading-4"
                  title={item.summary}
                >
                  {item.start && (
                    <span className="text-muted-foreground mr-2 font-mono text-2xs">
                      {item.start}
                    </span>
                  )}
                  <p className="truncate text-2xs leading-4">{item.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export function DayView({
  className,
  errorMessage,
  events,
  forecast,
  language = "en",
  status = "pending",
  texts = {
    errorTitle: "Error",
    emptyState: "No data available",
    loadingTitle: "Loading...",
    maxLabel: "Max.",
    minLabel: "Min.",
    retry: "Retry",
  },
  onRetry,
}: {
  className?: string;
  errorMessage?: string;
  language?: "en" | "es";
  showEmptyState?: boolean;
  status?: "pending" | "success" | "error";
  events?: ComponentProps<typeof Schedule>["events"];
  forecast?: ComponentProps<typeof Weather>["forecast"];
  onRetry?: () => void;
  texts?: {
    emptyState: string;
    errorTitle: string;
    maxLabel: string;
    minLabel: string;
    loadingTitle: string;
    retry: string;
  };
}) {
  return (
    <Card size="lg" className={cn(className)}>
      {status !== "success" && (
        <CardHeader>
          <CardTitle>
            {status === "pending" && (
              <>
                <AnimatedIcon
                  icon={() => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 23H10V19H14V23ZM7 21H3L3 17H7V21ZM21 20H18V17H21V20ZM6 9V14H1L1 9H6ZM23 13H20V10H23V13ZM3 11V12H4V11H3ZM13 7H7L7 1L13 1V7ZM20 6H18V4L20 4V6ZM9 5H11V3H9V5Z"></path>
                    </svg>
                  )}
                  animation="spin"
                  data-slot="icon"
                />
                {texts.loadingTitle}
              </>
            )}
            {status === "error" && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 22h-4v-2h4v2Zm-4-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2Zm-5-1h-2v-2h2v2Zm-7-1H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 14H2v-4h2v4Zm18 0h-2v-4h2v4Zm-9-7v6h-2V7h2Zm-7 3H4V8h2v2Zm14 0h-2V8h2v2ZM8 8H6V6h2v2Zm10 0h-2V6h2v2Zm-8-2H8V4h2v2Zm6 0h-2V4h2v2Zm-2-2h-4V2h4v2Z"></path>
                </svg>
                {texts.errorTitle}
              </>
            )}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent>
        {status === "error" && (
          <div className="h-30 flex flex-col gap-1 items-center justify-center px-4 text-center">
            <p className="text-sm text-muted-foreground">{errorMessage}</p>
            <Button size="xs" onClick={onRetry}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 20H9V18H13V20ZM19 16H21V18H19V20H17V18H15V16H17V8H19V16ZM9 18H7V16H9V18ZM7 6H9V8H7V16H5V8H3V6H5V4H7V6ZM15 16H13V14H15V16ZM23 16H21V14H23V16ZM3 10H1V8H3V10ZM11 10H9V8H11V10ZM17 8H15V6H17V8ZM15 6H11V4H15V6Z"></path>
              </svg>
              {texts.retry}
            </Button>
          </div>
        )}

        {status === "success" && (
          <div className="grid grid-cols-2 gap-(--card-spacing) h-full">
            <Weather language={language} texts={texts} forecast={forecast} />

            <Schedule language={language} events={events} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
