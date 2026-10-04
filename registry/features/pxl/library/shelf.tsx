import { cn } from "cn"
import type { ComponentProps } from "react"

function Shelf({ className, ...props }: ComponentProps<"div">) {
  return (
    <div data-slot="shelf"
      className={cn("", className)}
      {...props}
      />
  )
}

export {
  Shelf
}