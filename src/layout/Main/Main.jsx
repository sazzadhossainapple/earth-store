import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../hooks/ScrollToTop";
import Header from "../../pages/shared/Header/Header";
import Footer from "../../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
