import { commonFlexCenter } from "../../Cart/CartStyle";
import { commonFlexCenterRow, textoStyle, tituloStyle, botonTextStyle } from "../../Cart/CartStyle";

export const commonFlexColumn = {
  display: "flex",
  flexDirection: "column",
};

export const orderFormStyles = (theme) => {
  return {
    formulario: {
      ...commonFlexColumn,
      margin: "auto",
    },

    inputStyle: {
      height: "1em",
      width: "25em",
      color: "red",
      margin: "2em",
      ...textoStyle
    },

    validacionStyle: {
      ...commonFlexCenter,
      marginTop: "0%",
      fontSize: "0.8em",
      ...textoStyle

    },

    totalDivStyle: {
      ...commonFlexColumn,
      marginTop: "3%",
    },

    totalTextStyle: {
      fontSize: "1.4em",
      margin: "auto 0px",
      ...textoStyle,
      ...commonFlexCenterRow,
    },

    confirmarButton: {
      cursor: "pointer",
      margin: "auto",
      marginTop: "1em",
      marginBottom: "1em",
      // fontSize: "0.9em",
      // fontFamily: "Bebas Neue, Helvetica, Arial, sans-serif",
      ...botonTextStyle
    },

    textosFormulario: {
      ...commonFlexCenter,
      fontSize: "1.1em",
      ...tituloStyle
    },

    "@media (max-width: 768px)": {
      formulario: {
        ...commonFlexColumn,
        margin: "auto",
      },

      inputStyle: {
        height: "2.5em",
        width: "15em",
        color: "red",
        margin: "2em",
        ...textoStyle

      },

      validacionStyle: {
        display: "flex",
        marginTop: "0%",
        fontSize: "0.8em",
        ...textoStyle
      },

      totalDivStyle: {
        ...commonFlexColumn,
        marginTop: "3%",
      },

      totalTextStyle: {
        ...commonFlexCenterRow,
        fontSize: "1.1em",
        ...textoStyle,
        margin: "auto 0px",
      },

      confirmarButton: {
        cursor: "pointer",
        margin: "auto",
        marginTop: "1em",
        marginBottom: "1em",
        fontSize: "0.8em",
        fontFamily: "Bebas Neue, Helvetica, Arial, sans-serif",


      },

      textosFormulario: {
        ...commonFlexCenter,
        fontSize: "1.1em",
        ...tituloStyle
      },
    },

    "@media (max-width: 500px)": {
      formulario: {
        ...commonFlexColumn,
        margin: "auto",
      },

      inputStyle: {
        height: "0.2em",
        width: "12em",
        marginLeft: "0",
        marginRight: "0",
        ...textoStyle

      },

      validacionStyle: {
        display: "flex",
        marginTop: "0%",
        fontSize: "0.6em",
        ...textoStyle
      },

      totalDivStyle: {
        ...commonFlexColumn,
        marginTop: "3%",
      },

      totalTextStyle: {
        ...commonFlexCenterRow,
        fontSize: "0.9em",
        ...textoStyle,
        margin: "1em auto",
      },

      confirmarButton: {
        cursor: "pointer",
        margin: "auto",
        marginTop: "1em",
        marginBottom: "1em",
        fontSize: "0.8em",
        fontFamily: "Bebas Neue, Helvetica, Arial, sans-serif",


      },

      textosFormulario: {
        ...commonFlexCenter,
        fontSize: "1.1em",
        ...tituloStyle,
        marginBottom: "0%",
        marginTop: "0%"

      },
    },
  };
};
