import React from "react";
import { makeStyles } from "@material-ui/core";
import { CartStyle } from "./CartStyle";
import { useHistory } from "react-router-dom";
import { Button, Table, Container, Typography } from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const useStyles = makeStyles((theme) => CartStyle(theme));

const Cart = () => {
    const classes = useStyles();
    const alCarrito = useHistory();
    const { items, removeItems } = useContext(CartContext);

    return <>
    <Container className={classes.tablaCarrito}>
        <Typography className={classes.tituloCarrito} variant="h4" color="initial">Carrito</Typography>
        <Table >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Foto</th>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody >
            {items.map((item, i) => {
            return <>
                <tr key={i}>
                    <td>{item.item.id}</td>
                    <td><img src={item.item.pictureURL} alt={item.item.description} className={classes.imgCarrito}/></td>
                    <td>{item.item.title}</td>
                    <td>{item.item.description}</td>
                    <td>{item.item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.quantity * item.item.price}</td> 
                    <td><button onClick={e => removeItems(item.item.id)}>Borrar Item</button></td>
                </tr>
            </>
            })
            }
            </tbody>
            
        </Table>
        </Container>
        <div className={classes.alCarritoStyle}>
        <Button  onClick={() => alCarrito.push(`/`)} variant="contained" color="primary"> Seguir Comprando / Atrás </Button>
        </div>
        </>
}

export default Cart;
