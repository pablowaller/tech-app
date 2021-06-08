import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

const CartWidget = () => {
    return (  
        <>
        <IconButton aria-label="cart">
            <Badge badgeContent={2} color="primary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
        </>

    );
}
 
export default CartWidget;