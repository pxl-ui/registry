import { Keyboard } from "@/components/ui/pxl/keyboard";

export default function KeyboardVariants() {
  return (
    <div className="w-full flex flex-col gap-2.5 items-start justify-center">
      <div>
        <h2>Primary</h2>
        <Keyboard 
          inputName="primary"
          variant="primary" 
          physicalKeyboardHighlight={false}
          className="bg-popover p-1.25 rounded-md" />
      </div>
      <div>
        <h2>Success</h2>
        <Keyboard
          inputName="success"
          variant="success" 
          physicalKeyboardHighlight={false}
          className="bg-popover p-1.25 rounded-md" />
      </div>
      <div>
        <h2>Danger</h2>
        <Keyboard 
          inputName="danger"
          variant="danger" 
          physicalKeyboardHighlight={false}
          className="bg-popover p-1.25 rounded-md" />
      </div>
      <div>
        <h2>Warning</h2>
        <Keyboard 
          inputName="warning"
          variant="warning" 
          physicalKeyboardHighlight={false}
          className="bg-popover p-1.25 rounded-md" />
      </div>
      <div>
        <h2>Info</h2>
        <Keyboard 
          inputName="info"
          variant="info" 
          physicalKeyboardHighlight={false}
          className="bg-popover p-1.25 rounded-md" />
      </div>
      <div>
        <h2>Secondary</h2>
        <Keyboard 
          inputName="secondary"
          variant="secondary" 
          physicalKeyboardHighlight={false}
          className="bg-popover p-1.25 rounded-md" />
      </div>
      <div>
        <h2>Outline</h2>
        <Keyboard 
          inputName="outline"
          variant="outline" 
          physicalKeyboardHighlight={false}
          className="bg-popover p-1.25 rounded-md" />
      </div>
      <div>
        <h2>Ghost</h2>
        <Keyboard 
          inputName="ghost"
          variant="ghost" 
          physicalKeyboardHighlight={false}
          className="bg-popover p-1.25 rounded-md" />
      </div>
    </div>
  );
}
