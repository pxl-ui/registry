import { DialogueBox, DialogueMessage, DialoguePortrait } from "@/components/ui/pxl/dialogue-box";

export default function WithPortrait() {
  return (
    <div className="relative flex flex-col items-center gap-4 p-8">
      <DialogueBox className="size-full w-(--widget-width-md)">
        <DialogueMessage
          className="h-[2lh]"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna in sapien eleifend pellentesque. Integer porta molestie mi vitae faucibus. Donec elementum consequat nibh id mollis. Phasellus in sagittis elit, et blandit augue. Aliquam scelerisque, leo vitae cursus porta, libero tortor facilisis arcu, vitae interdum nulla lacus vitae ipsum. Maecenas euismod, nibh sed tincidunt sodales, sem lectus commodo magna, non tristique orci sapien nec elit. Aliquam a faucibus nisl. Proin nunc quam, auctor eget nibh nec, accumsan finibus nisi. Morbi non orci vel turpis venenatis mollis."
          onEnd={() => console.log("onEnd")}
        />
        <DialoguePortrait 
          alt="@shadcn" 
          fallback="CN"
          src="https://github.com/shadcn.png"
          />
      </DialogueBox>
    </div>
  );
}
