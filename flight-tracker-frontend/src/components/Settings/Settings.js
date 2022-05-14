import React, { useState } from 'react';
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import './Settings.css'
import Popup from '../Popup/Popup'
  
const Settings = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div
    
    className="menuBackground"
  
    >
      
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        
        <MenuItem onClick={togglePopup}>About</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
      </Menu>

      
    {isOpen && <Popup
      content={<>
        
        <b>About</b>
        <p>Kiwi Flight is a flight tracking company that displays aircraft & flight information in real-time on a map. Kiwi Flight offers flight data such as latitude and longitude positions, origins and destinations, flight numbers, aircraft types, altitudes, headings and speeds.</p>
       
      </>}
      handleClose={togglePopup}
    />}
    </div>
  );
};
  
export default Settings;