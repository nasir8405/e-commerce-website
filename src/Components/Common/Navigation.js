import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar key="lg" expand="lg">
        <Container className="py-2">
          <Navbar.Brand as={Link} to="/">
            <Image
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
              width="175px"
              style={{ margin: "-15px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Image
                  src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
                  width="175px"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  Products
                </Nav.Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Cart</Nav.Link>
                <Nav.Link href="#action2">Login</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
