import React from "react";
import "./review.css";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import Ima1 from "../../../assets/client/client_img_1.jpeg";
import Ima2 from "../../../assets/client/client_img_2.jpeg";
import Ima3 from "../../../assets/client/client_img_3.jpeg";

const reviewClient = [
  {
    _id: "1",
    client_name: "JUAN CARLOS",
    client_img: Ima1,
    client_desc:
      "Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.",
  },
  {
    _id: "2",
    client_name: "JENNIFER LEWIS",
    client_img: Ima2,
    client_desc:
      "Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.",
  },
  {
    _id: "3",
    client_name: "ALICIA HEART",
    client_img: Ima3,
    client_desc:
      "Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.",
  },
];

const Review = () => {
  return (
    <div className="review-container">
      <div className="container">
        <h2 className="second-title">What Our Customers Say</h2>

        <div className="review-gird">
          {reviewClient?.map((data) => (
            <ReviewCard key={data?._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
