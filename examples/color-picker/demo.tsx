"use client";

import {
  ColorPicker,
  ColorPickerAlpha,
  ColorPickerEyeDropper,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from "@/components/ui/pxl/color-picker";

export default function ColorPickerExample() {
  return (
    <ColorPicker className="max-w-sm h-100 bg-background p-4">
      <ColorPickerSelection />
      <div className="flex items-center gap-4">
        <ColorPickerEyeDropper />
        <div className="grid w-full gap-0.5">
          <ColorPickerHue />
          <ColorPickerAlpha />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ColorPickerOutput />
        <ColorPickerFormat />
      </div>
    </ColorPicker>
  );
}
