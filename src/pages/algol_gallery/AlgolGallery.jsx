import Gallery from "../../components/gallery/Gallery";
import GalleryBanner from "../../components/gallery/gallery_banner/GalleryBanner";
import { satelliteGallery, spaceGallery, nebulaGallery, earthAndSkyGallery } from "../../utils/galleryData";
import galleryBannerData from "../../utils/galleryBannerData";
import { useState } from "react";

const AlgolGallery = () => {
    const [displayGallery, setDisplayGallery] = useState(satelliteGallery);
    const [titleGallery, setTitleGallery] = useState("satellite capture")

    const displayGalleryHandler = (display_param) => {
        if( display_param == "satelliteGallery") {
            setDisplayGallery(satelliteGallery);
            setTitleGallery("satellite capture")
        } else if(display_param == "spaceGallery") {
            setDisplayGallery(spaceGallery);
            setTitleGallery("space capture")
        } else if(display_param == "nebulaGallery") {
            setDisplayGallery(nebulaGallery);
            setTitleGallery("nebula capture")
        } else if(display_param == "earthAndSkyGallery"){
            setDisplayGallery(earthAndSkyGallery);
            setTitleGallery("earth and sky capture")
        }
    }
    
    return(
        <div className="algol_galery w-full p-4 flex flex-col gap-8">
            {
                galleryBannerData &&
                <GalleryBanner 
                data_display={galleryBannerData}
                displayGalleryHandler={displayGalleryHandler}/>
            }
            {
                displayGallery &&
                <Gallery
                data_display={displayGallery}
                title_gallery={titleGallery}
                />
            }
        </div>
    )
}

export default AlgolGallery;