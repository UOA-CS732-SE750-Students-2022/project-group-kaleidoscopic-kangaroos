// TODO
// - Fix Up Styling of List -- Include more INFO like, LogLang or Speed?
// - Header and Footer of List showing update time

import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Slide, IconButton, ListItemAvatar, Typography } from '@mui/material'
import { FixedSizeList } from 'react-window'
import { VscChromeClose } from 'react-icons/vsc'
import getAllFlights from '../../services/flightServices'
import getAirlineImage from '../ImageHandler/Airline'
import './FlightList.css'

let tempData = []
let tempSetDetails
let tempSetDetailsVisible
let windowHeight = window.innerHeight
// let windowWidth = window.innerWidth

function updateDetails(props) {
    tempSetDetails(props)
    tempSetDetailsVisible(true)
}

function reportWindowSize() {
    windowHeight = window.innerHeight
    // windowWidth = window.innerWidth
}
window.onresize = reportWindowSize

const FlightListRows = (props) => {
    const { index, style } = props
    const callsign = tempData[index].Call
    const opicao = tempData[index].OpIcao
    const op = tempData[index].Op

    const imgAirline = getAirlineImage(callsign, opicao)

    return (
        <ListItem
            style={style}
            key={tempData[index].Id}
            component="div"
            disablePadding
        >
            <ListItemButton onClick={() => updateDetails(tempData[index])}>
                <ListItemAvatar>
                    <Box
                        component="img"
                        sx={{
                            height: 32,
                            width: 100,
                            background: 'white',
                            border: '5px solid white',
                            borderRadius: '5%',
                        }}
                        alt="Unknown"
                        src={imgAirline}
                    />
                </ListItemAvatar>
                <ListItemText
                    style={{ color: 'white' }}
                    primary={`${callsign} - ${opicao} - ${op}`}
                />
            </ListItemButton>
        </ListItem>
    )
}

const FlightList = ({ setVisible, setDetailsVisible, setDetails }) => {
    tempSetDetails = setDetails
    tempSetDetailsVisible = setDetailsVisible

    const [isLoading, setLoading] = useState(true)

    const getAllNodes = () => {
        getAllFlights().then((result) => {
            tempData = result
            if (tempData === undefined) {
                // Do Nothing!
            } else if (tempData !== undefined) {
                tempData.pop()
            }
            setLoading(false)
        })
    }

    useEffect(() => {
        setInterval(() => {
            setLoading(true)
        }, 100)
    }, [])

    if (isLoading) {
        getAllNodes()
    }

    return (
        <Slide direction="right" in timeout={1000}>
            <Box
                index="FlightListBox"
                sx={{
                    width: '100%',
                    height: '100%',
                    maxWidth: 400,
                    bgcolor: 'background.paper',
                    position: 'fixed',
                    top: '10%',
                    left: '0',
                    zIndex: '999',
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
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

                <FixedSizeList
                    height={windowHeight}
                    width={400}
                    itemSize={50}
                    itemCount={tempData.length}
                    overscanCount={5}
                >
                    {FlightListRows}
                </FixedSizeList>
            </Box>
        </Slide>
    )
}

export default FlightList
