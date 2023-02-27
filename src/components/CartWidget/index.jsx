import Button from 'react-bootstrap/Button';

function CartWidget({mostrarUno}){
    return(
    <Button className="btn btn-primary btn-dark btn-sm" onClick={mostrarUno}>🛒</Button>
    )
}

export default CartWidget;