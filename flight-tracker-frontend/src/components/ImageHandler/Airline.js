// Set the base URL for the airline images.
const baseURL = 'https://airline.slim.kiwi/logos'
// Set the default image.

function getAirlineImage(Callsign, OpIcao) {
    let url = `${baseURL}/UNKNOWN.png`
    if (OpIcao === undefined) {
        // Check if the we can find the airline from the callsign.
        const slicedCallsign = Callsign.slice(0, 3)
        url = `${baseURL}/${slicedCallsign}.png`
    }
    if (OpIcao !== undefined) {
        url = `${baseURL}/${OpIcao}.png`
    }
    return url
}

export default getAirlineImage
