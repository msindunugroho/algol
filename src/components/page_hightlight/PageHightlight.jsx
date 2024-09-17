/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PageHightlight = ({img, title, desc, path}) => {
    return(
        <div className="page_hightlight">
            <div className="container_page-hightlight w-full h-screen relative">
                <img src={img} alt={title} className="w-full h-full object-cover object-center"/>
                <div className="desc w-5/6 h-full p-8 md:p-12 bg-gradient-to-r from-transparent_dark-9 via-transparent_dark-8 to-transparent_dark-0 flex flex-col gap-4 justify-center absolute left-0 bottom-0">
                    <h1 className="w-1/2 text-2xl sm:text-3xl md:text-5xl text-grey-1 uppercase font-bold">{title}</h1>
                    <p className="w-1/2 text-base text-grey-4 capitalize font-normal">{desc}</p>
                    <Link to={path}>
                    <p className="text-sm text-grey-4 capitalize font-normal"><span className="pr-1">start exploring</span> <i className="bi bi-arrow-right"></i></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageHightlight;