import NavBar from "./components/navbar/NavBar";
// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CartComponentContext } from "./context/CartContext";
import { Routes } from "./router/routes";

const App = (props) => {
  return (
    <main>
      <CartComponentContext>
        <BrowserRouter>
          <NavBar />
            <Routes/>
        </BrowserRouter>
      </CartComponentContext>
    </main>
  );
};

export default App;
