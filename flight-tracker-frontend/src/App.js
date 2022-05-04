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
    const mockState = {
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
    const [showFlightDetails, setShowFlightDetails] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Map 
                center={[-41.5000831, 172.8344077]} 
                zoom={13}
                />
                {showFlightList ?
                <FlightList setVisible={setShowFlightList} /> : <FlightListButton setVisible={setShowFlightList} />}
                {showFlightDetails ?
                <FlightDetails details={mockState} setVisible={setShowFlightDetails} /> : null}
            </div>
        </ThemeProvider>
    )
}

export default App
