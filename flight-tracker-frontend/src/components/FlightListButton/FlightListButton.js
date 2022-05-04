/* eslint-disable arrow-body-style */
import { Button } from "@mui/material";

const FlightListButton = ({setVisible}) => {
    return <Button color="primary" className="flightListButton"
        onClick={() => setVisible(true)}
        sx={{backgroundColor: "#222431", 
        position: "fixed", left: 10, bottom: 10, zIndex:999}}>
        Show Flight List
    </Button>
}

export default FlightListButton;