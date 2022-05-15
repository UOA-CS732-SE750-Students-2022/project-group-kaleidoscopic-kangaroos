/* eslint-disable arrow-body-style */
import MainLogoImage from "../../images/KiwiFlightLogo.png"
import './MainLogo.css'

/**
 * Shows the logo for the application.
 */
const MainLogo = () => {
    return <img src={MainLogoImage} alt="" className="mainLogo"/>
}

export default MainLogo;