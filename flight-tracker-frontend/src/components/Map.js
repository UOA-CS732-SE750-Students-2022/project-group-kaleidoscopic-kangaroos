import React from 'react'
import '../styles/Map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import planeIcon from '../images/plane-up-solid.svg'

const position = [-37.0082, 174.785]

const newicon = new L.Icon({
    iconUrl: planeIcon,
    iconSize: [55, 55],
})

const Map = () => (
    <div className="mapBackground">
        <MapContainer center={position} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-37.0082, 174.785]} icon={newicon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
)

export default Map
