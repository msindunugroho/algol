/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { 
    formattedCurrentDate, 
    formattedYesterdayDate, 
    formattedLastweekDate } from "../../utils/dateFormatters";
import Header from "../header/Header";
import DailySnapshot from "./daily_snapshot/DailySnapshot";
import WeeklySnapshot from "./weekly_snapshot/WeeklySnapshot";

const DailyCosmicSnapshot = () => {
    const [dropdownDownload, setDropdownDownload] = useState(false);
    const [displayDetail, setDisplayDetail] = useState(false);
    const [todayData, setTodayData] = useState(null);
    const [lastweekData, setLastweekData] = useState(null);
    const API_KEY = import.meta.env.VITE_NASA_API_KEY;
    const headerTitle = "Daily Cosmic Snapshot";

    useEffect(() => {
    
        const fetchData = async () => {
    
            // Function to filter and return today or yesterday's data
            function getDataFromLocalStorage(dateType) {
                const datas = JSON.parse(localStorage.getItem("last_week_data"));
                if (datas) {
                    for (let data of datas) {
                        if (dateType == "today" && data.date === formattedCurrentDate) {
                            // console.log('getDataFromLocalStorage: today');
                            return data; // Return today's data
                        }
                        if (dateType == "yesterday" && data.date === formattedYesterdayDate) {
                            // console.log('getDataFromLocalStorage: yesterday');
                            return data; // Return yesterday's data
                        }
                    }
                }
                return null; // Return null if no match found
            }
    
            let todayDataAPI = getDataFromLocalStorage("today");
    
            if (!todayDataAPI) {
                // console.log(`exe: !Today Data API`);
                try {
                    const response = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${formattedLastweekDate}&end_date=${formattedCurrentDate}&api_key=${API_KEY}`);
                    if (!response.ok) {
                        throw new Error(`Error fetching today data: ${response.status}`);
                    }

                    const resultData = await response.json();
                    localStorage.setItem("last_week_data", JSON.stringify(resultData));
                    todayDataAPI = getDataFromLocalStorage("today");

                    if (!todayDataAPI) {
                        throw new Error(`Error! today's data is not yet available in API`)
                    }

                } catch (error) {
                    console.log(error.message);

                    todayDataAPI = getDataFromLocalStorage("yesterday");
                    // console.log(`get data yesterday from local: ${todayDataAPI}`)

                    // Fallback to yesterday's data if today's data is not available
                    if (!todayDataAPI) {
                        try {
                            const response = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${formattedLastweekDate}&end_date=${formattedYesterdayDate}&api_key=${API_KEY}`);
                            if (!response.ok) {
                                throw new Error(`Error fetching yesterday's data: ${response.status}`);
                            }
                            const resultData = await response.json();
                            localStorage.setItem("last_week_data", JSON.stringify(resultData));
                            
                            // Try to set yesterday data from fresh API result
                            todayDataAPI = getDataFromLocalStorage("yesterday");
                        } catch (error) {
                            console.log(error.message);
                        }
                    }
                }
            }
    
            // If todayDataAPI exists, set it in the state
            if (todayDataAPI) {
                setTodayData(todayDataAPI);
                setLastweekData(JSON.parse(localStorage.getItem("last_week_data")))
            }
    
        };
    
        fetchData();
    }, [formattedCurrentDate]);
    
    useEffect(() => {
        console.log(`todayData Updated`);
        if (todayData) {
            console.log(`todayData: ${todayData}`);
            // console.log(`lastWeekData:`, lastweekData);
        }
    }, [todayData]);
    
    function dropdownDownloadHandler() {
        setDropdownDownload(prevState => !prevState);
    }
    function detailSnapshotHandler() {
        setDisplayDetail(prevState => !prevState)
    }
    const handleUpdateDate = (newDate) => {
        const updateDate = lastweekData.find((data) => {
            if(data.date == newDate) return data;
        })
        setTodayData(updateDate);
        console.log(`Updated todayDate: ${updateDate}`);
    };

    return(
        <section className="daily_cosmic p_formatted">
            <div className="container_daily-cosmic">
                <Header 
                    textContent_title={`${headerTitle}`}
                    textContent_firstDesc={todayData && todayData.title}
                    />
                    {
                        todayData &&
                        <DailySnapshot
                        dropdown_download_snapshot={dropdownDownloadHandler}
                        isDropdown_download={dropdownDownload}
                        detail_snapshot={detailSnapshotHandler}
                        isDisplayDetail={displayDetail}
                        data_snapshot={todayData && todayData}/>
                    }
                    { 
                        todayData &&
                        <WeeklySnapshot
                        data_snapshot={lastweekData}
                        onDateClick={handleUpdateDate}
                        />
                    }
            </div>
        </section>
    );
};




export default DailyCosmicSnapshot;