import Button from 'react-bootstrap/Button';

function CartWidget({mostrarUno}){
    return(
    <Button onClick={mostrarUno}>🛒</Button>
    )
}

export default CartWidget;