// Importar componentes acá
import { useEffect, useState } from 'react';
import Products from '../../mocks/products'
import ItemList from '../ItemList'

function ItemListContainer(){
    const [products,setProducts] = useState([]);
    useEffect (() => {
        const productosPromise = new Promise ((resolve,reject) => 
        setTimeout(() => {resolve(Products)}, 2000))
        
    productosPromise
        .then((response) => setProducts(response))
        .catch((err) => console.log(err))
    },[])

    return(
        <div style={{display:'flex', justifyContent:'space-between', padding:'2rem'}}>
            <ItemList productos={products}/>
        </div>
    )}      
    
export default ItemListContainer;