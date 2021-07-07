import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetailContainer/components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const [detalleArt, setDetalleArt] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const itemCollection = dataBase.collection("items");
    const idItem = itemCollection.doc(id);

    idItem.get().then((response) => {

      if(response.exists){
        setDetalleArt({id:response.id, ...response.data() });
      } else {
        alert("No hay coincidencias");
      }
       });
    },[id]) 

  return (
    <>
      <ItemDetail element={detalleArt} />
    </>
  );
};

export default ItemDetailContainer;
