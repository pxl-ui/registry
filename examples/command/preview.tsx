import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/pxl/command";

export default function CommandDemo() {
  return (
    <div className="flex items-center justify-center">
      <Command className="w-full max-w-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 22H5v-2h14v2ZM5 8h14V6h2v14h-2V10H5v10H3V6h2v2Zm12-4h2v2H5V4h2V2h2v2h6V2h2v2Z" />
              </svg>
              Calendar
            </CommandItem>
            <CommandItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-7-1H9v-2h6v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2Zm-7-5H8V8h2v2Zm6 0h-2V8h2v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z" />
              </svg>
              Search Emoji
            </CommandItem>
            <CommandItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 22H5v-2h14v2ZM5 20H3V4h2v16Zm16 0h-2V4h2v16ZM9 18H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-4H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm0-4H7V6h10v4Zm2-6H5V2h14v2Z" />
              </svg>
              Calculator
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 20h3v-2h4v4h2v-4h4v2h-2v4H9v-4H7v2H2v-5h2v3Zm18 2h-5v-2h3v-3h2v5ZM6 11H2v2h4v4H4v-2H0V9h4V7h2v4Zm14-2h4v6h-4v2h-2v-4h4v-2h-4V7h2v2Zm-6 7h-4v-2h4v2Zm-4-2H8v-4h2v4Zm6 0h-2v-4h2v4Zm-2-4h-4V8h4v2ZM7 4H4v3H2V2h5v2Zm8 0h2V2h5v5h-2V4h-3v2h-4V2h-2v4H7V4h2V0h6v4Z" />
              </svg>
              Preferences
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
