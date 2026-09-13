import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingTagline,
  SectionHeadingTitle,
} from "@/components/features/pxl/marketing/section-heading";

export default function SectionHeadingDemo() {
  return (
    <SectionHeading>
      <SectionHeadingTagline>Pricing</SectionHeadingTagline>
      <SectionHeadingTitle>Simple Pricing, Smarter Work</SectionHeadingTitle>
      <SectionHeadingBody>
        Acme Inc. has a plan designed to help you move faster.
      </SectionHeadingBody>
    </SectionHeading>
  );
}
