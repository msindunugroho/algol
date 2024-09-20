import Carousel from "../../components/carousel/Carousel";
import DailyCosmicSnapshot from "../../components/daily_cosmic/DailyCosmicSnapshot";
import GalleryLink from "../../components/gallery_link/GalleryLink";
import MiniArticle from "../../components/mini_article/MiniArticle";
import PageHightlight from "../../components/page_hightlight/PageHightlight";
import assets from "../../assets/assets";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";


const PageHome = () => {
    const {page_hightlight_asteroid, page_hightlight_sun} = assets.images;
    return(
        <section className="pageHome">
            <div className="pageHome_container flex flex-col gap-8 md:gap-20">
                <Navigation/>
                <Carousel/>
                <MiniArticle/>
                <PageHightlight
                title={"Asteroid Information Center"}
                desc={"For years, NASA's Near-Earth Object (NEO) program has tracked asteroids and other celestial bodies that pass close to Earth. The Asteroid Information Center provides critical data on near-Earth objects, their trajectories, sizes, and potential impacts. Explore detailed insights on asteroid discoveries, monitoring efforts, and learn about our planet's defenses against possible asteroid collisions."}
                img={page_hightlight_asteroid}
                path={"/asteroid"}/>
                <DailyCosmicSnapshot/>
                <PageHightlight
                title={"Sun Observation Center"}
                desc={"NASA’s solar observation missions have been monitoring the Sun's activity for decades. The Sun Observation Center offers comprehensive data on solar flares, sunspots, solar winds, and their effects on Earth’s magnetic field and space weather. Discover how the Sun influences our planet, powers the solar system, and the advanced technology NASA uses to study its behavior."}
                img={page_hightlight_sun}
                path={"/sun"}/>
                <GalleryLink/>
                <Footer/>
            </div>
        </section>
    )
}

export default PageHome;