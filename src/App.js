import NavBar from "./components/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";


const StyleItemList = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const App = props => {
  return (
    <>
      <NavBar />
      <div style={StyleItemList}>
      <ItemListContainer greeting="Trabajando en la WebPage"/>
      </div>
    </>
  );
}

export default App;
