/* eslint-disable react/prop-types */
import { Button } from "../../button/Button";

const GalleryBanner = ({data_display, displayGalleryHandler}) => {
    return(
        <div className="gallery_banner">
            <div className="container_gallery-banner w-full h-[180px] md:h-[200px] overflow-auto hidde_scroller">
                <div className="wrapper w-max h-full flex gap-4">
                    {
                        data_display &&
                        data_display.map((data, index) => {
                            const {title, url, data_display} = data;
                            return(
                            <div key={index} className="card rounded-lg overflow-hidden">
                                <div className="card w-[350px] sm:w-[400px] md:w-[500px] h-full relative">
                                    <img src={url} alt={title} className="w-full h-full object-cover object-center"/>
                                    <div className="desc h-full p-3 pr-[20px] bg-gradient-to-r from-transparent_dark-9 via-transparent_dark-8 to-transparent_dark-0 flex flex-col justify-center gap-3 absolute left-0 bottom-0">
                                        <p className="text-grey-1 text-3xl font-bold capitalize">{title}</p>
                                        <Button
                                        textContent={"view"}
                                        btn_type={"btn_tertiary_ln w-max"}
                                        onClick={() => {displayGalleryHandler(data_display)}}/>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default GalleryBanner;