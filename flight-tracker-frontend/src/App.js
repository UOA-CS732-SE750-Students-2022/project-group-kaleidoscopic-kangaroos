import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Map from './components/Map'
import FlightList from './components/FlightList'

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { paper: '#222431' },
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="mapBackground">
                    <Map />
                    <FlightList />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
