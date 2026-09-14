import { Emoji } from "@/components/ui/pxl/emoji"

export default function EmojiDemo() {
  return (
    <div className="flex flex-col gap-4 text-center">
      <p className="text-lg">
        <Emoji>👍 ❤️ 🤣 😲 😭 😡</Emoji>
      </p>
      <p className="text-lg">
        <Emoji>Hello from Spain 🇪🇸</Emoji>
      </p>
      <p className="text-base">
        <Emoji>Built with 💜 and 🤖</Emoji>
      </p>
    </div>
  )
}
