// TODO
// - Dynamically update airline logos
// - Dynamic Positioning of Flight List
// - Fix Up Styling of List -- Include more INFO like, LogLang or Speed?
// - Header and Footer of List showing update time

import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Slide, IconButton, ListItemAvatar, Typography } from '@mui/material'
import { FixedSizeList } from 'react-window'
import { VscChromeClose } from 'react-icons/vsc';
import getAllFlights from '../../services/flightServices'
import Logo from '../../images/airlineLogo-placeholder.png'
import './FlightList.css'


let tempData = []
let tempSetDetails
let tempSetDetailsVisible

function updateDetails(props) {
    tempSetDetails(props)
    tempSetDetailsVisible(true)
}

const FlightListRows = (props) => {
    const { index, style } = props

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
                        }}
                        alt="LOGO HERE"
                        src={Logo}
                    />
                </ListItemAvatar>
                <ListItemText
                    style={{ color: 'white' }}
                    primary={`${tempData[index].Call} - ${tempData[index].Op}`}
                />
            </ListItemButton>
        </ListItem>
    )
}

const FlightList = ({setVisible, setDetailsVisible, setDetails}) => {
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
        }, 1000)
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
                    height: 800,
                    maxWidth: 400,
                    bgcolor: 'background.paper',
                    position: 'fixed',
                    bottom: '10%',
                    left: '0',
                    zIndex: '999',
                }}
            >
                <div className="flightListTitleRow">
                    <Typography variant="h3" sx={{color:"white"}}>
                        Flight List
                    </Typography>
                    <IconButton color="primary" size='large' onClick={() => setVisible(false)}>
                        <VscChromeClose />
                    </IconButton>
                </div>
                
                <FixedSizeList
                    height={800}
                    width={400}
                    itemSize={45}
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
