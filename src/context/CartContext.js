import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartComponentContext = props => {

    const [items, setItems] = useState([])

    const addItems = itemAgregado => {
        if (items.find(item => item.item.id === itemAgregado.item.id)) {
            const updateItem = items.map((item) => {
                const totalQty = item.quantity + itemAgregado.quantity;
                if (item.item.id === itemAgregado.item.id) {
                    return { ...item, quantity: totalQty }
                } 
                return item
            })
            setItems(updateItem)
        } else {
            setItems(itemsAgregados => [...itemsAgregados, itemAgregado])
        }
    }
    
    const removeItems = id => {
        setItems(items.filter((item) => item.item.id !== id))}
    
    const clear = () =>{setItems([])}
    
    useEffect(() => {
        console.log(items)
    }, [items])
    
    
    return <CartContext.Provider value={{ addItems, removeItems, clear, items}}>
        {props.children}
    </CartContext.Provider>
    
    }





