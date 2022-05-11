
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { useMediaQuery } from 'react-responsive'
import Map from './components/Map/Map'
import FlightDetails from './components/FlightDetails/FlightDetails'
import Settings from './components/Settings/Settings'
import FlightList from './components/FlightList/FlightList'
import FlightListButton from './components/FlightListButton/FlightListButton'


/**
 * Used to define the general color scheme for components.
 */
const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { paper: '#222431' },
    },
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
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1223px)'});

    // The current plane that is being selected.
    let currentState;

    // Used to format plane data so that is usable in other components.
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
    else {
        currentState =  {
            callsign: 'Not selected',
            altitude: 0,
            vSpeed: 0,
            hSpeed: 0,
            heading: 0,
            distance: 0,
            squawk: 0,
            engines: 'Not selected',
        }
    }

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
                < Settings />

                {showFlightList ?
                    <FlightList 
                        setVisible={setShowFlightList} 
                        setDetails={setCurrentPlane}
                        setDetailsVisible={setShowFlightDetails}
                    /> : 
                    <FlightListButton 
                        setVisible={setShowFlightList}
                        text={isTabletOrMobile ? null : "Flight List"}
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
