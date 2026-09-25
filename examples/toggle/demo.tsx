import { Toggle } from "@/components/ui/pxl/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path className="hidden group-aria-pressed/toggle:inline-flex" d="M18 4h2v18h-4v-2h-2v-2h-4v2H8v2H4V4h2V2h12v2Z"></path>
        <path className="inline-flex group-aria-pressed/toggle:hidden" d="M6 2h12v2H6zM4 4h2v18H4zm14 0h2v18h-2zm-2 16h2v2h-2zm-2-2h2v2h-2zm-8 2h2v2H6zm2-2h2v2H8zm2-2h4v2h-4z" />
      </svg>
      Bookmark
    </Toggle>
  );
}
