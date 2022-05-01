import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Map from './components/Map/Map'
import FlightDetails from './components/FlightDetails/FlightDetails'
import MenuAndSettings from './components/MenuAndSettings/MenuAndSettings'

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
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Map 
                center={[-41.5000831, 172.8344077]} 
                zoom={13}
                />
                <FlightDetails 
                details={mockState}
                />
                < MenuAndSettings
                details1={handleClose}
                details2={handleClick}
                details3={anchorEl}
                details4={setAnchorEl}
                
                />
            </div>
        </ThemeProvider>
    )
}

export default App
