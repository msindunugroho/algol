import { useEffect } from "react";
import { formattedCurrentDate, formattedYesterdayDate } from "../utils/dateFormatters";
import apiEndpoints from "../utils/apiEndpoints";
import { useState } from "react";

/**
 * 
 * @param {string} API_name
 * @param {boolean} run 
 * @returns {object}
 */
export const useFetchData = (API_name, run) => {
    const [loading, setLoading] = useState(true);
    const path = apiEndpoints[API_name]; // Mengambil path sesuai API_name yang diterima
    
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

        if(run) {
            console.log('running fetch data APOD')
            const fetchData = async () => {
                const isLocalDataExist = getLocalData("today");
                if(isLocalDataExist) {
                    setLoading(false)
                } else {
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
                        if(isLocalDataExist) {
                            setLoading(false)
                        } else {
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
                                setLoading(false)
                            }
                        }
                    }
                }
            };
            fetchData();
        }



    }, []); // Pastikan dependency array hanya menggunakan API_name

    return {loading};
};


/**
 * 
 * @param {string} API_name 
 * @param {boolean} run 
 * @param {number} count 
 * @returns {object}
 */
export const useFetchAPODRandom = (API_name, run, count) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (run) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://api.nasa.gov/planetary/apod?count=${count}&api_key=${import.meta.env.VITE_NASA_API_KEY}`);
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                    const result = await response.json();

                    // Simpan data di localStorage dan set loading ke false
                    localStorage.setItem(API_name, JSON.stringify({ data: result, date: formattedCurrentDate }));
                    setLoading(false);  // loading selesai

                } catch (error) {
                    console.error(error.message);
                    setLoading(false);  // set loading ke false pada error juga
                }
            };
            fetchData();
        } else {
            // Reset loading state jika tidak fetching
            setLoading(true);
        }
    }, [run]);

    return { loading };
};

