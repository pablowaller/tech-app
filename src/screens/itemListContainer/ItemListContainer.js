import React, {useState, useEffect } from "react"
import { ArticulosBd } from "../services/ArticulosBd"
import ItemList from "../itemListContainer/components/ItemList/ItemList"
import { useParams} from "react-router-dom"
// import { dataBase } from "../../firebase/firebase"


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(ArticulosBd),2000)
})

const ItemListContainer = props => {

    const {category} = useParams();
    const [articulos, setArticulos] = useState([]);
    

    useEffect(() => {
        myPromise.then(data => { setArticulos(data) })
    }, [])

    const filtrarCategorias = listasDeCategorias => { return category === undefined ? listasDeCategorias : listasDeCategorias.filter(articulos => articulos.category === category) }

    return ( 
        <> 
       
            <ItemList articulos={filtrarCategorias(articulos)} />
            
        
        </>
    );
}
 
export default ItemListContainer;