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
      <ItemListContainer container greeting="Productos Destacados"/>
      </div>
    </>
  );
}

export default App;
