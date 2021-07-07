import NavBar from "./components/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./screens/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./screens/ItemDetailContainer/ItemDetailContainer";
// import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import {CartComponentContext } from "./context/CartContext";

const App = props => {
  return (
    <CartComponentContext>
      <BrowserRouter >
        <NavBar/>
          <Switch>
          <Route exact path="/">
              <ItemListContainer />
          </Route>
          <Route path="/category/:category">
              <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
              <ItemDetailContainer />
          </Route>
          <Route exact path="/Cart">
              <Cart />
          </Route>
          </Switch>
      </BrowserRouter>
    </CartComponentContext>
  );
}

export default App;
