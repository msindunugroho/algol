
// file name: CarouselItem.jsx
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const SpaceFactItem = ({ data, displayCarousel }) => {
    const { count, desc } = data;
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        const setCount = () => {
            const interval = setInterval(() => {
                setDisplayCount(prevCount => {
                    if (prevCount < count) {
                        if(count < 100) {
                            return Math.min(prevCount + 6, count);
                        } else if(count < 2000) {
                            return Math.min(prevCount + 55, count);
                        } else if(count > 2000) {
                            return Math.min(prevCount + 252, count);
                        } 
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 100); // Adjust the interval time as needed
            return () => clearInterval(interval); // Cleanup on unmount
        }
        if(displayCarousel) {
            setCount();
        } else {
            setDisplayCount(0)
        }
    }, [count, displayCarousel]);

    return (
        <div className="space_fact_item p-1 sm:p-3 bg-transparent_dark-4 relative z-[4] flex-[1] md:flex-none md:w-[200px] rounded-md flex flex-col gap-1 sm:gap-2">
            <h2 className="count text-clip_quaternary-tertiary text-center text-xl md:text-3xl font-medium md:font-semibold  pb-1 sm:pb-2 border-b-quaternary-3 border-[1px]">
                {displayCount}
            </h2>
            <p className="desc text-xs md:text-base text-grey-5 text-center font-medium">
                {desc}
            </p>
        </div>
    );
}

const CarouselItem = ({ data, displayCarousel }) => {
    const { title, desc, img, space_facts } = data;
    return (
        <div className={`carousel_item w-full h-full relative ${displayCarousel? 'block':'hidden'}`}>
            <img src={img} alt="Nebula" className="w-full h-full object-cover object-center z-0" />
            <div className="carousel_body w-full absolute left-0 top-1/2 translate-y-[-50%] px-12 sm:px-16 md:px-20 z-[4]">
                <h1 className="text-2xl md:text-4xl text-grey-1 font-bold uppercase relative mb-1 md:mb-3">{title}</h1>
                <p className="sm:w-4/5 md:w-3/4 text-sm md:text-lg text-grey-3">{desc}</p>
                <div className="space_fact h-max flex md:justify-center gap-2 sm:gap-3 md:gap-5 sm:translate-y-16">
                    {
                        space_facts.map((data, index) => {
                            return (
                                <SpaceFactItem 
                                    key={`${title}_fact_item_${index + 1}`}
                                    data={data}
                                    displayCarousel={displayCarousel}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;