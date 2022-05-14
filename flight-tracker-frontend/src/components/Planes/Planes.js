import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { getAllFlights, updateAllFlights } from '../../services/flightServices'
import getAirlineImage from '../../services/airlineServices'

let allFlights = []
let lastDV = 0

function Planes({ details, setDetails, visible, setVisible }) {
    const [isLoading, setLoading] = useState(true)

    getAllFlights().then((result) => {
        allFlights = result.acList.filter((item) => item.Lat)
        lastDV = result.lastDv
    })

    const getAllNodes = () => {
        updateAllFlights(lastDV).then((result) => {
            allFlights = result.filter((item) => item.Lat)
            setLoading(false)
        })
    }

    useEffect(() => {
        setInterval(() => {
            setLoading(true)
        }, 1000)
    }, [])

    if (isLoading) {
        getAllNodes()
    }

    const imgLink = getAirlineImage(details.Call, details.OpIcao)

    return (
        <>
            {allFlights.map((item) =>
                details && item.Id === details.Id && visible ? (
                    <Marker
                        key={item.Id}
                        position={[item.Lat, item.Long]}
                        icon={L.divIcon({
                            iconSize: [50, 50],
                            iconAnchor: [25, 25],
                            className: 'yourClassName',
                            html: `<img 
            style="transform: rotate(${item.Trak}deg);"
            height="50" 
            width="50"
            src='/newicon2.png'>`,
                        })}
                    >
                        <Popup>
                            <img
                                src={imgLink}
                                alt={item.Op}
                                className="planeImage"
                            />
                            <br />
                            <b>Callsign:&ensp;</b> {item.Call}
                            <br />
                            <b>Altitude:&ensp;</b>
                            {item.Alt}
                            <br />
                            <b>Speed:&ensp;</b>
                            {item.Spd}
                            <br />
                            {item.Mdl}
                        </Popup>
                    </Marker>
                ) : (
                    <Marker
                        key={item.Id}
                        position={[item.Lat, item.Long]}
                        eventHandlers={{
                            click: () => {
                                setDetails(item)
                                setVisible(true)
                            },
                        }}
                        icon={L.divIcon({
                            iconSize: [50, 50],
                            iconAnchor: [25, 25],
                            className: 'yourClassName',
                            html: `<img 
            style="transform: rotate(${item.Trak}deg);"
            height="50" 
            width="50"
            src='/newicon.png'>`,
                        })}
                    >
                        <Popup>{item.Call}</Popup>
                    </Marker>
                )
            )}
        </>
    )
}

export default Planes
