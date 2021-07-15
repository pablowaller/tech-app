    
export const orderFormStyles = theme => {

    return ({

        formulario: {
            display: 'flex',
            flexDirection: 'column',
            margin: "auto",

        },

        inputStyle: {
            height: '3.5em',
            width: "25em",
            color: 'red',
            margin: "2em",
        },

        validacionStyle: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: "0%",
        },

        totalDivStyle: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '3%',
           
        },

        totalTextStyle: {
            display: 'flex',
            flexDirection: 'row',
            fontSize: "1.4em",
            fontWeight: "bold",
            fontFamily: "Bebas Neue",
            margin: 'auto 0px',
            justifyContent: 'center',

        },

        confirmarButton: {
            cursor: 'pointer',
            marginLeft: '40%',
            padding: "2px 5px",
        },

        "@media (max-width: 768px)": {

            confirmarButton: {
                marginLeft: 'none'
            },
        },

        textosFormulario: {
            display: 'flex',
            justifyContent: 'center',
        },

        
    })

}
