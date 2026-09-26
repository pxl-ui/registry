import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_LOW } from "lexical";
import { Mic, MicOff } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/pxl/button";
import {
  SPEECH_TO_TEXT_COMMAND,
  SUPPORT_SPEECH_RECOGNITION,
} from "@/ui/pxl/rich-text-editor/extensions/speech-to-text";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";

function SpeechToTextButton() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    return editor.registerCommand(
      SPEECH_TO_TEXT_COMMAND,
      (enabled) => {
        setIsListening(enabled);
        return false;
      },
      COMMAND_PRIORITY_LOW,
    );
  }, [editor]);

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      className={cn(
        "text-muted-foreground",
        isListening && "text-destructive hover:text-destructive",
      )}
      title={t.speechToText}
      aria-label={t.speechToText}
      aria-pressed={isListening}
      onClick={() =>
        editor.dispatchCommand(SPEECH_TO_TEXT_COMMAND, !isListening)
      }
    >
      <Mic />
    </Button>
  );
}

export function SpeechToTextPlugin() {
  const { t } = useTranslation();

  if (SUPPORT_SPEECH_RECOGNITION) {
    return <SpeechToTextButton />;
  }

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      className="text-muted-foreground"
      title={t.speechToText}
      aria-label={t.speechToText}
      disabled
    >
      <MicOff />
    </Button>
  );
}
