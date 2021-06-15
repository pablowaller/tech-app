import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const StyleMasMenos = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "0.1em",
  marginBottom: "1em",
  width: "0,2em",
  marginLeft: "2em"
  
};

const Contador = {
  textAlign: "center",
  fontSize: "1em",
  width: "1em"
};

const AgregarB = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "0.7em",
  width:"1em",
  height:"2.5em",
  top:"1em"
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
      {/* <h1 style={Contador}>Contador</h1> */}
      
      <div style={StyleMasMenos}>
        <IconButton aria-label="mas" color="primary" variant="outlined" onClick={(e) => addItem()}>
          <AddIcon/>
        </IconButton>
        <h2 style={Contador}>{contar}</h2>
        <IconButton aria-label="menos" color="primary" variant="outlined" onClick={(e) => removeItem()}>
          <RemoveIcon/>
        </IconButton>
        <Button style={AgregarB} color="primary" variant="contained" disabled={buttonContar} onClick={(e) => (contar === 0 ? undefined : onAdd())}>
          Carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;

