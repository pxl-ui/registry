import { useMeasure } from "@uidotdev/usehooks";

import { AnchorGrid } from "../anchor-grid";

export default function Preview() {
  const [ref, { width, height }] = useMeasure();

  return (
    <div className="w-full h-100" ref={ref}>
      <AnchorGrid
        containerWidth={width ?? 0}
        containerHeight={height ?? 0}
        cols={9}
        rows={5}
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
              return <div className="size-full bg-red-100"></div>;
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
              return <div className="size-full bg-green-100"></div>;
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
              return <div className="size-full bg-blue-100"></div>;
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
              return <div className="size-full bg-purple-100"></div>;
            },
          },
        ]}
      />
    </div>
  );
}
