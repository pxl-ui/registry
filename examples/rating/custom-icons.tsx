import { Rating, RatingIcon } from "@/components/ui/pxl/rating"

export default function CustomIconsExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Rating icon={RatingIcon.Star} rating={1.5} />
      <Rating icon={RatingIcon.Heart} rating={1.5} variant="pink" />
      <Rating icon={RatingIcon.Energy} rating={1.5} variant="green" />
      <Rating icon={RatingIcon.Sparkle} rating={1.5} variant="blue" />
      <Rating icon={RatingIcon.Emoji} rating={1.5} />
    </div>
  )
}
