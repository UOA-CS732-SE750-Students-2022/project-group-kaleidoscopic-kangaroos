const axios = require('axios').default

const baseURL = 'https://aircraft.freeth.kiwi/VirtualRadar/AircraftList.json'

// Get all Flights from the server.
async function getAllFlights() {
    try {
        const response = await axios.get(`${baseURL}`)
        // console.log(response)
        return response.data
    } catch (error) {
        return null
    }
}

// Update all flight, give lastDV time will filter for only things that have changed.
async function updateAllFlights(lastDv) {
    try {
        const response = await axios.get(`${baseURL}?ldv=${lastDv}`)
        // console.log(response)
        return response.data.acList
    } catch (error) {
        return null
    }
}

// Gets the flight with the given Icao
async function getFlight(Icao) {
    try {
        // fIco = Icao
        // Q = Exact match
        const response = await axios.get(`${baseURL}?fIcoQ=${Icao}`)
        // console.log(response)
        return response.data
    } catch (error) {
        return null
    }
}

// Gets the flight with the given Icao
async function updateFlight(Icao, lastDv) {
    try {
        // fIco = Icao
        // Q = Exact match
        // ldv = lastDv
        const response = await axios.get(
            `${baseURL}?fIcoQ=${Icao}&ldv=${lastDv}`
        )
        // console.log(response)
        return response.data.acList
    } catch (error) {
        return null
    }
}

export { getAllFlights, updateAllFlights, getFlight, updateFlight }
