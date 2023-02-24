import Item from "../Item"

function ItemListContainer({articulos}){
    return(
    <div>
        {articulos.map( producto => <Item name={producto.name} id={producto.id} img={producto.img}/>)}
    </div>
    )}      
    

export default ItemListContainer;