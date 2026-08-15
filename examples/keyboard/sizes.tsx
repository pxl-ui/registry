import { Keyboard } from "@/components/ui/pxl/keyboard";

export default function KeyboardSizes() {
  return (
    <div className="w-full min-h-92 flex flex-col gap-2.5 items-start justify-center">
      <div>
        <h2>2XS</h2>
        <Keyboard 
          inputName="2xs"
          size="2xs" 
          physicalKeyboardHighlight={false}
          className="bg-popover" />
      </div>
      <div>
        <h2>XS</h2>
        <Keyboard 
          inputName="xs"
          size="xs" 
          physicalKeyboardHighlight={false}
          className="bg-popover" />
      </div>
      <div>
        <h2>SM</h2>
        <Keyboard 
          inputName="sm"
          size="sm" 
          physicalKeyboardHighlight={false}
          className="bg-popover" />
      </div>
      <div>
        <h2>MD</h2>
        <Keyboard 
          inputName="md"
          size="md" 
          physicalKeyboardHighlight={false}
          className="bg-popover" />
      </div>
      <div>
        <h2>LG</h2>
        <Keyboard 
          inputName="lg"
          size="lg" 
          physicalKeyboardHighlight={false}
          className="bg-popover" />
      </div>
    </div>
  );
}
