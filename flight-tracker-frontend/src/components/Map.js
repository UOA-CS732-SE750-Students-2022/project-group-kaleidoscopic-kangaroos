import React, { useState } from 'react'
import '../styles/Map.css'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    ZoomControl,
} from 'react-leaflet'
import L from 'leaflet'
import planeIcon from '../images/plane-up-solid.svg'
import FlightDetails from './FlightDetails'

const position = [-37.0082, 174.785]

const newicon = new L.Icon({
    iconUrl: planeIcon,
    iconSize: [55, 55],
})

function Map(props) {
    const allFlights = props
    console.log(allFlights.data)

    const [displayDetails, setDisplayDetails] = useState(false)

    if (displayDetails) {
        return (
            <div className="mapBackground">
                <MapContainer center={position} zoom={13} zoomControl={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {allFlights.data.map((item) => (
                        <Marker
                            key={item.Id}
                            position={[item.Lat, item.Long]}
                            icon={newicon}
                        >
                            <Popup
                                onOpen={() =>
                                    setDisplayDetails(!displayDetails)
                                }
                            >
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ))}
                    <ZoomControl position="topright" />
                </MapContainer>
                <FlightDetails />
            </div>
        )
    }
    return (
        <div className="mapBackground">
            <MapContainer center={position} zoom={13} zoomControl={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {allFlights.data.map((item) => (
                    <Marker
                        key={item.Id}
                        position={[item.Lat, item.Long]}
                        icon={newicon}
                    >
                        <Popup
                            onOpen={() => setDisplayDetails(!displayDetails)}
                        >
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                ))}
                <ZoomControl position="topright" />
            </MapContainer>
        </div>
    )
}

export default Map
