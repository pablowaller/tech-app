import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetailContainer/components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebase/firebase";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { itemDetailContainerStyle } from "./itemDetailContainerStyle";

const useStyle = makeStyles((theme) => itemDetailContainerStyle(theme));

const ItemDetailContainer = () => {
  const classes = useStyle();
  const [detalleArt, setDetalleArt] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const itemCollection = dataBase.collection("items");
    const idItem = itemCollection.doc(id);

    // Se verifica si el llamado a un determinado Id coincide con la busqueda solicitada, de no ser así se alertará al respecto.
    idItem.get().then((response) => {
      if (response.exists) {
        setDetalleArt({ id: response.id, ...response.data() });
      } else {
        alert("No hay coincidencias");
      }
    });
  }, [id]);

  return (
    <>
      <Typography variant="h4" className={classes.tituloDetalles}>Detalles del producto</Typography>
      <ItemDetail element={detalleArt} />
    </>
  );
};

export default ItemDetailContainer;
