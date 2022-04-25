import { createTheme, ThemeProvider } from '@mui/material/styles'
import Map from './components/Map/Map'
import FlightDetails from './components/FlightDetails/FlightDetails'
import FlightList from './components/FlightList/FlightList'

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
                    <FlightDetails />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
