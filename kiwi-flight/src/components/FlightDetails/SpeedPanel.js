/* eslint-disable arrow-body-style */
import {
    Container,
    Typography,
} from '@mui/material'

// Shows the speed of the plane.
const SpeedPanel = ({details}) => {
    return (
        <div className="flightDetailsRow">
            <Container>
                <Typography>
                    <b>Horizontal Speed:</b> {details.hSpeed}km/hr
                </Typography>
                <Typography>
                    <b>Vertical Speed:</b> {details.vSpeed}m/min
                </Typography>
            </Container>
        </div>
    );
}

export default SpeedPanel