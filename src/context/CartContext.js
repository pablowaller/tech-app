import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartComponentContext = props => {

    const [items, setItems] = useState([])
    const [subtotal, setSubTotal] = useState(0);
    const [itemsQty, setItemsQty] = useState(0);

    const calculatePrice = (price, qty) => {
        return price * qty;
    }

    const addItems = itemAgregado => {
        setSubTotal(subtotal + calculatePrice(itemAgregado.item.price, itemAgregado.quantity));
        setItemsQty(itemsQty + itemAgregado.quantity)
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
        const itemToRemove = items.find(item => item.item.id === id);
        setSubTotal(subtotal - calculatePrice(itemToRemove.item.price, itemToRemove.quantity));
        setItemsQty(itemsQty - itemToRemove.quantity)
        setItems(items.filter((item) => item.item.id !== id))}
    
    
    const clear = () => {
        setItems([]);
        setSubTotal(0);
        setItemsQty(0);
    }
    
    return <CartContext.Provider value={{ addItems, removeItems, clear, subtotal, itemsQty, items}}>
        {props.children}
    </CartContext.Provider>
    
    }





