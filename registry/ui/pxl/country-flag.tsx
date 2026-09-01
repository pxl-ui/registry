import { cva, type VariantProps } from "class-variance-authority";
import { type SVGProps, useMemo } from "react";

import CountryFlags from "@/components/icons/pxl/terrabandiere";
import { cn } from "@/lib/utils";

const flagsByNumber: Record<number, keyof typeof CountryFlags.md> = {
  20: "Andorra",
  50: "Bangladesh",
  124: "Canada",
  156: "China",
  250: "France",
  276: "Germany",
  356: "India",
  380: "Italy",
  392: "Japan",
  410: "SouthKorea",
  620: "Portugal",
  643: "Russia",
  682: "SaudiArabia",
  724: "Spain",
  818: "Egypt",
  826: "UnitedKingdom",
};

const flagsByAlpha2: Record<string, keyof typeof CountryFlags.md> = {
  AD: "Andorra",
  BD: "Bangladesh",
  CA: "Canada",
  CH: "China",
  DE: "Germany",
  EG: "Egypt",
  ES: "Spain",
  FR: "France",
  GB: "UnitedKingdom",
  IN: "India",
  IT: "Italy",
  JP: "Japan",
  KR: "SouthKorea",
  PT: "Portugal",
  RU: "Russia",
  SA: "SaudiArabia",
};

const flagsByAlpha3: Record<string, keyof typeof CountryFlags.md> = {
  AND: "Andorra",
  BGD: "Bangladesh",
  CAN: "Canada",
  CHN: "China",
  DEU: "Germany",
  EGY: "Egypt",
  ESP: "Spain",
  FRA: "France",
  GBR: "UnitedKingdom",
  IND: "India",
  ITA: "Italy",
  JPN: "Japan",
  KOR: "SouthKorea",
  PRT: "Portugal",
  RUS: "Russia",
  SAU: "SaudiArabia",
};

const flagVariants = cva("", {
  variants: {
    size: {
      default: "w-8",
      sm: "w-4",
      md: "w-8",
    },
  },
});

function CountryFlag({
  className,
  code,
  size = "default",
  ...props
}: SVGProps<SVGSVGElement> &
  VariantProps<typeof flagVariants> & {
    /** ISO 3166-1 Code */
    code: string | number;
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

  const Component =
    CountryFlags[size === "default" || size === null ? "md" : size][key];

  if (!Component) {
    return null;
  }

  return (
    <Component shapeRendering="crisp-edges" className={cn(flagVariants({ size }), className)} {...props} />
  );
}

export { CountryFlag };
