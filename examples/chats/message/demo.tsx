import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/features/pxl/chats/bubble";
import { Marker, MarkerContent } from "@/components/features/pxl/chats/marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@/components/features/pxl/chats/message";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pxl/avatar";
import { Emoji } from "@/components/ui/pxl/emoji";

export default function MessageDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              className="bg-primary"
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
              alt="@hero"
            />
            <AvatarFallback>HE</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Deploying to prod real quick.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              className="bg-success -scale-x-100"
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png"
              alt="@princess"
            />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>It&apos;s 4:55 PM. On a Friday.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              className="bg-primary"
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
              alt="@hero"
            />
            <AvatarFallback>HE</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>It&apos;s a one-line change.</BubbleContent>
          </Bubble>
          <MessageFooter>Delivered</MessageFooter>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage
              className="bg-success -scale-x-100"
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png"
              alt="@princess"
            />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>
                <Emoji>It&apos;s always a one-line change 😭.</Emoji>
              </BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>Alright, let me take a look.</BubbleContent>
              <BubbleReactions aria-label="Reactions: thumbs up">
                <Emoji as="span">👍</Emoji>
              </BubbleReactions>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
      <Marker role="status">
        <MarkerContent className="shimmer">
          <span className="font-medium">Zelda</span> is typing...
        </MarkerContent>
      </Marker>
    </div>
  );
}
