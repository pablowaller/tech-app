import React, { useState } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import logo3 from "./logo3.png";
import { CartWidget } from "./CartWidget/CartWidget";
import { makeStyles } from "@material-ui/core/styles";
import { NavBarStyle } from "./NavBarStyle";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const useStyle = makeStyles((theme) => NavBarStyle(theme));

const NavBar = () => {
  const computacion = "computacion";
  const accesorios = "accesorios";
  const { items } = useContext(CartContext);

  const classes = useStyle();
  const [value, setValue] = useState(0);
  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <header>
      <AppBar position="static">
        <Toolbar className={classes.StyleAppBar}>
          <Link to="/tech-app">
            <img
              src={logo3}
              className={classes.logoAppBar}
              alt="Logo de la tienda virtual con el nombre Tech App"
            ></img>
          </Link>
          <div
            className={classes.styleTab}
            onChange={handleClickTab}
            value={value}
          >
            <Link to={`/category/${computacion}`} className={classes.styleLink}>
              <Button variant="outlined" className={classes.styleButton}>
                Computación
              </Button>
            </Link>
            <Link to={`/category/${accesorios}`} className={classes.styleLink}>
              <Button variant="outlined" className={classes.styleButton}>
                Accesorios
              </Button>
            </Link>
            <div className={classes.styleLink}>
              {items.length === 0 ? <div></div> : <CartWidget />}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default NavBar;
