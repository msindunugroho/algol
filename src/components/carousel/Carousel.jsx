
// file name: Carousel.jsx

import { useState } from "react";
import assets from "../../assets/assets";
import CarouselItem from "./carousel_item/CarouselItem";

const Carousel = () => {
    const {images} = assets;
    const [slideIndex, setSlideIndex] = useState(0);
    const carouselItemsData = [
        {
            title: "Artificial Satellite",
            desc: "Artificial satellites are human-made objects orbiting Earth, used for communication, navigation, weather monitoring, and scientific research.",
            img: images.carousel_3,
            space_facts: [
                {
                    count: 1957,
                    desc: "1957, launch year of Sputnik 1, the first artificial satellite."
                },
                {
                    count: 8000,
                    desc: "8000, active satellites currently orbiting Earth as of 2024"
                },
                {
                    count: 36000,
                    desc: "36000 km, approximate altitude of geostationary satellites above Earth"
                }
            ]
        },
        {
            title: "Nebula",
            desc: "A nebula is a vast cloud of gas and dust in space, where new stars are formed, like the Orion Nebula.",
            img: images.carousel_1,
            space_facts: [
                {
                    count: 24,
                    desc: "24 light-years, width of the Orion Nebula"
                },
                {
                    count: 1344,
                    desc: "1.344 light-years, distance from Earth to the Orion Nebula"
                },
                {
                    count: 600,
                    desc: "600 stars, estimated number of young stars in the Orion Nebula"
                }
            ]
        },
        {
            title: "Saturn",
            desc: "Saturn is the sixth planet from the Sun, famous for its stunning ring system and composed mainly of hydrogen and helium.",
            img: images.carousel_2,
            space_facts: [
                {
                    count: 82,
                    desc: "82 moons, saturn has the most moons in the Solar System"
                },
                {
                    count: 9.5,
                    desc: "9.5 AU, distance from the Sun (1 AU = Earth's distance to the Sun)"
                },
                {
                    count: 29.4,
                    desc: "29.4 years, time it takes Saturn to complete one orbit around the Sun"
                }
            ]
        },
    ];    

    const nextSlide = () => {
        setSlideIndex((prevIndex) => {return (prevIndex + 1) % carouselItemsData.length});
    }

    const backSlide = () => {
        console.log('backSlide', slideIndex)
        setSlideIndex((prevIndex) => {return (prevIndex - 1 + carouselItemsData.length) % carouselItemsData.length});
    }
    const dotHandler = (index) => {
        setSlideIndex(index)
    }
    return(
        <div className="carousel relative">
        <div className="carousel_container relative bg-secondary-5 w-full h-[350px] sm:h-[400px] md:h-[500px] 
            after:content-[''] after:z-[3] after:absolute after:w-4/5 after:h-full after:bg-gradient-to-r 
            after:from-transparent_dark-9 after:via-transparent_dark-7 after:to-transparent_dark-0 after:top-0 after:left-0">

            <i className="bi bi-caret-left-fill cursor-pointer z-[5] text-transparent_light-7 hover:text-transparent_light-2 absolute top-[50%] scale-[1.7] sm:scale-[1.9] md:scale-[2.3] 
                -translate-y-[50%] left-3 sm:left-4 md:left-5"
                onClick={() => {backSlide()}}></i> {/* arrow left */}
            
            <i className="bi bi-caret-right-fill cursor-pointer z-[5] text-transparent_light-7 hover:text-transparent_light-2 absolute top-[50%] scale-[1.7] sm:scale-[1.9] md:scale-[2.3] 
                -translate-y-[50%] right-3 sm:right-4 md:right-5"
                onClick={() => {nextSlide()}}></i> {/* arrow right */}
            
            <div className="dot z-[4] w-max h-max flex gap-1 sm:gap-2 md:gap-4 absolute bottom-3 md:bottom-4 
                left-1/2 -translate-x-[50%]">
                    {
                        carouselItemsData.map((_, index) => (
                            <span 
                            key={index}
                            className={`inline-block w-2 h-2 sm:scale-[1.5] md:scale-[1.8] rounded-full cursor-pointer ${slideIndex === index? 'bg-transparent_light-7':'bg-transparent_light-2'}`}
                            onClick={() => {dotHandler(index)}}></span>
                        ))
                    }
            </div> 
            <div className="container_carousel-items relative w-full h-full">
            {
                carouselItemsData.map((data, index) => {
                    return(
                        <CarouselItem 
                        key={index} 
                        data={data}
                        displayCarousel={index === slideIndex? true : false}/>
                    )
                })
            }
            </div>
        </div>
    </div>
    
    )
}

export default Carousel;

