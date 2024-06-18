import React from "react";
import { Link } from "react-router-dom";
const PostCard = () => {
  return (
    <div className="post-card-container">
      <div className="container d-flex justify-content-center ">
        <div>
          <h2 class="second-title text-center" style={{ letterSpacing: "5px" }}>
            Give the Gift of a Postcard
          </h2>
          <p className="post-card-small-text text-center">
            Give the gift of a lasting memory with a postcard
          </p>
          <div class="mt-5 d-flex align-items-center justify-content-center">
            <Link to="">
              <button class="text-text-center btns">Purchase A Postcard</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
