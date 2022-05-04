/* eslint-disable arrow-body-style */
import {
    ToggleButtonGroup,
    ToggleButton,
    Card,
    Container,
    IconButton,
    Paper,
    Typography,
} from '@mui/material'
import React, {useState} from 'react'
import plane from '../../images/plane-placeholder.jpg'
import './FlightDetails.css'

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

// Shows Spatial information about the plane.
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

const FlightDetails = ({details, setVisible}) => {
    const [selectedPanel, setSelectedPanel] = useState("General");

    /**
     * Used to change the currently selected panel.
     * @param {*} event 
     * @param {String} panelName the name of the panel we want to switch to.
     */
    const handleSelectedPanel = (event, panelName) => {
        setSelectedPanel(panelName);
    }

    let contents;

    // Decide which panel to display.
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

    // Render the components.
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
                <ToggleButtonGroup
                    value={selectedPanel}
                    exclusive
                    onChange={handleSelectedPanel}
                >
                    <ToggleButton 
                        value="General"
                    >
                        General
                    </ToggleButton>
                    <ToggleButton 
                        value="Spatial"
                    >
                        Spatial
                    </ToggleButton >
                    <ToggleButton 
                        value="Speed"
                    >
                        Speed
                    </ToggleButton >
                    <ToggleButton  
                        value="Altitude"
                    >
                        Altitude
                    </ToggleButton >
                    <ToggleButton  
                        value="ATC"
                    >
                        ATC Radio
                    </ToggleButton>
                </ToggleButtonGroup>
            </Card>
        </div>
        );
    }

export default FlightDetails
