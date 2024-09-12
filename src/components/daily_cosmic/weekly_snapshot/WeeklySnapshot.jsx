/* eslint-disable react/prop-types */
import {Button} from "../../button/Button";
import assets from "../../../assets/assets";

const WeeklySnapshot = ({data_snapshot, onDateClick}) => {
    const {images} = assets;

    const handleClick = (date) => {
        onDateClick(date);  // Panggil function dari parent untuk update state
    };
    return(
        <div className="weekly_snapshot">
            <div className="container_weekly-snapshot w-full overflow-auto hidde_scroller">
                <div className="wrapper w-max py-4 flex gap-4">
                    {
                        data_snapshot.map((data, index) => {
                            const {date, title, url} = data; 
                            return (
                                <div key={`card-${index}`} className="card w-[210px] h-[275px] md:w-[310px] md:h-[360px] rounded-md bg-primary-3 p-2 md:p-4  flex flex-col gap-2 overflow-hidden">
                                    <div className="frame w-full h-[60%] rounded-md overflow-hidden bg-transparent_dark-5 flex justify-center">
                                        <img src={url} alt={title} className=" h-full bg-grey-1"/>
                                    </div>
                                    <div className="card_body w-full h-[35%] flex flex-col justify-between items-center gap-2">
                                        <span className="title block w-full h-full">
                                        <h3 className="h-full w-full text-center text-balance text-sm md:text-lg font-semibold capitalize text-grey-1 flex-1">{title}</h3>
                                        </span>
                                        <div className="card_detail w-full flex justify-between items-center">
                                            <Button
                                                textContent={"view"}
                                                btn_type={`btn_quaternary_ln py-1 px-2 md:py-1 md:px-3 text-sm md:text-lg font-normal`}
                                                onClick={() => handleClick(date)}/>
                                            <p className="text-xs md:text-base text-dark_grey-1">{date}</p>
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

export default WeeklySnapshot;