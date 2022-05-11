// Set the base URL for the airline images.
const baseURL = 'https://airline.slim.kiwi/logos'
let imgLink = `${baseURL}/UNKNOWN.png`

function UrlExists(url) {
    const http = new XMLHttpRequest()
    http.open('HEAD', url, false)
    http.send()
    if (http.status === 404) {
        imgLink = `${baseURL}/UNKNOWN.png`
    }
}

function getAirlineImage(Callsign, OpIcao) {
    // Set the default image.
    // Check if we can get Airline from the callsign
    const checkCallsign = /^([A-Z])\w+\d$/.test(Callsign)
    // Found an airline in the Callsign
    if (checkCallsign) {
        const slicedCallsign = Callsign.slice(0, 3)
        imgLink = `${baseURL}/${slicedCallsign}.png`
    }
    // Did not find an airline in the Callsign
    if (!checkCallsign) {
        // Check if we can get Airline from the OpIcao
        if (OpIcao !== undefined) {
            imgLink = `${baseURL}/${OpIcao}.png`
        } else {
            imgLink = `${baseURL}/PRIVATE.png`
        }
    }
    // Check if the image exists and override to UNKNOWN if it does not.
    UrlExists(imgLink)

    return imgLink
}

export default getAirlineImage
