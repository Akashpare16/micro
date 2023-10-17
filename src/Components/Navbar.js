import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Card from "./Card";
import Product from "./Product";
import { useSelector } from "react-redux";

const ColorSchemesExample = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" class="navbar ">
        <Container fluid>
          <Navbar.Brand href="#">Shopping Application</Navbar.Brand>
          <Nav>
            <Nav.Link to="/" as={Link}>
              Productes
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Navbar.Text>
              <Nav.Link to="/Card" as={Link}>
                My Cart {cartProducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ColorSchemesExample;
