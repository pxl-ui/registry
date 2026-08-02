import type { ComponentType, SVGProps } from "react";

type WeatherCode =
  | 0
  | 1
  | 2
  | 3
  | 45
  | 48
  | 51
  | 53
  | 55
  | 56
  | 57
  | 61
  | 63
  | 65
  | 66
  | 67
  | 71
  | 73
  | 75
  | 77
  | 80
  | 81
  | 82
  | 85
  | 86
  | 95
  | 96
  | 99;

type Daylight = "day" | "night";

const Icons = {
  CloudMoon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="cloud-moon-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M14 22H4v-2h10v2ZM4 20H2v-4h2v4Zm12 0h-2v-4h2v4Zm-6-2H8v-2h2v2Zm-2-2H4v-2h4v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H8v-2h4v2Zm10 0h-2v-4h-2V8h2V6h2v8Zm-4-2h-4v-2h4v2ZM8 10H6V6h2v4Zm6 0h-2V6h2v4Zm-4-4H8V4h2v2Zm8-2h-2v2h-2V4h-4V2h8v2Z"></path>
      </svg>
    );
  },
  Cloud(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="cloud-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M22 20H2v-2h20v2ZM2 18H0v-6h2v6Zm22 0h-2v-6h2v6Zm-6-6v2h-2v-2h2ZM4 12H2v-2h2v2Zm6 0H8v-2h2v2Zm10-2h2v2h-4V8h2v2ZM8 10H4V8h4v2Zm2-2H8V6h2v2Zm8 0h-2V6h2v2Zm-2-2h-6V4h6v2Z"></path>
      </svg>
    );
  },
  CloudSnow(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="cloud-snow-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M8 24H6v-2h2v2Zm12-1h-2v-2h2v2ZM6 22H4v-2h2v2Zm4 0H8v-2h2v2Zm-8-2H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-2H2v-2h8v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
      </svg>
    );
  },
  CloudSnow2(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="cloud-snow-2-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M5 24H2v-2h3v2Zm17 0h-3v-2h3v2ZM2 22H0v-3h2v3Zm5 0H5v-3h2v3Zm12 0h-2v-3h2v3Zm5 0h-2v-3h2v3Zm-10-1h-4v-2h4v2Zm-9-2H2v-2h3v2Zm5 0H8v-3h2v3Zm6 0h-2v-3h2v3Zm6 0h-3v-2h3v2Zm-8-3h-4v-2h4v2Zm-8-1H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 13H0V8h2v5Zm22 0h-2V8h2v5Zm-6-3h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
      </svg>
    );
  },
  CloudSun(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="cloud-sun-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M14 22H4v-2h10v2ZM4 20H2v-4h2v4Zm12 0h-2v-4h2v4Zm-6-2H8v-2h2v2Zm-2-2H4v-2h4v2Zm6 0h-2v-2h2v2Zm-2-2H8v-2h4v2Zm12-1h-4v-2h4v2Zm-6-1h-2v-2h2v2ZM8 10H6V8h2v2Zm8 0h-2V8h2v2Zm-2-2H8V6h6v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2ZM4 4H2V2h2v2Zm9 0h-2V0h2v4Zm9 0h-2V2h2v2Z"></path>
      </svg>
    );
  },
  CloudThunder(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="cloud-thunder-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M12 22h-2v-2h2v2Zm2-2h-2v-2H8v-2h2v-2h2v2h4v2h-2v2Zm-8-2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 16H0v-6h2v6Zm22 0h-2v-6h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2v-2h2v2ZM4 10H2V8h2v2Zm6 0H8V8h2v2Zm10-2h2v2h-4V6h2v2ZM8 8H4V6h4v2Zm2-2H8V4h2v2Zm8 0h-2V4h2v2Zm-2-2h-6V2h6v2Z"></path>
      </svg>
    );
  },
  CloudThunderRain(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="cloud-thunder-rain-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M6 24H4v-2h2v2Zm8 0h-2v-2h2v2ZM2 22H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM4 20H2v-2h2v2Zm8 0h-2v-2h2v2Zm10 0h-2v-2h2v2Zm-10-6h4v2h-2v2h-2v-2H8v-2h2v-2h2v2Zm-6 2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
      </svg>
    );
  },
  Moon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="moon-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M18 22H8v-2h10v2ZM8 20H6v-2h2v2Zm12 0h-2v-2h2v2ZM6 18H4v-2h2v2Zm16 0h-2v-4h-2v-2h2v-2h2v8ZM4 16H2V6h2v10Zm14 0h-6v-2h6v2Zm-6-2h-2v-2h2v2Zm-2-2H8V6h2v6ZM6 6H4V4h2v2Zm8-2h-2v2h-2V4H6V2h8v2Z"></path>
      </svg>
    );
  },
  Rain(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="rain-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M7 24H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm5-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
      </svg>
    );
  },
  Rain2(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="rain-2-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
      </svg>
    );
  },
  Sun(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="sun-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M13 22h-2v-3h2v3Zm-6-3H5v-2h2v2Zm12 0h-2v-2h2v2Zm-4-2H9v-2h6v2Zm-6-2H7V9h2v6Zm8 0h-2V9h2v6ZM5 13H2v-2h3v2Zm17 0h-3v-2h3v2Zm-7-4H9V7h6v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Zm-6-2h-2V2h2v3Z"></path>
      </svg>
    );
  },
  Waves(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        aria-label="waves-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M10 20H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 18H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2Zm-12-4H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 12H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2ZM10 8H6V6h4v2Zm8 0h-4V6h4v2ZM6 6H2V4h4v2Zm8 0h-4V4h4v2Zm8-2v2h-4V4h4Z"></path>
      </svg>
    );
  }
}

