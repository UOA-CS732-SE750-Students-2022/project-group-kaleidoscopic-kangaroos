import React, { useContext } from 'react'
import './Map.css'
import {
    MapContainer,
    TileLayer,
    ZoomControl,
    Marker,
    Popup,
} from 'react-leaflet'
import Planes from './Planes/Planes'
import FlightDetails from '../FlightDetails/FlightDetails'
import DisplayContext from '../../contexts/DisplayContext'
import hotSpotData from '../../data/newSpots.json'

const position = [-37.0082, 174.785]

function Map() {
    const display = useContext(DisplayContext)

    if (display.displayDetails) {
        return (
            <MapContainer center={position} zoom={10} zoomControl={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Planes />
                <FlightDetails data={display.currentPlane} />
                <ZoomControl position="topright" />
                {hotSpotData.map((hotspot) => (
                    <Marker
                        key={hotspot.name}
                        position={[hotspot.lat, hotspot.lon]}
                    >
                        <Popup>
                            <h4>{hotspot.name}</h4>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        )
    }
    return (
        <MapContainer center={position} zoom={10} zoomControl={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Planes />
            <ZoomControl position="topright" />
            {hotSpotData.map((hotspot) => (
                <Marker
                    key={hotspot.name}
                    position={[hotspot.lat, hotspot.lon]}
                >
                    <Popup>
                        <h4>{hotspot.name}</h4>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default Map
