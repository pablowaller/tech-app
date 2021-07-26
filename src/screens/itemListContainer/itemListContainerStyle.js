import { tituloStyle } from "../../components/Cart/CartStyle"

export const itemListContainerStyle = (theme) => {
    return {
        tituloCards: {
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5em",
            marginBotom: "2em",
            ...tituloStyle
        }
    }
}