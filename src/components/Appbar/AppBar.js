import React, {useState} from 'react';
import { AppBar, Toolbar, Tab, Tabs, Typography, Button } from '@material-ui/core';

const carritoButton = {
        marginLeft: 'auto',
        '&:hover':{
            background: 'blue'
        },
    };

    const styleTab = {
        marginLeft: 'auto',
        '&:hover':{
            background: 'blue'
        },
    };

const NavBar1 = () => {
    const [value, setValue] = useState(0);
    const handleClickTab = (e, newValue) => {
        setValue(newValue);
    } 
    return (
        <>
            <AppBar color='primary'>
                <Toolbar>
                    <Typography>Hola</Typography>
                        <Tabs style={styleTab} onChange={handleClickTab} indicatorColor='secondary' value={value}>
                            <Tab disableRipple label='Inicio'/>
                            <Tab disableRipple label='Hardware'/>
                            <Tab disableRipple label='Software'/>
                            <Tab disableRipple label='Contacto'/>
                        </Tabs>

                        <Button disableRipple style={carritoButton} variant='contained' color='secondary'>Carrito</Button>
                    
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar1;