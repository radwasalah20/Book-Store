import React, { useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";

function Book() {
  const params = useParams();
  // 
  const [book, setBooks] = useState(false);
  const cart = useContext(CartContext);
  // const addToCart = (book) => {
  //   
  // };
  

  useEffect(() => {
    axios
      .get(`https://api.codingarabic.online/api/books/` + params.bookId)
      .then((res) => {
        
        setBooks(res.data.data);
      });
  }, []);

  return (
    <div style={{backgroundColor: "var(--bgColor)"} }>
      
      {book ? (
        <section className="container col-lg-6  pt-5  " key={book.id}>
          <div className="card w-100 h-100 d-flex align-items-center" style={{backgroundColor: "var(--bgColor)"} }>
            <img src={book.image} alt="" className="w-50 my-5" />
            <div className="card-details d-flex flex-column align-items-center ">
              <h3 className="card-title">{book.title}</h3>
              <h4>{`${book.category} Category`}</h4>
              <div className="card-price d-flex flex-column gap-3">
                <div className="price">{book.price}</div>
                <div className="price">{book.description}</div>
              </div>
              <Link className="btn btn-primary mt-5"   onClick={() => cart.addToCart(book)}>Add To Cart</Link>
            </div>
          </div>
        </section>
      ) : (
        "Book Not Found"
      )}
    </div>
  );
}

export default Book;
