"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { cn } from "cn";
import { type Color, converter, formatHex, parse } from "culori";
import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Button } from "@/ui/pxl/button";
import { Input } from "@/ui/pxl/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/ui/pxl/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/pxl/select";
import { Separator } from "@/ui/pxl/separator";

type Mode = "hex" | "rgb" | "css" | "hsl";

type RGBValue = [number, number, number] | [number, number, number, number];

type ColorValue = string | RGBValue;

type HSLColor = {
  mode: "hsl";
  h: number;
  s: number;
  l: number;
  alpha?: number;
};

const toHsl = converter("hsl");
const toRgb = converter("rgb");

const ColorPickerContext = createContext<
  | {
      hue: number;
      saturation: number;
      lightness: number;
      alpha: number;
      mode: Mode;
      setHue: (hue: number) => void;
      setSaturation: (saturation: number) => void;
      setLightness: (lightness: number) => void;
      setAlpha: (alpha: number) => void;
      setMode: (mode: Mode) => void;
    }
  | undefined
>(undefined);

function useColorPicker() {
  const context = useContext(ColorPickerContext);

  if (!context) {
    throw new Error("useColorPicker must be used within a ColorPickerProvider");
  }

  return context;
}

function toCuloriColor(value: ColorValue | undefined): Color | undefined {
  if (!value) {
    return undefined;
  }
  if (typeof value === "string") {
    return parse(value) ?? undefined;
  }

  const [r, g, b, alpha] = value;

  return { mode: "rgb", r: r / 255, g: g / 255, b: b / 255, alpha: alpha ?? 1 };
}

function toHslState(value: ColorValue | undefined) {
  const color = toCuloriColor(value);
  const hsl = color ? toHsl(color) : undefined;

  return {
    hue: hsl?.h ?? 0,
    saturation: (hsl?.s ?? 0) * 100,
    lightness: (hsl?.l ?? 0) * 100,
    alpha: (hsl?.alpha ?? 1) * 100,
  };
}

function createHslColor(
  hue: number,
  saturation: number,
  lightness: number,
  alpha: number,
): HSLColor {
  return {
    mode: "hsl",
    h: hue,
    s: saturation / 100,
    l: lightness / 100,
    alpha: alpha / 100,
  };
}

function ColorPicker({
  value,
  defaultValue = "#000000",
  onChange,
  className,
  ...props
}: ComponentProps<"div"> & {
  value?: ColorValue;
  defaultValue?: ColorValue;
  onChange?: (value: RGBValue) => void;
}) {
  const selectedColor = toCuloriColor(value);
  const defaultColor = toCuloriColor(defaultValue);

  const selectedHsl = selectedColor ? toHslState(value) : undefined;
  const defaultHsl = defaultColor ? toHslState(defaultValue) : undefined;

  const [hue, setHue] = useState(selectedHsl?.hue || defaultHsl?.hue || 0);
  const [saturation, setSaturation] = useState(
    selectedHsl?.saturation || defaultHsl?.saturation || 100,
  );
  const [lightness, setLightness] = useState(
    selectedHsl?.lightness || defaultHsl?.lightness || 50,
  );
  const [alpha, setAlpha] = useState(
    selectedHsl?.alpha || defaultHsl?.alpha || 100,
  );
  const [mode, setMode] = useState<Mode>("hex");

  // Update color when controlled value changes
  useEffect(() => {
    if (value) {
      const color = toCuloriColor(value);
      const rgb = color ? toRgb(color) : undefined;

      if (rgb) {
        setHue(rgb.r * 255);
        setSaturation(rgb.g * 255);
        setLightness(rgb.b * 255);
        setAlpha((rgb.alpha ?? 1) * 100);
      }
    }
  }, [value]);

  // Notify parent of changes
  useEffect(() => {
    if (onChange) {
      const color = createHslColor(hue, saturation, lightness, alpha);
      const rgb = toRgb(color);

      if (rgb) {
        onChange([rgb.r * 255, rgb.g * 255, rgb.b * 255, alpha / 100]);
      }
    }
  }, [hue, saturation, lightness, alpha, onChange]);

  return (
    <ColorPickerContext.Provider
      value={{
        hue,
        saturation,
        lightness,
        alpha,
        mode,
        setHue,
        setSaturation,
        setLightness,
        setAlpha,
        setMode,
      }}
    >
      <div
        className={cn("flex size-full flex-col gap-4", className)}
        {...props}
      />
    </ColorPickerContext.Provider>
  );
}

