import { formattedCurrentDate, formattedYesterdayDate, formattedLastweekDate } from "./dateFormatters";

// apiEndpoints dipindahkan keluar agar tidak membuat referensi baru setiap kali hook dipanggil
const apiEndpoints = {
    "TLE": {
        "today": "/api/tle/today",
        "yesterday": "/api/tle/yesterday",
    },
    "APOD": {
        "today": `https://api.nasa.gov/planetary/apod?start_date=${formattedLastweekDate}&end_date=${formattedCurrentDate}&api_key=${import.meta.env.VITE_NASA_API_KEY}`,
        "yesterday": `https://api.nasa.gov/planetary/apod?start_date=${formattedLastweekDate}&end_date=${formattedYesterdayDate}&api_key=${import.meta.env.VITE_NASA_API_KEY}`,
    },
    "APOD_random": {
        "today": `https://api.nasa.gov/planetary/apod?count=7&api_key=${import.meta.env.VITE_NASA_API_KEY}`,
        "yesterday": `https://api.nasa.gov/planetary/apod?count=5&api_key=${import.meta.env.VITE_NASA_API_KEY}`,
    }
};

export default apiEndpoints;