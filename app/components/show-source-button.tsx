import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "~/components/ui/icons";

type Props = {
  repositoryUrl: string;
  filePath: string;
  className?: string;
};
export function ShowSourceButton({
  repositoryUrl,
  filePath,
  className,
}: Props) {
  const url = `${repositoryUrl}/blob/main${filePath}`;

  return (
    <Button
      aria-label="Show Source"
      variant="outline"
      className={cn("h-7 gap-1 rounded-lg px-3 text-xs", className)}
      asChild
    >
      <a href={url} target="_blank" rel="noreferrer">
        <ExternalLinkIcon className="size-4" />
        Show Source
      </a>
    </Button>
  );
}
