import React, { useState } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import districtsData from '../resource/laCouncilDistricts.json';
import 'leaflet/dist/leaflet.css';
import '../styles/HeatMap.css';

function HeatMap({ setSelectedDistrict }) {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const handleDistrictClick = (event) => {
    const district = event.target.feature.properties.councildistrict;
    setSelectedDistrict(district);
  };

  const handleDistrictMouseOver = (event) => {
    setHoveredDistrict(event.target.feature.properties.councildistrict);
  };

  const handleDistrictMouseOut = () => {
    setHoveredDistrict(null);
  };

  const districtStyle = (feature) => {
    return {
      fillColor: hoveredDistrict === feature.properties.councildistrict ? 'orange' : feature.properties.fill,
      weight: 0.5,
      opacity: 1,
      color: 'black',
      fillOpacity: 0.7,
    };
  };

  return (
    <div>
      <h2>Los Angeles Council Districts</h2>
      <MapContainer center={[34.0522, -118.2437]} zoom={10} className="map-container">
        <GeoJSON data={districtsData.features} style={districtStyle} onEachFeature={(feature, layer) => {
          layer.on({
            click: handleDistrictClick,
            mouseover: handleDistrictMouseOver,
            mouseout: handleDistrictMouseOut,
          });
          layer.options.className = 'district-shape';
        }} />
      </MapContainer>
    </div>
  );
}

export default HeatMap;
