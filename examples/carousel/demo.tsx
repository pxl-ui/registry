import { Card, CardContent } from "@/components/ui/pxl/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/pxl/carousel";

const slides = [1, 2, 3, 4, 5];

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-40">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-3">
                <span className="font-medium text-2xl">{slide}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
