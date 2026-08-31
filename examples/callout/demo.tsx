import { Callout } from "@/components/ui/pxl/callout";

export default function CalloutDemo() {
  return (
    <div className="max-w-md">
      <Callout callout="info" title="Heads up!">
        You can add components and dependencies to your app using the cli.
      </Callout>
    </div>
  );
}
