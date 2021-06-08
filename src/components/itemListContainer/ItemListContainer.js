import React from 'react'
import under from './img/under.gif'

const StyleUnderDiv = {
    marginTop: "1em"
};

const ItemListContainer = () => {

    return (  
        <div style={StyleUnderDiv}>
            <img src={under} alt="Mantenimiento"></img>
        </div>
    );
}
 
export default ItemListContainer;