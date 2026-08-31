import { CountryFlag } from "@/components/ui/pxl/country-flag";

export default function CountryFlagDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2.5">
      <CountryFlag className="w-12" size="sm" code="ESP" />
      <CountryFlag className="w-24" size="md" code="ESP" />
    </div>
  );
}