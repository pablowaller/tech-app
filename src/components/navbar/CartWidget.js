import React from "react"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { itemsQty } = useContext(CartContext);

    return (  
        <>
        <Link to={`/cart`}>
            <IconButton aria-label="cart">
                <Badge badgeContent={itemsQty} color="primary">
                    <ShoppingCartIcon/>
                </Badge>
            </IconButton>
        </Link>
        </>
    );
}
 
export default CartWidget;