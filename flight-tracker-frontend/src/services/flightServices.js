const axios = require('axios').default;

async function getAllFlights(){

    try {
        const response = await axios.get('https://aircraft.freeth.kiwi/VirtualRadar/AircraftList.json');
        // console.log(response);
        return response.data.acList;
      } catch (error) {
        console.error(error);
        return null;
      }

}


export default getAllFlights