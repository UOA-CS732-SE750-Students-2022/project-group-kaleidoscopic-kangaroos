import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import getAllFlights from '../../services/flightServices'

let allFlights = []

function Planes({ details, setDetails, visible, setVisible }) {
    const [isLoading, setLoading] = React.useState(true)

    const getAllNodes = () => {
        getAllFlights().then((result) => {
            allFlights = result.filter((item) => item.Lat)
            setLoading(false)
        })
    }

    React.useEffect(() => {
        setInterval(() => {
            setLoading(true)
        }, 1000)
    }, [])

    if (isLoading) {
        getAllNodes()
    }

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
                        <Popup>{item.Call}</Popup>
                    </Marker>
                ) : (
                    <Marker
                        key={item.Id}
                        position={[item.Lat, item.Long]}
                        eventHandlers={{
                            click: () => {
                                setDetails(item)
                                // Show the flight details panel.
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
