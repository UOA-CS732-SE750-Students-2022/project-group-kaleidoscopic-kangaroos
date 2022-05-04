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
import DisplayContext from '../../contexts/DisplayContext'
import Logo from '../../images/airlineLogo-placeholder.png'

let tempData = []

function renderRow(props) {
    const { index, style } = props

    const display = React.useContext(DisplayContext)

    function handleDisplayUpdate(plane) {
        if (display.displayDetails) {
            display.changeDisplayEvent('NO_FLIGHTDETAILS', plane)
        } else {
            display.changeDisplayEvent('YES_FLIGHTDETAILS', plane)
        }
    }

    return (
        <ListItem
            style={style}
            key={tempData[index].Id}
            component="div"
            disablePadding
        >
            <ListItemButton
                onClick={() => handleDisplayUpdate(tempData[index])}
            >
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

function FlightList() {
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
                {renderRow}
            </FixedSizeList>
        </Box>
    )
}

export default FlightList
