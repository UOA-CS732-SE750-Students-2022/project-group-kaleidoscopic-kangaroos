/* eslint-disable arrow-body-style */
import { Button, Typography } from "@mui/material";
import { ImAirplane } from 'react-icons/im';
import Slide from '@mui/material/Slide';

/**
 * A button that can be clicked to show the flight list component.
 * @param {boolean} setVisible a function that is used to 
 * make the FlightDetails component visible. 
 * @returns jsx for the button component.
 */
const FlightListButton = ({setVisible, text}) => {
    return <Slide direction="right" in timeout={1000}>
        <Button variant="contained" color="primary"
            onClick={() => setVisible(true)}
            sx={{
            position: "fixed", left: 0, top: '15%', zIndex:999, padding: 2}}>
            <ImAirplane size={40} /> <Typography variant="h4" sx={{paddingLeft: 2}}>{text}</Typography> 
        </Button>
    </Slide>
}

export default FlightListButton;