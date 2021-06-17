import NavBar from "./components/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



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
      <ItemListContainer/>
      <ItemDetailContainer/>
      </div>
    </>
  );
}

export default App;
