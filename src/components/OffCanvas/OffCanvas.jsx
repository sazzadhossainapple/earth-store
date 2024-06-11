import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./offCanvas.css";
import { Link } from "react-router-dom";
const OffCanvas = ({ show, handleClose }) => {
  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end" className="">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas-title">
            Shopping Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <div className="shop-gird">
            <div className="shop-card">1</div>
          </div>
          <Link
            to=""
            className="text-text-center btns w-100 d-inline-block text-center"
          >
            Continue Shopping
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffCanvas;
