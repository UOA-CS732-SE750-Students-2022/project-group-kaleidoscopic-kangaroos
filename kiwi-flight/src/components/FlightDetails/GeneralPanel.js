import { Container, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import getPlaneImage from '../../services/planeServices'

/* eslint-disable arrow-body-style */

// Shows General information about the plane.
const GeneralPanel = ({ details }) => {
    const [planeImage, setPlaneImage] = useState('')

    useEffect(() => {
        const image = getPlaneImage(details.rego)
        setPlaneImage(image)
    }, [details.rego])

    return (
        <div className="flightDetailsRow">
            <Paper variant="outlined" className="planeImageContainer">
                <img src={planeImage} alt="A plane" className="planeImage" />
            </Paper>
            <Container>
                <Typography>
                    <b>Altitude:</b> {details.altitude}m
                </Typography>
                <Typography>
                    <b>Vertical Speed:</b> {details.vSpeed}m/min
                </Typography>
                <Typography>
                    <b>Speed:</b> {details.hSpeed}km/hr
                </Typography>
                <Typography>
                    <b>Heading:</b> {details.heading}&deg;
                </Typography>
                <Typography>
                    <b>Squawk:</b> {details.squawk}
                </Typography>
                <Typography>
                    <b>Engines:</b> {details.engines}
                </Typography>
            </Container>
        </div>
    )
}

export default GeneralPanel
