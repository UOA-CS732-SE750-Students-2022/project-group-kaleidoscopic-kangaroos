import plane from '../images/plane-placeholder.png'

const baseURL = `https://cors.slim.kiwi/airport-data.com/api/ac_thumb.json?r=`
const axios = require('axios').default
// set the default image
let imgLink = plane

function getPlaneImage(planeRego) {
    const JSONurl = `${baseURL}${planeRego}&n=1`

    // uses JSON from airport-data.com to get the image link
    axios
        .get(JSONurl)
        .then((response) => {
            // console.log(response.data.image)
            // Check if the image is available
            if (response.status === 200) {
                imgLink = response.data.data[0].image
            } else {
                imgLink = plane
            }
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => plane)

    return imgLink
}

export default getPlaneImage
