/* eslint-disable arrow-body-style */
import {
    Button,
    Card,
    Container,
    IconButton,
    Paper,
    Typography,
} from '@mui/material'
import plane from '../../images/plane-placeholder.jpg'
import './FlightDetails.css'

const FlightDetails = ({details, setVisible}) => {
    return (
        <div>
            <Card className="flightDetailsDiv" elevation={0}>
                <div className="flightDetailsRow">
                    <Typography variant="h4">
                        Plane {details.callsign}
                    </Typography>
                    <IconButton color="primary" onClick={() => setVisible(false)}>
                        <b>X</b>
                    </IconButton>
                </div>
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
                <div className="buttonRow">
                    <Button>General</Button>
                    <Button>Spatial</Button>
                    <Button>Speed</Button>
                    <Button>Altitude</Button>
                    <Button>ATC Radio</Button>
                </div>
            </Card>
        </div>
        );
    }

export default FlightDetails
