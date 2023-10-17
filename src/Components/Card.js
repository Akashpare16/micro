import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../Store/cartSlice";

const Mycard = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  const cards = products.map((product) => {
    return (
      <div className="col-md-12" style={{ marginBottom: "16px" }}>
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
            <Card.Title>Rs.{product.price}/-</Card.Title>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="danger" onClick={() => removeToCart(product.id)}>
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};
export default Mycard;
