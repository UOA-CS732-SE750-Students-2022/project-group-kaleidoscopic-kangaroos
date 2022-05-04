/* eslint-disable arrow-body-style */
import {
    Container,
    Typography,
} from '@mui/material'

// Shows Altitude information about the plane.
const AltitudePanel = ({details}) => {
    return (
        <div className="flightDetailsRow">
            <Container>
                <Typography>
                    <b>Altitude:</b> {details.altitude}m
                </Typography>
            </Container>
        </div>
    );
}

export default AltitudePanel