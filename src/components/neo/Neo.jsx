import { useEffect, useState } from "react";

const Neo = () => {
    const [asteroidData, setAsteroidData] = useState(null);

    useEffect(() => {
        const KEY_API = import.meta.env.VITE_NASA_API_KEY;
        const today = new Date();
        const pastDate = new Date(today); 
        pastDate.setDate(pastDate.getDate() - 1); 

        const year = pastDate.getFullYear(); 
        const month = String(pastDate.getMonth() + 1).padStart(2, '0'); 
        const day = String(pastDate.getDate()).padStart(2, '0'); 
        const formatteddate = `${year}-${month}-${day}`;
        const url =`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formatteddate}&end_date=${formatteddate}&api_key=${KEY_API}` 
        
        try{
            fetch(url)
            .then(ress => ress.json())
            .then(data => {
                const near_earth_objects = data.near_earth_objects[formatteddate];
                let sortedObjects = [];
                near_earth_objects.forEach((obj) => {
                    const close_approach_data = obj.close_approach_data;
                    let smallestDistance = Math.min(...close_approach_data.map(approach => parseFloat(approach.miss_distance.kilometers)));
                    sortedObjects.push({ ...obj, smallestDistance });
                });
                sortedObjects.sort((a, b) => a.smallestDistance - b.smallestDistance);
                const threeClosestObjects = sortedObjects.slice(0, 3);

                const dataResult = threeClosestObjects.reduce((prev, curr) => {
                    const close_approach_data = curr.close_approach_data;
                    const estimated_diameter= curr.estimated_diameter.meters;

                    
                    
                    const miss_distance = close_approach_data.map((data) => {
                        return data.miss_distance.kilometers;
                    })
                    
                    const dataObj = {
                        name: curr.name.replace(/[()]/g, '') ,
                        miss_distance_km: parseFloat(miss_distance).toFixed(2),
                        estimated_diameter_m:
                        {
                            max: parseFloat(estimated_diameter.estimated_diameter_max).toFixed(2), 
                            min: parseFloat(estimated_diameter.estimated_diameter_min).toFixed(2)
                        },
                        is_potentially_hazardous_asteroid:curr.is_potentially_hazardous_asteroid,
                    }
                    prev.push(dataObj);
                    return prev;
                }, [])

                setAsteroidData(dataResult);
            })
        }
        catch(e) {
            console.log(e)
        }
    }, 
    [])
    console.log(asteroidData);
    return (
        <h1>Neo</h1>
    )
}

export default Neo;