import React from 'react'
import '../styles/Map.css'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import hotSpotData from '../data/newSpots.json';


const Map = () => <div className="mapBackground">
    <MapContainer center={[-41.5000831, 172.8344077]} zoom={13}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

         {
             hotSpotData.map(hotspot => (
               <Marker 
                  key={hotspot.name}
                  position={[hotspot.lat, hotspot.lon]}
                >
                  <Popup><h4>{hotspot.name}</h4></Popup>
                </Marker>
                
             ))
           }

    </MapContainer>



    </div>



export default Map
