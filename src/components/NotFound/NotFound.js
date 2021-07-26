import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { notFoundComponentStyle } from "./NotFoundStyle";
import img from "./NotFoundImg.jpg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => notFoundComponentStyle(theme));

export const NotFoundComponent = ({
  titulo = "Ups! Algo salío mal",
  alt = "Imagen celeste con el mensaje de error 404",
  etiquetaBoton = "Volver al inicio",
}) => {
  const classes = useStyles();
  const history = useHistory();

  const commonAction = () => {
    history.push(`/`);
  };

  return (
    <section className={classes.container}>
      <div className={classes.div}>
        <h1 className={classes.h1}>{titulo}</h1>
        <img className={classes.img} src={img} alt={alt} />
      </div>
      <Button
        className={classes.ButtonNotFound}
        onClick={commonAction}
        variant="contained"
        color="primary"
      >
        {etiquetaBoton}
      </Button>
    </section>
  );
};
