const baseURL = `https://www.airport-data.com/api/ac_thumb.json?r=`

// set the default image
let imgLink = '../../images/plane-placeholder.png'

function checkURL(url) {
    // if the image does not exist, it will set the image to the placeholder
    const http = new XMLHttpRequest()
    http.open('HEAD', url, false)
    http.send()
    if (http.status === 404) {
        imgLink = '../../images/plane-placeholder.png'
    }
}

function getPlaneImage({ planeRego }) {
    // sets the url to get the image from airport-data.com
    imgLink = `${baseURL}${planeRego}&n=1`
    // checks if the image exists
    checkURL(imgLink)

    return imgLink
}

export default getPlaneImage
