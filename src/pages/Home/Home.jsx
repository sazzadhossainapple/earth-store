import React from "react";
import Banner from "./Banner/Banner";
import "./home.css";
import Product from "./Product/Product";
import Review from "./Review/Review";
import PostCard from "./PostCard/PostCard";
import SecureAndCare from "./SecureAndCare/SecureAndCare";

const Home = () => {
  return (
    <>
      <Banner />
      <Product />
      <Review />
      <PostCard />
      <SecureAndCare />
    </>
  );
};

export default Home;
