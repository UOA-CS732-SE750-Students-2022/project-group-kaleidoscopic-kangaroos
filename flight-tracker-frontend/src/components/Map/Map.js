/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react'
import './Map.css'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import hotSpotData from '../../data/airports.json';


const Map = ({center, zoom}) => {
  return (
    <div className="mapBackground">
    <MapContainer center={center} zoom={zoom}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        /*
        hotSpotData.map(hotspot => (
          <Marker 
            key={hotspot.name}
            position={[hotspot.lat, hotspot.lon]}
          >
            <Popup><h4>{hotspot.name}</h4></Popup>
          </Marker>
        ))
        */
      }
    </MapContainer>
  </div>
  );
}
  



export default Map;
