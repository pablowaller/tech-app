import React, { useState, useEffect } from "react";
import ItemList from "../itemListContainer/components/ItemList/ItemList";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebase/firebase";
import { Typography } from "@material-ui/core";
import { itemListContainerStyle } from "./itemListContainerStyle";

const useStyle = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = (props) => {
  const { category } = useParams();
  const [articulos, setArticulos] = useState([]);
  const classes = useStyle();


  useEffect(() => {
    const itemCollection = dataBase.collection("items");
    let filtroProductos;
    if (category !== undefined && category !== null) {
      filtroProductos = itemCollection.where("category", "==", category).get();
    } else {
      filtroProductos = itemCollection.get();
    }

    filtroProductos.then((response) => {
      let filtrar = [];
      response.forEach((doc) => {
        filtrar.push({ id: doc.id, ...doc.data() });
      });
      if (filtrar.size === 0) {
      }
      setArticulos(filtrar);
    });
  }, [category]);

  return (
    <>
      <Typography variant="h4" className={classes.tituloCards}>Listado de productos</Typography>
      <ItemList articulos={articulos} />
    </>
  );
};
