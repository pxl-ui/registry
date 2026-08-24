import { CountryFlag } from "@/components/ui/pxl/country-flag";

const COUNTRIES = [
  { label: "Andorra", alpha3: "AND", alpha2: "AD", code: 20 },
  { label: "Bangladesh", alpha3: "BGD", alpha2: "BD", code: 50 },
  { label: "Canada", alpha3: "CAN", alpha2: "CA", code: 124 },
  { label: "China", alpha3: "CHN", alpha2: "CH", code: 156 },
  { label: "France", alpha3: "FRA", alpha2: "FR", code: 250 },
  { label: "Germany", alpha3: "DEU", alpha2: "DE", code: 276 },
  { label: "India", alpha3: "IND", alpha2: "IN", code: 356 },
  { label: "Italy", alpha3: "ITA", alpha2: "IT", code: 380 },
  { label: "Japan", alpha3: "JPN", alpha2: "JP", code: 392 },
  { label: "South Korea", alpha3: "KOR", alpha2: "KR", code: 410 },
  { label: "Portugal", alpha3: "PRT", alpha2: "PT", code: 620 },
  { label: "Russia", alpha3: "RUS", alpha2: "RU", code: 643 },
  { label: "Saudi Arabia", alpha3: "SAU", alpha2: "SA", code: 682 },
  { label: "Spain", alpha3: "ESP", alpha2: "ES", code: 724 },
  { label: "Egypt", alpha3: "EGY", alpha2: "EG", code: 818 },
  { label: "United Kingdom", alpha3: "GBR", alpha2: "GB", code: 826 },
];

export default function CountryFlagDemo() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className="grid gap-x-2 gap-y-1 w-full
          grid-cols-[auto_auto_auto]
          sm:grid-cols-[auto_1fr_auto_auto_auto_auto]"
      >
        {/* Header row */}
        <div className="hidden sm:block px-1 font-mono font-normal text-muted-foreground">Code</div>
        <div className="hidden sm:block px-1 font-mono font-normal text-muted-foreground">Label</div>
        <div className="px-1 font-mono font-normal text-muted-foreground">ALPHA2</div>
        <div className="hidden sm:block px-1 font-mono font-normal text-muted-foreground">ALPHA3</div>
        <div className="px-1 font-mono font-normal text-muted-foreground">SM</div>
        <div className="block px-1 font-mono font-normal text-muted-foreground">MD</div>

        {COUNTRIES.map((country, idx) => (
          <div
            key={idx.toString()}
            className="contents group text-muted-foreground hover:text-foreground"
          >
            <div className="hidden sm:flex px-1 font-mono font-normal items-center min-w-0">
              #{country.code}
            </div>
            <div className="hidden sm:flex px-1 font-normal truncate items-center min-w-0">
              {country.label}
            </div>
            <div className="flex px-1 font-normal truncate items-center min-w-0">
              {country.alpha2}
            </div>
            <div className="hidden sm:flex px-1 font-normal truncate items-center min-w-0">
              {country.alpha3}
            </div>
            <div className="px-1 font-normal flex items-center">
              <CountryFlag className="w-4" size="sm" code={country.alpha3} />
            </div>
            <div className="flex px-1 font-normal items-center">
              <CountryFlag className="w-8" size="md" code={country.alpha3} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}