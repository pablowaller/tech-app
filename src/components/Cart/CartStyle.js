// Estilos reutilizables
export const commonFlexCenter = {
  display: "flex",
  justifyContent: "center",
};

export const commonFlexCenterColumn = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

export const commonFlexCenterRow = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
};

export const tituloStyle = {
  fontWeight: "bolder",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
}

export const textoStyle = {
  fontWeight: "bold",
  fontFamily: "Nunito, Helvetica, Arial, sans-serif",
}

export const botonTextStyle = {
  fontFamily: "Bebas Neue, Helvetica, Arial, sans-serif",
  fontSize: "1em",
  backgroundColor: "#2aa46b",
  borderRadius: "5em",
  "&:hover":{
    color: "#050505",
    backgroundColor: "#73b2d6"
  }
}

export const botonTextStyleCancelar = {
  fontFamily: "Bebas Neue, Helvetica, Arial, sans-serif",
  fontSize: "1em",
  color: "#ffffff",
  backgroundColor: "#1872a5",
  borderRadius: "5em",
  "&:hover":{
    color: "#050505",
    backgroundColor: "#989898"
  }
}

///////////////////////// 


export const CartStyle = (theme) => {
  return {

    tituloCarrito: {
      ...commonFlexCenter,
      marginTop: "0.5em",
      marginBottom: "1em",
    },

    imgCarrito: {
      width: "5em",
      height: "5em",
    },

    alCarritoStyle: {
      marginTop: "8em",
      ...commonFlexCenter,
    },

    subtotalStyle: {
      ...commonFlexCenterRow,
      padding: 10,
      margin: 0,
      alignItems: "center",
      fontSize: "1.1em",
      ...textoStyle
    },

    liStyle: {
      display: "flex",
      marginLeft: "0.5em",
    },

    CarritoVacioStyle: {
      ...commonFlexCenterRow,
      marginTop: "5em",
      fontSize: "2em",
      ...tituloStyle
    },

    table2: {
      overflowX: "scroll", 
    },

    table: {
      fontSize: "2em",
      ...tituloStyle
    },

    cartAtras: {
      ...commonFlexCenterRow,
      marginTop: "2em",
      margin: "auto",
      ...botonTextStyle
    }
    
    
  };
};
