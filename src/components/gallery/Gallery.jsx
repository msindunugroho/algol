/* eslint-disable react/prop-types */

import { useState } from "react";
import Header from "../header/Header";

const Gallery = ({data_display, title_gallery}) => {

    return(
        <div className="gallery">
            <Header
            textContent_title={title_gallery}
            textContent_firstDesc={`total images: ${data_display.length}`}/>
            <div className="contaianer_gallery mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {
                    data_display &&
                    data_display.map((data, index) => (
                    <div key={index} className="card w-full h-[300px] rounded-lg relative bg-grey-1 overflow-hidden">
                        <img src={data.url} alt="" className="w-full h-full object-cover object-center"/>
                        <div className="desc w-full h-1/4 flex flex-col justify-end px-3 pb-3 bg-gradient-to-b from-transparent_dark-0 via-transparent_dark-8 to-transparent_dark-9 absolute bottom-0 left-0">
                            <p className="text-grey-1 text-sm text-center text-balance capitalize font-semibold">{data.title}</p>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery;