import React from 'react'
import '../styles/Map.css'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import planeIcon from '../images/plane-up-solid.svg'
import getAllFlights from '../services/flightServices'
import FlightDetails from './FlightDetails'

const newicon = new L.Icon({
    iconUrl: planeIcon,
    iconSize: [55, 55],
})

let allFlights = []

let currentPlane

function Planes() {
    const [isLoading, setLoading] = React.useState(true)

    const getAllNodes = () => {
        getAllFlights().then((result) => {
            allFlights = result
            allFlights.pop()
            console.log(allFlights)
            setLoading(false)
        })
    }

    const [displayDetails, setDisplayDetails] = React.useState(false)

    function changeDisplayDetails(newProps) {
        currentPlane = newProps
        console.log(currentPlane)
        setDisplayDetails(!displayDetails)
    }

    React.useEffect(() => {
        setInterval(() => {
            setLoading(true)
        }, 3000)
    }, [])

    if (isLoading) {
        getAllNodes()
        return <div className="App">Loading...</div>
    }
    if (isLoading === false) {
        if (displayDetails) {
            return (
                <>
                    {allFlights.map((item) =>
                        item.Lat ? (
                            <Marker
                                key={item.Id}
                                position={[item.Lat, item.Long]}
                                icon={newicon}
                            >
                                <Popup
                                    onOpen={() => changeDisplayDetails(item)}
                                >
                                    A pretty CSS3 popup. <br /> Easily
                                    customizable.
                                </Popup>
                            </Marker>
                        ) : (
                            <div />
                        )
                    )}
                    <FlightDetails data={currentPlane} />
                </>
            )
        }
        return (
            <>
                {allFlights.map((item) =>
                    item.Lat ? (
                        <Marker
                            key={item.Id}
                            position={[item.Lat, item.Long]}
                            icon={newicon}
                        >
                            <Popup onOpen={() => changeDisplayDetails(item)}>
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
