import { CountryFlag } from "@/components/ui/pxl/country-flag";
import { WheelList, WheelOption } from "@/components/ui/pxl/wheel-list";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function LanguageSelect() {
  return (
    <WidgetArea size="sm">
      <WheelList
        align="start"
        visibleCount={5}
        defaultValue="ES"
      >
        <WheelOption value="ES">
          <CountryFlag code="ES" />
          Español
        </WheelOption>
        <WheelOption value="PT">
          <CountryFlag code="PT" />
          Português
        </WheelOption>
        <WheelOption value="FR">
          <CountryFlag code="FR" />
          Français
        </WheelOption>
        <WheelOption value="IT">
          <CountryFlag code="IT" />
          Italiano
        </WheelOption>
        <WheelOption value="DE">
          <CountryFlag code="DE" />
          Deutsch
        </WheelOption>
        <WheelOption value="GB">
          <CountryFlag code="GB" />
          English
        </WheelOption>
        <WheelOption value="RU">
          <CountryFlag code="RU" />
          Русский
        </WheelOption>
        <WheelOption value="IN">
          <CountryFlag code="IN" />
          हिन्दी
        </WheelOption>
        <WheelOption value="BD">
          <CountryFlag code="BD" />
          বাংলা
        </WheelOption>
        <WheelOption value="SA">
          <CountryFlag code="SA" />
          العربية
        </WheelOption>
        <WheelOption value="CH">
          <CountryFlag code="CH" />
          中文
        </WheelOption>
        <WheelOption value="JP">
          <CountryFlag code="JP" />
          日本語
        </WheelOption>
        <WheelOption value="KR">
          <CountryFlag code="KR" />
          한국어
        </WheelOption>
      </WheelList>
    </WidgetArea>
  );
}
