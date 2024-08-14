import React from "react";
import "./Brands.css";
import { brandsData } from "../../Data/data";


function Brands() {
  return (
    <section className="brands">
      <div className="brands-container container d-flex align-items-center justify-content-between py-5">
        {brandsData.map(({ img }, index) => {
          return (
            <div className="brand" key={index}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Brands;
