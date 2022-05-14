import React  from 'react'
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
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
          <MenuItem onClick={handleClose}>Flight Information</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
        </Menu>
      </div>
    );
};
  
export default Settings;