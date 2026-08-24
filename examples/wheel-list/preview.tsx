import type { ComponentType } from "react";

import {
  WheelList,
  WheelOption,
} from "@/components/ui/pxl/wheel-list";

const ITEMS: {
  label: string;
  icon: ComponentType;
}[] = [
  {
    label: "POKÉDEX",
    icon() {
      return (
        <svg
          aria-label="check-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current size-4 mr-1"
        >
          <path d="M10 18H8v-2h2zm-2-2H6v-2h2zm4-2v2h-2v-2zm-6 0H4v-2h2zm8 0h-2v-2h2zm2-2h-2v-2h2zm2-2h-2V8h2zm2-2h-2V6h2z"></path>
        </svg>
      );
    },
  },
  {
    label: "POKÉMON",
    icon() {
      return (
        <svg
          aria-label="chevron-right-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current size-4 mr-1"
        >
          <path d="M16 13v-2h-2v2h2Zm-2-2V9h-2v2h2Zm0 4v-2h-2v2h2Zm-2-6V7h-2v2h2Zm0 8v-2h-2v2h2ZM10 7V5H8v2h2Zm0 12v-2H8v2h2Z" />
        </svg>
      );
    },
  },
  {
    label: "ITEM",
    icon() {
      return (
        <svg
          aria-label="warning-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current size-4 mr-1"
        >
          <path d="M14 22h-4v-2h4v2Zm-4-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2Zm-5-1h-2v-2h2v2Zm-7-1H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 14H2v-4h2v4Zm18 0h-2v-4h2v4Zm-9-7v6h-2V7h2Zm-7 3H4V8h2v2Zm14 0h-2V8h2v2ZM8 8H6V6h2v2Zm10 0h-2V6h2v2Zm-8-2H8V4h2v2Zm6 0h-2V4h2v2Zm-2-2h-4V2h4v2Z"></path>
        </svg>
      );
    },
  },
  {
    label: "TRAINER",
    icon() {
      return (
        <svg
          aria-label="close-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current size-4 mr-1"
        >
          <path d="M7 19H5v-2h2v2Zm12 0h-2v-2h2v2ZM9 15v2H7v-2h2Zm8 2h-2v-2h2v2Zm-6-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-2-2H9V9h2v2Zm4 0h-2V9h2v2ZM9 9H7V7h2v2Zm8 0h-2V7h2v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Z"></path>
        </svg>
      );
    },
  },
  {
    label: "SAVE",
    icon() {
      return (
        <svg
          aria-label="chevron-down-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current size-4 mr-1"
        >
          <path d="M13 16h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 10H5V8h2v2Zm12 0h-2V8h2v2Z" />
        </svg>
      );
    },
  },
  {
    label: "OPTION",
    icon() {
      return (
        <svg
          aria-label="chevron-left-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current size-4 mr-1"
        >
          <path d="M8 13v-2h2v2H8Zm2-2V9h2v2h-2Zm0 4v-2h2v2h-2Zm2-6V7h2v2h-2Zm0 8v-2h2v2h-2Zm2-10V5h2v2h-2Zm0 12v-2h2v2h-2Z" />
        </svg>
      );
    },
  },
  {
    label: "EXIT",
    icon() {
      return (
        <svg
          aria-label="check-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current size-4 mr-1"
        >
          <path d="M10 18H8v-2h2zm-2-2H6v-2h2zm4-2v2h-2v-2zm-6 0H4v-2h2zm8 0h-2v-2h2zm2-2h-2v-2h2zm2-2h-2V8h2zm2-2h-2V6h2z"></path>
        </svg>
      );
    },
  },
];

export default function WheelListPreview() {
  return (
    <div className="w-full h-48 flex items-center justify-center">
      <WheelList
        defaultValue="ITEM"
        onChange={(evt) =>
          console.log(evt.settled ? `selected ${evt.value}` : "coasting")
        }
        onSelect={(value) => console.log(value)}
      >
        {ITEMS.map(({ label, icon: Icon }) => (
          <WheelOption key={label} value={label}>
            <Icon />
            {label}
          </WheelOption>
        ))}
      </WheelList>
    </div>
  );
}
