import React, { useState } from "react";
// import Header from "../components/Header/Header";
// // import TitleTypeOne from "../components/titles/TitleTypeOne";
// import Footer from "../components/Footer/Footer";
// import Shopbanner from "../components/shop banner/Shopbanner";
import Sidebar from "../components/sidebarInShop/Sidebar";
import Products from "../components/ShopProducts/Products";
import Category from "../components/sidebarInShop/category/Category";
import Footer from "../components/Footer/Footer";

function Shop() {
  // const [filterBooks, setFilterBooks] = useState(books);
  // const handleFilterChange = (category, price) => {
  //   let updatedbooks = books;
  //   if (category !== "All") {
  //     updatedbooks = updatedbooks.filter((book) => 
  //       book.category === category
  //     );
  //   }

  //   if(price !== "All"){
  //     const [min ,max]  = price.split('-').map(Number);
  //     updatedbooks= updatedbooks.filter((book) => {
  //       if(max){
  //         return book.price >= min && book.price <= max
  //       }else {
  //         return book.price >= min
  //       }
  //     })
  //   }
  //   setFilterBooks(updatedbooks)
  // };

  return (
    <div>
      <div  className="d-flex justify-content-between">
        {/* <Sidebar /> */}
        <Products />
      </div>
    </div>
  );
}

export default Shop;
