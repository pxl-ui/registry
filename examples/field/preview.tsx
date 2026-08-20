import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/pxl/field";
import { Input } from "@/components/ui/pxl/input";

export default function FieldDemo() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Profile</FieldLegend>
      <FieldDescription>
        Update your public profile information.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-name">Name</FieldLabel>
          <Input id="field-name" placeholder="Evil Rabbit" />
          <FieldDescription>This is your public display name.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="field-email">Email</FieldLabel>
          <Input id="field-email" placeholder="you@example.com" type="email" />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
