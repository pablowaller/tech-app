// Genero la referencia a la coleccion y creo el objeto que quiero guardar en Firestore
// Agregar la libreria timestamp agregando su import.
// import * as firebase from "firebase/app";
// import "firebase/firestore";

// const orders = dataBase.collection("orders");
// const newOrder = {
//     buyer: userInfo,
//     items: cart,
//     date: firebase.firestore.Timestamp.fromDate(new Date()),
//     total: price()
// };


// CASHOUTCOMPONENT

import React, { useContext, useState, Button, TextField, TableCell } from "react"
import { CartContext } from "../../context/CartContext";
import { Form, Input, Col, Row, Label } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';


export const Order = () => {
   const { addItems, removeItems, clear, subtotal, itemsQty, items} = useContext(CartContext);
   const [successMsg, setSuccessMsg] = useState('');
   const [error, setError] = useState('');

    
    return (
        <>
            <div className='container'>
                <br />
                <h2>Orden de Pedido</h2>
                <br />
                {successMsg && <div className='success-msg'>{successMsg}</div>}
                <form autoComplete="off" className='form-group' >
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control' required
                        />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                        />
                    <br />
                    <label htmlFor="Cell No">Cell No</label>
                    <input type="number" className='form-control' required/>
                        {/* onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg 03123456789' */}
                    <br />

                    {items.map((item, i) => (
                    < div key={i}>
                    <label htmlFor="Total No of Products">Total No of Products</label>
                    <input type="number" className='form-control' required
                        value={item.item.title} disabled />
                    <br />
                    <label htmlFor="Price To Pay">Price To Pay</label>
                    <input type="number" className='form-control' required
                        value={subtotal} disabled />
                    <br />
                    <label htmlFor="Total No of Products">Total No of Products</label>
                    <input type="number" className='form-control' required
                        value={itemsQty} disabled />
                    </div>
                    ))} 
                    <br />
                    {/* <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button> */}
                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </>
    )

}







