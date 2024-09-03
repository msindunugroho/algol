import Button from "../../button/Button";

const CarouselHeader = () => {
    return(
        <div className="carousel_header relative flex-1 flex  flex-col justify-center items-center">
            <div className="content w-full p_formatted flex flex-col items-center gap-2 md:gap-4 *:text-center absolute top-[20%] left-[50%] -translate-x-[50%]">
            <h1 className={`text-5xl md:text-6xl w-max font-extrabold uppercase text-clip_quaternary-tertiary`}>algol</h1>
            <p className={`text-base md:text-lg text-grey-3 capitalize font-medium`}>Explore the wonders of space! Swipe through the latest news and discoveries from <span className={`text-clip_quaternary-tertiary font-semibold`}>NASA</span> right here.</p>
            <div className="navigate flex justify-center items-center gap-2 md:gap-4 outline-none *:outline-none">
                <Button textContent={"visit"} btn_type={"btn_quaternary"}/>
                <Button textContent={"visit"} btn_type={"btn_quaternary_ln"}/>
            </div>
            </div>
        </div>
    )
}

export default CarouselHeader;