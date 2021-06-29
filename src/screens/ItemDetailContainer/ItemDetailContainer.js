import React, { useState, useEffect } from "react";
import { ArticulosBd } from "../services/ArticulosBd";
import ItemDetail from "../ItemDetailContainer/components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const myPromiseDetalles = new Promise((resolve, reject) => {
  setTimeout(() => resolve(ArticulosBd), 2000);
});

const ItemDetailContainer = () => {
  const [detalleArt, setDetalleArt] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    myPromiseDetalles.then((data) => {
      const filtrarData = data.filter((element) => element.id === id);
      setDetalleArt(filtrarData);
    });
  }, [id]);

  return (
    <>
      {detalleArt.length === 0 ? (
        <div>
          <CircularProgress size="8rem" color="primary" />
        </div>
      ) : (
        detalleArt.map((detalleArt, i) => {
          return (
            <section key={i}>
              <ItemDetail element={detalleArt} />
         
            </section>
          );
        })
      )}
    </>
  );
};

export default ItemDetailContainer;
