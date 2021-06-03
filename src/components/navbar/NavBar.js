import React from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const StyleToolbar = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
}

const StyleAppBar = {
    background: 'linear-gradient(to bottom left, #ADE06D, #6DADE0)' 
    
};

const NavBar = () => {
    return (
        <AppBar position="fixed" style={StyleAppBar}>
            <Toolbar style={StyleToolbar}>
                <Typography variant="h6"> 
                TECH-APP
                </Typography>
                <Button variant="text" color="default" href="#">Inicio</Button>
                <Button variant="text" color="default" href="#">Hardware</Button>
                <Button variant="text" color="default" href="#">Software</Button>
                <Button variant="text" color="default" href="#">Contacto</Button>
            </Toolbar>
        </AppBar>
               
    ) 
}

export default NavBar;









