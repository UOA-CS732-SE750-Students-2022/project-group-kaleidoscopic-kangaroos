import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import Map from './components/Map/Map'
import FlightDetails from './components/FlightDetails/FlightDetails'
import FlightList from './components/FlightList/FlightList'
import FlightListButton from './components/FlightListButton/FlightListButton'

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { paper: '#222431' },
    },
})

function App() {
    let currentState = {
        callsign: 'Test123',
        altitude: 5182,
        vSpeed: 20,
        hSpeed: 420,
        heading: 334.1,
        distance: 18582.58,
        squawk: 5565,
        engines: 'Twin turbo',
    }

    const [showFlightList, setShowFlightList] = useState(false);
    const [showFlightDetails, setShowFlightDetails] = useState(false)

    const [currentPlane, setCurrentPlane] = useState([])

    if (showFlightDetails) {
        currentState = {
            callsign: currentPlane.Call,
            altitude: Math.round(currentPlane.Alt / 3.2808),
            vSpeed: 20,
            hSpeed: Math.round(currentPlane.Spd * 1.60934),
            heading: currentPlane.Trak,
            distance: 18582.58,
            squawk: currentPlane.Sqk,
            engines: 'Twin turbo',
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Map
                    details={currentPlane}
                    setDetails={setCurrentPlane}
                    visible={showFlightDetails}
                    setVisible={setShowFlightDetails}
                />

                {showFlightList ?
                    <FlightList 
                        setVisible={setShowFlightList} 
                        setDetails={setCurrentPlane}
                        setDetailsVisible={setShowFlightDetails}
                    /> : 
                    <FlightListButton 
                        setVisible={setShowFlightList} 
                    />
                }

                {showFlightDetails ? (
                    <FlightDetails
                        details={currentState}
                        setVisible={setShowFlightDetails}
                    />
                ) : null}
            </div>
        </ThemeProvider>
    )
}

export default App
