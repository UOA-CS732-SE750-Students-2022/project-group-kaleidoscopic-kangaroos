import React from 'react'
import './Map.css'
import {
    MapContainer,
    TileLayer,
    ZoomControl,
    Marker,
    Popup,
} from 'react-leaflet'
import Planes from '../Planes/Planes'
import hotSpotData from '../../Data/newSpots.json'

function Map({ details, setDetails, visible, setVisible }) {
    if (visible) {
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
                    visible={visible}
                />
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
        <MapContainer
            center={[-37.0082, 174.785]}
            zoom={13}
            zoomControl={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Planes
                details={details}
                setDetails={setDetails}
                visible={visible}
                setVisible={setVisible}
            />
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
