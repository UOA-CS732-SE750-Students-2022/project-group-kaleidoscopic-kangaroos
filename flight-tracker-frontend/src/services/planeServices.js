import plane from '../images/plane-placeholder.png'

const baseURL = `https://www.airport-data.com/api/ac_thumb.json?r=`
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
                imgLink = response.data.image
            } else {
                imgLink = plane
            }
        })
        .catch((error) => {
            console.log(error)
        })

    return imgLink
}

export default getPlaneImage
