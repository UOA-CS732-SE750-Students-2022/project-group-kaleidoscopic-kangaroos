// TODO
// - Dynamically update airline logos
// - Dynamic Positioning of Flight List
// - Fix Up Styling of List -- Include more INFO like, LogLang or Speed?
// - Header and Footer of List showing update time

import * as React from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { ListItemAvatar } from '@mui/material'
import { FixedSizeList } from 'react-window'
import getAllFlights from '../../services/flightServices'
import Logo from '../../images/airlineLogo-placeholder.png'

let tempData = []
let tempSetDetails
let tempSetVisible

function updateDetails(props) {
    tempSetDetails(props)
    tempSetVisible(true)
}

function FlightListRows(props) {
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

function FlightList({ setDetails, setVisible }) {
    tempSetDetails = setDetails
    tempSetVisible = setVisible

    const [isLoading, setLoading] = React.useState(true)

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

    React.useEffect(() => {
        setInterval(() => {
            setLoading(true)
        }, 1000)
    }, [])

    if (isLoading) {
        getAllNodes()
    }

    return (
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
    )
}

export default FlightList
