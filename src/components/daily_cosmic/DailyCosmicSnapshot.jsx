import { useState, useEffect } from "react";
import { 
    formattedCurrentDate, 
    formattedYesterdayDate, 
    formattedLastweekDate } from "../../utils/dateFormatters";
import Header from "../header/Header";
import DailySnapshot from "./daily_snapshot/DailySnapshot";
import WeeklySnapshot from "./weekly_snapshot/WeeklySnapshot";
import { useFetchData, useFetchDataRandom } from "../../hooks/useFetchData"; // Custom hook
import RandomSnapshot from "./random_snapshot/RandomSnapshot";

const DailyCosmicSnapshot = () => {
    const [dropdownDownload, setDropdownDownload] = useState(false);
    const [displayDetail, setDisplayDetail] = useState(false);
    const [todayData, setTodayData] = useState(null);
    const [lastweekData, setLastweekData] = useState(null);
    const [APODLocalData, setAPODLocalData] = useState(null);
    const [fetchRandom, setFetchRandom] = useState(false); // State untuk memicu fetch acak
    const headerTitle = "Daily Cosmic Snapshot";

    // Fetch data APOD biasa atau random berdasarkan fetchRandom
    useFetchData("APOD");
    const {loading:loadingFetchDataRandom} = useFetchDataRandom("APOD_random", fetchRandom);
    

    // Update data APOD dari localStorage saat component mount
    useEffect(() => {
        setAPODLocalData(JSON.parse(localStorage.getItem("APOD")));
    }, []);

    useEffect(() => {
        console.log(`loadingFetchDataRandom: ${loadingFetchDataRandom}`);
        console.log(`fetchRandom: ${fetchRandom}`)
        if(!loadingFetchDataRandom) {
            const data  = JSON.parse(localStorage.getItem("APOD_random"));
            setLastweekData(data);
            setTodayData(data[data.length - 1]);
            setFetchRandom(false)
        }
    }, [loadingFetchDataRandom, fetchRandom])

    // Update state todayData dan lastweekData berdasarkan APODLocalData
    useEffect(() => {
        if (APODLocalData) {
            const { data } = APODLocalData;
            setTodayData(data[data.length - 1]);
            setLastweekData(data);
        }
    }, [APODLocalData]);

    // Handler untuk memicu fetch random snapshot
    function handleGetRandomSnapshot() {
        setFetchRandom(true); // Mengubah state untuk memicu fetch random data
    }

    function dropdownDownloadHandler() {
        setDropdownDownload(prevState => !prevState);
    }

    function detailSnapshotHandler() {
        setDisplayDetail(prevState => !prevState);
    }

    const handleUpdateDate = (newDate) => {
        const updateDate = lastweekData.find((data) => data.date === newDate);
        setTodayData(updateDate);
        console.log(`Updated todayDate: ${updateDate}`);
    };

    return (
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
                        data_snapshot={todayData}
                    />
                }
                { 
                    todayData &&
                    <WeeklySnapshot
                        data_snapshot={lastweekData}
                        onDateClick={handleUpdateDate}
                    />
                }
                {
                    todayData &&
                    <RandomSnapshot
                        onClick={handleGetRandomSnapshot} // Panggil handler saat di-klik
                    />
                }
            </div>
        </section>
    );
};

export default DailyCosmicSnapshot;
