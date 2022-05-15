import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import './Settings.css'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

/**
 * A button that can be clicked to show the Menu list . 
 * @param {boolean} togglePopup a function that is used to make "About" Menu item popup visible
 * @param {boolean} handleClose the function used to make popup unvisible
 * @param {boolean} handleClick the function used to make Menu popup visible
 * @returns the jsx for the Settings component.
 */

let title

let description

const Settings = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const [isOpen, setIsOpen] = useState(false)

    const togglePopup = (newTitle, newDescription) => {
        title = newTitle
        description = newDescription
        setIsOpen(!isOpen)
    }

   // Render the component.
    
    return (
        <div className="menuBackground">
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => togglePopup('', '')} autoFocus>
                        Got it!
                    </Button>
                </DialogActions>
            </Dialog>

            <IconButton
                variant="contained"
                color="primary"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                    fontSize: '30px',
                    maxWidth: '30px',
                    maxHeight: '30px',
                    minWidth: '30px',
                    minHeight: '30px',
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
                    top: '10px',
                    left: '5px',
                }}
            >
                <MenuItem
                    onClick={() =>
                        togglePopup(
                            'About',
                            'Kiwi Flight is a redesign of the user interface to another open-source flight tracking project. The website we remade was outdated and missing many modern features; therefore, we redesigned the site from scratch using the MERN stack. A core focus for us was to allow users to use the site on both mobile and desktop devices seamlessly. Our passion for this project came from our shared interest in both aeronautical craft and our enjoyment of working with live data streams. We hope you enjoy what we have created!'
                        )
                    }
                >
                    About
                </MenuItem>
                <MenuItem
                    onClick={() =>
                        togglePopup(
                            'Settings',
                            'There are no settings, now get lost nerd!'
                        )
                    }
                >
                    Settings
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Settings
