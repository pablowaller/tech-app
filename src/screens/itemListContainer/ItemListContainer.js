import React, {useState, useEffect } from "react"
import ItemList from "../itemListContainer/components/ItemList/ItemList"
import { useParams} from "react-router-dom"
import { dataBase } from "../../firebase/firebase"
 
const ItemListContainer = props => {

    const {category} = useParams();
    const [articulos, setArticulos] = useState([]);
    
    useEffect(() => {
        const itemCollection = dataBase.collection("items");
        let filtroProductos;
        if( category !== undefined && category !== null) {
            filtroProductos = itemCollection.where("category", "==", category).get();           
        }else {
            filtroProductos = itemCollection.get();
        }

        filtroProductos.then((response) => {
            let filtrar = [];
            response.forEach ((doc) => {
                filtrar.push({id: doc.id, ...doc.data()});
            });
            if(filtrar.size === 0){
                console.log("vacio");
        }
        setArticulos(filtrar);
    })
},[category]);


    return ( 
        <> 
            <ItemList articulos={articulos} />    
        </>
    );
}
 
export default ItemListContainer;