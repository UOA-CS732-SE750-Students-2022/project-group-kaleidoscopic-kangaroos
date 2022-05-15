import { Container, Paper, Typography } from '@mui/material'
import getPlaneImage from '../../services/planeServices'

let fetchedPlaneImage = false
let currentRego = ''
let planeImage = ''

/* eslint-disable arrow-body-style */

// Stops Spamming the API for Images -- checks if the image has already been fetched according to the rego.
function getImg(rego) {
    if (fetchedPlaneImage === false) {
        currentRego = rego
        planeImage = getPlaneImage(rego)
        console.log(planeImage)
        fetchedPlaneImage = true
    }

    return planeImage
}

// Shows General information about the plane.
const GeneralPanel = ({ details }) => {
    if (details.rego !== currentRego) {
        fetchedPlaneImage = false
        currentRego = details.rego
        getImg(details.rego)
    }
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
