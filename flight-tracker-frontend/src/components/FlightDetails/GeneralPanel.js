import { Container, Paper, Typography } from '@mui/material'
import getPlaneImage from '../../services/planeServices'
import plane from '../../images/plane-placeholder.png'

/* eslint-disable arrow-body-style */

// Shows General information about the plane.
const GeneralPanel = ({ details }) => {
    const planeImage = getPlaneImage(details.rego)
    return (
        <div className="flightDetailsRow">
            <Paper variant="outlined" className="planeImageContainer">
                <img src={planeImage} alt={plane} className="planeImage" />
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
                    <b>Distance:</b> {details.distance}km
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
