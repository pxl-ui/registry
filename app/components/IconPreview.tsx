import { Card, CardContent } from "@/components/ui/pxl/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/pxl/tabs";
import { iconPacks } from "~/lib/icons";

export default function IconPreview({ pack: packName }: { pack: string }) {
  const pack = iconPacks.get(packName);

  if (!pack) {
    return null;
  }

  if (Object.entries(pack?.variants).length === 1) {
    return (
      <p>
        {pack.name}
      </p>
    )
  }

  return (
    <div className="mt-0 not-content">
      <Tabs className="size-full" defaultValue={Object.keys(pack.variants)[0]}>
        <TabsList>
          {Object.keys(pack.variants).map(k => (
          <TabsTrigger key={k} value={k}>{k}</TabsTrigger>
          ))}
        </TabsList>
        {Object.keys(pack.variants).map(k => (
          <TabsContent key={k} value={k}>
            <Card className="size-full pixel-color-border!">
              <CardContent scrollable>
                <div className="grid gap-3 justify-center grid-cols-2 md:grid-cols-4">
                  {Object.entries(pack.variants[k])?.map(([label, svg]) => (
                    <div key={label} className="flex flex-col items-center">
                      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: svg icons rendering for showcase */}
                      <div dangerouslySetInnerHTML={{__html: svg}} />
                      <span className="flex-1" key={label}>{label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
