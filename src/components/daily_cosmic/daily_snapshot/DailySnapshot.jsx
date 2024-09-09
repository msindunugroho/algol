/* eslint-disable react/prop-types */
import assets from "../../../assets/assets";
import {Button} from "../../button/Button";

const DailySnapshot = ({data_snapshot, dropdown_download_snapshot, isDropdown_download, detail_snapshot, isDisplayDetail}) => {
    const {images} = assets;

    const {copyright , date, explanation, hdurl, title, url} = data_snapshot; 
    return(
        <div className="daily_snapshot">
            <div className={`container_daily-snapshot w-full h-full bg-primary-3 py-4 rounded-lg overflow-y-hidden relative flex flex-col gap-4`}>
                {/* image */}
                <div className="wrapper w-full h-[250px] sm:h-[310px] md:h-[400px] xl:h-[500px] bg-transparent_dark-5 flex justify-center">
                    <img src={url && url} alt={title && title} className="w-auto h-full " />
                </div>
                {/* detail daily */}
                <div className={`detail_daily-snapshot w-full transition-all duration-700 ease-out  ${isDisplayDetail? 'h-[100%]': 'h-[15%]'}`}>
                    <div className="detail_header px-4 py-2 md:px-8 flex gap-2">
                        {/* info */}
                        <span className="rounded-md bg-gradient-to-bl from-tertiary-3 to-quaternary-3 cursor-pointer flex justify-center items-center">
                            <i 
                            className="bi bi-info-circle p-2 icon text-white-1 flex justify-center items-center hover:bg-transparent_dark-2"
                            onClick={detail_snapshot}></i>
                        </span>
                        {/* download */}
                        <div className="download_snapshot w-[160px] relative">
                            <ol className={`w-full overflow-hidden cursor-pointer flex flex-col gap-1 absolute left-0 bottom-[115%] ${isDropdown_download? 'h-max':'h-0'}`}>
                                <li>
                                    <a href={hdurl && hdurl} download={`daily_snapshot`} target="_bank">
                                        <Button 
                                        textContent={`HD`} 
                                        onClick={() => {}}
                                        btn_type="w-full py-1 bg-gradient-to-bl from-tertiary-2 to-quaternary-2 text-white-2" />
                                    </a>
                                </li>
                                <li>
                                    <a href={url && url} download={`daily_cosmic.jpg`} target="_bank">
                                        <Button 
                                        textContent={`Normal`} 
                                        onClick={() => {}}
                                        btn_type="w-full py-1 bg-gradient-to-bl from-tertiary-2 to-quaternary-2 text-white-2" />
                                    </a>
                                </li>
                            </ol>
                            <span className="rounded-md overflow-hidden bg-gradient-to-bl from-tertiary-3 to-quaternary-3 cursor-pointer flex">
                                <a href={url && url} download={`daily_snapshot`} target="_bank" className="inline-block w-[70%] py-2 hover:bg-transparent_dark-2"><i className="bi bi-download text-white-1 icon flex justify-center items-center"></i></a>
                                <i 
                                    className={`bi bi-caret-down-fill w-[30%] py-2 text-white-1 bg-transparent_dark-3 hover:bg-transparent_dark-2 flex justify-center items-center ${isDropdown_download? '-rotate-[0deg]':'-rotate-[180deg]'}`}
                                    onClick={dropdown_download_snapshot}></i>
                            </span>
                        </div>
                        {/* date */}
                        <span className={`date_snapshot w-full text-white-1 text-xs sm:text-sm md:text-lg flex justify-end items-center ${isDisplayDetail && 'text-transparent_light-0'}`}>Captured: {date && date}</span>
                    </div>
                    <div className={`detail_body w-full overflow-hidden  transition-all duration-500 ease-out ${isDisplayDetail? 'h-[150px] sm:h-[200px] md:h-[300px]':`h-[0px]`}`}>
                        <div className="container_detail w-full h-full overflow-y-auto">
                            <div className={`content w-full h-max p-4 md:p-8 flex flex-col gap-8 md:gap-12`}>
                                <header>
                                    <h3 className="detail_copyright text-sm md:text-lg text-grey-1 font-medium capitalize">copyright: {copyright && copyright}</h3>
                                    <p className="detail_date text-xs md:text-base text-grey-4 font-normal capitalize">captured: {date && date}</p>
                                </header>
                                <div className="detail_body">
                                    <h3 className="detail_title text-sm md:text-lg text-grey-1 text-center text-balance font-medium uppercase mb-3 md:mb-6">{title}</h3>
                                    <p className="detail_desc text-xs md:text-base text-grey-4 font-normal text-justify text-balance">{explanation && explanation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailySnapshot;