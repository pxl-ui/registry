import { type ChangeEvent, useRef, useState } from "react";

import { Input } from "@/components/ui/pxl/input";
import { Keyboard, type KeyboardRef } from "@/components/ui/pxl/keyboard";

export default function KeyboardPreview() {
  const [value, setValue] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const keyboard = useRef<KeyboardRef>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    keyboard.current?.setInput(event.target.value);
  };

  const onKbChange = (value: string) => {
    setValue(value);

    requestAnimationFrame(() => {
      input.current?.focus();
    });
  }

  return (
    <div className="flex flex-col gap-2.5 items-center justify-center">
      <div className="size-full flex flex-col gap-2">
        <Input
          autoFocus
          ref={input}
          value={value}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={onChangeInput}
          name="preview"
        />
        <Keyboard
          inputName="preview"
          enableKeyNavigation
          keyboardRef={keyboard}
          onChange={onKbChange}
          onSubmit={() => console.log("onSubmit")}
        />
      </div>
    </div>
  );
}
