import React, { useState } from "react";
import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
import Hero from "../components/Swiper/Hero";
import Brands from "../components/Brands/Brands";
import FeaturedBooks from "../components/featuredBooks/FeaturedBooks";
import TitleTypeOne from "../components/titles/TitleTypeOne";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div style={{backgroundColor: "rgb(244, 242, 238"} }>
      <Header />
      <Hero />
      <Brands />
      <TitleTypeOne TitleTop={"Some Quality Items "} Title={"Featured Books"} />
      <FeaturedBooks />
    </div>
  );
}

export default HomePage;
