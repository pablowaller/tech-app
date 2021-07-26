import { commonBorder } from "../../../../components/orderContainer/orderContainerStyles";
import { tituloStyle, textoStyle, botonTextStyle } from "../../../../components/Cart/CartStyle";

export const ItemStyle = (theme) => {
  return {
    root: {
      width: "17em",
      height: "24em",
      margin: "1em",
      marginTop: "2em",
      ...commonBorder,
      ...tituloStyle,

    },

    title: {
      fontSize: "1.5em",
      ...tituloStyle,
    },

    textStyle :{
      fontSize: "1.2em",
      ...textoStyle,
    },

    countStyle: {
      margin: "auto",
    },

    StyleDisponible: {
      marginTop: "0%",
      textAlign: "center",
      color: "grey",
    },

    cover: {
      width: "14em",
      height: "12em",
      margin: "auto",
    },

    ButtonItemStyle: {
      margin: "auto",
      ...botonTextStyle

    },

    styleLink: {
      textDecorationLine: "none",
    },
  };
};
