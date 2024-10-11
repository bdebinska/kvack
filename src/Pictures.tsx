import { Navigation } from "./Navbar";
import { CarouselKvack } from "./Carousel";

export function Pictures() {  

    return (<>
        <Navigation />
        <div className="carousel flex flex-row">
        <CarouselKvack />
        <CarouselKvack />
        </div>
        </>)

}