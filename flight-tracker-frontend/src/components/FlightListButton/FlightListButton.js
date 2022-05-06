/* eslint-disable arrow-body-style */
import { Button, Typography } from "@mui/material";
import { ImAirplane } from 'react-icons/im';
import Slide from '@mui/material/Slide';

const FlightListButton = ({setVisible}) => {
    return <Slide direction="right" in timeout={1000}>
        <Button variant="contained" color="primary"
            onClick={() => setVisible(true)}
            sx={{
            position: "fixed", left: 0, top: 100, zIndex:999, padding: 2}}>
            <ImAirplane size={40} /> <Typography variant="h4" sx={{paddingLeft: 2}}>Flight List</Typography> 
        </Button>
    </Slide>
}

export default FlightListButton;