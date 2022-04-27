import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Map from './components/Map'
import FlightList from './components/FlightList'
import DisplayContext from './DisplayContext'

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { paper: '#222431' },
    },
})

let currentPlane

function App() {
    const [displayDetails, setDisplay] = React.useState(false)
    console.log(displayDetails)
    const changeDisplayEvent = (props, plane) => {
        switch (props) {
            case 'YES_FLIGHTDETAILS':
                console.log('turn on details')
                currentPlane = plane
                setDisplay(true)

                return
            case 'NO_FLIGHTDETAILS':
                console.log('turn off details')
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

                    <FlightList />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
