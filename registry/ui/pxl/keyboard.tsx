"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type RefObject, useEffect, useMemo, useState } from "react";
import SimpleKeyboard, {
  type KeyboardOptions,
  type SimpleKeyboard as KeyboardRef,
} from "react-simple-keyboard";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./button";

type Language = "en" | "es";
type KeyboardDisplay = "regular" | "mobile";
type KeyboardLayout = "default" | "shift" | "numbers";
type KeyboardLayoutConfig = Record<KeyboardLayout, string[]>;

let keyNavigationModule: any;

if (typeof window !== "undefined") {
  // @ts-expect-error simple-keyboard-key-navigation doesn't provide types
  keyNavigationModule = (await import("simple-keyboard-key-navigation")).default
    .default;
}

const keyboardVariants = cva("hg-theme-pxl", {
  variants: {
    font: {
      default: "font-sans",
      heading: "font-heading",
      sans: "font-sans",
      mono: "font-mono",
    },
    size: {
      default: "[--keyboard-spacing:--spacing(1)]",
      "2xs": "[--keyboard-spacing:--spacing(0.25)]",
      xs: "[--keyboard-spacing:--spacing(0.5)]",
      sm: "[--keyboard-spacing:--spacing(0.5)]",
      md: "[--keyboard-spacing:--spacing(1)]",
      lg: "[--keyboard-spacing:--spacing(1)]",
    },
    variant: {
      default:
        "keyboard-highlight-bg-foreground/80 keyboard-highlight-text-background keyboard-shift-text-foreground keyboard-shift-bg-background",
      primary:
        "keyboard-highlight-bg-primary/80 keyboard-highlight-text-primary-foreground keyboard-shift-text-primary keyboard-shift-bg-primary-foreground",
      outline: "keyboard-highlight-bg-muted keyboard-highlight-text-foreground  keyboard-shift-text-muted keyboard-shift-bg-foreground",
      secondary:
        "keyboard-highlight-bg-secondary/80 keyboard-highlight-text-secondary-foreground keyboard-shift-text-secondary keyboard-shift-bg-secondary-foreground",
      ghost: "keyboard-highlight-bg-muted keyboard-highlight-text-foreground  keyboard-shift-text-background keyboard-shift-bg-foreground",
      destructive:
        "keyboard-highlight-bg-destructive/20 keyboard-highlight-text-destructive keyboard-shift-text-destructive/20 keyboard-shift-bg-destructive",
      info: "keyboard-highlight-bg-info/80 keyboard-highlight-text-info-foreground keyboard-shift-text-info keyboard-shift-bg-info-foreground",
      success:
        "keyboard-highlight-bg-success/80 keyboard-highlight-text-success-foreground keyboard-shift-text-success keyboard-shift-bg-success-foreground",
      warning:
        "keyboard-highlight-bg-warning/80 keyboard-highlight-text-warning-foreground keyboard-shift-text-warning keyboard-shift-bg-warning-foreground",
      danger: "keyboard-highlight-bg-danger/80 keyboard-highlight-text-danger-foreground keyboard-shift-text-danger keyboard-shift-bg-danger-foreground",
    },
  },
  defaultVariants: {
    font: "default",
    size: "default",
    variant: "default",
  },
});

const SPECIAL_KEYS = {
  ABC: "{abc}",
  ALT_LEFT: "{altleft}",
  ALT_RIGHT: "{altright}",
  BACK: "{backspace}",
  CTRL_LEFT: "{controlleft}",
  CTRL_RIGHT: "{controlright}",
  ENTER: "{ent}",
  ESCAPE: "{escape}",
  LOCK: "{capslock}",
  META_LEFT: "{metaleft}",
  META_RIGHT: "{metaright}",
  NUMBERS: "{numbers}",
  SHIFT: "{shift}",
  SPACE: "{space}",
  TAB: "{tab}",
};

const KEYS: Record<
  Language,
  {
    alphabet: string;
    numbers: string;
  }
> = {
  en: {
    alphabet:
      "a A b B c C d D e E f F g G h H i I j J k K l L m M n N o O p P q Q r R s S t T u U v V w W x X y Y z Z",
    numbers: "0 1 2 3 4 5 6 7 8 9",
  },
  es: {
    alphabet:
      "a A b B c C d D e E f F g G h H i I j J k K l L m M n N ñ Ñ o O p P q Q r R s S t T u U v V w W x X y Y z Z",
    numbers: "0 1 2 3 4 5 6 7 8 9",
  },
};

