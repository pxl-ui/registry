import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/pxl/alert";
import { Button } from "@/components/ui/pxl/button";

export default function AlertActionExample() {
  return (
    <div className="max-w-md">
      <Alert>
        <AlertTitle>Dark mode is now available</AlertTitle>
        <AlertDescription>
          Enable it under your profile settings to get started.
        </AlertDescription>
        <AlertAction>
          <Button size="xs" variant="default">
            Enable
          </Button>
        </AlertAction>
      </Alert>
    </div>
  );
}
