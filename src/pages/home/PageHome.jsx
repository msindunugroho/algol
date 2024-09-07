// import Carousel from "../../components/carousel/Carousel";
import DailyCosmicSnapshot from "../../components/daily_cosmic/DailyCosmicSnapshot";

const PageHome = () => {
    return(
        <section className="pageHome">
            <div className="pageHome_container flex flex-col gap-8 md:gap-20">
                {/* <Carousel/> */}
                <DailyCosmicSnapshot/>
            </div>
        </section>
    )
}

export default PageHome;