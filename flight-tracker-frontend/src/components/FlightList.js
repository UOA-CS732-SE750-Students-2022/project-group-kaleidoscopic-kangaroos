import * as React from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { FixedSizeList } from 'react-window'
import getAllFlights from '../services/flightServices'

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

function FlightList() {
    const [isLoading, setLoading] = React.useState(true)

    const getAllNodes = () => {
        getAllFlights().then((result) => {
            tempData = result
            tempData.pop()
            setLoading(false)
        })
    }

    React.useEffect(() => {
        setInterval(() => {
            setLoading(true)
        }, 3000)
    }, [])

    if (isLoading) {
        getAllNodes()
        return <div className="App">Loading...</div>
    }
    if (isLoading === false) {
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
                    itemCount={tempData.length}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        )
    }
}

export default FlightList
