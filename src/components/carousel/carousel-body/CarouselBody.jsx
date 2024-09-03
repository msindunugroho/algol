/* eslint-disable react/prop-types */

const CarouselBody = ({image}) => {
    
    return(
        <div className="carousel_body w-full  absolute bottom-[-50%] sm:bottom-[-100%] md:bottom-[-145%] xl:bottom-[-155%] left-0 z-[-1]">
                <img src={image} alt="earth" className={`w-full -scale-[1.5] sm:-scale-[1.5]`}/>
        </div>
    )
}

export default CarouselBody;