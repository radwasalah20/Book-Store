import React, { useState } from "react";
import "./Sidebar.css";
import Category from "./category/Category";
import Price from "./price/Price";

function Sidebar({ onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category, selectedPrice);
  };
  const handlePriceChange = (price) => {
    setSelectedPrice(price);
    onFilterChange(selectedCategory, price);
  };

  return (
    <section className="col-lg-2">
      <div className="sideBar">
        <Category onChange={handleCategoryChange} />
        <Price onChange={handlePriceChange} />
      </div>
    </section>
  );
}

export default Sidebar;
