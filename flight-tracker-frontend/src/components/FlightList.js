// import React from 'react'

async function FlightList(){

    let outData = null;
    await fetch("https://aircraft.freeth.kiwi/VirtualRadar/AircraftList.json")
    .then(response => response.json())
    .then(jsondata => {
        console.log("data recieved")
        outData = jsondata.acList;
    });

    return outData;

}


export default FlightList
