// TODO
// - Auto refresh the list
// - Card Builder

import { Card } from '@mui/material'
import { getAllFlights } from '../services/flightServices'

async function fetchAircraftInfo() {
    let aircraft = {}
    try {
        await getAllFlights().then((res) => {
            aircraft = res
        })
    } catch (error) {
        console.error(error)
    }
    // console.log('function')
    // console.log(aircraft)
    // console.log(keys)

    return { aircraft }
}

function makeFlightListRow(aircraft, key) {
    const info = aircraft.aircraft[key]
    console.log(info)
    console.log(info.Call)
}

function FlightList() {
    let flights = {}
    let keys = []
    fetchAircraftInfo().then((res) => {
        flights = res
        keys = Object.keys(res.aircraft)
        // console.log(flights)
        // console.log(keys)

        while (keys.length > 0) {
            makeFlightListRow(flights, keys.pop())
        }
    })

    return (
        <div>
            <Card className="flightListDiv" elevation={0}>
                <div className="flightListRow">Hello moto = {keys} </div>
            </Card>
        </div>
    )
}

export default FlightList
