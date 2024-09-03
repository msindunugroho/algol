import CarouselBody from "./carousel-body/CarouselBody";
import CarouselHeader from "./carousel-header/CarouselHeader";
import assets from "../../assets/assets";

const Carousel = () => {
    const {images} = assets;

    return(
        <div className="carousel">
            <div className="carousel_container z-1 backdrop-blur-sm overflow-hidden min-h-screen w-full flex relative after:contents-[''] after:w-full after:h-[20%] after:bg-gradient-to-b after:from-transparent_clr after:via-primary-4 after:to-primary-4 after:absolute after:bottom-0 after:left-0 after:right-0 z-[2]">
                <CarouselHeader/>
                <CarouselBody
                image={images.earth_rm_bg}
                />
                <div className="dot absolute top-4 right-4 z-[-1] shadow-atrBg_quaternary rounded-[100%] "></div>
                <div className="dot absolute top-4 left-16 z-[-1] shadow-atrBg_tertiary rounded-[100%]"></div>
            </div>
        </div>
    )
}

export default Carousel;