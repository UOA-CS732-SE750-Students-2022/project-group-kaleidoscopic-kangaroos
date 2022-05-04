import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import getAllFlights from '../../services/flightServices'
import DisplayContext from '../../contexts/DisplayContext'

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
                display.currentPlane &&
                item.Id === display.currentPlane.Id &&
                display.displayDetails ? (
                    <Marker
                        key={item.Id}
                        position={[item.Lat, item.Long]}
                        icon={L.divIcon({
                            iconSize: [50, 50],
                            iconAnchor: [10, 10],
                            className: 'yourClassName',
                            html: `<img 
            style="transform: rotate(${item.Trak}deg);"
            height="50" 
            width="50"
            src='/newicon2.png'>`,
                        })}
                    >
                        <Popup onOpen={() => handleDisplayUpdate(item)}>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                ) : (
                    <Marker
                        key={item.Id}
                        position={[item.Lat, item.Long]}
                        icon={L.divIcon({
                            iconSize: [50, 50],
                            iconAnchor: [10, 10],
                            className: 'yourClassName',
                            html: `<img 
            style="transform: rotate(${item.Trak}deg);"
            height="50" 
            width="50"
            src='/newicon.png'>`,
                        })}
                    >
                        <Popup onOpen={() => handleDisplayUpdate(item)}>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                )
            )}
        </>
    )
}

export default Planes
