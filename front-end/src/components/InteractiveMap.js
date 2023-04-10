import React, { useState, useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import districtsData from '../resource/laCouncilDistricts.json';

function InteractiveMap({ selectedDistrict, setSelectedDistrict }) {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    
  
    useEffect(() => {
      let select = selectedDistrict
      function layerStyle(district) {
        return {
          color:
              select === district
                ? "red"
                : "#000",
            weight: 2,
            opacity: 0.7,
            dashArray: "3",
            fillOpacity:
              select === district ? 0.5 : 0.1,
        }
      }
      
      if (!map) {
        const newMap = L.map(mapRef.current, {
          center: [34.080570, -118.400330],
          zoom: 10.5,
        });
  
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        }).addTo(newMap);
        
        const districtLayers = L.layerGroup();
  
        districtsData.features.forEach((district) => {
          const districtPolygon = L.geoJSON(district, {
            style: layerStyle(district.properties.district)
            ,
            className: district.properties.district
            ,
            onEachFeature: (district, layer) => {
              layer.bindPopup(district.properties.dist_name);
              layer.on({
                click: () => {
                  districtLayers.eachLayer(function(layer) {
                    if (layer.options.className === select) {
                      layer.setStyle(layerStyle(null))
                    }
                  })
                  // alert(select)
                  if (select === district.properties.district) {
                    setSelectedDistrict("LA");
                    select = "LA";
                    // layer.bindPopup(district.properties.dist_name);
                  }else{
                    layer.setStyle(layerStyle(select));
                    setSelectedDistrict(district.properties.district);
                    select = district.properties.district;
                  }
                  
                },
                mouseover: (event) => {
                  const layer = event.target
                  layer.setStyle({
                    color: "red",
                    weight: 3,
                    opacity: 0.7,
                    fillOpacity: 0.5,
                  });
                },
                mouseout: (event) => {
                  const layer = event.target
                  layer.setStyle(layerStyle(layer.options.className));

                },
              });
            },
          });
          // districtPolygon.options.className = district.properties.district;
          districtLayers.addLayer(districtPolygon);
        });
        districtLayers.addTo(newMap)
        setMap(newMap);
      }
    }, [map, selectedDistrict, setSelectedDistrict]);
  
    return <div ref={mapRef} style={{ height: "100%", width: "70%" }} />;
  }
  

export default InteractiveMap;