const Codes: Record<WeatherCode, Record<Daylight, keyof typeof Icons>> = {
  "0": {
    "day": "Sun",
    "night": "Moon"
  },
  "1": {
    "day": "CloudSun",
    "night": "CloudMoon"
  },
  "2": {
    "day": "CloudSun",
    "night": "CloudMoon"
  },
  "3": {
    "day": "Cloud",
    "night": "Cloud"
  },
  "45": {
    "day": "Waves",
    "night": "Waves"
  },
  "48": {
    "day": "Waves",
    "night": "Waves"
  },
  "51": {
    "day": "Rain",
    "night": "Rain"
  },
  "53": {
    "day": "Rain",
    "night": "Rain"
  },
  "55": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "56": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "57": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "61": {
    "day": "Rain",
    "night": "Rain"
  },
  "63": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "65": {
    "day": "CloudThunderRain",
    "night": "CloudThunderRain"
  },
  "66": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "67": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "71": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "73": {
    "day": "CloudSnow",
    "night": "CloudSnow"
  },
  "75": {
    "day": "CloudSnow2",
    "night": "CloudSnow2"
  },
  "77": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "80": {
    "day": "Rain",
    "night": "Rain"
  },
  "81": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "82": {
    "day": "CloudThunderRain",
    "night": "CloudThunderRain"
  },
  "85": {
    "day": "Rain2",
    "night": "Rain2"
  },
  "86": {
    "day": "CloudSnow2",
    "night": "CloudSnow2"
  },
  "95": {
    "day": "CloudThunder",
    "night": "CloudThunder"
  },
  "96": {
    "day": "CloudThunderRain",
    "night": "CloudThunderRain"
  },
  "99": {
    "day": "CloudThunder",
    "night": "CloudThunder"
  }
}

export function WeatherIcon({
  className,
  code,
  daylight = "day",
}: {
  className?: string;
  code: WeatherCode;
  daylight?: Daylight;
}) {
  const Icon = Icons[Codes[code][daylight]];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
}