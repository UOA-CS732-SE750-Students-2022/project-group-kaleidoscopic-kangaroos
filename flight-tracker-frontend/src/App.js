import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Map from './components/Map'
import FlightList from './components/FlightList'
import getAllFlights from './services/flightServices'

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: { paper: '#222431' },
    },
})

let allFlights = []

function App() {
    const [isLoading, setLoading] = React.useState(true)

    const getAllNodes = () => {
        getAllFlights().then((result) => {
            allFlights = result
            allFlights.pop()
            console.log(allFlights)
            setLoading(false)
        })
    }
    React.useEffect(() => {
        getAllNodes()
    }, [])

    if (isLoading) {
        return <div className="App">Loading...</div>
    }
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Map data={allFlights} />
                <FlightList data={allFlights} />
            </div>
        </ThemeProvider>
    )
}

export default App
