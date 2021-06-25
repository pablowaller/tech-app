import React, { useState } from "react";
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

const useStyle = makeStyles((theme) => ItemDetailStyle(theme));

const ItemDetail = (props) => {
  const classes = useStyle();
  const history = useHistory();
  const { element } = props;
  const [cantidad, setCantidad] = useState(0)
  const [click, setClick] = useState(false)

  console.log('cantidad ' + cantidad)

  const addArticle = value => { setCantidad (value); setClick(true); }
  
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h3" className={classes.titulo}>
              {element.title}
            </Typography>
            <Typography component="p" hidden>
              {element.id}
            </Typography>
            <Typography
              className={classes.precioDetalle}
              gutterBottom
              color="secondary"
              variant="h4">
              {"$ " + element.price}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {element.descriptionLong}
            </Typography>
            <Typography gutterBottom component="p">
              {"Bateria: " + element.batery}
            </Typography>
            <Typography gutterBottom component="p">
              {"Compatibilidad: " + element.compatibility}
            </Typography>
            <Typography gutterBottom component="p">
              {"Conectividad: " + element.conectivity}
            </Typography>
            <CardActions>
            {click ? (
                      <div >
                        <Button className={classes.ButtonDetailStyle} onClick={() => history.push(`/cart?cantidad=${cantidad}`)} variant="contained" color="primary"> Finalizar Compra </Button>
                        <Button className={classes.ButtonDetailStyle} onClick={() => setClick(!click)} variant="contained" color="secondary"> Cancelar Compra </Button>
                      </div>
                    ) : (
                <ItemCount stock={element.stock} initial={element.initial} cantidad={cantidad} addArticle={addArticle} />
              )}
              <h5 className={classes.StyleDisponible}>
                {`${element.stock} unidades en Stock`}
              </h5>
            </CardActions>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          component="img"
          image={element.pictureURL}
        />
      </Card>
    </>
  );
};

export default ItemDetail;
