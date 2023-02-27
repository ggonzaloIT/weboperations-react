import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "../CartWidget";

function NavBar({title, itemUno, itemDos, itemTres, mostrarUno}) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="container-fluid">
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{itemUno}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">{itemDos}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{itemTres}</NavDropdown.Item>
            </NavDropdown>
            <Button mostrarUno={mostrarUno}/>
          </Nav>
        </Container>
      </Navbar>

      </>
  );
}

export default NavBar;