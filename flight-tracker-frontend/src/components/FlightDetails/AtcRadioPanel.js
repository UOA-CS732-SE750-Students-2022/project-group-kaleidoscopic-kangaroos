/* eslint-disable arrow-body-style */
import {
    Container,
    Typography,
} from '@mui/material'

// Shows radio information about the plane.
const AtcRadioPanel = () => {
    return (
        <div className="flightDetailsRow">
            <Container>
                <Typography>
                    <b>Radio:</b> Test
                </Typography>
            </Container>
        </div>
    );
}

export default AtcRadioPanel