export const NavBarStyle = theme => {
    return({
        StyleAppBar : {
            background: "linear-gradient(to bottom left, #ADE06D, #6DADE0)",
            color: "black",
            fontWeight: "bolder",
        },
        StyleContacto : {
            right: "1.5em"

        },
        carritoButton : {
            margin: "auto",
            "&:hover":{
                background: "blue"
            },
        },
        styleTab : {
            margin: "auto",
 
        },
        styleButton : {
            margin: "auto",
            "&:hover":{
                background: "green"
            }
        },
        styleLink : {
            textDecorationLine: "none"
            }
    })
}
