/* eslint-disable arrow-body-style */
import {
    Button,
    Card,
    Container,
    IconButton,
    Paper,
    Typography,
} from '@mui/material'
import React, {useState} from 'react'
import plane from '../../images/plane-placeholder.jpg'
import './FlightDetails.css'

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

const SpatialPanel = ({details}) => {
    return (
        <div className="flightDetailsRow">
            <Container>
                <Typography>
                    <b>Distance:</b> {details.distance}km
                </Typography>
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

const FlightDetails = ({details, setVisible}) => {
    const [selectedPanel, setSelectedPanel] = useState("General");

    let contents;

    // Decide which panel to display
    if (selectedPanel === "General") {
        contents = <GeneralPanel details={details} />;
    }
    else if (selectedPanel === "Spatial") {
        contents = <SpatialPanel details={details} />;
    }
    else if (selectedPanel === "Speed") {
        contents = <SpeedPanel details={details} />;
    }
    else if (selectedPanel === "Altitude") {
        contents = <AltitudePanel details={details} />;
    }
    else if (selectedPanel === "ATC") {
        contents = <AtcRadioPanel details={details} />;
    }

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
                {contents}
                <div className="buttonRow">
                    <Button 
                        onClick={() => setSelectedPanel("General")}
                        className={selectedPanel === "General" ? "selectedButton" : null }>
                        General
                    </Button>
                    <Button 
                        onClick={() => setSelectedPanel("Spatial")}
                        className={selectedPanel === "Spatial" ? "selectedButton" : null }>
                        Spatial
                    </Button>
                    <Button 
                        onClick={() => setSelectedPanel("Speed")}
                        className={selectedPanel === "Speed" ? "selectedButton" : null }>
                        Speed
                    </Button>
                    <Button 
                        onClick={() => setSelectedPanel("Altitude")}
                        className={selectedPanel === "Altitude" ? "selectedButton" : null }>
                        Altitude
                    </Button>
                    <Button 
                        onClick={() => setSelectedPanel("ATC")}
                        className={selectedPanel === "ATC" ? "selectedButton" : null }>
                        ATC Radio
                    </Button>
                </div>
            </Card>
        </div>
        );
    }

export default FlightDetails
