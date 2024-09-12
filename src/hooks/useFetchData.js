import { useEffect } from "react";
import { formattedCurrentDate, formattedYesterdayDate } from "../utils/dateFormatters";
import apiEndpoints from "../utils/apiEndpoints";
import { useState } from "react";

export const useFetchData = (API_name) => {
    const [loading, setLoading] = useState(true);
    const path = apiEndpoints[API_name]; // Mengambil path sesuai API_name yang diterima
    // console.log('running');

    useEffect(() => {
        const getLocalData = (date) => {
            const localData = JSON.parse(localStorage.getItem(API_name));
            if (localData && date === "today" && localData.date === formattedCurrentDate) {
                return true;
            }
            if (localData && date === "yesterday" && localData.date === formattedYesterdayDate) {
                return true;
            }
            return null;
        };

        const fetchData = async () => {
            const isLocalDataExist = getLocalData("today");

            if (!isLocalDataExist) {
                try {
                    const response = await fetch(path.today);
                    if (!response.ok) {
                        throw new Error(`Error, Not Available Today Data: ${response.status}`);
                    }
                    const dataResult = await response.json();
                    localStorage.setItem(API_name, JSON.stringify({ date: formattedCurrentDate, data: dataResult }));
                    setLoading(false)
                } catch (error) {
                    console.error(error.message);
                    const isLocalDataExist = getLocalData("yesterday");

                    if (!isLocalDataExist) {
                        try {
                            const response = await fetch(path.yesterday);
                            if (!response.ok) {
                                throw new Error(`Error, Not Available Yesterday Data ${response.status}`);
                            }

                            const dataResult = await response.json();
                            localStorage.setItem(API_name, JSON.stringify({ date: formattedYesterdayDate, data: dataResult }));
                            setLoading(false)
                        } catch (error) {
                            console.error(error.message);
                        }
                    }
                }
            }
            setLoading(false)
        };

        fetchData();
    }, []); // Pastikan dependency array hanya menggunakan API_name

    return loading;
};

export const useFetchDataRandom = (API_name, run) => {
    const [loading, setLoading] = useState(true);
    const path = apiEndpoints[API_name];
    console.log(`run: ${run}`)
    useEffect(() => {
        if(run) {
            console.log('running')
            const fetchData = async() => {
                try {
                    const response = await fetch(path.today);
                    if(!response.ok) {
                        throw new Error(response.status);
                    }
                    const result = await response.json();
                    console.log('result:');
                    console.log(result)
                    localStorage.setItem(API_name, JSON.stringify(result));
                    setLoading(false);
    
                } catch (error) {
                    console.error(error.message);
                    setLoading(false)
                }
            }
            fetchData();
        }
    }, [run])
    return {loading}
}