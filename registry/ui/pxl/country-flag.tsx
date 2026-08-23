import { type SVGProps, useMemo } from "react";

import CountryFlags from "@/components/icons/pxl/terrabandiere";

const flagsByNumber: Record<number, keyof typeof CountryFlags.md> = {
  250: "France",
  276: "Germany",
  380: "Italy",
  724: "Spain",
  826: "UnitedKingdom",
};

const flagsByAlpha2: Record<string, keyof typeof CountryFlags.md> = {
  DE: "Germany",
  ES: "Spain",
  FR: "France",
  GB: "UnitedKingdom",
  IT: "Italy",
};

const flagsByAlpha3: Record<string, keyof typeof CountryFlags.md> = {
  DEU: "Germany",
  ESP: "Spain",
  FRA: "France",
  GBR: "UnitedKingdom",
  ITA: "Italy"
};

function CountryFlag({
  code,
  size = "default",
  ...props
}: SVGProps<SVGSVGElement> & {
  /** ISO 3166-1 Code */
  code: string | number;
  size?: "sm" | "md" | "default";
}) {
  const key = useMemo(() => {
    if (typeof code === "number") {
      return flagsByNumber[code];
    }

    if (code.length === 3) {
      return flagsByAlpha3[code];
    }

    return flagsByAlpha2[code];
  }, [code]);

  const Component = CountryFlags[size === "default" ? "md" : size][key];

  if (!Component) {
    return null;
  }

  return <Component {...props} />;
}

export {
  CountryFlag
}