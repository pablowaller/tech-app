import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles'
import { ItemCountStyle } from "./ItemCountStyle";

const useStyle = makeStyles((theme) => ItemCountStyle(theme));

const ItemCount = ({ stock, initial, cantidad, addArticle }) => {
  const classes = useStyle();
  const [ contar, setCount ] = useState(initial > cantidad ? initial : cantidad);
  const [ buttonContar, setButtonContar ] = useState(false);
 
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

  // console.log('contar ' + contar)

  return (
    <> 
      <div className={classes.StyleMasMenos}>
        <IconButton aria-label="mas" color="primary" variant="outlined" onClick={(e) => addItem()}>
          <AddIcon/>
        </IconButton>
        <h2 className={classes.Contador}>{contar}</h2>
        <IconButton aria-label="menos" color="primary" variant="outlined" onClick={(e) => removeItem()}>
          <RemoveIcon/>
        </IconButton>
        <Button className={classes.AgregarB} color="primary" variant="contained" disabled={buttonContar} onClick={() => addArticle(contar)}>Comprar</Button>
      </div>
    </>
  );
};

export default ItemCount;

