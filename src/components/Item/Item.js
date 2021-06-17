import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import ItemCount from "../ItemCount/ItemCount"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 280,
    margin: "1em",
    border: "solid lightblue",
  },
  title: {
    fontSize: 12,
  }
 
});

const StyleDisponible = {
  marginTop: "0%",
  textAlign: "center",
  color: "grey"
}

const StyleImagen = {
  width: "100%"
};

const Item = props => {
  const classes = useStyles();
  const { element } = props;

  return (
    <>
    <Card spacing={8} className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" style={StyleImagen} image={element.pictureURL}/>
        <CardContent>
          <Typography gutterBottom variant="h6">{element.title}
          </Typography>
          <Typography gutterBottom component="p">
            {element.description}
          </Typography>
          <Typography component="p" hidden>
            {element.id}
          </Typography>
          <Typography color="secondary" component="p">
            ${element.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ItemCount stock={element.stock} initial={1}/>
      </CardActions>
      <h5 style={StyleDisponible}>{element.stock} unidades disponibles</h5>

    </Card>
    </>
  );
};

export default Item ;

