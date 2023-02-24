import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  const productos = [{name:"Regulador para Moto",id:1,img:"/1.jpg"},{name:"CDI para Moto",id:2,img:"2.jpg"},{name:"Relé para Auto",id:3,img:"3.jpg"}];
  function mostrarUno () {
    console.log(1)
  }

  return (
    <>
    <div>
      <NavBar title="Web Operations" itemUno="Regulador" itemDos="CDI" itemTres="Relé" mostrarUno={mostrarUno}/>
    </div>
    <div>
      <ItemListContainer articulos={productos}/>
    </div>
    </>
  );
}

export default App;
