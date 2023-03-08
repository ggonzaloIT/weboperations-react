import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar title="Web Operations" itemUno="Regulador" itemDos="CDI" itemTres="Relé" />
      <ItemListContainer />
    </>
  );
}

export default App;
