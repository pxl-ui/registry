import { Bubble, BubbleContent } from "@/components/features/pxl/conversation/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/features/pxl/conversation/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/features/pxl/conversation/message-scroller";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/pxl/avatar";

export default function MessageScrollerDemo() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-56 w-full max-w-xs pixel-border pixel-size-[3px]">
        <MessageScrollerViewport>
          <MessageScrollerContent className="p-4">
            <MessageScrollerItem>
              <Message>
                <MessageAvatar>
                  <Avatar>
                    <AvatarImage className="bg-success -scale-x-100" src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png" alt="@princess" />
                    <AvatarFallback>PR</AvatarFallback>
                  </Avatar>
                </MessageAvatar>
                <MessageContent>
                  <Bubble variant="secondary">
                    <BubbleContent>Welcome! Ask me anything.</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
            <MessageScrollerItem>
              <Message align="end">
                <MessageContent>
                  <Bubble>
                    <BubbleContent>How do I resize a panel?</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
            <MessageScrollerItem scrollAnchor>
              <Message>
                <MessageAvatar>
                  <Avatar>
                    <AvatarImage className="bg-success -scale-x-100" src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/princess.png" alt="@princess" />
                    <AvatarFallback>PR</AvatarFallback>
                  </Avatar>
                </MessageAvatar>
                <MessageContent>
                  <Bubble variant="secondary">
                    <BubbleContent>
                      Drag the handle between the Resizable panels.
                    </BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
