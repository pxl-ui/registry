import { useMeasure } from "@uidotdev/usehooks";

import { AnchorGrid } from "@/components/ui/pxl/anchor-grid";

export default function AnchorGridPreview() {
  const [ref, { width, height }] = useMeasure();

  return (
    <div className="w-full h-100" ref={ref}>
      <AnchorGrid
        containerWidth={width ?? 0}
        containerHeight={height ?? 0}
        cols={9}
        rows={5}
        gap={12}
        showGridLines
        widgets={[
          {
            id: "widget_1",
            x: 0,
            y: 0,
            w: 3,
            h: 1,
            anchorX: "left",
            anchorY: "top",
            render() {
              return <div className="size-full pixel-border pixel-color-danger-foreground p-(--pixel-size)"><div className="size-full bg-danger"></div></div>;
            },
          },
          {
            id: "widget_2",
            x: 1,
            y: 1,
            w: 2,
            h: 2,
            anchorX: "left",
            anchorY: "top",
            render() {
              return <div className="size-full pixel-border pixel-color-success-foreground p-(--pixel-size)"><div className="size-full bg-success"></div></div>;
            },
          },
          {
            id: "widget_3",
            x: 4,
            y: 1,
            w: 4,
            h: 1,
            anchorX: "left",
            anchorY: "top",
            render() {
              return <div className="size-full pixel-border pixel-color-primary-foreground p-(--pixel-size)"><div className="size-full bg-primary"></div></div>;
            },
          },
          {
            id: "widget_4",
            x: 5,
            y: 3,
            w: 1,
            h: 1,
            anchorX: "left",
            anchorY: "top",
            render() {
              return <div className="size-full pixel-border pixel-color-info-foreground p-(--pixel-size)"><div className="size-full bg-info"></div></div>;
            },
          },
        ]}
      />
    </div>
  );
}
