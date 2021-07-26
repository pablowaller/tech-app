import React, { useState, useEffect } from "react";
import { orderFormStyles } from "./orderFormStyles";
import { makeStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => orderFormStyles(theme));

// Creo el constructor para los datos de quien va a hacer la orden.
class BuyerInfo {
  constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
}

// Valido los datos introducidos en los inputs.
const formInitialState = new BuyerInfo("", "", "", "");
const errorInitialState = {
  ...new BuyerInfo(false, false, false, false),
  emailConfirmation: false,
};

const validationsRegEx = new BuyerInfo(
  /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
  /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
);

// Va a mostrar el formulario para introducir los datos del comprador.
export const BuyerForm = (props) => {
  const classes = useStyles();
  const { ended, addOrder, totalPrice } = props;
  const [inputErrors, setInputErrors] = useState(errorInitialState);
  const [buyerFormData, setBuyerFormData] = useState(formInitialState);
  const [formError, setFormError] = useState(false);

  //Se ocupa de los inputs y de corroborar el valor introducido con las validaciones.
  const handleChange = (e) => {
    const { name, value } = e.target;
    const regExp = validationsRegEx[name];
    if (!regExp.test(value)) {
      setInputErrors({ ...inputErrors, [name]: true });
    } else {
      setInputErrors({ ...inputErrors, [name]: false });
      setBuyerFormData({
        ...buyerFormData,
        [name]: value,
      });
    }
  };

  //Se ocupa corroborar el valor introducido en el input del mail.
  const handleChangeEmailConfirmation = (e) => {
    const { name, value } = e.target;
    if (buyerFormData["email"].localeCompare(value) !== 0) {
      setInputErrors({ ...inputErrors, [name]: true });
    } else {
      setInputErrors({ ...inputErrors, [name]: false });
    }
  };

  // Una vez validada la información del comprador se envia a la base de datos..
  const submitOrder = (e) => {
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
  };

  useEffect(() => {
    if (ended) {
      setInputErrors(errorInitialState);
      setBuyerFormData(formInitialState);
    }
  }, [ended]);

  return (
    <form className={classes.formulario} onSubmit={submitOrder}>
      <h3 className={classes.textosFormulario}>RELLENE LOS CAMPOS</h3>

      <TextField
        className={classes.inputStyle}
        id="outlined-basic"
        variant="outlined"
        placeholder="Ingresa tu nombre."
        error={inputErrors["nombre"]}
        name="nombre"
        label="Nombre"
        required
        onChange={handleChange}
        size="small"
      />
      {inputErrors["nombre"] ? (
        <span className={classes.validacionStyle}>
          Debe comenzar con letra mayúscula
        </span>
      ) : (
        <></>
      )}
      <div className={classes.root} noValidate autoComplete="off"></div>

      <TextField
        className={classes.inputStyle}
        id="outlined-basic"
        variant="outlined"
        placeholder="Ingresa tu apellido"
        error={inputErrors["apellido"]}
        name="apellido"
        label="Apellido"
        required
        onChange={handleChange}
        size="small"
      />
      {inputErrors["apellido"] ? (
        <span className={classes.validacionStyle}>
          Debe comenzar con letra mayúscula
        </span>
      ) : (
        <></>
      )}

      <TextField
        className={classes.inputStyle}
        id="outlined-basic"
        variant="outlined"
        placeholder="Introducí tu email."
        error={inputErrors["email"]}
        name="email"
        label="Email"
        required
        onChange={handleChange}
        size="small"
      />
      {inputErrors["email"] ? (
        <span className={classes.validacionStyle}>
          Ingrese un e-mail válido
        </span>
      ) : (
        <></>
      )}

      <TextField
        className={classes.inputStyle}
        id="outlined-basic"
        variant="outlined"
        placeholder="Confirmar email."
        error={inputErrors["emailConfirmation"]}
        name="emailConfirmation"
        label="Confirmacion email"
        required
        onChange={handleChangeEmailConfirmation}
        size="small"
      />
      {inputErrors["emailConfirmation"] ? (
        <span className={classes.validacionStyle}>
          Los dos emails deben coincidir
        </span>
      ) : (
        <></>
      )}

      <div className={classes.totalDivStyle}>
        <span className={classes.totalTextStyle}> Total: ${totalPrice}</span>
        <Button
          size="small"
          variant="contained"
          color="primary"
          className={classes.confirmarButton}
          type="submit"
        >
          Finalizar Compra
        </Button>
      </div>
      {formError ? (
        <span className={classes.validacionStyle}>
          Revisar la información del formulario.
        </span>
      ) : (
        <></>
      )}
    </form>
  );
};
