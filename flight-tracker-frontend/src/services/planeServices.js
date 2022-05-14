import plane from '../images/plane-placeholder.png'

const baseURL = `https://www.airport-data.com/api/ac_thumb.json?r=`

// set the default image
let imgLink = plane

// function checkURL(url) {
//     // if the image does not exist, it will set the image to the placeholder
//     const http = new XMLHttpRequest()
//     http.open('HEAD', url, false)
//     http.send()
//     const json = http.response
//     console.log(json)

//     if (http.status === 404) {
//         imgLink = '../../images/plane-placeholder.png'
//     }
// }

function getPlaneImage(planeRego) {
    imgLink = plane

    const JSONurl = `${baseURL}${planeRego}&n=1`

    fetch(JSONurl)
        .then((response) => {
            console.log(response.text())
        })
        .catch((error) => {
            console.log(error)
        })

    // checks if the image exists
    // checkURL(imgLink)

    return imgLink
}

export default getPlaneImage
