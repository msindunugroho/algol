import { useState, useEffect } from "react";
import { 
    formattedCurrentDate, 
    formattedYesterdayDate, 
    formattedLastweekDate } from "../../utils/dateFormatters";
import Header from "../header/Header";
import DailySnapshot from "./daily_snapshot/DailySnapshot";
import WeeklySnapshot from "./weekly_snapshot/WeeklySnapshot";
import { useFetchData, useFetchAPODRandom } from "../../hooks/useFetchData"; // Custom hook
import RandomSnapshot from "./random_snapshot/RandomSnapshot";
import { useCallback } from "react";

const DailyCosmicSnapshot = () => {
    const [dropdownDownload, setDropdownDownload] = useState(false); // state menampilkan element download
    const [displayDetail, setDisplayDetail] = useState(false); // state untuk menampilkan detail card
    const [todayData, setTodayData] = useState(null); // state untuk menyimpan data daily snapshot
    const [lastweekData, setLastweekData] = useState(null); // state untuk menyimpan data APOD seminggu terakhir
    const [APODLocalData, setAPODLocalData] = useState(null); // state untuk menampung data hasil fetch yang sudah di simpan di local storage 
    const [isFetchAPOD, setIsFetchAPOD] = useState(true); // state untuk triger ketika user meng-klik component RandomSnapshot
    const [isfetchRandom, setIsFetchRandom] = useState(false); // State untuk memicu fetch acak
    const headerTitle = "Daily Cosmic Snapshot";

    const {loading: loadingFetchDataAPOD} = useFetchData("APOD", isFetchAPOD);
    const {loading:loadingFetchDataRandom} = useFetchAPODRandom("APOD_random", isfetchRandom, 15);

    useEffect(() => {
        
    }, [])

    useEffect(() => {
        const getAPODFromLocal = JSON.parse(localStorage.getItem("APOD"));
        if(!loadingFetchDataAPOD) {
            const {data} = getAPODFromLocal;
            setAPODLocalData(data);
        }
    }, [loadingFetchDataAPOD]);

    function getRandomSnapshotHandler() {
        // Reset APODLocalData sebelum memulai fetch baru agar pasti memicu re-render
        setAPODLocalData(null);
        setIsFetchRandom(true);
    }
    
    useEffect(() => {
        const getAPODFromLocal = JSON.parse(localStorage.getItem("APOD_random"));
        if (!loadingFetchDataRandom && getAPODFromLocal) {
            const { data } = getAPODFromLocal;
    
            // Hanya update state jika data baru ada (tidak null)
            if (data && data.length > 0) {
                setAPODLocalData(data);
            }
    
            // Reset state isFetchRandom untuk memungkinkan fetch berikutnya
            setIsFetchRandom(false);
        }
    }, [loadingFetchDataRandom]);
    
    useEffect(() => {
        if (APODLocalData) {
            setTodayData(APODLocalData[APODLocalData.length - 1]);
            setLastweekData(APODLocalData);
            setIsFetchAPOD(false); // Hanya jalankan fetch pertama kali
        }
    }, [APODLocalData]);
    

    function dropdownDownloadHandler() {
        setDropdownDownload(prevState => !prevState);
    }

    function detailSnapshotHandler() {
        setDisplayDetail(prevState => !prevState);
    }

    const handleUpdateDate = useCallback((newDate) => {
        const updateDate = lastweekData.find((data) => data.date === newDate);
        setTodayData(updateDate);
        console.log(`Updated todayDate: ${updateDate}`);
    }, []);

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
                    <RandomSnapshot onClick={getRandomSnapshotHandler}/>
                }
            </div>
        </section>
    );
};

export default DailyCosmicSnapshot;
