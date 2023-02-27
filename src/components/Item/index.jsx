import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({name, id, img}){
return(
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img} style={{width: '285px', height: '285px'}}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Producto {id}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
)}

export default Item;