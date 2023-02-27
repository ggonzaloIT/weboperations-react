import Item from "../Item"

function ItemListContainer({articulos}){
    return(
    <div className= "container" style={{display:"flex", justifyContent: 'space-between', padding:'1em'}}>
        {articulos.map( producto => <Item key={producto.id} name={producto.name} id={producto.id} img={producto.img}/>)}
    </div>
    )}      
    

export default ItemListContainer;