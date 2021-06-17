import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from "../../ItemCount/ItemCount";
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: "60em",
    margin: "1em",
    border: "solid lightblue"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 500,
    height: 500,
  }, 
  StyleDisponible: {
    marginTop: "0%",
    textAlign: "center",
    color: "grey"
  },
  titulo: {
    marginBottom: "0.5em",
  },
  precioDetalle:{
    marginTop: "0.5em",
    marginBottom: "0.5em",
  }
 
  
}));

const ItemDetail = props => {
  const classes = useStyles();
  const { detalleArt } = props;

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <Typography variant="h3" className={classes.titulo}>{detalleArt.title}</Typography>
           <Typography gutterBottom component="p">
             {detalleArt.description}
           </Typography>
          <Typography component="p" hidden>
             {detalleArt.id}
           </Typography>
           <Typography className={classes.precioDetalle} gutterBottom color="secondary" variant="h4">
             {"Precio: $" + detalleArt.price}
           </Typography>
           <Typography gutterBottom component="p">
             {"Tipo de Auricular: " + detalleArt.tipo}
           </Typography>
           <Typography gutterBottom component="p">
             {"Tiempo de uso: " + detalleArt.tiempoReproduccion}
           </Typography>
           <Typography gutterBottom component="p">
             {"Tipo de Bateria: " + detalleArt.bateria}
           </Typography>
           <Typography gutterBottom component="p">
             {"Capacidad Batería Auriculares: " + detalleArt.capacidadBateriaAuriculares}
           </Typography>
           <Typography gutterBottom component="p">
             {"Capacidad Estuche: " + detalleArt.capacidadEstuche}
           </Typography>
           <Typography gutterBottom component="p">
            {"Tiempo de Carga: " + detalleArt.tiempoCarga}
           </Typography>
           <Typography gutterBottom component="p">
            {"Compatibilidad: " + detalleArt.compatibilidad}
           </Typography>
           <Typography gutterBottom component="p">
            {"Conectividad: " + detalleArt.conectividad}
           </Typography>
           <CardActions>
            <ItemCount stock={detalleArt.stock} initial={1}/>
            <h5 className={classes.StyleDisponible}>{detalleArt.stock} unidades disponibles</h5>
           </CardActions>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} component="img" image={detalleArt.pictureURL}/>
    </Card>
  );
}

export default ItemDetail;