import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const StyleMasMenos = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "0.5em",
  marginBottom: "1em",
};

const Contador = {
  textAlign: "center",
};

const AgregarB = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const ItemCount = (props) => {
  const { stock, initial } = props;
  const [contar, setCount] = useState(initial);
  const [buttonContar, setButtonContar] = useState(false);

  const addItem = () => {
    if (contar !== stock) {
      setCount(contar + 1);
      setButtonContar(false);
    }
  };

  const removeItem = () => {
    if (contar > 0) {
      setCount(contar - 1);
      if (contar === 1) {
        setButtonContar(true);
      }
    }
  };

  const onAdd = (e) => {
    if (contar > 0 && contar <= stock) {
    }
  };

  return (
    <>
      <h1 style={Contador}>Contador</h1>
      <h2 style={Contador}>{contar}</h2>
      <div style={StyleMasMenos}>
        <Button color="secondary" variant="outlined" onClick={(e) => addItem()}>+</Button>
        <Button color="secondary" variant="outlined" onClick={(e) => removeItem()}>-</Button>
      </div>
      <div style={AgregarB}>
        <Button color="secondary" variant="contained" disabled={buttonContar} onClick={(e) => (contar === 0 ? undefined : onAdd())}>
          Agregar al Carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
