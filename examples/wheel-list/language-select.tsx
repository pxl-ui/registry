import { CountryFlag } from "@/components/ui/pxl/country-flag";
import { WheelList, WheelOption } from "@/components/ui/pxl/wheel-list";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

const items = [
  { label: "Español", iso31661: "ES", value: "es" },
  { label: "Português", iso31661: "PT", value: "pt" },
  { label: "Français", iso31661: "FR", value: "fr" },
  { label: "Italiano", iso31661: "IT", value: "it" },
  { label: "Deutsch", iso31661: "DE", value: "de" },
  { label: "English", iso31661: "GB", value: "gb" },
  { label: "Русский", iso31661: "RU", value: "ru" },
  { label: "हिन्दी", iso31661: "IN", value: "hi" },
  { label: "বাংলা", iso31661: "BD", value: "bn" },
  { label: "العربية", iso31661: "SA", value: "ar" },
  { label: "日本語", iso31661: "JP", value: "jp" },
  { label: "한국어", iso31661: "KR", value: "kr" },
];

export default function LanguageSelect() {
  return (
    <WidgetArea size="sm">
      <WheelList align="start" visibleCount={5} defaultValue="ES">
        {items.map((item) => (
          <WheelOption key={item.value} value={item.value}>
            <CountryFlag code={item.iso31661} />
            {item.label}
          </WheelOption>
        ))}
      </WheelList>
    </WidgetArea>
  );
}
