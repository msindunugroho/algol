import AsteroidApproachTracker from "../../components/asteroid_approach_tracker/AsteroidApproachTracker";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

const NearEarthObjects = () => {
    return(
        <section className="near_earth_objects">
            <div className="container_near-earth-objects">
                <Navigation/>
                <AsteroidApproachTracker/>
                <Footer/>
            </div>
        </section>
    );
}

export default NearEarthObjects;