import { Callout } from "@/components/ui/pxl/callout";

export default function CalloutCollapsibleExample() {
  return (
    <div className="max-w-md w-full">
      <Callout type="info" title="Are callouts foldable?" collapsible>
        Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
      </Callout>
    </div>
  );
}
