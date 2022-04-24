import React from 'react'
import '../styles/Map.css'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import Planes from './Planes'

const position = [-37.0082, 174.785]

function Map() {
    return (
        <MapContainer center={position} zoom={10} zoomControl={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Planes />
            <ZoomControl position="topright" />
        </MapContainer>
    )
}

export default Map
