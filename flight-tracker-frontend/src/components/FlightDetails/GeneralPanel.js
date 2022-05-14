import React, { useState, useEffect } from 'react'
import { Container, Paper, Typography } from '@mui/material'
import { getFlight, updateFlight } from '../../services/flightServices'
// import getPlaneImage from '../../services/planeServices'

let lastDV = 0
let flightData = []

function updateFlightdata(details) {
    const [isLoading, setLoading] = useState(true)

    getFlight(details.icao).then((result) => {
        flightData = result.acList.filter((item) => item.Lat)
        lastDV = result.lastDv
    })

    const getAllNodes = () => {
        updateFlight(details.icao, lastDV).then((result) => {
            flightData = result
            console.log(flightData)
            setLoading(false)
        })
    }

    useEffect(() => {
        setInterval(() => {
            setLoading(true)
        }, 2000)
    }, [])

    if (isLoading) {
        getAllNodes()
    }
}

const FlightStats = ({ details }) => {
    const temp = details
    console.log(temp)

    const alt = flightData

    return (
        <Container>
            <Typography>
                <b>Altitude:</b> {alt}m
            </Typography>
            <Typography>
                <b>Vertical Speed:</b> {flightData.vSpeed}m/min
            </Typography>
            <Typography>
                <b>Speed:</b> {flightData.Spd}km/hr
            </Typography>
            <Typography>
                <b>Heading:</b> {flightData.heading}&deg;
            </Typography>
            <Typography>
                <b>Squawk:</b> {flightData.Sqk}
            </Typography>
            <Typography>
                <b>Engines:</b> {flightData.Engines}
            </Typography>
        </Container>
    )
}

// Shows General information about the plane.
const GeneralPanel = ({ details }) => {
    // const planeImage = getPlaneImage(details.rego)
    updateFlightdata(details)

    return (
        <div className="flightDetailsRow">
            <Paper variant="outlined" className="planeImageContainer">
                {/* <img src={planeImage} alt="a plane" className="planeImage" /> */}
            </Paper>
            {FlightStats({ details })}
        </div>
    )
}

export default GeneralPanel
