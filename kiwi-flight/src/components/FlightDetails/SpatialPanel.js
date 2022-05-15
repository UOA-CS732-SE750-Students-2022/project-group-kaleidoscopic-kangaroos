/* eslint-disable arrow-body-style */
import {
    Container,
    Typography,
} from '@mui/material'

// Shows Spatial information about the plane.
const SpatialPanel = ({details}) => {
    return (
        <div className="flightDetailsRow">
            <Container>
                <Typography>
                    <b>Heading:</b> {details.heading}&deg;
                </Typography>
                <Typography>
                    <b>Squawk:</b> {details.squawk}
                </Typography>
            </Container>
        </div>
    );
}

export default SpatialPanel