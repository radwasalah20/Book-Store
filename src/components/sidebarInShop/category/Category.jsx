import React from "react";
import "./Category.css";

function Category({onChange}) {
  const handleCategoryChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <div>
      <h4 className="sidebar-title  ">Category</h4>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="category" value="All"  onChange={handleCategoryChange}/>
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="category" value="quis"  onChange={handleCategoryChange}/>
          <span className="checkmark"></span>quis
        </label>
      </div>
    </div>
  );
}

export default Category;
