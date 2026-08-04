import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/pxl/card";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
}

export function QuestsLog({
  className
}: Props) {
  return (
    <Card size="lg" className={cn(className)}>
      <CardContent>
        Hello Quests Log!
      </CardContent>
    </Card>
  )
}