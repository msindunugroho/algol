import { useEffect,  useState } from "react";
import { 
    formattedCurrentDate, 
    formattedYesterdayDate, 
    formattedLastweekDate } from "../../utils/dateFormatters";
import AsteroidDetail from "./asteroid_detail/AsteroidDetail";
import Header from "../header/Header";
import AsteroidDashboard from "./asteroid_dashbord/AsteroidDashboard";

const AsteroidApproachTracker = () => {
    const API_KEY = import.meta.env.VITE_NASA_API_KEY;
    const [neoFeedData, setNeoFeedData] = useState(null);
    const [filteredData, setFilteredData] = useState(null); 

    function getNeoFeedFromLocalStorage(date) {
        const neo_feed = JSON.parse(localStorage.getItem("Neo_Feed"));
        if(date == "today" && neo_feed && neo_feed.date == formattedCurrentDate) {
            return true;
        }
        if(date == "yesterday" && neo_feed && neo_feed.date == formattedCurrentDate) {
            return true;
        }
        return null;
    }
    function filterNeoFeedData(datas) {
        const {date, currentData} = datas;
        const dataFiltered = currentData.reduce((prev, curr) => {
            const asteroid_name = curr.name.replace(/[()]/g, '')
            const close_approach_data = curr.close_approach_data[0];
            const estimated_diameter = curr.estimated_diameter;
            const close_approach_date = close_approach_data.close_approach_date_full;
            const distence_lunar = parseFloat(close_approach_data.miss_distance.lunar).toFixed(2);
            const orbiting_body = close_approach_data.orbiting_body;
            const relative_velocity_km_per_sec = parseFloat(close_approach_data.relative_velocity.kilometers_per_second).toFixed(2);
            const estimated_diameter_meters = parseFloat((estimated_diameter.meters.estimated_diameter_min + estimated_diameter.meters.estimated_diameter_max) / 2).toFixed(2);
            const hazardous = curr.is_potentially_hazardous_asteroid;
            const newObject = {
                asteroid_name: asteroid_name,
                id: curr.id,
                date: date,
                close_approach_date: close_approach_date,
                distence_lunar: distence_lunar,
                orbiting_body: orbiting_body,
                relative_velocity_km_per_sec: relative_velocity_km_per_sec,
                estimated_diameter_meters: estimated_diameter_meters,
                hazardous: hazardous,
                nasa_jpl_url: curr.nasa_jpl_url,
                radar_chart_data:[
                    {
                        subject: 'Distence (Lunar)',
                        A: distence_lunar,
                        fullMark: 200,
                    },
                    {
                        subject: 'Velocity (Km/s)',
                        A: relative_velocity_km_per_sec,
                        fullMark: 200,
                    },
                    {
                        subject: 'Diameters (Meter)',
                        A: estimated_diameter_meters,
                        fullMark: 200,
                    },
                    {
                        subject: 'Hazardous',
                        A: hazardous? 200 : 50,
                        fullMark: 200,
                    },
                ],
            }

            prev.push(newObject);
            return prev;
        }, []);
        const scatter_chart_data_diameter_distence = currentData.reduce((prev, curr) => {
            const asteroid_name = curr.name.replace(/[()]/g, '')
            const estimated_diameter = curr.estimated_diameter;
            const close_approach_data = curr.close_approach_data[0];
            const estimated_diameter_meters = parseFloat((estimated_diameter.meters.estimated_diameter_min + estimated_diameter.meters.estimated_diameter_max) / 2).toFixed(2);
            const distence_lunar = parseFloat(close_approach_data.miss_distance.lunar).toFixed(2);

            prev.push({asteroid_name, x: parseFloat(estimated_diameter_meters), y: parseFloat(distence_lunar)});
            return prev;
        }, []);
        const scatter_chart_data_velocity_distence = currentData.reduce((prev, curr) => {
            const asteroid_name = curr.name.replace(/[()]/g, '');
            const close_approach_data = curr.close_approach_data[0];
            const distence_lunar = parseFloat(close_approach_data.miss_distance.lunar).toFixed(2);
            const relative_velocity_km_per_sec = parseFloat(close_approach_data.relative_velocity.kilometers_per_second).toFixed(2);

            prev.push({asteroid_name, x: parseFloat(relative_velocity_km_per_sec), y: parseFloat(distence_lunar)});
            return prev;
        }, [])


        setFilteredData({date, dataFiltered, scatter_chart_data_diameter_distence, scatter_chart_data_velocity_distence});
    }
    function setFormattedNewData(date, data) {
        const near_obj = data.near_earth_objects;
        const currentData = near_obj[date];
        localStorage.setItem("Neo_Feed", JSON.stringify({date, currentData}));
    }

    useEffect(() => {
        async function fetchData() {
            let isNeoFeedExist = getNeoFeedFromLocalStorage("today");

            if(!isNeoFeedExist) {
                try{
                    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedCurrentDate}&end_date=${formattedCurrentDate}&api_key=${API_KEY}`);
    
                    if(!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }
                    const dataResult = await response.json();
                    setFormattedNewData(formattedCurrentDate, dataResult);
    
    
                }catch(error){
                    console.error(error)
    
                    try{
                        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedYesterdayDate}&end_date=${formattedYesterdayDate}&api_key=${API_KEY}`);
    
                        if(!response.ok) {
                            throw new Error(`Error: ${response.status}`);
                        }
                        const dataResult = await response.json();
                        setFormattedNewData(formattedYesterdayDate, dataResult);
    
                    } catch(error) {
                        console.error(error)
                    }
    
                }
            }
            setNeoFeedData(JSON.parse(localStorage.getItem("Neo_Feed")))
        }
        fetchData();
    }, [])

    useEffect(() => {
        if(neoFeedData) {
            filterNeoFeedData(neoFeedData);
        }
        if(filteredData) {
            // console.log(filteredData)
        }
    }, [neoFeedData])
    return(
        <div className="AsteroidApproachTracker p_formatted">
            <div className="contianer_AsteroidApproachTracker">
                <Header
                textContent_title={`Asteroid Approach Tracker`}/>
                {   filteredData &&
                    <AsteroidDashboard
                    neo_feed_data={filteredData}/>
                }
                {
                    filteredData &&
                    <AsteroidDetail
                    neo_feed_data={filteredData}/>
                } 

            </div>
        </div>
    )
}

export default AsteroidApproachTracker;