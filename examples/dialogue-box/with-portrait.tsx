import { DialogueBox, DialogueMessage, DialoguePortrait } from "@/components/ui/pxl/dialogue-box";

export default function WithPortrait() {
  return (
      <DialogueBox className="size-full w-(--widget-width-md)">
        <DialogueMessage
          className="h-[2lh]"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna in sapien eleifend pellentesque. Integer porta molestie mi vitae faucibus. Donec elementum consequat nibh id mollis. Phasellus in sagittis elit, et blandit augue. Aliquam scelerisque, leo vitae cursus porta, libero tortor facilisis arcu, vitae interdum nulla lacus vitae ipsum. Maecenas euismod, nibh sed tincidunt sodales, sem lectus commodo magna, non tristique orci sapien nec elit. Aliquam a faucibus nisl. Proin nunc quam, auctor eget nibh nec, accumsan finibus nisi. Morbi non orci vel turpis venenatis mollis."
          onEnd={() => console.log("onEnd")}
        />
        <DialoguePortrait 
          className="bg-primary"
          alt="@hero" 
          fallback="IHS"
           src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
          />
      </DialogueBox>
  );
}
