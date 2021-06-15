import React, {useState} from 'react';
import { AppBar, Toolbar, Tab, Tabs, Button} from '@material-ui/core';
import logo3 from './logo3.png'
import CartWidget from './CartWidget'


const StyleAppBar = {
    background: 'linear-gradient(to bottom left, #ADE06D, #6DADE0)',
    color: "black",
    fontWeight: "bolder",
};

const StyleContacto = {
    right: "1.5em"

}

const carritoButton = {
        margin: 'auto',
        '&:hover':{
            background: 'blue'
        },
    };

    const styleTab = {
        margin: 'auto',
        '&:hover':{
            background: 'blue'
        },
    };

const NavBar = () => {
    const [value, setValue] = useState(0);
    const handleClickTab = (e, newValue) => {
        setValue(newValue);
    } 
    return (
        <>
            <AppBar style={StyleAppBar} position="static">
                <Toolbar>
                  <div>
                    <img src={logo3} alt="Mantenimiento"></img>
                  </div>
                        <Tabs style={styleTab} onChange={handleClickTab} indicatorColor='primary' value={value}>
                            <Tab disableRipple label='Inicio'/>
                            <Tab disableRipple label='Hardware'/>
                            <Tab disableRipple label='Software'/>
                        </Tabs>

                        <Button style={StyleContacto} color="primary" variant="outlined" disableRipple label='Contacto'>Contacto</Button>
                        <CartWidget style={carritoButton}/>  
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;










