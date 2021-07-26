import { commonFlexCenterColumn } from "../Cart/CartStyle";
import { commonFlexCenterRow } from "../Cart/CartStyle";
import { contenedor } from "../NotFound/NotFoundStyle"

const commonColorWeight = {
  color: "black",
  fontWeight: "bolder",
  background: "linear-gradient(to bottom left, #ADE06D, #6DADE0)",
};

export const NavBarStyle = (theme) => {
  return {
    StyleAppBar: {
      ...commonColorWeight,
      ...commonFlexCenterRow,
    },

    styleButton: {
      fontFamily: "Bebas Neue, Helvetica, Arial, sans-serif",
      fontSize: "1.2em",
      marginLeft: "0.1em",
      "&:hover":{
        color: "white",
        backgroundColor: "#2aa46b",

    }
    },

    "@media (max-width: 765px)": {
      StyleAppBar: {
        ...commonColorWeight,
        ...commonFlexCenterColumn,
      },
      
      styleLink: {
        textDecorationLine: "none",
        position: "relative !important",
        right: "0.2em !important",
      },
    },

    StyleContacto: {
      right: "1.5em",
    },

    styleTab: {
      ...contenedor
    },

    styleLink: {
      textDecorationLine: "none",
      position: "relative",
      margin:"0.2em",
      right: "6em",
    },

    widgetStyle: {
      padding: "1em"
    }
  };
};
