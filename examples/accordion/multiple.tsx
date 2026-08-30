import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/pxl/accordion";

export default function AccordionMultipleDemo() {
  return (
    <Accordion
      className="w-full max-w-md"
      defaultValue={["item-1", "item-2"]}
      multiple
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
        <AccordionContent>
          Yes. Pass the multiple prop to allow more than one item open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does state persist?</AccordionTrigger>
        <AccordionContent>
          Each item tracks its own open state independently.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}