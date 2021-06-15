import React from 'react'
import ItemList from "../ItemList/ItemList"


const StyleUnderDiv = {
    marginTop: "1em",
};


const ItemListContainer = props => {

    return (  
        <div style={StyleUnderDiv}>
            <ItemList/>
        </div>
    );
}
 
export default ItemListContainer;