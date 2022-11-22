import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginSignup } from "../../Login-Signup/LoginSignup";
import { User } from "../User/User";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navigation.css";

export const Navigation = () => {
  const user = useSelector((state) => state.reducer.user);
  const cartData = useSelector((state) => state.reducer.cartData);
  let totalNoOfProduct = 0;
  for (let index = 0; index < cartData.length; index++) {
    const element = cartData[index];
    totalNoOfProduct = totalNoOfProduct + element.noOfProducts;
  }
  return (
    <div className="navigation">
      <Navbar key="lg" expand="lg">
        <Container className="py-2">
          <Navbar.Brand as={Link} to="/">
            E-commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                E-commerce
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
                <Nav.Link as={Link} to="/cart" className=" cart-link">
                  Cart <AiOutlineShoppingCart />
                  <div className="noOfProducts">{totalNoOfProduct}</div>
                </Nav.Link>
                {user === "" ? (
                  <Nav.Link>
                    <LoginSignup />
                  </Nav.Link>
                ) : (
                  <User user={user} />
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
