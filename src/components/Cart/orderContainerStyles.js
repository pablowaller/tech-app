export const orderContainerStyles = theme => {

    return ({
        
        ordenCompraStyle: {
            marginTop: "1em",
            display: 'flex',
            justifyContent: 'center',

        },

        ordenButton: {
            margin: "1em"
        },

        carritoCompra: {
            margin: 'auto'
        },
      
        compraExitosa: {
            display: 'flex',
            flexDirection: 'row',
        },

        cerrarButton: {
            borderStyle: 'none',
            height: '3em',
            marginTop: '0%',
            cursor: 'pointer'

        },

        dialogContent: {
            border: "solid lightblue",            
            maxWidth: "50em",
            height: "2.5 em"
        },

        errorCompra: {
            fontSize: "1.5em"
        },
        
    })

}
