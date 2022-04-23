import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import Map from './components/Map'
import FlightList from './components/FlightList'

const position = [-37.0082, 174.785]

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
                    <MapContainer
                        center={position}
                        zoom={10}
                        zoomControl={false}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Map />
                        <ZoomControl position="topright" />
                    </MapContainer>
                    <FlightList />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
