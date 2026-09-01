import Emojis from "@/components/icons/pxl/dotto-emoji";
import { WheelList, WheelOption } from "@/components/ui/pxl/wheel-list";

export default function WheelListPreview() {
  return (
    <div className="h-48 w-full max-w-md">
      <WheelList
        defaultValue="ITEM"
        onChange={(evt) =>
          console.log(evt.settled ? `selected ${evt.value}` : "coasting")
        }
        onSelect={(value) => console.log(value)}
      >
        <WheelOption key="POKÉDEX" value="POKÉDEX">
          <Emojis.Robot shapeRendering="crisp-edges" className="size-4 mr-1" />
          POKÉDEX
        </WheelOption>
        <WheelOption key="POKÉMON" value="POKÉMON">
          <Emojis.GrinningCat shapeRendering="crisp-edges" className="size-4 mr-1" />
          POKÉMON
        </WheelOption>
        <WheelOption key="ITEM" value="ITEM">
          <Emojis.PileOfPoo shapeRendering="crisp-edges" className="size-4 mr-1" />
          ITEM
        </WheelOption>
        <WheelOption key="TRAINER" value="TRAINER">
          <Emojis.CowboyHatFace shapeRendering="crisp-edges" className="size-4 mr-1" />
          TRAINER
        </WheelOption>
        <WheelOption key="SAVE" value="SAVE">
          <Emojis.ThoughtBalloon shapeRendering="crisp-edges" className="size-4 mr-1" />
          SAVE
        </WheelOption>
        <WheelOption key="OPTION" value="OPTION">
          <Emojis.AngerSymbol shapeRendering="crisp-edges" className="size-4 mr-1" />
          OPTION
        </WheelOption>
        <WheelOption key="EXIT" value="EXIT">
          <Emojis.DashingAway shapeRendering="crisp-edges" className="size-4 mr-1" />
          EXIT
        </WheelOption>
      </WheelList>
    </div>
  );
}
