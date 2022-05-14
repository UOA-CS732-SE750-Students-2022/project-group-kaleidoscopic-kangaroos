import React, { useState } from 'react';
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
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
      <div className="menuBackground">
        <IconButton variant="contained" color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            fontSize: '30px', maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'
          }}
        >
          ⚙️
        </IconButton>
        <Menu
          keepMounted
          anchorEl={anchorEl}
          onClose={handleClose}
          open={Boolean(anchorEl)}
          sx={{
            top: '10px', left: '5px'
          }}
        >
          <MenuItem onClick={togglePopup}>About</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        </Menu>
        {isOpen && <Popup
      content={<>

        <b>About</b>
        <p>Kiwi Flight is a flight tracking company that displays aircraft and flight information in real-time on a map. Kiwi Flight offers flight data such as latitude and longitude positions, origins and destinations, flight numbers, aircraft types, altitudes, headings and speeds.</p>

      </>}
      handleClose={togglePopup}
    />}
      </div>
    );
};
  
export default Settings;