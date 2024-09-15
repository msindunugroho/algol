
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// file name: CardSpaceSnapshot.jsx

import { Button } from "../../button/Button";

const CardSpaceSnapshot = ({articleData, articleActive, index, activeHandler, isArticleActive, isHidden}) => {
    const {date, explanation, hdurl, title, copyright, url} = articleData;
    console.log("is active: ", articleActive)

    return(
        <div className={`card h-full w-max overflow-hidden bg-primary-3 flex flex-row-reverse ${articleActive? 'w-full':'w-1/3'} ${isHidden? 'hidden' : ''}`}>
            <div className={`card_image relative ${articleActive? 'w-2/5':'w-full'}`}>
                <img src={url} alt={title} className="w-full h-full object-cover object-center"/>
                <div className="desc_card-img w-full h-2/5 px-2 py-3 md:p-4 absolute bottom-0 left-0 bg-gradient-to-b from-transparent_dark-0 via-transparent_dark-8 to-transparent_dark-9 flex flex-col justify-end items-center gap-2 md:gap-4">
                    <h3 className="text-grey-1 text-sm text-center md:text-base sm:font-bold">{title}</h3>
                    <Button 
                    btn_type={`btn_tertiary_ln text-sm font-normal px-1 py-0 md:py-1 xl:text-base`} 
                    onClick={() => {activeHandler(index)}}
                    textContent={articleActive?'close':`detail`}/>
                </div>
            </div>
            <div className={`card_body overflow-auto hidde_scroller ${articleActive? 'w-[60%]':'w-[0%]'}`}>
                <div className="wrapper w-full h-max p-2 sm:p-4 flex flex-col gap-2">
                <h2 className="title text-grey-1 text-xl md:text-3xl uppercase sm:font-bold">{title}</h2>
                <p className="text-grey-4 text-xs md:text-sm capitalize italic">{copyright || '-'} | {date || '-'} | <a href={hdurl} target="_blank" className="text-secondary-2 underline">view image <i className="bi bi-box-arrow-up-right"></i></a></p>
                <p className="text-grey-3 text-xs md:text-base md:mt-2 font-semibolds indent-4">{explanation}</p>
                </div>
            </div>
        </div>
    )
}

export default CardSpaceSnapshot;