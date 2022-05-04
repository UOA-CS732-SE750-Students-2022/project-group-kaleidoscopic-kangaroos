/* eslint-disable arrow-body-style */
import { Button, Typography } from "@mui/material";
import { ImAirplane } from 'react-icons/im';

const FlightListButton = ({setVisible}) => {
    return <Button variant="contained" color="primary"
        onClick={() => setVisible(true)}
        sx={{
        position: "fixed", left: 0, top: 100, zIndex:999, padding: 2}}>
        <ImAirplane size={40} /> <Typography variant="h4" sx={{paddingLeft: 2}}>Flight List</Typography> 
    </Button>
}

export default FlightListButton;