const keyboardLayouts: Record<
  Language,
  Record<KeyboardDisplay, KeyboardLayoutConfig>
> = {
  en: {
    regular: {
      default: [
        "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
        "{tab} q w e r t y u i o p [ ] \\",
        "{lock} a s d f g h j k l ; ' {enter}",
        "{shift} z x c v b n m , . / {shift}",
        ".com @ {space}",
      ],
      shift: [
        "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
        "{tab} Q W E R T Y U I O P { } |",
        '{lock} A S D F G H J K L : " {enter}',
        "{shift} Z X C V B N M < > ? {shift}",
        ".com @ {space}",
      ],
      numbers: [],
    },
    mobile: {
      default: [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "{shift} z x c v b n m {backspace}",
        "{numbers} {space} {ent}",
      ],
      shift: [
        "Q W E R T Y U I O P",
        "A S D F G H J K L",
        "{shift} Z X C V B N M {backspace}",
        "{numbers} {space} {ent}",
      ],
      numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"],
    },
  },
  es: {
    regular: {
      default: [
        "\u007c 1 2 3 4 5 6 7 8 9 0 ' \u00bf {bksp}",
        "{tab} q w e r t y u i o p \u0301 +",
        "{lock} a s d f g h j k l \u00f1 \u007b \u007d {enter}",
        "{shift} < z x c v b n m , . - {shift}",
        ".com @ {space}",
      ],
      shift: [
        '\u00b0 ! " # $ % & / ( ) = ? \u00a1 {bksp}',
        "{tab} Q W E R T Y U I O P \u0308 *",
        "{lock} A S D F G H J K L \u00d1 \u005b \u005d {enter}",
        "{shift} > Z X C V B N M ; : _ {shift}",
        ".com @ {space}",
      ],
      numbers: [],
    },
    mobile: {
      default: [
        "q w e r t y u i o p",
        "a s d f g h j k l ñ",
        "{shift} z x c v b n m {backspace}",
        "{numbers} {space} {ent}",
      ],
      shift: [
        "Q W E R T Y U I O P",
        "A S D F G H J K L Ñ",
        "{shift} Z X C V B N M {backspace}",
        "{numbers} {space} {ent}",
      ],
      numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"],
    },
  },
};

const keyboardDisplays: Record<
  Language,
  Partial<Record<KeyboardDisplay, Record<string, string>>>
> = {
  en: {
    mobile: {
      [SPECIAL_KEYS.ABC]: "ABC",
      [SPECIAL_KEYS.ALT_LEFT]: "alt ⌥",
      [SPECIAL_KEYS.ALT_RIGHT]: "alt ⌥",
      [SPECIAL_KEYS.BACK]: "⌫",
      [SPECIAL_KEYS.CTRL_LEFT]: "ctrl ⌃",
      [SPECIAL_KEYS.CTRL_RIGHT]: "ctrl ⌃",
      [SPECIAL_KEYS.ENTER]: "Confirm",
      [SPECIAL_KEYS.ESCAPE]: "esc ⎋",
      [SPECIAL_KEYS.LOCK]: "caps lock ⇪",
      [SPECIAL_KEYS.META_LEFT]: "cmd ⌘",
      [SPECIAL_KEYS.META_RIGHT]: "cmd ⌘",
      [SPECIAL_KEYS.NUMBERS]: "123",
      [SPECIAL_KEYS.SHIFT]: "⇧",
      [SPECIAL_KEYS.TAB]: "tab ⇥",
    },
  },
  es: {
    mobile: {
      [SPECIAL_KEYS.ABC]: "ABC",
      [SPECIAL_KEYS.ALT_LEFT]: "alt ⌥",
      [SPECIAL_KEYS.ALT_RIGHT]: "alt ⌥",
      [SPECIAL_KEYS.BACK]: "⌫",
      [SPECIAL_KEYS.CTRL_LEFT]: "ctrl ⌃",
      [SPECIAL_KEYS.CTRL_RIGHT]: "ctrl ⌃",
      [SPECIAL_KEYS.ENTER]: "Confirmar",
      [SPECIAL_KEYS.ESCAPE]: "esc ⎋",
      [SPECIAL_KEYS.LOCK]: "caps lock ⇪",
      [SPECIAL_KEYS.META_LEFT]: "cmd ⌘",
      [SPECIAL_KEYS.META_RIGHT]: "cmd ⌘",
      [SPECIAL_KEYS.NUMBERS]: "123",
      [SPECIAL_KEYS.SHIFT]: "⇧",
      [SPECIAL_KEYS.TAB]: "tab ⇥",
    },
  },
};

