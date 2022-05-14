// TODO
// - Fix Up Styling of List -- Include more INFO like, LogLang or Speed?
// - Header and Footer of List showing update time

import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Slide, IconButton, ListItemAvatar, Typography, CircularProgress, List } from '@mui/material'
import { VscChromeClose } from 'react-icons/vsc'
import { getAllFlights } from '../../services/flightServices'
import getAirlineImage from '../../services/airlineServices'
import './FlightList.css'

/**
 * Shows a list of the all the flights that are currently tracked.
 * @param {function} setVisible sets the visibility of the flight list. Used to close the flight list.
 * @param {function} setDetailsVisible sets the visibility of the flight details component.
 * @param {function} setDetails sets the details of the currently selected plane.
 * @param {boolean} flightDetailsVisible whether the flight details panel is visible or not.
 * @param {boolean} fullWidth indicates whether the flight list should fill the screen or not.
 * @returns the JSX for the flight list.
 */
const FlightList = ({ setVisible, setDetailsVisible, setDetails, flightDetailsVisible, fullWidth }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [flights, setFlights] = useState([]);
    const [selectedFlightId, setSelectedFlightId] = useState(null);

    // Update the list roughly every second.
    useEffect(() => {
        const updateAllFlightsInterval = setInterval(() => {
            getAllFlights().then((result) => {
                setIsLoading(false)
                setFlights(result.acList)
            })
        }, 1000)

        return () => clearInterval(updateAllFlightsInterval);
    }, [])

    // Render the component.
    return (
        <Slide direction="right" in timeout={1000}>
            <Box
                index="FlightListBox"
                sx={{
                    width: '100%',
                    height: '85%',
                    maxWidth: fullWidth ? null : 450,
                    bgcolor: 'background.paper',
                    position: 'fixed',
                    top: '15%',
                    left: '0',
                    zIndex: '999',
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div className="flightListTitleRow">
                    <Typography variant="h3" sx={{ color: 'white' }}>
                        Flight List
                    </Typography>
                    <IconButton
                        color="primary"
                        size="medium"
                        onClick={() => setVisible(false)}
                    >
                        <VscChromeClose />
                    </IconButton>
                </div>
                
                { /*
                While the data is loading, we show the circular progress.
                If the flight data has been loaded, we render all the list elements.
                */
                isLoading ? 
                    <CircularProgress size="96px" sx={{marginTop: 20}} /> :
                    <List sx={{maxHeight: '100%', overflow: 'auto'}}>
                            {flights.map(flight => (
                                <ListItem
                                    key={flight.Id}
                                    disablePadding
                                >
                                    <ListItemButton onClick={() => {
                                        setDetails(flight)
                                        setDetailsVisible(true)
                                        setSelectedFlightId(flight.Id)
                                        }}
                                        selected={selectedFlightId === flight.Id && flightDetailsVisible}>
                                        <ListItemAvatar>
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 32,
                                                    width: 100,
                                                    background: 'white',
                                                    border: '5px solid white',
                                                    borderRadius: '5%',
                                                    marginRight: 2,
                                                }}
                                                alt="Unknown"
                                                src={getAirlineImage(flight.Call, flight.OpIcao)}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            style={{ color: 'white' }}
                                            primary={`${flight.Call} - ${flight.Op}`}
                                        />
                                    </ListItemButton>
                                </ListItem>
                        ))}
                    </List>
                }
            </Box>
        </Slide>
    )
}

export default FlightList
                         