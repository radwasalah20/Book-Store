import React from "react";
import Header from "../components/Header/Header";
// import TitleTypeOne from "../components/titles/TitleTypeOne";
import Footer from "../components/Footer/Footer";
import Shopbanner from "../components/shop banner/Shopbanner";
import Aside from "../components/asideInshop/Aside";

function Shop() {
  return (
    <div >
      <Header />
      {/* <TitleTypeOne TitleTop={"Hello"} Title={"Shop page"} /> */}
      <Shopbanner />
      <Aside />


    </div>
  );
}

export default Shop;
