const axios = require('axios').default

async function getAllFlights() {
    try {
        const response = await axios.get(
            'https://aircraft.freeth.kiwi/VirtualRadar/AircraftList.json'
        )
        const returnObject = []
        response.data.acList.forEach((item) => {
            if (item.Icao != null) {
                returnObject.push(item)
            } else if (item.Icao == null) {
                console.log('item.Icao is null')
                returnObject.push(item)
            }
        })

        return returnObject
    } catch (error) {
        console.error(error)
        return null
    }
}

export default getAllFlights
