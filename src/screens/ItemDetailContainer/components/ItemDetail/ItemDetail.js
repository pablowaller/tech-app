import React from "react";
import { ItemDetailStyle } from "./ItemDetailStyle";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ItemCount from "../../../../components/ItemCount/ItemCount";
import CardActions from "@material-ui/core/CardActions";

const useStyle = makeStyles((theme) => ItemDetailStyle(theme));

const ItemDetail = (props) => {
  const classes = useStyle();
  const { element } = props;

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
              <ItemCount stock={element.stock} initial={1} />
              <h5 className={classes.StyleDisponible}>
                {element.stock} unidades disponibles
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
