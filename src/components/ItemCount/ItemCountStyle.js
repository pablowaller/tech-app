import { commonFlexCenterColumn } from "../Cart/CartStyle";
import { commonFlexCenterRow } from "../Cart/CartStyle";
import { contenedor } from "../NotFound/NotFoundStyle";

export const ItemCountStyle = (theme) => {
  return {
    StyleMasMenos: {
      ...commonFlexCenterRow,
      marginLeft: "0%",
      marginBottom: "1em",
      width: "0,2em",
    },
    // Media queryes
    "@media (max-width: 768px)": {
      StyleMasMenos: {
        ...commonFlexCenterRow,
        padding: "0.1em",
        marginBottom: "1em",
        width: "0,2em",
        ...contenedor
      },
    },
    Contador: {
      textAlign: "center",
      fontSize: "1em",
      width: "1em",
    },
    AgregarB: {
      ...commonFlexCenterColumn,
      fontSize: "0.7em",
      width: "1em",
      height: "2.5em",
      top: "1em",
      backgroundColor: "#2aa46b",
      borderRadius: "5em",
      "&:hover":{
        color: "#050505",
        backgroundColor: "#73b2d6"
      }
    },
  };
};
