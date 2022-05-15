import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { getAllFlights, updateAllFlights } from '../../services/flightServices'
import getAirlineImage from '../../services/airlineServices'

/**
 * Shows Planes on the world map. Also shows the current location of planes.
 * @param {object} details the details of the currently selected plane.
 * @param {function} setDetails the function used to change the selected plane.
 * @param {boolean} setVisible a function that is used to make the FlightDetails component visible..
 * @param {function} updateAllFlights used for update the current loaction of the flight. 
 * @returns the jsx for the Planes component.
 */

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

    // Render the component.

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
                                if (!visible) {
                                    setVisible(true)
                                }
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
