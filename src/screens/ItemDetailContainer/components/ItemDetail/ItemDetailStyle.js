export const ItemDetailStyle = theme => {
    return({
        root: {
            display: "flex",
            maxWidth: "60em",
            marginTop: "1em",
            margin: "auto",
            border: "solid lightblue",

          },
          details: {
            display: "flex",
            flexDirection: "column",
          },
          content: {
            flex: "1 0 auto",
          },
          cover: {
            width: 800,
            height: 500,
          },
          StyleDisponible: {
            marginTop: "0%",
            textAlign: "center",
            color: "grey",
          },
          titulo: {
            marginBottom: "0.5em",
          },
          ButtonDetailStyle :{
            width:"8em",
            height:"3em",
            fontSize: "0.7em",          
          },
          precioDetalle: {
            marginTop: "0.5em",
            marginBottom: "0.5em",
          },
    })
}