/* eslint-disable arrow-body-style */
import {
    ToggleButtonGroup,
    ToggleButton,
    Slide,
    Card,
    IconButton,
    Typography,
} from '@mui/material'
import { VscChromeClose } from 'react-icons/vsc'
import React, { useState } from 'react'
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
 * @returns the jsx for the component that will be rendered.
 */
const FlightDetails = ({ details, setVisible }) => {
    const [selectedPanel, setSelectedPanel] = useState('General')

    /**
     * Used to change the currently selected panel.
     * @param {*} event
     * @param {String} panelName the name of the panel we want to switch to.
     */
    const handleSelectedPanel = (event, panelName) => {
        setSelectedPanel(panelName)
    }

    let contents

    // Decide which panel to display.
    if (selectedPanel === 'General') {
        contents = <GeneralPanel details={details} />
    } else if (selectedPanel === 'Spatial') {
        contents = <SpatialPanel details={details} />
    } else if (selectedPanel === 'Speed') {
        contents = <SpeedPanel details={details} />
    } else if (selectedPanel === 'Altitude') {
        contents = <AltitudePanel details={details} />
    } else if (selectedPanel === 'ATC') {
        contents = <AtcRadioPanel details={details} />
    }

    // Render the components.
    return (
        <div>
            <Slide direction="up" in timeout={300}>
                <Card className="flightDetailsDiv" elevation={0}>
                    <div className="flightDetailsRow">
                        <Typography variant="h4">{details.callsign}</Typography>
                        <Typography variant="h6">{details.op}</Typography>
                        <IconButton
                            color="primary"
                            size="large"
                            onClick={() => setVisible(false)}
                        >
                            <VscChromeClose />
                        </IconButton>
                    </div>
                    {contents}
                    <ToggleButtonGroup
                        value={selectedPanel}
                        exclusive
                        onChange={handleSelectedPanel}
                    >
                        <ToggleButton value="General">General</ToggleButton>
                        <ToggleButton value="Spatial">Spatial</ToggleButton>
                        <ToggleButton value="Speed">Speed</ToggleButton>
                        <ToggleButton value="Altitude">Altitude</ToggleButton>
                        <ToggleButton value="ATC">ATC Radio</ToggleButton>
                    </ToggleButtonGroup>
                </Card>
            </Slide>
        </div>
    )
}

export default FlightDetails
