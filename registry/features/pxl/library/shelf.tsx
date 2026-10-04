import { cn } from "cn"
import type { ComponentProps } from "react"

function Shelf({ className, ...props }: ComponentProps<"div">) {
  return (
    <div data-slot="shelf"
      className={cn("flex justify-center items-end", className)}
      {...props}
      />
  )
}

export {
  Shelf
}