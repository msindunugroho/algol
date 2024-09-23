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
    const [colldown, setCooldown] = useState(10);
    const [isCooldown, setIsColldown] = useState(false);
    const [credits, setCredits] = useState(null);
    const headerTitle = "Daily Cosmic Snapshot";

    const {loading: loadingFetchDataAPOD} = useFetchData("APOD", isFetchAPOD);
    const {loading:loadingFetchDataRandom} = useFetchAPODRandom("APOD_random", isfetchRandom, 7);

    useEffect(() => {
        const creditsFromLocal = JSON.parse(localStorage.getItem("credits"));
        if(!creditsFromLocal || creditsFromLocal.date !== formattedCurrentDate ) {
            localStorage.setItem("credits", JSON.stringify({data: 5, date: formattedCurrentDate}));
        } 
        setCredits( () => {
            const creditsFromLocal = JSON.parse(localStorage.getItem("credits"));
            if(creditsFromLocal) {
                return creditsFromLocal.data;
            }
        })
    }, [])

    useEffect(() => {
        const getAPODFromLocal = JSON.parse(localStorage.getItem("APOD"));
        if(!loadingFetchDataAPOD) {
            const {data} = getAPODFromLocal;
            setAPODLocalData(data);
        }
    }, [loadingFetchDataAPOD]);
    
    function getRandomSnapshotHandler() {
        if(credits > 0) {
            localStorage.setItem("credits", JSON.stringify({data: credits - 1, date: formattedCurrentDate}))
            setCredits(() => {
                const creditsFromLocal = JSON.parse(localStorage.getItem("credits"));
                if(creditsFromLocal) {
                    return creditsFromLocal.data;
                }
            })
            setAPODLocalData(null);
            setIsFetchRandom(true);
            setCooldown(10);
            // Clear any existing interval
            let interval = setInterval(() => {
                setCooldown(prevCooldown => {
                    if (prevCooldown <= 1) {
                        setIsColldown(false);
                        clearInterval(interval); // Stop interval when cooldown reaches 0
                        return 0; // Set cooldown to 0
                    }
                    setIsColldown(true)
                    return prevCooldown - 1; // Decrease cooldown by 1
                });
            }, 1000);
        }
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
    }, [lastweekData]);

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
                    onClick={getRandomSnapshotHandler}
                    isCooldown={isCooldown}
                    cooldown={colldown}
                    credits={credits}/>
                }
            </div>
        </section>
    );
};

export default DailyCosmicSnapshot;
