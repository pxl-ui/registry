import { CountryFlag } from "@/components/ui/pxl/country-flag";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/pxl/select";

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

export default function SelectIconsExample() {
  return (
    <Select items={items} defaultValue="es">
      <SelectTrigger className="w-full max-w-48">
        <SelectValue className="text-start uppercase gap-2!">
          {(value) => {
            const match = items.find((item) => item.value === value);
            
            return match ? (
              <>
                <CountryFlag className="w-8! h-5!" code={match.iso31661} />
                {match.label}
              </>
            ) : value;
          }}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {items.map((item) => (
            <SelectItem className="uppercase" key={item.value} value={item.value}>
              <CountryFlag className="w-8! h-5!" code={item.iso31661} />
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
