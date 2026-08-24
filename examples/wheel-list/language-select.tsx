import { CountryFlag } from "@/components/ui/pxl/country-flag";
import { WheelList, WheelOption } from "@/components/ui/pxl/wheel-list";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

const ITEMS = [
  { label: "Español", value: "ES" },
  { label: "Português", value: "PT" },
  { label: "Français", value: "FR" },
  { label: "Italiano", value: "IT" },
  { label: "Deutsch", value: "DE" },
  { label: "English", value: "GB" },
  { label: "Русский", value: "RU"},
  { label: "हिन्दी", value: "IN" },
  { label: "বাংলা", value: "BD" },
  { label: "العربية", value: "SA" },
  { label: "中文", value: "CH"},
  { label: "日本語", value: "JP"},
  { label: "한국어", value: "KR" },
];

export default function LanguageSelect() {
  return (
    <WidgetArea size="sm">
      <WheelList
        align="start"
        visibleCount={5}
        label="Pick a start time"
        defaultValue="ITEM"
        onChange={(evt) =>
          console.log(evt.settled ? `selected ${evt.value}` : "coasting")
        }
        onSelect={(value) => console.log(value)}
      >
        {ITEMS.map(({ label, value }) => (
          <WheelOption className="flex items-center gap-2.5" key={value} value={value}>
            <CountryFlag className="w-8" code={value} />
            <span className="flex-1">
              {label}
            </span>
          </WheelOption>
        ))}
      </WheelList>
    </WidgetArea>
  );
}
