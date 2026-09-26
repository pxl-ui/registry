import { defineExtension } from "lexical";

import { MentionNode } from "@/ui/pxl/rich-text-editor/nodes/mention-node";

export const MentionExtension = defineExtension({
  name: "@shadcn-editor/editor/Mention",
  nodes: () => [MentionNode],
});
