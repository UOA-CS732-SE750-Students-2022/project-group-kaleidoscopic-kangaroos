import axios from 'axios'

// Set the base URL for the airline images.
const baseURL = 'https://airline.slim.kiwi/logos'
// Set the default image.
let imgLink = `${baseURL}/UNKNOWN.png`

function checkURL(url) {
    try {
        axios.get(url).then((response) => {
            if (response.status === 404) {
                imgLink = `${baseURL}/UNKNOWN.png`
            }
        })
        // console.log(response);
    } catch (error) {
        console.error(error)
    }
}

function getAirlineImage(Callsign, OpIcao) {
    try {
        // Set the default image.
        // Check if we can get Airline from the callsign
        const checkCallsign = /^([A-Z])\w+\d$/.test(Callsign)
        const slicedCallsign = Callsign.slice(0, 3)

        // Found an airline in the Callsign
        if (checkCallsign) {
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
        checkURL(imgLink)

        return imgLink
    }
    catch(error) {
        return `${baseURL}/UNKNOWN.png`
    }
   
}

export default getAirlineImage