const ColorPickerSelection = memo(
  ({ className, ...props }: ComponentProps<"div">) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const { hue, setSaturation, setLightness } = useColorPicker();

    const backgroundGradient = useMemo(() => {
      return `linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0)),
            linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0)),
            hsl(${hue}, 100%, 50%)`;
    }, [hue]);

    const handlePointerMove = useCallback(
      (event: PointerEvent) => {
        if (!(isDragging && containerRef.current)) {
          return;
        }

        const rect = containerRef.current.getBoundingClientRect();

        const x = Math.max(
          0,
          Math.min(1, (event.clientX - rect.left) / rect.width),
        );

        const y = Math.max(
          0,
          Math.min(1, (event.clientY - rect.top) / rect.height),
        );

        setPositionX(x);
        setPositionY(y);
        setSaturation(x * 100);

        const topLightness = x < 0.01 ? 100 : 50 + 50 * (1 - x);
        const lightness = topLightness * (1 - y);

        setLightness(lightness);
      },
      [isDragging, setSaturation, setLightness],
    );

    useEffect(() => {
      const handlePointerUp = () => setIsDragging(false);

      if (isDragging) {
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);
      }

      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };
    }, [isDragging, handlePointerMove]);

    return (
      <div
        className={cn(
          "relative size-full cursor-crosshair pixel-rounded pixel-size-lg",
          className,
        )}
        onPointerDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
          handlePointerMove(e.nativeEvent);
        }}
        ref={containerRef}
        style={{
          background: backgroundGradient,
        }}
        {...props}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute size-4 pixel-rounded pixel-border pixel-size-lg"
          style={{
            left: `${positionX * 100}%`,
            top: `${positionY * 100}%`,
            boxShadow: "0 0 0 1px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    );
  },
);
ColorPickerSelection.displayName = "ColorPickerSelection";

