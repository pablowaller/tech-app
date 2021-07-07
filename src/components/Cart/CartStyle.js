export const CartStyle = theme => {
    return ({
        tituloCarrito: {
            display: "flex",
            justifyContent: "center", 
            marginTop: "0.5em",          
            marginBottom: "1em",          
        },
        imgCarrito: {
            width: "8em",
            height: "8em",
        },
        alCarritoStyle: {
            marginTop: "8em",
            display: "flex",
            justifyContent: "center",         
        },
        subtotalStyle: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",

            // justifyContent: "center",

        },
        CarritoVacioStyle: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "5em",          
 
        }
    });
}