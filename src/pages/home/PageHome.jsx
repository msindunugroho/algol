// import Carousel from "../../components/carousel/Carousel";
import DailyCosmicSnapshot from "../../components/daily_cosmic/DailyCosmicSnapshot";
// import AsteroidApproachTracker from "../../components/asteroid_approach_tracker/AsteroidApproachTracker";
// import SpaceSnapshot from "../../components/space_snapshot/SpaceSnapshot";


const PageHome = () => {
    return(
        <section className="pageHome">
            <div className="pageHome_container flex flex-col gap-8 md:gap-20">
                {/* <Carousel/> */}
                {/* <SpaceSnapshot/> */}
                <DailyCosmicSnapshot/>
                {/* <AsteroidApproachTracker/> */}
            </div>
        </section>
    )
}

export default PageHome;