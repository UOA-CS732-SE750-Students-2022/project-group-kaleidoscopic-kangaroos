/* eslint-disable no-console */
import urlExist from 'url-exist'

// Set the base URL for the airline images.
const baseURL = 'https://airline.slim.kiwi/logos'
// Set the default image.

function getAirlineImage(Callsign, OpIcao) {
    let url = `${baseURL}/UNKNOWN.png`
    if (OpIcao === undefined) {
        // Check if the we can find the airline from the callsign.
        const slicedCallsign = Callsign.slice(0, 3)
        const possibleURL = `${baseURL}/${slicedCallsign}.png`
        console.log('OpIcao', possibleURL)
        urlExist(possibleURL)
            .then((vaild) => {
                if (vaild) {
                    url = `${possibleURL}`
                } else {
                    url = `${baseURL}/PRIVATE.png`
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    if (OpIcao !== undefined) {
        const possibleURL = `${baseURL}/${OpIcao}.png`
        console.log('Callsign', possibleURL)
        urlExist(possibleURL)
            .then((vaild) => {
                if (vaild) {
                    url = possibleURL
                } else {
                    url = `${baseURL}/UNKNOWN.png`
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return url
}

export default getAirlineImage
