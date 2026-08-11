import { Scores } from "@/components/ui/pxl/scores";

export default function ScoresExample() {
  return (
    <div className="w-full min-h-23 flex items-center justify-center">
      <Scores
        className="w-36"
        items={[
          { avatar: "https://github.com/shadcn.png", description: "AAA", title: "1,000,000", },
          { avatar: "https://github.com/shadcn.png", description: "ABB", title: "900,000", },
          { avatar: "https://github.com/shadcn.png", description: "KNM", title: "700,000", },
          { avatar: "https://github.com/shadcn.png", description: "XLL", title: "550,000", },
          { avatar: "https://github.com/shadcn.png", description: "RSS", title: "90,000", },
          { avatar: "https://github.com/shadcn.png", description: "AAA", title: "75,000", },
          { avatar: "https://github.com/shadcn.png", description: "CKL", title: "60,000", },
          { avatar: "https://github.com/shadcn.png", description: "ABB", title: "1,000", }
        ]} 
      />
    </div>
  )
}