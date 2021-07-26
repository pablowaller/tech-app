import React, { useState, useContext } from "react";
import { ItemDetailStyle } from "./ItemDetailStyle";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ItemCount from "../../../../components/ItemCount/ItemCount";
import CardActions from "@material-ui/core/CardActions";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { CartContext } from "../../../../context/CartContext";

const useStyle = makeStyles((theme) => ItemDetailStyle(theme));

const ItemDetail = (props) => {
  const classes = useStyle();
  const history = useHistory();
  const { element } = props;
  const [cantidad, setCantidad] = useState(0);
  const [click, setClick] = useState(false);
  const { addItems, clear } = useContext(CartContext);

  // Agrega la cantidad de items deseados y posibles de acuerdo al stock.
  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    setClick(true);
    addItems({ item: element, quantity: cantidad });
  };

  // Cancela la operación de agregar items.
  const cancelButton = () => {
    setClick(!click);
    clear();
  };

  return (
    <section>
      <Card className={classes.root}>
        <CardMedia
          alt={element.alt}
          className={classes.cover}
          component="img"
          image={element.pictureURL}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h4" className={classes.titulo}>
              {element.title}
            </Typography>
            <Typography component="p" hidden>
              {element.id}
            </Typography>
            <Typography
              className={classes.precioDetalle}
              gutterBottom
              color="secondary"
              variant="h4"
            >
              {"$ " + element.price}
            </Typography>
            <Typography
              className={classes.descripcionLarga}
              variant="h6"
              gutterBottom
            >
              {element.descriptionLong}
            </Typography>
            <Typography
              className={classes.caracteristicasStyle}
              gutterBottom
              component="p"
            >
              {"Bateria: " + element.batery}
            </Typography>
            <Typography
              className={classes.caracteristicasStyle}
              gutterBottom
              component="p"
            >
              {"Compatibilidad: " + element.compatibility}
            </Typography>
            <Typography
              className={classes.caracteristicasStyle}
              gutterBottom
              component="p"
            >
              {"Conectividad: " + element.conectivity}
            </Typography>
            <CardActions>
              {click ? (
                <div className={classes.centrarBotones}>
                  <Button
                    className={classes.ButtonDetailStyle}
                    onClick={() => history.push(`/Cart`)}
                    variant="contained"
                    color="primary"
                  >
                    Agregar
                  </Button>
                  <Button
                    className={classes.ButtonDetailStyleCancelar}
                    onClick={() => cancelButton()}
                    variant="contained"
                    color="secondary"
                  >
                    Cancelar
                  </Button>
                </div>
              ) : (
                <>
                  <ItemCount
                    initial={element.initial}
                    cantidad={cantidad}
                    addArticle={onAdd}
                  />
                </>
              )}
            </CardActions>
            <Typography
              component="p"
              className={classes.StyleDisponible}
            >{`${element.stock} unidad/es en Stock`}</Typography>
          </CardContent>
        </div>
      </Card>
    </section>
  );
};

export default ItemDetail;
