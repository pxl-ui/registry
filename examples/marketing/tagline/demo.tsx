import { Tagline } from "@/components/features/pxl/marketing/tagline";

export default function TaglineDemo() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Tagline>Default variant</Tagline>
      <Tagline variant="primary">Primary variant</Tagline>
      <Tagline variant="secondary">Secondary variant</Tagline>
      <Tagline variant="badge">Badge variant</Tagline>
      <Tagline variant="outline">Outline variant</Tagline>
      <Tagline variant="ghost">Ghost variant</Tagline>
    </div>
  );
}
