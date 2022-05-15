import React from 'react'
import './Map.css'
import {
    MapContainer,
    TileLayer,
    ZoomControl,
    Marker,
    Popup,
} from 'react-leaflet'
import L from 'leaflet'
import Planes from '../Planes/Planes'
import airports from '../../data/newSpots.json'

/**
 * Shows the map of the world. Also labels the location of planes that are tracked.
 * @param {object} details the details of the currently selected plane.
 * @param {function} setDetails the function used to change the selected plane.
 * @param {boolean} flightDetailsVisible whether the flight details pane is visible or not.
 * @param {function} setFlightDetailsVisible used for toggling the visibility of the flight details component.
 * @returns the jsx for the map component.
 */
function Map({
    details,
    setDetails,
    flightDetailsVisible,
    setFlightDetailsVisible,
}) {
    // Render the component.
    return (
        <MapContainer
            center={[-37.0082, 174.785]}
            zoom={13}
            zoomControl={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Planes
                details={details}
                setDetails={setDetails}
                visible={flightDetailsVisible}
                setVisible={
                    flightDetailsVisible ? null : setFlightDetailsVisible
                }
            />
            <ZoomControl position='topright'/>
            {airports.map((airport) => (
                <Marker
                    key={airport.name}
                    position={[airport.lat, airport.lon]}
                    icon={L.divIcon({
                        iconSize: [64, 79],
                        iconAnchor: [32, 79],
                        className: 'yourClassName',
                        html: `<img 
        height="79" 
        width="64"
        src='/airporticon.png'>`,
                    })}
                >
                    <Popup offset={new L.Point(0, -50)}>
                        <h4>{airport.name}</h4>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default Map
