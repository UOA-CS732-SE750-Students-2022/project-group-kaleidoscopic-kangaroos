/* eslint-disable arrow-body-style */
import MainLogoImage from "../../images/KiwiFlightLogo.png"
import './MainLogo.css'

/**
 * A button that can be clicked to show the flight list component.
 * @param {boolean} setVisible a function that is used to 
 * make the FlightDetails component visible. 
 * @returns jsx for the button component.
 */
const MainLogo = () => {
    return <img src={MainLogoImage} alt="" className="mainLogo"/>
}

export default MainLogo;