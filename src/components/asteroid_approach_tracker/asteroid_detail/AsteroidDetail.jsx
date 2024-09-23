/* eslint-disable react/prop-types */
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";
import { useState } from "react";
import assets from "../../../assets/assets";
import {AncButton, Button} from "../../button/Button";

const AsteroidDetail = ({neo_feed_data}) => {
    const {images} = assets;
    const {date, dataFiltered} = neo_feed_data;
    // State untuk mengontrol card yang diperluas
    const [expandDetail, setExpandDetail] = useState(null);

    // Fungsi untuk toggle detail
    const handleDetailClick = (index) => {
        if (expandDetail === index) {
            setExpandDetail(null); // Collapse jika card yang sama diklik lagi
        } else {
            setExpandDetail(index); // Expand card baru
        }
    };
    return(
        <div className="asteroid_approach_content w-full overflow-scroll hidde_scroller">
            <div className="wrapper w-max flex gap-4 md:gap-6">
                {
                    dataFiltered.map((datas, index) => {
                        
                        const {close_approach_date, date, distence_lunar, estimated_diameter_meters, hazardous, id, asteroid_name, nasa_jpl_url, orbiting_body, relative_velocity_km_per_sec, radar_chart_data
                        } = datas;

                        return(
                        <div key={index} className={`card h-[400px] overflow-hidden ${expandDetail == index? "w-[650px]  md:w-[700px]" : "w-[325px] md:w-[390px]" } bg-primary-3 p-4 md:p-6 rounded-lg flex`}>
                            <div className="asteroid_details flex-[1] flex flex-col items-center gap-6">
                                <div className="frame flex-[1]">
                                    <img src={images.asteroid_3} alt="" className="w-24 h-24"/>
                                </div>
                                <ol className="body_asteroid-details w-full flex-[2] *:flex">
                                    <li className="detail *:flex-[1]">
                                        <p className="font-medium text-grey-1 relative after:content-[':'] after:absolute after:right-0 after:w-max after:h-max">Name</p>
                                        <p className="pl-1 text-grey-3">{asteroid_name}</p>
                                    </li>
                                    <li className="detail *:flex-[1]">
                                        <p className="font-medium text-grey-1 relative after:content-[':'] after:absolute after:right-0 after:w-max after:h-max">ID</p>
                                        <p className="pl-1 text-grey-3">{id}</p>
                                    </li>
                                    <li className="detail *:flex-[1]">
                                        <p className="font-medium text-grey-1 relative after:content-[':'] after:absolute after:right-0 after:w-max after:h-max">Updated</p>
                                        <p className="pl-1 text-grey-3">{date}</p>
                                    </li>
                                    <li className="detail *:flex-[1]">
                                        <p className="font-medium text-grey-1 relative after:content-[':'] after:absolute after:right-0 after:w-max after:h-max">Orbiting</p>
                                        <p className="pl-1 text-grey-3">{orbiting_body}</p>
                                    </li>
                                    <li className="detail *:flex-[1]">
                                        <p className="font-medium text-grey-1 relative after:content-[':'] after:absolute after:right-0 after:w-max after:h-max">Encounter</p>
                                        <p className="pl-1 text-grey-3">{close_approach_date} UTC</p>
                                    </li>
                                </ol>
                                <div className={`view_detail w-full flex items-center ${expandDetail == index ? 'justify-between':'justify-around'}`}>
                                    <AncButton
                                    textContent={`JPL Nasa`}
                                    btn_type={`btn_tertiary`}
                                    href={nasa_jpl_url}/>
                                    <Button
                                    textContent={`Details`}
                                    btn_type={`btn_tertiary_ln`}
                                    onClick={() => handleDetailClick(index)} />
                                </div>
                            </div>
                            <div className={`asteroid_approach overflow-hidden ${expandDetail == index? "w-full flex-[2]":"w-0"}`}>
                            <ResponsiveContainer width="100%" height="80%">
                                <RadarChart cx="50%" cy="50%" outerRadius="50%" data={radar_chart_data}>
                                <PolarGrid opacity={.1} stroke="#7578ff"/>
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis opacity={.2}/>
                                <Radar name={asteroid_name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                <Legend/>
                                </RadarChart>
                            </ResponsiveContainer>
                            <div className="detail_radar-chart h-[20%] flex flex-col items-center justify-center gap-2">
                                <ol className="w-[70%] flex justify-around">
                                <li className="w-1/4 flex items-center">
                                    <p className="font-medium text-grey-1 capitalize after:content-[':']">Distence</p>
                                    <p className="pl-1 text-grey-3 capitalize ">{distence_lunar}</p>
                                </li>
                                <li className="w-1/4 flex items-center">
                                    <p className="font-medium text-grey-1 capitalize after:content-[':']">Diameters</p>
                                    <p className="pl-1 text-grey-3 capitalize ">{estimated_diameter_meters}</p>
                                </li>
                                </ol>
                                <ol className="w-[70%] flex justify-around">
                                <li className="w-1/4 flex items-center">
                                    <p className="font-medium text-grey-1 capitalize after:content-[':']">Velocity</p>
                                    <p className="pl-1 text-grey-3 capitalize ">{relative_velocity_km_per_sec}</p>
                                </li>
                                <li className="w-1/4 flex items-center">
                                    <p className="font-medium text-grey-1 capitalize after:content-[':']">Hazardous</p>
                                    <p className="pl-1 text-grey-3 capitalize ">{hazardous? ' true':' false'}</p>
                                </li>
                                </ol>
                            </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default AsteroidDetail;