import NavBar from "./components/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./screens/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./screens/ItemDetailContainer/ItemDetailContainer";
// import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter >
      <NavBar/>
        <Switch>
        <Route exact path="/">
            <ItemListContainer />
        </Route>
        <Route path="/category/:category">
            <ItemListContainer/>
        </Route>
        <Route exact path='/item/:id'>
            <ItemDetailContainer />
        </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
