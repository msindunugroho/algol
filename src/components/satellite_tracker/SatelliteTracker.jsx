
// import { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";
import SatelliteMap from "./satellite_map/SatelliteMap";

const SatelliteTracker = () => {
  const [satelliteData, setSatelliteData] = useState(null);

  useFetchData("TLE");

  useEffect(() => {
    const storedData = localStorage.getItem("TLE");
    if (storedData) {
      const { data } = JSON.parse(storedData);
      setSatelliteData(data.member[0]);
    }
  }, []);

  useEffect(() => {
    if(satelliteData) {
    console.log(satelliteData)
    }
  }, [satelliteData])
  
  return(
    <div className="satellite_tracker w-full">
      <div className="container_satellite-tracker w-full h-[500px]">
        {
          satelliteData &&
          <SatelliteMap
          tleData={satelliteData}/>
        }
      </div>
    </div>
  );
};

export default SatelliteTracker;

