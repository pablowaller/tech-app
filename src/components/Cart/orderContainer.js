import React, { useState, useContext } from 'react';
import 'firebase/firestore';
import { CartContext } from '../../context/CartContext'; 
import { dataBase, docIdFieldPath } from '../../firebase/firebase'; 
import { BuyerForm } from './orderForm'; 
import { orderContainerStyles } from './orderContainerStyles'
import { makeStyles } from '@material-ui/core';
import { Dialog, DialogContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const ordersCollection = dataBase.collection("orders");
const productosCollection = dataBase.collection("items");

const useStyles = makeStyles((theme) => orderContainerStyles(theme));

const addOrderDocument = (order) => {
    return ordersCollection.add(order);
}

const getProductosByCartArray = (items) => {
    return productosCollection.where(docIdFieldPath, 'in', items.map(i => i.item.id)).get();
}

const batch = () => { return dataBase.batch() };


export const Order = props => {

    const classes = useStyles();

    const { totalPrice, addOrderId } = props;
    const { items, clear } = useContext(CartContext);

    const [openOrderDialog, setOpenOrderDialog] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [orderFinished, setOrderFinished] = useState(false);
    const [orderError, setOrderError] = useState(false);

    const [outOfStockArray, setOutOfStockArray] = useState([]);
    const [orderId, setOrderId] = useState();


    const handleOpenOrder = () => {
        setOpenOrderDialog(true);
    };

    const handleCloseOrder = () => {
        if (orderFinished && !orderError) {
            clear();
        }
        setOpenOrderDialog(false);
        setShowForm(true);
        setOrderFinished(false);
        setOrderError(false);
        setShowSpinner(false);
        setOutOfStockArray([]);
        setOrderId();
    };

    const generateOrder = (buyer) => {
        const date = new Date();
        let newProductosCarrito = [];
        items.forEach(itemAgregado => {
            let data = {
                id: itemAgregado.item.id,
                title: itemAgregado.item.title,
                price: itemAgregado.item.price,
                quantity: itemAgregado.quantity
            }
            newProductosCarrito.push(data);
        });
        const newOrder = {
            buyer: buyer,
            items: newProductosCarrito,
            date: date,
            total: totalPrice
        }
        return newOrder;
    }

    const addNewOrder = (buyer) => {
        const newOrder = generateOrder(buyer);
        try {
            addOrderDocument(newOrder).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                setOrderId(docRef.id);
                addOrderId(docRef.id);
            })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        } catch (error) {
            console.log("Firebase add doc error:", error);
        }
    }


    const addOrderAndUpdateStock = (buyer) => {
        const newBatch = batch();
        setShowForm(false);
        setShowSpinner(true);
        let outOfStock = [];
        getProductosByCartArray(items).then((querySnapshot) => {
            querySnapshot.docs.forEach((docSnapshot, index) => {
                const productData = docSnapshot.data();
                const cantidad = items[index].quantity;
                if (productData.stock >= cantidad) {
                    newBatch.update(docSnapshot.ref, { 'stock': productData.stock - cantidad });
                } else {
                    outOfStock.push({ id: docSnapshot.id, cantidad: cantidad, ...productData });
                }
            })

            if (outOfStock.length === 0) {
                console.log(outOfStock)
                newBatch.commit().then(() => {
                    addNewOrder(buyer);
                });
            } else {
                setOutOfStockArray(outOfStock);
                setOrderError(true);
            }
        }).finally(() => {
            console.log("Stock array:", outOfStockArray);
            setShowSpinner(false);
            setOrderFinished(true);
        });
    }

    return (
        <div>
            <div className={classes.carritoCompra}>
                <div className={classes.ordenCompraStyle} >
                <Button className={classes.ordenButton} onClick={handleOpenOrder} variant="contained" color="primary" >Generar Orden de Compra</Button>
                <Button className={classes.ordenButton} variant="contained" color="default" onClick={clear}> Cancelar Compra </Button>
                </div>
            </div>
            <Dialog onClose={handleCloseOrder} open={openOrderDialog}>
                <DialogContent className={classes.dialogContent}>
                    {
                        showSpinner ? <div>
                            <h1>Aguante un Instante...</h1>
                        </div> : <></>
                    }
                    {
                        showForm ? <BuyerForm addOrder={addOrderAndUpdateStock} totalPrice={totalPrice} ended={!showForm} /> : <></>
                    }

                    {
                        (orderFinished && orderError) ? <>
                            <ul>
                                {
                                    outOfStockArray.map((itemAgregado, i) => {
                                        console.log("Producto", itemAgregado);
                                        return (
                                            <li key={i} className={classes.errorCompra}> No disponemos del producto {itemAgregado.title} momentaneamente o la compra excede la cantidad de stock disponible{itemAgregado.quantity}.</li>
                                        );
                                    })
                                }
                            </ul>
                        </> : (orderFinished && !orderError) ? <>
                            <div className={classes.compraExitosa}>
                                <h1 >¡LA COMPRA HA SIDO REALIZADA CON EXITO!</h1>
                                <div aria-label="close" className={classes.cerrarButton} onClick={handleCloseOrder}>
                                    <CloseIcon />
                                </div> 
                            </div>

                            <h3 >ID de compra: {orderId}</h3>
                        </> : <></>
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}
