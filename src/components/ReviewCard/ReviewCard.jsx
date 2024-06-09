import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./reviewCard.css";
import Img from "../../assets/client/client_img_1.jpeg";

const ReviewCard = ({ data }) => {
  const { client_name, client_img, client_desc } = data;
  return (
    <div>
      <FaQuoteLeft className="quote-review" />
      <p className="review-text">{client_desc ? client_desc : "No data"}</p>
      <div className="clinet-img">
        <img src={client_img ? client_img : Img} alt="Client Image" />
      </div>
      <h6 class="clinet-name">{client_name ? client_name : "No data"}</h6>
    </div>
  );
};

export default ReviewCard;
