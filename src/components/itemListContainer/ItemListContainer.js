import React from 'react'
import under from './img/under.gif'
import ItemCount from "../ItemCount/ItemCount"

const StyleUnderDiv = {
    marginTop: "1em",
};

const Styleh1 = {
    color: "green",
    fontWeight: "bold"
    
};

const ItemListContainer = props => {
    const {greeting} = props;

    return (  
        <div style={StyleUnderDiv}>
            <h1 style={Styleh1}>{greeting}</h1>
            <img src={under} alt="Mantenimiento"></img>
            <ItemCount stock={6} initial={1}/>
        </div>
    );
}
 
export default ItemListContainer;