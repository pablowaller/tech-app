import { commonFlexCenterColumn } from "../Cart/CartStyle";
import { botonTextStyle } from "../Cart/CartStyle";
import { textoStyle } from "../Cart/CartStyle";
import { tituloStyle } from "../Cart/CartStyle";

export const contenedor = {
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}

export const notFoundComponentStyle = (theme) => {
  return {
    container: {
      ...commonFlexCenterColumn,
      alignItems: "center",
      rowGap: "1rem",
      ...textoStyle    
    },

    div: {
      ...contenedor
    },

    h1: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      top: "5%",
      ...tituloStyle,
      fontSize: "3.2em",
    },

    img: {
      marginTop: "1rem",
      width: "50%",
      height: "auto",
    },

    ButtonNotFound: {
      ...botonTextStyle,
      position: "relative",
      top: "1%",
    },

    "@media (max-width: 768px)": {
      h1: {
        ...commonFlexCenterColumn,
        alignItems: "center",
        position: "absolute",
        top: "5%",
        ...tituloStyle,
        fontSize: "1.2em !important",
      },
      img: {
        marginTop: "1rem",
        width: "50%",
        height: "auto",
      },
      ButtonNotFound: {
        position: "relative",
        top: "1%",
        fontSize: "0.8em",
        fontFamily: "Bebas Neue, Helvetica, Arial, sans-serif",
      },
    },
  };
};

