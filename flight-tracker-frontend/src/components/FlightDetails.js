import React, { useState } from 'react'
import {
    Button,
    Card,
    Container,
    IconButton,
    Paper,
    Typography,
} from '@mui/material'
import plane from '../images/plane-placeholder.jpg'
import '../styles/FlightDetails.css'

const FlightDetails = (props) => {
    const flightData = props

    // Temporary mock data until the API calls are implemented.
    const mockData = {
        callsign: flightData.Call,
        altitude: flightData.Alt,
        vSpeed: 20,
        hspeed: flightData.Spd,
        heading: 334.1,
        distance: 18582.58,
        squawk: flightData.Sqk,
        engines: flightData.Engines,
    }

    const [flightState] = useState(mockData)

    return (
        <div>
            <Card className="flightDetailsDiv" elevation={0}>
                <div className="flightDetailsRow">
                    <Typography variant="h4">
                        Plane {flightState.callsign}
                    </Typography>
                    <IconButton color="primary">
                        <b>X</b>
                    </IconButton>
                </div>
                <div className="flightDetailsRow">
                    <Paper variant="outlined" className="planeImageContainer">
                        <img src={plane} alt="a plane" className="planeImage" />
                    </Paper>
                    <Container>
                        <Typography>
                            <b>Altitude:</b> {flightState.altitude}m
                        </Typography>
                        <Typography>
                            <b>Vertical Speed:</b> {flightState.vSpeed}m/min
                        </Typography>
                        <Typography>
                            <b>Speed:</b> {flightState.hSpeed}km/hr
                        </Typography>
                        <Typography>
                            <b>Heading:</b> {flightState.heading}&deg;
                        </Typography>
                        <Typography>
                            <b>Distance:</b> {flightState.distance}km
                        </Typography>
                        <Typography>
                            <b>Squawk:</b> {flightState.squawk}
                        </Typography>
                        <Typography>
                            <b>Engines:</b> {flightState.engines}
                        </Typography>
                    </Container>
                </div>
                <div className="buttonRow">
                    <Button>General</Button>
                    <Button>Spatial</Button>
                    <Button>Speed</Button>
                    <Button>Altitude</Button>
                    <Button>ATC Radio</Button>
                </div>
            </Card>
        </div>
    )
}

export default FlightDetails