function Keyboard({
  border = "default",
  className,
  display = "mobile",
  enableKeyNavigation,
  font,
  keyboardRef,
  language = "en",
  onChange,
  onLayoutChange,
  onSubmit,
  size = "default",
  variant = "default",
  ...props
}: Omit<KeyboardOptions, "display"> &
  VariantProps<typeof keyboardVariants> &
  Pick<VariantProps<typeof buttonVariants>, "border" | "variant"> & {
    className?: string;
    /** Enables the key navigation module */
    keyNavigation?: boolean;
    keyboardRef?: RefObject<KeyboardRef | null>;
    display?: KeyboardDisplay;
    language?: Language;
    onChange?: (input: string) => void;
    onLayoutChange?: (layout: KeyboardLayout) => void;
    onSubmit?: () => void;
  }) {
  const [layoutName, setLayoutName] = useState<KeyboardLayout>("default");

  const config = useMemo(() => {
    return {
      display: keyboardDisplays[language][display],
      layout: keyboardLayouts[language][display],
      allButtons: [
        KEYS[language].alphabet,
        KEYS[language].numbers,
        Object.values(SPECIAL_KEYS).join(" "),
      ].join(" "),
    };
  }, [language, display]);

  const modules = useMemo(() => {
    if (enableKeyNavigation) {
      return [keyNavigationModule];
    }
  }, [enableKeyNavigation]);

  const buttonSize = useMemo<
    VariantProps<typeof buttonVariants>["size"]
  >(() => {
    if (!size) {
      return null;
    }

    return {
      default: "sm",
      "2xs": "2xs",
      xs: "2xs",
      sm: "xs",
      md: "sm",
      lg: "md",
    }[size] as VariantProps<typeof buttonVariants>["size"];
  }, [size]);

  function onKeyPress(button: string) {
    if (button === "{shift}" || button === "{lock}") {
      const nextLayout = layoutName === "shift" ? "default" : "shift";
      setLayoutName(nextLayout);
      onLayoutChange?.(nextLayout);
    }

    if (button === "{numbers}" || button === "{abc}") {
      const nextLayout = layoutName === "numbers" ? "default" : "numbers";
      setLayoutName(nextLayout);
      onLayoutChange?.(nextLayout);
    }

    if (button === "{ent}") {
      onSubmit?.();
    }
  }

  useEffect(
    function handleKeyNavigation() {
      if (!enableKeyNavigation) {
        return;
      }

      function onKeyDown(e: KeyboardEvent) {
        if (e.key === "ArrowUp")
          keyboardRef?.current?.modules.keyNavigation.up();
        else if (e.key === "ArrowDown")
          keyboardRef?.current?.modules.keyNavigation.down();
        else if (e.key === "ArrowLeft")
          keyboardRef?.current?.modules.keyNavigation.left();
        else if (e.key === "ArrowRight")
          keyboardRef?.current?.modules.keyNavigation.right();
        else if (e.key === "Enter")
          keyboardRef?.current?.modules.keyNavigation.press();
      }

      document.addEventListener("keydown", onKeyDown, false);

      return () => document.removeEventListener("keydown", onKeyDown);
    },
    [enableKeyNavigation, keyboardRef],
  );

  return (
    <SimpleKeyboard
      buttonTheme={[
        {
          class: buttonVariants({
            variant,
            size: buttonSize,
            border,
          }),
          buttons: config.allButtons,
        },
      ]}
      display={config.display}
      keyboardRef={(r) => {
        if (keyboardRef) {
          keyboardRef.current = r;
        }
      }}
      layoutName={layoutName}
      layout={config.layout}
      mergeDisplay
      theme={cn(
        keyboardVariants({
          font,
          size,
          variant,
        }),
        className,
      )}
      enableKeyNavigation={enableKeyNavigation}
      modules={modules}
      onChange={onChange}
      onKeyPress={onKeyPress}
      physicalKeyboardHighlight
      physicalKeyboardHighlightBgColor="var(--keyboard-highlight)"
      physicalKeyboardHighlightTextColor="var(--keyboard-highlight-foreground)"
      useMouseEvents
      onModulesLoaded={(keyboard: KeyboardRef) => {
        /**
         * Optional: If keyboard.modules is not available below.
         * You can call module methods here
         * e.g: keyboard.modules.keyNavigation.up();
         * etc.
         */
        keyboard.modules.keyNavigation.up();
      }}
      {...props}
    />
  );
}

export { Keyboard, type KeyboardRef, keyboardLayouts };
