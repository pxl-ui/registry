import { Button } from "@/components/ui/pxl/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/pxl/collapsible";

export default function CollapsibleTransition() {
  return (
    <Collapsible className="mx-auto w-full max-w-sm h-fit rounded-md data-open:bg-muted">
      <CollapsibleTrigger
        render={
          <Button variant="ghost" className="w-full">
            Product details
            <svg
              className="ml-auto group-data-panel-open/button:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 16h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 10H5V8h2v2Zm12 0h-2V8h2v2Z" />
            </svg>
          </Button>
        }
      />
      <CollapsibleContent
        transition="easeOut"
        className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm"
      >
        <div>
          This panel can be expanded or collapsed to reveal additional content.
        </div>
        <Button size="xs">Learn More</Button>
      </CollapsibleContent>
    </Collapsible>
  );
}
