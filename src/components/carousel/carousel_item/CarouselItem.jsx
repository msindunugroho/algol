
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
                            return Math.min(prevCount + 7, count);
                        } else if(count < 2000) {
                            return Math.min(prevCount + 109, count);
                        } else if(count > 2000) {
                            return Math.min(prevCount + 459, count);
                        } else if(count > 10000) {
                            return Math.min(prevCount + 2132, count);
                        }
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 50); // Adjust the interval time as needed
            return () => clearInterval(interval); // Cleanup on unmount
        }
        if(displayCarousel) {
            setCount();
        } else {
            setDisplayCount(0)
        }
    }, [count, displayCarousel]);

    return (
        <div className="space_fact_item relative first-line:z-[4] flex-[1]">
            <div className="count text-clip_quaternary-tertiary text-center text-xl font-semibold">
                {displayCount}
            </div>
            <div className="desc text-xs text-grey-5 text-center font-medium">
                {desc}
            </div>
        </div>
    );
}

const CarouselItem = ({ data, displayCarousel }) => {
    const { title, desc, img, space_facts } = data;
    return (
        <div className={`carousel_item w-full h-full relative ${displayCarousel? 'block':'hidden'}`}>
            <img src={img} alt="Nebula" className="w-full h-full object-cover object-center z-0" />
            <div className="carousel_body w-full h-full absolute left-0 top-1/2 translate-y-[-50%] px-12 z-[4] flex flex-col justify-center">
                <h1 className="text-2xl text-grey-1 font-bold uppercase relative mb-1">{title}</h1>
                <p className="text-sm text-grey-3">{desc}</p>
                <div className="space_fact flex gap-2 mt-4">
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