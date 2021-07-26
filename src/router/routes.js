import React from "react";
import { ItemListContainer } from "../screens/itemListContainer/ItemListContainer";
import ItemDetailContainer from "../screens/ItemDetailContainer/ItemDetailContainer";
import { Switch, Route } from "react-router-dom";
import { Cart } from "../components/Cart/Cart"
import { NotFoundComponent } from "../components/NotFound/NotFound";

export const Routes = () => {
  return (
    <section>
        <Switch>
          <Route exact path="/tech-app">
           <ItemListContainer />
          </Route>
          <Route path="/category/:category">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route path="/tech-app/*" component={NotFoundComponent}>
              <NotFoundComponent />
          </Route>
        </Switch>
    </section>
  );
};
