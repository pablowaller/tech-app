import React, { useState, useEffect } from 'react';
import  {orderFormStyles}  from './orderFormStyles'
import { makeStyles, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => orderFormStyles(theme));

class BuyerInfo {
    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

const formInitialState = new BuyerInfo('', '', '', '');
const errorInitialState = { ...new BuyerInfo(false, false, false, false), emailConfirmation: false };
const validationsRegEx = new BuyerInfo(
    /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    /^[^\s@]+@[^\s@]+$/
);

const validationMessages = new BuyerInfo(
    'El nombre solo puede contener letras y apostrofes.',
    'El apellido solo puede contener letras y apostrofes.',
    'Solo números sin guiones. Minimo 8 caracteres, máximo 11.',
    'Ingrese un e-mail válido',
);


export const BuyerForm = props => {

    const classes = useStyles();
    const { ended, addOrder, totalPrice } = props;
    const [inputErrors, setInputErrors] = useState(errorInitialState);
    const [buyerFormData, setBuyerFormData] = useState(formInitialState);
    const [formError, setFormError] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        const regExp = validationsRegEx[name];
        if (!regExp.test(value)) {
            setInputErrors({ ...inputErrors, [name]: true });
        } else {
            setInputErrors({ ...inputErrors, [name]: false });
            setBuyerFormData({
                ...buyerFormData,
                [name]: value
            });
        }
    }

    const handleChangeEmailConfirmation = e => {
        const { name, value } = e.target;
        if (buyerFormData['email'].localeCompare(value) !== 0) {
            setInputErrors({ ...inputErrors, [name]: true });
        } else {
            setInputErrors({ ...inputErrors, [name]: false });
        }
    }

    const submitOrder = e => {
        e.preventDefault();
        let formValidation = true;
        for (const prop in buyerFormData) {
            let regExp = validationsRegEx[prop];
            if (!regExp.test(buyerFormData[prop])) {
                formValidation = false;
                break;
            }
        }
        if (formValidation) {
            setFormError(false);
            addOrder(buyerFormData);
        } else {
            setFormError(true);
        }
    }

    useEffect(() => {
        if (ended) {
            setInputErrors(errorInitialState);
            setBuyerFormData(formInitialState);
        }
    }, [ended]);

    return (
        <form className={classes.formulario} onSubmit={submitOrder}>
            <h3 className={classes.textosFormulario}>RELLENE LOS CAMPOS</h3>
            <TextField className={classes.inputStyle} id="outlined-basic"  variant="outlined" placeholder="Ingresa tu nombre." error={inputErrors['nombre']} name="nombre" label="Nombre" required onChange={handleChange}/>            
            {inputErrors['nombre'] ? <div className={classes.validacionStyle}>
                {validationMessages['nombre']}
            </div> : <></>}
            <form className={classes.root} noValidate autoComplete="off">
            </form>
            <TextField className={classes.inputStyle} id="outlined-basic"  variant="outlined" placeholder="Ingresa tu apellido" error={inputErrors['apellido']} name="apellido" label="Apellido" required onChange={handleChange}/>            
            {inputErrors['apellido'] ? <div className={classes.validacionStyle}>
                {validationMessages['apellido']}
            </div> : <></>}
            <TextField className={classes.inputStyle} id="outlined-basic"  variant="outlined" placeholder="Introducí tu email." error={inputErrors['email']} name="email" label="Email" required onChange={handleChange}/>
            {inputErrors['email'] ? <div className={classes.validacionStyle}>
                {validationMessages['email']}
            </div> : <></>}
            <TextField className={classes.inputStyle} id="outlined-basic"  variant="outlined" placeholder="Confirmar email." error={inputErrors['emailConfirmation']} name="emailConfirmation" label="Confirmacion email" required onChange={handleChangeEmailConfirmation}/>
            {inputErrors['emailConfirmation'] ? <div className={classes.validacionStyle}>
                Los dos emails deben coincidir.
            </div> : <></>}
            <div className={classes.totalDivStyle}>
                <div className={classes.totalTextStyle}> Total: ${totalPrice}</div>
                <Button variant="contained" color="primary" className={classes.confirmarButton} type='submit'><p>Finalizar Compra</p></Button>
            </div>
            {formError ? <div>Revise los datos del formulario.</div> : <></>}
        </form>
    );
}