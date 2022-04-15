import React from 'react'
import '../styles/Map.css'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import hotSpotData from './new_spots.json';


const Map = () => <div className="mapBackground">
    <MapContainer center={[-41.5000831, 172.8344077]} zoom={13}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
<<<<<<< Updated upstream
        <Marker position={[-37.0082, 174.7850]}>
            <Popup>
            Auckland International Airport <br /> NewZealnd.
            </Popup>
        </Marker>
        <Marker position={[-37.8649356, 175.3315424211442]}>
            <Popup>
            Hamilton International Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-43.4847958, 172.53575429898345]}>
            <Popup>
            Christchurch International Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-43.4847958, 172.53575429898345]}>
            <Popup>
            Christchurch International Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-45.9239549, 170.19975050813102]}>
            <Popup>
            Dunedin International Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-41.5172616, 173.86935377852836]}>
            <Popup>
            Woodbourne Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-38.6639081, 177.97828688661417]}>
            <Popup>
            Gisborne Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-46.416380000000004, 168.32427540446304]}>
            <Popup>
            Invercargill Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-39.46957255, 176.86789015532477]}>
            <Popup>
            Hawkes Bay Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-41.29691015, 173.22550699603698]}>
            <Popup>
            Nelson Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-39.00578615, 174.1832892043154]}>
            <Popup>
            New Plymouth Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-36.65650685, 174.6557651259419]}>
            <Popup>
            North Shore Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-40.32289885, 175.61964008329613]}>
            <Popup>
            Palmerston North Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-45.019299950000004, 168.74343994415125]}>
            <Popup>
            Queenstown Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-38.108441049999996, 176.31661715800732]}>
            <Popup>
            Rotorua Regional Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-38.7402488, 176.08434805942943]}>
            <Popup>
            Taupo Regional Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-41.32691975, 174.8077029634527]}>
            <Popup>
            Wellington International Airport. <br /> Newzealand.
            </Popup>
        </Marker>
        <Marker position={[-35.76978905, 174.3612111575483]}>
            <Popup>
            Whangarei International Airport. <br /> Newzealand.
            </Popup>
        </Marker>
=======
         {
             hotSpotData.map(hotspot => (
               <Marker 
                  key={hotspot.name}
                  position={[hotspot.lat, hotspot.lon]}
                >
                  <Popup><h4>{hotspot.name}</h4></Popup>
                </Marker>
                
             ))
           }
>>>>>>> Stashed changes
    </MapContainer>



    </div>



export default Map
