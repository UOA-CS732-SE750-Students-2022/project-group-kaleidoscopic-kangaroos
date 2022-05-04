import React, { useContext } from 'react'
import './Map.css'
import {
    MapContainer,
    TileLayer,
    ZoomControl,
    Marker,
    Popup,
} from 'react-leaflet'
import Planes from '../Planes/Planes'
import FlightDetails from '../FlightDetails/FlightDetails'
import DisplayContext from '../../contexts/DisplayContext'
import hotSpotData from '../../data/airports.json'

const position = [-37.0082, 174.785]

function Map() {
    const display = useContext(DisplayContext)

    let currentState = {}

    if (display.currentPlane) {
        currentState = {
            callsign: display.currentPlane.Call,
            altitude: Math.round(display.currentPlane.Alt / 3.2808),
            vSpeed: 20,
            hSpeed: Math.round(display.currentPlane.Spd * 1.60934),
            heading: display.currentPlane.Trak,
            distance: 18582.58,
            squawk: display.currentPlane.Sqk,
            engines: 'Twin turbo',
        }
    }

    if (display.displayDetails) {
        return (
            <MapContainer center={position} zoom={10} zoomControl={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Planes />
                <FlightDetails details={currentState} />
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
