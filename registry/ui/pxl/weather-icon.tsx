import type { SVGProps } from "react";
import type { DayPhase, WMO4677Code } from "weather-i18n/wmo_4677";

type CodeMapping = Record<
  DayPhase,
  (props: SVGProps<SVGSVGElement>) => React.JSX.Element
>;

const Icons: Partial<Record<WMO4677Code, CodeMapping>> = {
  // Sunny/Clear
  0: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M13 22h-2v-3h2v3Zm-6-3H5v-2h2v2Zm12 0h-2v-2h2v2Zm-4-2H9v-2h6v2Zm-6-2H7V9h2v6Zm8 0h-2V9h2v6ZM5 13H2v-2h3v2Zm17 0h-3v-2h3v2Zm-7-4H9V7h6v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Zm-6-2h-2V2h2v3Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M18 22H8v-2h10v2ZM8 20H6v-2h2v2Zm12 0h-2v-2h2v2ZM6 18H4v-2h2v2Zm16 0h-2v-4h-2v-2h2v-2h2v8ZM4 16H2V6h2v10Zm14 0h-6v-2h6v2Zm-6-2h-2v-2h2v2Zm-2-2H8V6h2v6ZM6 6H4V4h2v2Zm8-2h-2v2h-2V4H6V2h8v2Z"></path>
        </svg>
      );
    },
  },
  // Mainly Sunny/Clear
  1: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M14 22H4v-2h10v2ZM4 20H2v-4h2v4Zm12 0h-2v-4h2v4Zm-6-2H8v-2h2v2Zm-2-2H4v-2h4v2Zm6 0h-2v-2h2v2Zm-2-2H8v-2h4v2Zm12-1h-4v-2h4v2Zm-6-1h-2v-2h2v2ZM8 10H6V8h2v2Zm8 0h-2V8h2v2Zm-2-2H8V6h6v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2ZM4 4H2V2h2v2Zm9 0h-2V0h2v4Zm9 0h-2V2h2v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M14 22H4v-2h10v2ZM4 20H2v-4h2v4Zm12 0h-2v-4h2v4Zm-6-2H8v-2h2v2Zm-2-2H4v-2h4v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H8v-2h4v2Zm10 0h-2v-4h-2V8h2V6h2v8Zm-4-2h-4v-2h4v2ZM8 10H6V6h2v4Zm6 0h-2V6h2v4Zm-4-4H8V4h2v2Zm8-2h-2v2h-2V4h-4V2h8v2Z"></path>
        </svg>
      );
    },
  },
  // Partly Cloudy
  2: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M14 22H4v-2h10v2ZM4 20H2v-4h2v4Zm12 0h-2v-4h2v4Zm-6-2H8v-2h2v2Zm-2-2H4v-2h4v2Zm6 0h-2v-2h2v2Zm-2-2H8v-2h4v2Zm12-1h-4v-2h4v2Zm-6-1h-2v-2h2v2ZM8 10H6V8h2v2Zm8 0h-2V8h2v2Zm-2-2H8V6h6v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2ZM4 4H2V2h2v2Zm9 0h-2V0h2v4Zm9 0h-2V2h2v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M14 22H4v-2h10v2ZM4 20H2v-4h2v4Zm12 0h-2v-4h2v4Zm-6-2H8v-2h2v2Zm-2-2H4v-2h4v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H8v-2h4v2Zm10 0h-2v-4h-2V8h2V6h2v8Zm-4-2h-4v-2h4v2ZM8 10H6V6h2v4Zm6 0h-2V6h2v4Zm-4-4H8V4h2v2Zm8-2h-2v2h-2V4h-4V2h8v2Z"></path>
        </svg>
      );
    },
  },
  // Cloudy
  3: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M22 20H2v-2h20v2ZM2 18H0v-6h2v6Zm22 0h-2v-6h2v6Zm-6-6v2h-2v-2h2ZM4 12H2v-2h2v2Zm6 0H8v-2h2v2Zm10-2h2v2h-4V8h2v2ZM8 10H4V8h4v2Zm2-2H8V6h2v2Zm8 0h-2V6h2v2Zm-2-2h-6V4h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M22 20H2v-2h20v2ZM2 18H0v-6h2v6Zm22 0h-2v-6h2v6Zm-6-6v2h-2v-2h2ZM4 12H2v-2h2v2Zm6 0H8v-2h2v2Zm10-2h2v2h-4V8h2v2ZM8 10H4V8h4v2Zm2-2H8V6h2v2Zm8 0h-2V6h2v2Zm-2-2h-6V4h6v2Z"></path>
        </svg>
      );
    },
  },
  // Foggy
  45: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M10 20H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 18H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2Zm-12-4H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 12H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2ZM10 8H6V6h4v2Zm8 0h-4V6h4v2ZM6 6H2V4h4v2Zm8 0h-4V4h4v2Zm8-2v2h-4V4h4Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M10 20H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 18H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2Zm-12-4H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 12H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2ZM10 8H6V6h4v2Zm8 0h-4V6h4v2ZM6 6H2V4h4v2Zm8 0h-4V4h4v2Zm8-2v2h-4V4h4Z"></path>
        </svg>
      );
    },
  },
  // Rime Fog
  48: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M10 20H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 18H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2Zm-12-4H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 12H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2ZM10 8H6V6h4v2Zm8 0h-4V6h4v2ZM6 6H2V4h4v2Zm8 0h-4V4h4v2Zm8-2v2h-4V4h4Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M10 20H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 18H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2Zm-12-4H6v-2h4v2Zm8 0h-4v-2h4v2ZM6 12H2v-2h4v2Zm8 0h-4v-2h4v2Zm8 0h-4v-2h4v2ZM10 8H6V6h4v2Zm8 0h-4V6h4v2ZM6 6H2V4h4v2Zm8 0h-4V4h4v2Zm8-2v2h-4V4h4Z"></path>
        </svg>
      );
    },
  },
  // Light Drizzle
  51: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M7 24H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm5-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M7 24H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm5-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Drizzle
  53: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M7 24H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm5-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M7 24H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm5-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Heavy Drizzle
  55: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Light Freezing Drizzle
  56: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Freezing Drizzle
  "57": {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Light Rain
  61: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M7 24H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm5-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M7 24H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm5-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Rain
  63: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Heavy Rain
  65: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M6 24H4v-2h2v2Zm8 0h-2v-2h2v2ZM2 22H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM4 20H2v-2h2v2Zm8 0h-2v-2h2v2Zm10 0h-2v-2h2v2Zm-10-6h4v2h-2v2h-2v-2H8v-2h2v-2h2v2Zm-6 2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M6 24H4v-2h2v2Zm8 0h-2v-2h2v2ZM2 22H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM4 20H2v-2h2v2Zm8 0h-2v-2h2v2Zm10 0h-2v-2h2v2Zm-10-6h4v2h-2v2h-2v-2H8v-2h2v-2h2v2Zm-6 2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Light Freezing Rain
  66: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Freezing Rain
  67: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Light Snow
  71: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M8 24H6v-2h2v2Zm12-1h-2v-2h2v2ZM6 22H4v-2h2v2Zm4 0H8v-2h2v2Zm-8-2H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-2H2v-2h8v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M8 24H6v-2h2v2Zm12-1h-2v-2h2v2ZM6 22H4v-2h2v2Zm4 0H8v-2h2v2Zm-8-2H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-2H2v-2h8v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Snow
  73: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M8 24H6v-2h2v2Zm12-1h-2v-2h2v2ZM6 22H4v-2h2v2Zm4 0H8v-2h2v2Zm-8-2H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-2H2v-2h8v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M8 24H6v-2h2v2Zm12-1h-2v-2h2v2ZM6 22H4v-2h2v2Zm4 0H8v-2h2v2Zm-8-2H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-2H2v-2h8v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Heavy Snow
  75: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M5 24H2v-2h3v2Zm17 0h-3v-2h3v2ZM2 22H0v-3h2v3Zm5 0H5v-3h2v3Zm12 0h-2v-3h2v3Zm5 0h-2v-3h2v3Zm-10-1h-4v-2h4v2Zm-9-2H2v-2h3v2Zm5 0H8v-3h2v3Zm6 0h-2v-3h2v3Zm6 0h-3v-2h3v2Zm-8-3h-4v-2h4v2Zm-8-1H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 13H0V8h2v5Zm22 0h-2V8h2v5Zm-6-3h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M5 24H2v-2h3v2Zm17 0h-3v-2h3v2ZM2 22H0v-3h2v3Zm5 0H5v-3h2v3Zm12 0h-2v-3h2v3Zm5 0h-2v-3h2v3Zm-10-1h-4v-2h4v2Zm-9-2H2v-2h3v2Zm5 0H8v-3h2v3Zm6 0h-2v-3h2v3Zm6 0h-3v-2h3v2Zm-8-3h-4v-2h4v2Zm-8-1H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 13H0V8h2v5Zm22 0h-2V8h2v5Zm-6-3h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Snow Grains
  77: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M8 24H6v-2h2v2Zm12-1h-2v-2h2v2ZM6 22H4v-2h2v2Zm4 0H8v-2h2v2Zm-8-2H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-2H2v-2h8v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M8 24H6v-2h2v2Zm12-1h-2v-2h2v2ZM6 22H4v-2h2v2Zm4 0H8v-2h2v2Zm-8-2H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-2H2v-2h8v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Light Showers
  80: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M7 24H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm5-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M7 24H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 20H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm5-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Showers
  81: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M2 24H0v-2h2v2Zm8 0H8v-2h2v2Zm8 0h-2v-2h2v2ZM4 22H2v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM6 20H4v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm0-4H2v-2h20v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Heavy Showers
  82: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M6 24H4v-2h2v2Zm8 0h-2v-2h2v2ZM2 22H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM4 20H2v-2h2v2Zm8 0h-2v-2h2v2Zm10 0h-2v-2h2v2Zm-10-6h4v2h-2v2h-2v-2H8v-2h2v-2h2v2Zm-6 2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M6 24H4v-2h2v2Zm8 0h-2v-2h2v2ZM2 22H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM4 20H2v-2h2v2Zm8 0h-2v-2h2v2Zm10 0h-2v-2h2v2Zm-10-6h4v2h-2v2h-2v-2H8v-2h2v-2h2v2Zm-6 2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Light Snow Showers
  85: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M8 24H6v-2h2v2Zm12-1h-2v-2h2v2ZM6 22H4v-2h2v2Zm4 0H8v-2h2v2Zm-8-2H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-2H2v-2h8v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M8 24H6v-2h2v2Zm12-1h-2v-2h2v2ZM6 22H4v-2h2v2Zm4 0H8v-2h2v2Zm-8-2H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-2H2v-2h8v2Zm6 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-6-4h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Snow Showers
  86: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M5 24H2v-2h3v2Zm17 0h-3v-2h3v2ZM2 22H0v-3h2v3Zm5 0H5v-3h2v3Zm12 0h-2v-3h2v3Zm5 0h-2v-3h2v3Zm-10-1h-4v-2h4v2Zm-9-2H2v-2h3v2Zm5 0H8v-3h2v3Zm6 0h-2v-3h2v3Zm6 0h-3v-2h3v2Zm-8-3h-4v-2h4v2Zm-8-1H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 13H0V8h2v5Zm22 0h-2V8h2v5Zm-6-3h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M5 24H2v-2h3v2Zm17 0h-3v-2h3v2ZM2 22H0v-3h2v3Zm5 0H5v-3h2v3Zm12 0h-2v-3h2v3Zm5 0h-2v-3h2v3Zm-10-1h-4v-2h4v2Zm-9-2H2v-2h3v2Zm5 0H8v-3h2v3Zm6 0h-2v-3h2v3Zm6 0h-3v-2h3v2Zm-8-3h-4v-2h4v2Zm-8-1H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 13H0V8h2v5Zm22 0h-2V8h2v5Zm-6-3h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Thunderstorm
  95: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M12 22h-2v-2h2v2Zm2-2h-2v-2H8v-2h2v-2h2v2h4v2h-2v2Zm-8-2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 16H0v-6h2v6Zm22 0h-2v-6h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2v-2h2v2ZM4 10H2V8h2v2Zm6 0H8V8h2v2Zm10-2h2v2h-4V6h2v2ZM8 8H4V6h4v2Zm2-2H8V4h2v2Zm8 0h-2V4h2v2Zm-2-2h-6V2h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M12 22h-2v-2h2v2Zm2-2h-2v-2H8v-2h2v-2h2v2h4v2h-2v2Zm-8-2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 16H0v-6h2v6Zm22 0h-2v-6h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2v-2h2v2ZM4 10H2V8h2v2Zm6 0H8V8h2v2Zm10-2h2v2h-4V6h2v2ZM8 8H4V6h4v2Zm2-2H8V4h2v2Zm8 0h-2V4h2v2Zm-2-2h-6V2h6v2Z"></path>
        </svg>
      );
    },
  },
  // Light Thunderstorms with Hail
  96: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M6 24H4v-2h2v2Zm8 0h-2v-2h2v2ZM2 22H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM4 20H2v-2h2v2Zm8 0h-2v-2h2v2Zm10 0h-2v-2h2v2Zm-10-6h4v2h-2v2h-2v-2H8v-2h2v-2h2v2Zm-6 2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M6 24H4v-2h2v2Zm8 0h-2v-2h2v2ZM2 22H0v-2h2v2Zm6 0H6v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM4 20H2v-2h2v2Zm8 0h-2v-2h2v2Zm10 0h-2v-2h2v2Zm-10-6h4v2h-2v2h-2v-2H8v-2h2v-2h2v2Zm-6 2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 14H0V8h2v6Zm22 0h-2V8h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2V8h2v2ZM4 8H2V6h2v2Zm6 0H8V6h2v2Zm10-2h2v2h-4V4h2v2ZM8 6H4V4h4v2Zm2-2H8V2h2v2Zm8 0h-2V2h2v2Zm-2-2h-6V0h6v2Z"></path>
        </svg>
      );
    },
  },
  // Thunderstorms with Hail
  99: {
    day(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M12 22h-2v-2h2v2Zm2-2h-2v-2H8v-2h2v-2h2v2h4v2h-2v2Zm-8-2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 16H0v-6h2v6Zm22 0h-2v-6h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2v-2h2v2ZM4 10H2V8h2v2Zm6 0H8V8h2v2Zm10-2h2v2h-4V6h2v2ZM8 8H4V6h4v2Zm2-2H8V4h2v2Zm8 0h-2V4h2v2Zm-2-2h-6V2h6v2Z"></path>
        </svg>
      );
    },
    night(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M12 22h-2v-2h2v2Zm2-2h-2v-2H8v-2h2v-2h2v2h4v2h-2v2Zm-8-2H2v-2h4v2Zm16 0h-4v-2h4v2ZM2 16H0v-6h2v6Zm22 0h-2v-6h2v6Zm-10-2h-2v-2h2v2Zm4-2h-2v-2h2v2ZM4 10H2V8h2v2Zm6 0H8V8h2v2Zm10-2h2v2h-4V6h2v2ZM8 8H4V6h4v2Zm2-2H8V4h2v2Zm8 0h-2V4h2v2Zm-2-2h-6V2h6v2Z"></path>
        </svg>
      );
    },
  },
};

export function WeatherIcon({
  className,
  code,
  dayPhase = "day",
}: {
  className?: string;
  code: WMO4677Code;
  dayPhase?: DayPhase;
}) {
  const Icon = (Icons[code] ?? (Icons[0] as CodeMapping))[dayPhase];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
}
