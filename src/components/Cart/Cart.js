import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { CartStyle } from "./CartStyle";
import { useHistory } from "react-router-dom";
import { Button, Table } from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { green } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Order } from "../orderContainer/orderContainer";

// Componente para calcular el total del carrito.
const CarritoTotal = ({ subtotal }) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <ul className={classes.subtotalStyle}>
        <li className={classes.liStyle} colSpan={1}>
          Total:
        </li>
        <li className={classes.liStyle} colSpan={7}>
          ${new Intl.NumberFormat("de-DE").format(subtotal)}
        </li>
      </ul>
    </TableContainer>
  );
};

// Importo los estilos del Carro
const useStyles = makeStyles((theme) => CartStyle(theme));

// Creo un componente que llama a los componentes de la tabla contenedora de los items, a la del precio total y hace un llamado a Order que viene el orderContainer para permitirme hacer el llamado al formulario por medio del botón Generar Orden.
export const Cart = () => {
  const { items, subtotal } = useContext(CartContext);

  return (
    <>
      {items.length === 0 ? (
        <CarritoVacio />
      ) : (
        <>
          <TableContainer component={Paper}>
            <TablaCarrito items={items} />
            <CarritoTotal items={items} subtotal={subtotal} />
          </TableContainer>
          <Order totalPrice={subtotal}/>
        </>
      )}
    </>
  );
};

// Si el carrito está vacío, hace uso del useHistory para volver atrás.
const CarritoVacio = () => {
  const classes = useStyles();
  const alCarrito = useHistory();

  return (
    <>
      <Typography className={classes.CarritoVacioStyle} variant="h4">
        Tu carrito esta vacio
      </Typography>
      <div>
        <Button
          className={classes.cartAtras}
          onClick={() => alCarrito.push(`/tech-app`)}
          variant="contained"
          color="primary"
        >
          {" "}
          Seguir Comprando / Atrás
        </Button>
      </div>
    </>
  );
};

// Tabla contenedora del Carrito con todos los items.
const TablaCarrito = () => {
  const classes = useStyles();
  const { items, removeItems } = useContext(CartContext);

  return (
    <>
      <Table aria-label="spanning table">
        <TableHead className={classes.table2}>
          <TableRow>
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
        <TableBody className={classes.table}>
          {items.map((item, i) => (
            <TableRow key={i}>
              <TableCell align="center">{item.item.id}</TableCell>
              <TableCell align="center">
                <img
                  src={item.item.pictureURL}
                  alt={item.item.description}
                  className={classes.imgCarrito}
                />
              </TableCell>
              <TableCell align="center">{item.item.title}</TableCell>
              <TableCell align="center">{item.item.description}</TableCell>
              <TableCell align="center">{item.quantity}</TableCell>
              <TableCell align="center">${item.item.price}</TableCell>
              <TableCell align="center">
                ${item.quantity * item.item.price}
              </TableCell>
              <TableCell align="center">
                <Button
                  color="primary"
                  onClick={(e) => removeItems(item.item.id)}
                >
                  <DeleteIcon style={{ color: green[500] }} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
