import React from 'react'
import CartWidget from './CartWidget'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const StyleToolbar = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly", 
};

const SizeFont = {
    fontSize:"1em"
};


const StyleAppBar = {
    background: 'linear-gradient(to bottom left, #ADE06D, #6DADE0)'   
};

const NavBar = () => {
    return (
        <AppBar position="static" style={StyleAppBar}>
            <Toolbar style={StyleToolbar}>
                <Typography variant="h6"> 
                TECH-APP
                </Typography>
                <Button variant="text" color="default" href="#" style={SizeFont}>Inicio</Button>
                <Button variant="text" color="default" href="#" style={SizeFont}>Hardware</Button>
                <Button variant="text" color="default" href="#" style={SizeFont}>Software</Button>
                <Button variant="text" color="default" href="#" style={SizeFont}>Contacto</Button>
                <CartWidget/>
            </Toolbar>
        </AppBar>          
    ) 
}

export default NavBar;









