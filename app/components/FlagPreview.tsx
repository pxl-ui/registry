import { Card, CardContent } from "@/components/ui/pxl/card";
import { iconPacks } from "~/lib/icons";
import { countries } from "~/lib/specs";

export default function FlagPreview({ pack: packName }: { pack: string }) {
  const pack = iconPacks.get(packName);

  if (!pack) {
    return null;
  }

  const variantKeys = Object.keys(pack.variants);

  return (
    <div className="mt-0 not-content">
      <Card className="size-full pixel-color-border!">
        <CardContent scrollable>
          <div className="flex flex-col gap-2 w-full">
            <div
              className="grid gap-x-2 gap-y-1 w-full max-h-72
          grid-cols-[auto_auto_auto]
          sm:grid-cols-[auto_1fr_auto_auto_auto_auto]"
            >
              {/* Header row */}
              <div className="hidden sm:block px-1 font-mono font-normal text-muted-foreground">
                Code
              </div>
              <div className="hidden sm:block px-1 font-mono font-normal text-muted-foreground">
                Label
              </div>
              <div className="px-1 font-mono font-normal text-muted-foreground">
                ALPHA2
              </div>
              <div className="hidden sm:block px-1 font-mono font-normal text-muted-foreground">
                ALPHA3
              </div>
              {variantKeys.map((v) => (
                <div
                  key={v}
                  className="px-1 font-mono font-normal text-muted-foreground"
                >
                  {v}
                </div>
              ))}

              {Object.keys(pack.variants[variantKeys[0]]).map((k, idx) => (
                <div
                  key={idx.toString()}
                  className="contents group text-muted-foreground hover:text-foreground"
                >
                  <div className="hidden sm:flex px-1 font-mono font-normal items-center min-w-0">
                    #{countries.get(k)?.id.toString().padStart(3, "0")}
                  </div>
                  <div className="hidden sm:flex px-1 font-normal truncate items-center min-w-0">
                    {countries.get(k)?.title}
                  </div>
                  <div className="flex px-1 font-normal truncate items-center min-w-0">
                    {countries.get(k)?.alpha2}
                  </div>
                  <div className="hidden sm:flex px-1 font-normal truncate items-center min-w-0">
                    {countries.get(k)?.alpha3}
                  </div>
                  {variantKeys.map((v) => (
                    <div key={v} className="px-1 font-normal flex items-center">
                      <div
                        // biome-ignore lint/security/noDangerouslySetInnerHtml: icon preview
                        dangerouslySetInnerHTML={{
                          __html: pack.variants[v][k],
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
