import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="font-primary color-primary fs-32">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="font-secondary fs-16 color-primary ms-md-5 ms-0">
              Collections
            </Nav.Link>
            <Nav.Link href="#" className="font-secondary fs-16 color-primary ms-md-5 ms-0">
              Products
            </Nav.Link>
            <Nav.Link href="#" className="font-secondary fs-16 color-primary ms-md-5 ms-0">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
