import { ToggleGroup, ToggleGroupItem } from "@/components/ui/pxl/toggle-group";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" multiple>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14 4v2H8v5h6V6h2v7H8v5h8v2H6V4h8Zm4 14h-2v-5h2v5Z"></path>
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11 18h1v2H6v-2h3v-4h2v4Zm2-4h-2v-4h2v4Zm2-4h-2V6h-1V4h6v2h-3v4Z"></path>
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 20H5v-2h14v2Zm-3-4H8v-2h8v2Zm-8-2H6V4h2v10Zm10 0h-2V4h2v10Z"></path>
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
