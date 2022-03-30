import React from 'react'
import '../styles/Map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => <div className="mapBackground">
    <MapContainer center={[-37.0082, 174.7850]} zoom={13}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-37.0082, 174.7850]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>
    </div>



export default Map
