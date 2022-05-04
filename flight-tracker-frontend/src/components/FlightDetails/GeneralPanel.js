/* eslint-disable arrow-body-style */
import {
    Container,
    Paper,
    Typography,
} from '@mui/material'
import plane from '../../images/plane-placeholder.jpg'


// Shows General information about the plane.
const GeneralPanel = ({details}) => {
    return (
        <div className="flightDetailsRow">
            <Paper variant="outlined" className="planeImageContainer">
                <img src={plane} alt="a plane" className="planeImage" />
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
    );
}

export default GeneralPanel