import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Map from './components/Map/Map'
import FlightList from './components/FlightList/FlightList'
import DisplayContext from './contexts/DisplayContext'

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { paper: '#222431' },
    },
})

let currentPlane

function App() {
    const [displayDetails, setDisplay] = React.useState(false)
    const changeDisplayEvent = (props, plane) => {
        switch (props) {
            case 'YES_FLIGHTDETAILS':
                currentPlane = plane
                setDisplay(true)
                return
            case 'NO_FLIGHTDETAILS':
                setDisplay(false)
                return
            default:
                setDisplay(false)
        }
    }

    const DisplayProviderValue = React.useMemo(
        () => ({ displayDetails, changeDisplayEvent, currentPlane }),
        [displayDetails, changeDisplayEvent]
    )

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="mapBackground">
                    <DisplayContext.Provider value={DisplayProviderValue}>
                        <Map />
                    </DisplayContext.Provider>
                    <DisplayContext.Provider value={DisplayProviderValue}>
                        <FlightList />
                    </DisplayContext.Provider>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
