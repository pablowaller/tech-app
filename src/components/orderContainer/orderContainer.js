import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { dataBase, docIdFieldPath } from "../../firebase/firebase";
import { BuyerForm } from "./orderForm/orderForm";
import { orderContainerStyles } from "./orderContainerStyles";
import { makeStyles } from "@material-ui/core";
import { Dialog, DialogContent } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "firebase/firestore";

const useStyles = makeStyles((theme) => orderContainerStyles(theme));

// Base de datos de las ordenes y los productos.
const ordenesCollection = dataBase.collection("orders");
const itemsCollection = dataBase.collection("items");

const agregarOrden = (order) => {
  return ordenesCollection.add(order);
};

const obtenerItemsDelArray = (items) => {
  return itemsCollection
    .where(
      docIdFieldPath,
      "in",
      items.map((i) => i.item.id)
    )
    .get();
};

const batch = () => {
  return dataBase.batch();
};

export const Order = (props) => {
  const classes = useStyles();
  const { totalPrice } = props;
  const { items, clear } = useContext(CartContext);
  const [abrirCuadroOrden, setAbrirCuadroOrden] = useState(false);
  const [mensajeCargando, setMensajeCargando] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [ordenFinalizada, setOrdenFinalizada] = useState(false);
  const [errorOrden, setErrorOrden] = useState(false);
  const [arraySinStock, setArraySinStock] = useState([]);
  const [ordenId, setOrdenId] = useState();

  // Abre la ventana de dialogo.
  const handleAbrirOrden = () => {
    setAbrirCuadroOrden(true);
  };

  // Cierra la ventana de dialogo.
  const handleCerrarOrden = () => {
    if (ordenFinalizada && !errorOrden) {
      clear();
    }
    setAbrirCuadroOrden(false);
    setMostrarFormulario(true);
    setOrdenFinalizada(false);
    setErrorOrden(false);
    setMensajeCargando(false);
    setArraySinStock([]);
    setOrdenId();
  };

  // Genera la order para la compra.
  const generarOrden = (buyer) => {
    const newProductosCarrito = [];
    items.forEach((itemAgregado) => {
      const data = {
        id: itemAgregado.item.id,
        title: itemAgregado.item.title,
        price: itemAgregado.item.price,
        quantity: itemAgregado.quantity,
      };
      newProductosCarrito.push(data);
    });
    const newOrder = {
      buyer: buyer,
      items: newProductosCarrito,
      date: new Date(),
      total: totalPrice,
    };
    return newOrder;
  };

  // Agrega la orden a la base de datos en Firebase.
  const agregarNuevaOrden = (buyer) => {
    const newOrder = generarOrden(buyer);

    try {
      agregarOrden(newOrder)
        .then((docRef) => {
          setOrdenId(docRef.id);
                })
        .catch((error) => {
          console.error("No se pudo agregar el documento: ", error);
        });
    } catch (error) {
      console.error("Error al agregar a la base de datos Firebase:", error);
    }
  };

  // Actualiza los datos de la orden ingresada previamente por el mismo comprador y comprueba si hay existencias en stock para seguir realizando compras.
  const agregarOrdenYActualizarStock = (buyer) => {
    const newBatch = batch();
    setMostrarFormulario(false);
    setMensajeCargando(true);
    const sinStock = [];
    obtenerItemsDelArray(items)
      .then((carrito) => {
        carrito.docs.forEach((element, index) => {
          if (element.data().stock >= items[index].quantity) {
            newBatch.update(element.ref, {
              stock: element.data().stock - items[index].quantity,
            });
          } else {
            sinStock.push({
              id: element.id,
              cantidad: items[index].quantity,
              ...element.data(),
            });
          }
        });

        if (sinStock.length === 0) {
          newBatch.commit().then(() => {
            agregarNuevaOrden(buyer);
          });
        } else {
          setArraySinStock(sinStock);
          setErrorOrden(true);
        }
      })
      .finally(() => {
        setMensajeCargando(false);
        setOrdenFinalizada(true);
      });
  };

  return (
    <section>
      <div className={classes.carritoCompra}>
        <div className={classes.ordenCompraStyle}>
          <Button
            className={classes.ordenButton}
            onClick={handleAbrirOrden}
            variant="contained"
            color="primary"
          >
            Generar Orden de Compra
          </Button>
          <Button
            className={classes.ordenButtonCancelar}
            variant="contained"
            color="default"
            onClick={clear}
          >
            {" "}
            Cancelar Compra{" "}
          </Button>
        </div>
      </div>
      <Dialog onClose={handleCerrarOrden} open={abrirCuadroOrden}>
        <DialogContent className={classes.dialogContent}>
          {mensajeCargando ? (
            <span>
              <h1>Aguante un Instante...</h1>
            </span>
          ) : (
            <></>
          )}
          {mostrarFormulario ? (
            <BuyerForm
              addOrder={agregarOrdenYActualizarStock}
              totalPrice={totalPrice}
              ended={!mostrarFormulario}
            />
          ) : (
            <></>
          )}

          {ordenFinalizada && errorOrden ? (
            <>
              <ul>
                {arraySinStock.map((itemAgregado, i) => {
                  return (
                    <li key={i} className={classes.errorCompra}>
                      {" "}
                      No disponemos del producto {itemAgregado.title}{" "}
                      momentaneamente o la compra excede la cantidad de stock
                      disponible{itemAgregado.quantity}.
                    </li>
                  );
                })}
              </ul>
            </>
          ) : ordenFinalizada && !errorOrden ? (
            <>
              <div className={classes.compraExitosa}>
                <h1>¡LA COMPRA HA SIDO REALIZADA CON EXITO!</h1>
                <div
                  aria-label="close"
                  className={classes.cerrarButton}
                  onClick={handleCerrarOrden}
                >
                  <CloseIcon />
                </div>
              </div>

              <h3 className={classes.errorCompra}>ID de compra: {ordenId}</h3>
            </>
          ) : (
            <></>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
