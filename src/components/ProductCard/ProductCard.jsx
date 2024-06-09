import React from "react";
import "./productCard.css";
import Img1 from "../../assets/product/Poster1.jpg";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ProductCard = ({ data }) => {
  const { product_price, prodcut_title, product_img } = data;

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} className="custom-tooltip">
      Add to cart
    </Tooltip>
  );
  return (
    <div>
      <div className="position-relative">
        <Link to="">
          <div className="product-img">
            <img src={product_img ? product_img : Img1} alt="Product Image" />
          </div>
        </Link>

        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <button className="add-to-cart">
            <GiShoppingBag />
          </button>
        </OverlayTrigger>
      </div>

      <div className="product-card">
        <p className="poster">Posters</p>
        <Link to="" style={{ color: "#000000" }}>
          <h5 className="product-title">
            {prodcut_title ? prodcut_title : "No data"}
          </h5>
        </Link>

        <p className="product-price">
          <span>$</span> <span>{product_price ? product_price : "00.00"}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
