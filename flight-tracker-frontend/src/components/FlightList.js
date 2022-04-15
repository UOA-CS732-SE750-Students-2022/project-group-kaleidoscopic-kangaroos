import { Card } from '@mui/material'
import getAllFlights from '../services/flightServices'

function getFlightListRow(flights) {
    console.log(flights)
    return (
        <div className="flightListRow">
            <div className="flightListRow">flights</div>
        </div>
    )
}

const FlightList = () => {
    const flights = getAllFlights()
        .then()
        .forEach((aircraft) => {
            getFlightListRow(aircraft)
        })

    console.log.apply(flights)

    return (
        <div>
            <Card className="flightListDiv" elevation={0}>
                <div className="flightListRow">Hellomoto!</div>
            </Card>
        </div>
    )
}

export default FlightList
