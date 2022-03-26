import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import FlightDetails from './components/FlightDetails'

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
                <FlightDetails />
            </div>
        </ThemeProvider>
    )
}

export default App
