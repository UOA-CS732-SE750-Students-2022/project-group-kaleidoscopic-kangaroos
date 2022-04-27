import React from 'react'
import '../styles/Map.css'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import getAllFlights from '../services/flightServices'
import DisplayContext from '../DisplayContext'

let allFlights = []

function Planes() {
    const display = React.useContext(DisplayContext)

    function handleDisplayUpdate(props) {
        if (display.displayDetails) {
            display.changeDisplayEvent('NO_FLIGHTDETAILS', props)
        } else {
            display.changeDisplayEvent('YES_FLIGHTDETAILS', props)
        }
    }

    const [isLoading, setLoading] = React.useState(true)

    const getAllNodes = () => {
        getAllFlights().then((result) => {
            allFlights = result
            allFlights.pop()
            console.log(allFlights)
            setLoading(false)
        })
    }

    React.useEffect(() => {
        setInterval(() => {
            setLoading(true)
        }, 3000)
    }, [])

    if (isLoading) {
        getAllNodes()
        return (
            <>
                {allFlights.map((item) =>
                    item.Lat ? (
                        <Marker
                            key={item.Id}
                            position={[item.Lat, item.Long]}
                            icon={L.divIcon({
                                iconSize: [40, 40],
                                iconAnchor: [10, 10],
                                className: 'yourClassName',
                                html: `<img 
            style="transform: rotate(${item.Trak}deg);"
            height="40" 
            width="40"
            src='/plane-up-solid.svg'>`,
                            })}
                        >
                            <Popup onOpen={() => handleDisplayUpdate(item)}>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ) : (
                        <div />
                    )
                )}
            </>
        )
    }
    if (isLoading === false) {
        return (
            <>
                {allFlights.map((item) =>
                    item.Lat ? (
                        <Marker
                            key={item.Id}
                            position={[item.Lat, item.Long]}
                            icon={L.divIcon({
                                iconSize: [40, 40],
                                iconAnchor: [10, 10],
                                className: 'yourClassName',
                                html: `<img 
            style="transform: rotate(${item.Trak}deg);"
            height="40" 
            width="40"
            src='/plane-up-solid.svg'>`,
                            })}
                        >
                            <Popup onOpen={() => handleDisplayUpdate(item)}>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ) : (
                        <div />
                    )
                )}
            </>
        )
    }
}

export default Planes
