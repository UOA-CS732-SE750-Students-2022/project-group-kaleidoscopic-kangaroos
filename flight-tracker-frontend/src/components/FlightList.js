// TODO
// - Auto refresh the list
// - Finnish Row Generation
// - Card Builder

import { Card } from '@mui/material'
import { getAllFlights } from '../services/flightServices'

// function makeFlightListRow(aircraft) {
//     return (
//         <div className="flightListRow">
//             Callsign: {aircraft.call}, Altitude: {aircraft.altitude}, Vertical
//             Speed: {aircraft.vSpeed}, Speed: {aircraft.hSpeed}, Heading:{' '}
//             {aircraft.heading}, Distance: {aircraft.distance}, Squawk:{' '}
//             {aircraft.squawk}, Engines: {aircraft.engines}
//         </div>
//     )
// }

let aircraft = {}
let keys = []

function fetchAircraftInfo() {
    getAllFlights().then((res) => {
        aircraft = res
        keys = Object.keys(res)
        console.log('function')
        console.log(aircraft)
        console.log(keys)
    })
}

const FlightList = () => {
    fetchAircraftInfo()
    console.log('main')
    console.log(aircraft)
    console.log(keys)
    return (
        <div>
            <Card className="flightListDiv" elevation={0}>
                <div className="flightListRow">Hello moto {keys} </div>
            </Card>
        </div>
    )
}

export default FlightList
