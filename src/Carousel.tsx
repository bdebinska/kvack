import { Carousel } from "@material-tailwind/react";
 
export function CarouselKvack() {
  return (
    <Carousel className="rounded-m" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <img
        src="/WhatsApp Image 2024-10-11 at 11.43.56.jpeg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/WhatsApp Image 2024-10-11 at 11.44.07.jpeg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/WhatsApp Image 2024-10-11 at 11.44.15.jpeg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="/WhatsApp Image 2024-10-11 at 11.44.23.jpeg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="/WhatsApp Image 2024-10-11 at 11.44.59.jpeg"
        alt="image 5"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}