import NavBar from "./components/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import under from './components/itemListContainer/img/under.gif'

const StyleBody = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function App() {
  return (
    <>
    <header>
      <NavBar />
    </header>
      <body style={StyleBody}>
        <section>
          <div>
            <ItemListContainer/>
          </div>
        </section>
      </body>
    </>
  );
}

export default App;
