import * as React from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { FixedSizeList } from 'react-window'

let tempData = []

function renderRow(props) {
    const { index, style } = props

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText
                    style={{ color: 'white' }}
                    primary={`ID: ${tempData[index].Id}`}
                />
            </ListItemButton>
        </ListItem>
    )
}

function FlightList(props) {
    const allFlights = props
    tempData = allFlights.data
    console.log(allFlights.data)
    return (
        <Box
            index="FlightListBox"
            sx={{
                width: '100%',
                height: 400,
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'fixed',
                top: '0',
                left: '0',
                zIndex: '999',
            }}
        >
            <FixedSizeList
                height={400}
                width={360}
                itemSize={46}
                itemCount={allFlights.data.length}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    )
}

export default FlightList
