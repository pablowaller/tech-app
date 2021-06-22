import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { ItemStyle } from './ItemStyle'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import ItemCount from "../../../../components/ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ItemStyle(theme));

const Item = props => {
  const classes = useStyle();
  const { element } = props;

  return (
    <>
    <Link to={`/item/${element.id}`} className={classes.styleLink}>
    <Card spacing={8} className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" className={classes.cover} image={element.pictureURL}/>
        <CardContent>
          <Typography gutterBottom variant="h6">{element.title}
          </Typography>
          <Typography gutterBottom component="p">
            {element.description}
          </Typography>
          <Typography color="secondary" component="p">
            {"$" + element.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ItemCount stock={element.stock} initial={1}/>
      </CardActions>
      <h5 className={classes.StyleDisponible}>{element.stock} unidades disponibles</h5>
    </Card>
    </Link>
    </>
  );
};

export default Item ;

