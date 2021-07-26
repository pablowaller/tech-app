import { tituloStyle } from "../../components/Cart/CartStyle" 

export const itemDetailContainerStyle = (theme) => {
    return {
        tituloDetalles: {
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5em",
            marginBotom: "2em",
            ...tituloStyle
        }
    }
}