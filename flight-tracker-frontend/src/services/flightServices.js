const axios = require('axios').default

async function getAllFlights() {
    try {
        const response = await axios.get(
            'https://aircraft.freeth.kiwi/VirtualRadar/AircraftList.json'
        )
        const returnObject = []
        response.data.acList.forEach((item) => returnObject.push(item))
        return returnObject
    } catch (error) {
        console.error(error)
        return null
    }
}

export default getAllFlights
