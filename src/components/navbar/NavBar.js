import React, {useState} from 'react';
import { AppBar, Toolbar, Button} from '@material-ui/core';
import logo3 from './logo3.png'
import CartWidget from './CartWidget'
import { makeStyles } from '@material-ui/core/styles'
import {NavBarStyle} from "./NavBarStyle"
import { Link } from "react-router-dom";


const useStyle = makeStyles((theme) => NavBarStyle(theme));

const NavBar = () => {
    const computacion = "computacion";
    const accesorios = "accesorios";

    const classes = useStyle()
    const [value, setValue] = useState(0);
    const handleClickTab = (e, newValue) => {
        setValue(newValue);
    } 
    return (
        <>
            <AppBar className={classes.StyleAppBar} position="static">
                <Toolbar>
                  <Link to="/">
                  <img src={logo3} alt="Logo de la tienda virtual"></img>
                  </Link>
                        <div className={classes.styleTab} onChange={handleClickTab}  value={value}>    
                            <Link to={`/category/${computacion}`} className={classes.styleLink}><Button className={classes.styleButton}>Computacion</Button></Link>
                            <Link to={`/category/${accesorios}`} className={classes.styleLink}><Button className={classes.styleButton}>Accesorios</Button></Link>
                        </div>
                        <Button className={classes.StyleContacto} color="primary" variant="outlined" disableRipple label="Contacto">Contacto</Button>
                        <CartWidget className={classes.carritoButton}/>  
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;










