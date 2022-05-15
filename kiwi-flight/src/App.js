
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import useMediaQuery from '@mui/material/useMediaQuery'
import Map from './components/Map/Map'
import FlightDetails from './components/FlightDetails/FlightDetails'
import Settings from './components/Settings/Settings'
import FlightList from './components/FlightList/FlightList'
import FlightListButton from './components/FlightListButton/FlightListButton'
import MainLogo from './components/MainLogo/MainLogo'


/**
 * Used to define the general color scheme for components.
 */
const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { paper: '#222431' },
    }
})

function App() {
    /*
    Stores the current state of the app.
    */
    // Whether the Flight list is visible or not.
    const [showFlightList, setShowFlightList] = useState(false);
    // Whether the Flight details component is visible or not.
    const [showFlightDetails, setShowFlightDetails] = useState(false)
    // The current plane that is selected in the map or list.
    const [currentPlane, setCurrentPlane] = useState([])

    // Used for responsiveness.
    const isMobile = useMediaQuery('(max-width: 970px)');

    /*
    Renders the components.
    Flight List is only displayed when the show flight list button is clicked.
    Flight Details is only displayed when a plane is selected (either on map or in the list).
    */
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                
                <Map
                    details={currentPlane}
                    setDetails={setCurrentPlane}
                    flightDetailsVisible={showFlightDetails}
                    setFlightDetailsVisible={setShowFlightDetails}
                />

                <MainLogo/>

                < Settings />

                {showFlightList ?
                    <FlightList 
                        setVisible={setShowFlightList} 
                        setDetails={setCurrentPlane}
                        setDetailsVisible={setShowFlightDetails}
                        flightDetailsVisible={showFlightDetails}
                        fullWidth={isMobile}
                    /> : 
                    <FlightListButton 
                        setVisible={setShowFlightList}
                        text={isMobile ? "" : "Flight List"}
                    />
                }

                {showFlightDetails ? (
                    <FlightDetails
                        details={currentPlane}
                        setVisible={setShowFlightDetails}
                        fullWidth={isMobile}
                    />
                ) : null}
            </div>
        </ThemeProvider>
    )
}

export default App
