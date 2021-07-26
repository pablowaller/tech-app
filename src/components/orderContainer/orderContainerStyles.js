import { commonFlexCenter } from "../Cart/CartStyle";
import { botonTextStyle, tituloStyle, textoStyle, botonTextStyleCancelar } from "../Cart/CartStyle";

export const commonFlexRow = {
  display: "flex",
  flexDirection: "row",
};

export const commonBorder = {
  border: "solid lightblue",
};

export const orderContainerStyles = (theme) => {
  return {
    ordenCompraStyle: {
      marginTop: "1em",
      ...commonFlexCenter,
    },

    ordenButton: {
      marginLeft: "1em",
      ...botonTextStyle
    },

    ordenButtonCancelar: {
      marginLeft: "1em",
      ...botonTextStyleCancelar
    },

    carritoCompra: {
      margin: "auto",
    },

    compraExitosa: {
      ...commonFlexRow,
      ...tituloStyle,
      fontSize: "1.2em"
    },

    cerrarButton: {
      borderStyle: "none",
      height: "3em",
      marginTop: "0%",
      cursor: "pointer",
    },

    dialogContent: {
      ...commonBorder,
      maxWidth: "50em",
      height: "2.5 em",
      ...tituloStyle,
      fontSize: "1.2em"
    },

    errorCompra: {
      listStyle: "none",
      fontSize: "1.5em",
      ...textoStyle
    },
  };
};
