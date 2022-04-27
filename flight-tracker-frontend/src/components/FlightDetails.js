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

    const data = {
        callsign: flightData.data.Call,
        altitude: Math.round(flightData.data.Alt / 3.2808),
        vSpeed: '',
        hSpeed: Math.round(flightData.data.Spd * 1.60934),
        heading: flightData.data.Trak,
        distance: '',
        squawk: flightData.data.Sqk,
        engines: flightData.data.Engines,
    }

    const [flightState] = useState(data)

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
