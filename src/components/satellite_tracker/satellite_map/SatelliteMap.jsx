import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import * as tlejs from 'tle.js'; // Import tle.js library

const SatelliteMap = ({ tleData }) => {
  const [satellitePosition, setSatellitePosition] = useState(null);

  useEffect(() => {
    if (tleData) {
      const tle = tlejs.parseTLE(tleData.line1, tleData.line2);
      const satrec = tlejs.getSatelliteRecord(tle);

      const calculatePosition = () => {
        const position = tlejs.getLatLon(satrec, new Date());
        setSatellitePosition(position);
      };

      calculatePosition();
      const interval = setInterval(calculatePosition, 1000); // Update posisi setiap detik

      return () => clearInterval(interval); // Cleanup interval ketika komponen di-unmount
    }
  }, [tleData]);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {satellitePosition && (
        <Marker position={[satellitePosition.lat, satellitePosition.lon]} icon={L.icon({
          iconUrl: 'https://path-to-satellite-icon.png', // Ganti dengan URL icon satelit
          iconSize: [25, 25],
        })}>
          <Popup>
            {tleData.name}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default SatelliteMap;