function ColorPickerHue({ className, ...props }: SliderPrimitive.Root.Props) {
  const { hue, setHue } = useColorPicker();

  return (
    <SliderPrimitive.Root
      className={cn("relative flex h-4 w-full touch-none", className)}
      step={1}
      max={360}
      value={[hue]}
      onValueChange={(hue) => setHue(hue as number)}
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none">
        <SliderPrimitive.Track className="relative my-0.5 h-3 w-full grow rounded-none pixel-rounded pixel-size-md bg-[linear-gradient(90deg,#FF0000,#FFFF00,#00FF00,#00FFFF,#0000FF,#FF00FF,#FF0000)]">
          <SliderPrimitive.Indicator className="absolute h-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block size-4 pixel-border pixel-size-lg pixel-color-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

function ColorPickerAlpha({ className, ...props }: SliderPrimitive.Root.Props) {
  const { alpha, setAlpha } = useColorPicker();

  return (
    <SliderPrimitive.Root
      className={cn("relative flex h-4 w-full touch-none", className)}
      step={1}
      max={100}
      value={[alpha]}
      onValueChange={(value) => setAlpha(value as number)}
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none">
        <SliderPrimitive.Track className="relative my-0.5 h-3 w-full grow rounded-none pixel-rounded pixel-size-md bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==')] bg-center bg-repeat-x dark:bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVR4nGP8+vWrCAMewM3N/QafPBM+SWLAqAGDwQBGQgoIpZOB98KoAVQwAADxzQcSVIRCfQAAAABJRU5ErkJggg==')]">
          <div className="absolute inset-0 rounded-none pixel-rounded pixel-size-md bg-linear-to-r from-transparent to-black/50 dark:to-white/50" />
          <SliderPrimitive.Indicator className="absolute h-full bg-transparent" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block size-4 pixel-border pixel-size-lg pixel-color-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

function ColorPickerEyeDropper({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const { setHue, setSaturation, setLightness, setAlpha } = useColorPicker();

  const handleEyeDropper = async () => {
    try {
      // @ts-expect-error - EyeDropper API is experimental
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();

      const color = parse(result.sRGBHex);
      if (!color) {
        return;
      }

      const hsl = toHsl(color);
      if (!hsl) {
        return;
      }

      setHue(hsl.h ?? 0);
      setSaturation((hsl.s ?? 0) * 100);
      setLightness((hsl.l ?? 0) * 100);
      setAlpha((hsl.alpha ?? 1) * 100);
    } catch (error) {
      console.error("EyeDropper failed:", error);
    }
  };

  return (
    <Button
      className={className}
      onClick={handleEyeDropper}
      size="icon"
      type="button"
      variant="outline"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 21h2v2H1v-4h2v2Zm6 0H5v-2h4v2Zm-4-2H3v-4h2v4Zm6 0H9v-2h2v2Zm2-2h-2v-2h2v2Zm-6-2H5v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 13H7v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-10-2H9V9h2v2Zm4 0h-2V9h2v2Zm4 0h-2V9h2v2Zm-6-2h-2V7h2v2Zm8 0h-2V7h2v2ZM11 7H9V5h2v2Zm4 0h-2V5h2v2Zm8 0h-2V5h2v2ZM13 5h-2V3h2v2Zm4 0h-2V3h2v2Zm4 0h-2V3h2v2Zm-2-2h-2V1h2v2Z" />
      </svg>
    </Button>
  );
}

const formats = [
  { value: "hex", label: "HEX" },
  { value: "rgb", label: "RGB" },
  { value: "css", label: "CSS" },
  { value: "hsl", label: "HSL" },
];

function ColorPickerOutput({
  className,
  ...props
}: ComponentProps<typeof SelectTrigger>) {
  const { mode, setMode } = useColorPicker();

  return (
    <Select
      items={formats}
      onValueChange={(val) => setMode(val as Mode)}
      value={mode}
    >
      <SelectTrigger {...props}>
        <SelectValue placeholder="Mode" />
      </SelectTrigger>
      <SelectContent>
        {formats.map((format) => (
          <SelectItem
            className="text-xs"
            key={format.value}
            value={format.value}
          >
            {format.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function PercentageInput({
  className,
  ...props
}: ComponentProps<typeof InputGroupInput>) {
  return (
    <div className="relative">
      <InputGroup className="max-w-xs" border="none">
        <InputGroupInput
          readOnly
          type="text"
          className={cn("w-15 [&_input]:text-end", className)}
          {...props}
        />
        <InputGroupAddon align="inline-end">%</InputGroupAddon>
      </InputGroup>
    </div>
  );
}

function ColorPickerFormat({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const { hue, saturation, lightness, alpha, mode } = useColorPicker();
  const color = createHslColor(hue, saturation, lightness, alpha);

  if (mode === "hex") {
    const hex = formatHex(color);

    return (
      <div
        className={cn(
          "-space-x-px relative flex w-full justify-between items-center pixel-border pixel-size-md pixel-color-border",
          className,
        )}
        {...props}
      >
        <Input
          className="[&_input]:text-end"
          border="none"
          readOnly
          type="text"
          value={hex}
        />
        <Separator className="h-auto" orientation="vertical" />
        <PercentageInput value={alpha} />
      </div>
    );
  }

  if (mode === "rgb") {
    const rgbColor = toRgb(color);
    const rgb = rgbColor
      ? [
          Math.round(rgbColor.r * 255),
          Math.round(rgbColor.g * 255),
          Math.round(rgbColor.b * 255),
        ]
      : [0, 0, 0];

    return (
      <div
        className={cn(
          "-space-x-px relative flex w-full justify-between items-center pixel-border pixel-size-md pixel-color-border",
          className,
        )}
        {...props}
      >
        {rgb.map((value, index) => (
          <>
            <Input
              readOnly
              type="text"
              border="none"
              className="[&_input]:text-end"
              key={index.toString()}
              value={value}
            />

            <Separator className="h-auto" orientation="vertical" />
          </>
        ))}
        <PercentageInput value={alpha} />
      </div>
    );
  }

  if (mode === "css") {
    const rgbColor = toRgb(color);
    const rgb = rgbColor
      ? [
          Math.round(rgbColor.r * 255),
          Math.round(rgbColor.g * 255),
          Math.round(rgbColor.b * 255),
        ]
      : [0, 0, 0];

    return (
      <div className={cn("w-full", className)} {...props}>
        <Input
          readOnly
          type="text"
          className="[&_input]:text-end"
          value={`rgba(${rgb.join(", ")}, ${alpha}%)`}
          {...props}
        />
      </div>
    );
  }

  if (mode === "hsl") {
    const hsl = [
      Math.round(hue),
      Math.round(saturation),
      Math.round(lightness),
    ];

    return (
      <div
        className={cn(
          "-space-x-px relative flex w-full justify-between items-center pixel-border pixel-size-md pixel-color-border",
          className,
        )}
        {...props}
      >
        {hsl.map((value, index) => (
          <>
            <Input
              readOnly
              type="text"
              border="none"
              className="[&_input]:text-end"
              key={index.toString()}
              value={value}
            />
            <Separator className="h-auto" orientation="vertical" />
          </>
        ))}
        <PercentageInput value={alpha} />
      </div>
    );
  }

  return null;
}

export {
  ColorPicker,
  ColorPickerAlpha,
  ColorPickerEyeDropper,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
  PercentageInput,
  useColorPicker,
};
