import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { CartStyle } from "./CartStyle";
import { useHistory } from "react-router-dom";
import { Button, Table} from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { green } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { Link } from "react-router-dom";
import { Order } from "./orderContainer";

// const Impuesto = 0.21;

const CarritoTotal = ({ subtotal }) => {
    const classes = useStyles();
    // const history = useHistory();
    // const { clear } = useContext(CartContext);
    // const Total = Impuesto * subtotal;
    

    return <TableContainer className={classes.subtotalStyle}>
                <TableRow> 
                    {/* <TableCell rowSpan={6} /> */}
                    <TableCell align="left" colSpan={1}>Total</TableCell>
                    <TableCell align="right" colSpan={7}>${new Intl.NumberFormat("de-DE").format(subtotal)}</TableCell>
                </TableRow>
             </TableContainer>
}


const useStyles = makeStyles((theme) => CartStyle(theme));

export const Cart = () => {
    const { items, subtotal } = useContext(CartContext);
   

    return <div>
        {items.length === 0 ? (<CarritoVacio />) : (
            <>
                <TableContainer component={Paper}>
                    <TablaCarrito items={items}/>
                    <CarritoTotal items={items} subtotal={subtotal} />
                </TableContainer>
                <Order totalPrice={subtotal}/>

            </>
        )}
    </div>
}



const CarritoVacio = () => {
    const classes = useStyles();
    const alCarrito = useHistory();


    return < >
            <Typography className={classes.CarritoVacioStyle} variant="h4">Tu carrito esta vacio</Typography>
            <div className={classes.CarritoVacioStyle}>
            <Button   onClick={() => alCarrito.push(`/`)} variant="contained" color="primary"> Seguir Comprando / Atrás </Button>
            </div>

            </>
}

const TablaCarrito = () => {
    const classes = useStyles();
    const { items, removeItems } = useContext(CartContext);

    return <>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead className={classes.table2}>
                <TableRow >
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Foto</TableCell>
                    <TableCell align="center">Título</TableCell>
                    <TableCell align="center">Descripción</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                    <TableCell align="center">Precio</TableCell>
                    <TableCell align="center">Suma</TableCell>
                    <TableCell align="center">Acción</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {items.map((item, i) => (

                    <TableRow key={i}>
                    <TableCell align="center">{item.item.id}</TableCell>
                    <TableCell align="center"><img src={item.item.pictureURL} alt={item.item.description} className={classes.imgCarrito}/></TableCell>
                    <TableCell align="center">{item.item.title}</TableCell>
                    <TableCell align="center">{item.item.description}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="center">${item.item.price}</TableCell>
                    <TableCell align="center">${item.quantity * item.item.price}</TableCell>
                    <TableCell align="center"><Button  color="primary" onClick={e => removeItems(item.item.id)}><DeleteIcon style={{ color: green[500] }}/></Button></TableCell>
                    </TableRow>
               ))} 
                </TableBody>
            </Table>
    </>
 }

