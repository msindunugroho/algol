import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import Header from "../header/Header";

const GalleryLink = () => {
    const {gallery_link_1, gallery_link_2, gallery_link_3} = assets.images;
    return(
        <div className="gallery_link p_formatted">
            <div className="container_gallery-link w-full">
                <Header
                textContent_title={'gallery'}
                textContent_firstDesc={'more NASA images here'}/>
                <Link to="/gallery">
                    <div className="gallery_template w-full h-[250px] mt-4 sm:h-[300px] md:h-[400px] grid grid-cols-4 grid-rows-4 gap-4">
                        <img
                            src={gallery_link_1}
                            alt="Image 1"
                            className="col-start-1 col-end-3 row-start-1 row-end-3 object-cover object-top w-full h-full"
                        />
                        <img
                            src={gallery_link_2}
                            alt="Image 2"
                            className="col-start-3 col-end-5 row-start-1 row-end-5 object-cover object-bottom w-full h-full"
                        />
                        <img
                            src={gallery_link_3}
                            alt="Image 3"
                            className="col-start-1 col-end-3 row-start-3 row-end-5 object-cover object-center w-full h-full"
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default GalleryLink;