import { Card, CardContent } from "@/components/ui/pxl/card";
import { iconPacks } from "~/lib/icons";
import { emojis } from "~/lib/specs";

export default function EmojiPreview({ pack: packName }: { pack: string }) {
  const pack = iconPacks.get(packName);

  if (!pack) {
    return null;
  }

  const icons = Object.entries(pack.variants.default);

  return (
    <div className="mt-0 not-content">
      <Card className="size-full pixel-color-border!">
        <CardContent scrollable>
          <div
            className="grid gap-x-2 gap-y-1 w-full max-h-72
            grid-cols-[auto_auto_auto]
            sm:grid-cols-[auto_1fr_auto_auto]"
          >
            <div className="block px-1 font-mono font-normal text-muted-foreground">
              N.
            </div>
            <div className="hidden sm:block px-1 font-mono font-normal text-muted-foreground">
              Code
            </div>
            <div className="px-1 font-mono font-normal text-muted-foreground">
              Short Name
            </div>
            <div className="block px-1 font-mono font-normal text-muted-foreground">
              Icon
            </div>

            {icons.map(([k, value], idx) => (
              <div
                key={idx.toString()}
                className="contents group text-muted-foreground hover:text-foreground"
              >
                <div className="flex px-1 font-mono font-normal items-center min-w-0">
                  #{emojis.get(k)?.id}
                </div>
                <div className="hidden sm:flex px-1 font-normal truncate items-center min-w-0">
                  {emojis.get(k)?.code}
                </div>
                <div className="flex px-1 font-normal truncate items-center min-w-0">
                  {emojis.get(k)?.title}
                </div>
                <div className="flex px-1 font-normal items-center">
                  {/** biome-ignore lint/security/noDangerouslySetInnerHtml: icon preview */}
                  <div dangerouslySetInnerHTML={{ __html: value }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
