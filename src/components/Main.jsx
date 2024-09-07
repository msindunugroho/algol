import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
      
    // Masukkan API Key yang kamu dapatkan
    const API_KEY = import.meta.env.VITE_NASA_API_KEY;

    // Menghitung tanggal 7 hari yang lalu dari hari ini
    const today = new Date();
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - 7);

    // Format tanggal ke format YYYY-MM-DD
    const year = pastDate.getFullYear();
    const month = String(pastDate.getMonth() + 1).padStart(2, '0');
    const day = String(pastDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // Request ke endpoint NASA EPIC API dengan tanggal 7 hari yang lalu
    fetch(`https://api.nasa.gov/EPIC/api/enhanced/date/${formattedDate}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
        data.forEach(item => {
        const imageUrl = `https://epic.gsfc.nasa.gov/archive/enhanced/${item.date.split(' ')[0].split('-').join('/')}/jpg/${item.image}.jpg`;
        console.log(`Caption: ${item.caption}`);
        console.log(`Image URL: ${imageUrl}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
  }, [])
    return(
        <h1 className="text-quaterbary-4">From Main Component</h1>
    )
}

export default Main;