import { Field, FieldDescription, FieldLabel } from "@/components/ui/pxl/field";
import { Input } from "@/components/ui/pxl/input";

export default function InputDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
      <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
      <FieldDescription>
        Your API key is encrypted and stored securely.
      </FieldDescription>
    </Field>
  );
}
