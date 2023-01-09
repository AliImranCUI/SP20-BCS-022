import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
export default function Products({ product }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  function addtocart() {
    alert("Product added to cart Successfully")
    dispatch(addToCart(product, quantity, varient));
  }

  return (
    <div
      style={{ margin: "70px" }}
      className="shadow p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{product.name}</h1>
        <img
          src={product.image}
          className="img-fluid"
          alt=""
          height="200px"
          width="200px"
        />
      </div>
      <div className="flex-container">
        <div className="w-50 m-1">
          <p>Size</p>
          <select value={varient} onChange={(e) => setvarient(e.target.value)}>
            {product.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-50 m-1">
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100 mt-2">
          <h1>Price:{product.prices[0][varient] * quantity} </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={product.image}
            alt=""
            className="img-fluid"
            height="400px"
          />
          <p>{product.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
