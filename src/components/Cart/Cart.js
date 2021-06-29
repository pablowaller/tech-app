import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

const Cart = () => {

    // const [agregados, setAgregados] = useContext(CartContext);

// return (
//         <div>
//             <span>Items en el carrito : 0</span>
//             <br />
//             <span>Precio total : 0</span>
//         </div>
//         )
    

    const alCarrito = useHistory();

    return <>
            <h1>En construcción</h1>
            <Button onClick={() => alCarrito.goBack()} variant="contained" color="primary">Atrás</Button>
           </>

}

export default Cart;