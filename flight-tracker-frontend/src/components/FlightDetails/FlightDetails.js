/* eslint-disable arrow-body-style */
import {
    ToggleButtonGroup,
    ToggleButton,
    Slide,
    Card,
    IconButton,
    Typography,
} from '@mui/material'
import { VscChromeClose } from 'react-icons/vsc';
import React, {useState} from 'react'
import GeneralPanel from './GeneralPanel'
import SpatialPanel from './SpatialPanel'
import SpeedPanel from './SpeedPanel'
import AltitudePanel from './AltitudePanel'
import AtcRadioPanel from './AtcRadioPanel'
import './FlightDetails.css'

/**
 * Show the details for a selected flight.
 * @param {object} details provides the details for the selected plane.
 * @param {boolean} setVisible used to set the FlightDetails component invisible.
 * @param {boolean} fullWidth is true when in table or mobile view, indicates the the 
 * component should fit the width of the screen.
 * @returns the jsx for the component that will be rendered.
 */
const FlightDetails = ({details, setVisible, fullWidth}) => {
    const [selectedPanel, setSelectedPanel] = useState("General");
    const [flightInformation] = useState({
        callsign: details.Call,
        altitude: Math.round(details.Alt / 3.2808),
        vSpeed: 20,
        hSpeed: Math.round(details.Spd * 1.60934),
        heading: details.Trak,
        distance: 18582.58,
        squawk: details.Sqk,
        engines: 'Twin turbo',
        latitude: details.Lat,
        longitude: details.Long
    });

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
        contents = <GeneralPanel details={flightInformation} />;
    }
    else if (selectedPanel === "Spatial") {
        contents = <SpatialPanel details={flightInformation} />;
    }
    else if (selectedPanel === "Speed") {
        contents = <SpeedPanel details={flightInformation} />;
    }
    else if (selectedPanel === "Altitude") {
        contents = <AltitudePanel details={flightInformation} />;
    }
    else if (selectedPanel === "ATC") {
        contents = <AtcRadioPanel details={flightInformation} />;
    }

    // Render the components.
    return (
        <div>
            <Slide direction="up" in timeout={300}>
                <Card className="flightDetailsDiv" elevation={0} sx={{width: fullWidth ? "98.5%" : 500}}>
                    <div className="flightDetailsRow">
                        <Typography variant="h4">
                            Plane {details.Call}
                        </Typography>
                        <IconButton color="primary" size='large' onClick={() => setVisible(false)}>
                            <VscChromeClose />
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
            </Slide> 
        </div>
        );
    }

export default FlightDetails
