import { commonBorder } from "../../../../components/orderContainer/orderContainerStyles";
import { commonFlexColumn } from "../../../../components/orderContainer/orderForm/orderFormStyles";
import { tituloStyle, textoStyle, botonTextStyle, botonTextStyleCancelar } from "../../../../components/Cart/CartStyle";
import { contenedor } from "../../../../components/NotFound/NotFoundStyle";

export const ItemDetailStyle = (theme) => {
  return {
    root: {
      display: "flex",
      maxWidth: "60em",
      marginTop: "2em",
      margin: "auto",
      ...commonBorder,
    },

    details: {
      ...commonFlexColumn,
    },

    content: {
      flex: "1 0 auto",
    },

    cover: {
      width: "30em",
      height: "25em",
      margin: "auto",
    },

    StyleDisponible: {
      marginTop: "0%",
      marginLeft: "1em",
      color: "grey",
    },

    titulo: {
      marginBottom: "0.5em",
      ...tituloStyle,
      fontSize: "1.5em"
    },

    ButtonDetailStyle: {
      margin: "0.2em",
      ...botonTextStyle
    },

    ButtonDetailStyleCancelar : {
      margin: "0.2em",
      ...botonTextStyleCancelar
    },

    precioDetalle: {
      marginTop: "0.5em",
      marginBottom: "0.5em",
      ...tituloStyle,
      fontSize: "1.5em"
    },

    countDetailStyle: {
      marginLeft: "auto",
    },

    descripcionLarga: {
      fontSize: "1.2em",
      ...textoStyle
    },

    caracteristicasStyle: {
      fontSize: "1em",
      ...textoStyle
    },

    // Media queryes
    "@media (max-width: 768px)": {
      root: {
        ...commonFlexColumn,
        maxWidth: "60em",
        marginTop: "1em",
        marginRight: "1em",
        marginLeft: "1em",
        margin: "auto",
        ...commonBorder,
      },

      details: {
        ...commonFlexColumn,
      },

      content: {
        flex: "1 0 auto",
      },

      cover: {
        display: "flex",
        margin: "auto",
        width: 230,
        height: 200,
      },

      StyleDisponible: {
        marginTop: "0%",
        textAlign: "center",
        color: "grey",
      },

      titulo: {
        marginBottom: "0.5em",
        fontSize: "1.2em",
        fontWeight: "bold",
      },

      precioDetalle: {
        marginTop: "0.5em",
        marginBottom: "0.5em",
        fontSize: "1.1em",
        fontWeight: "bold",
      },

      descripcionLarga: {
        fontSize: "1em",
        ...textoStyle
      },

      centrarBotones: {
       ...contenedor,
      },
    },
  };
};
