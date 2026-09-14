import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/features/pxl/conversation/bubble";
import { Emoji } from "@/components/ui/pxl/emoji";

export default function BubbleDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Bubble align="end">
        <BubbleContent>Hey there! what&apos;s up?</BubbleContent>
      </Bubble>
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>Hey! Want to see chat bubbles?</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>
            I can group messages, switch sides, and keep the whole thread easy
            to scan.
          </BubbleContent>
          <BubbleReactions role="img" aria-label="Reaction: thumbs up">
            <Emoji as="span">👍</Emoji>
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <Bubble align="end">
        <BubbleContent>Sure. Hit me with your best demo.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          Yes. You are reading a demo that is demoing itself. Very meta. Very
          on-brand.
        </BubbleContent>
        <BubbleReactions
          role="img"
          aria-label="Reactions: thumbs up, fire, eyes, and 2 more"
        >
          <Emoji as="span">👍</Emoji>
          <Emoji as="span">🔥</Emoji>
          <Emoji as="span">👀</Emoji>
          <span>+2</span>
        </BubbleReactions>
      </Bubble>
    </div>
  );
}
