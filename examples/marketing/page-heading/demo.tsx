import {
  PageHeading,
  PageHeadingActions,
  PageHeadingBody,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/features/pxl/marketing/page-heading";
import { Button } from "@/components/ui/pxl/button";

export default function PageHeadingDemo() {
  return (
    <PageHeading alignment="center">
      <PageHeadingTagline>New features released</PageHeadingTagline>
      <PageHeadingTitle>Make Better Decisions, With Ease</PageHeadingTitle>
      <PageHeadingBody>
        Acme Inc's personal AI helps you cut through the noise, speed up
        delivery, and stay focused without switching contexts.
      </PageHeadingBody>
      <PageHeadingActions>
        <Button variant="default">Get Started</Button>
        <Button variant="secondary">Watch Demo</Button>
      </PageHeadingActions>
    </PageHeading>
  );
}
