import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardFooter from "react-bootstrap/esm/CardFooter";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const [products, getProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProduct(result));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };
  const cards = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "16px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.discription}</Card.Text>
            <Card.Title> Rs.{product.price}</Card.Title>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to card
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <>
      <h1> Products</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
