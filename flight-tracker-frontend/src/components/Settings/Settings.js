import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import './Settings.css'
  
const Settings = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
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
        <MenuItem onClick={handleClose}>Flight Information</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
      </Menu>
    </div>
  );
};
  
export default Settings;