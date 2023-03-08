import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({item}){
    return(
    <Card key={item.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={"/images/" + item.id + ".jpg"} style={{ width: '18rem' }} />
    <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
    </Card.Body>
    </Card>
    )
}

export default Item;