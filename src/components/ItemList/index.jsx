
import Item from '../Item'
function ItemList({productos}){
    return(
        <>{productos.map((product) =>
        <Item key={product.id} item={product}/>
        )}</>
    )
}

export default ItemList;