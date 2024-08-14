import React, { useContext } from "react";
import "./Products.css";
// import { FaShoppingBag } from "react-icons/fa";
import { Books } from "../../Context/AllProducts";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "../../Context/WishlistContext";

function Products() {
  const { books } = useContext(Books);
  const {addToCart} = useContext(CartContext);
  // const wishlist = useContext(WishlistContext);

  return (
    <div style={{ backgroundColor: "var(--bgColor)" }}>
      <h1 className="libraryText text-center ">Library</h1>

      <section className="col-lg-10 col-md-8 col-8 ms-5 row g-3 ">
        {books.map((book) => (
          <div className="col-lg-4 col-md-6 container mb-4" key={book.id}>
            <div className="card w-100 h-100">
              <div style={{ textAlign: "right" }}>
                <Link onClick={() => wishlist.addToWishlist(book)}> <FaRegHeart style={{ color: "var(--blue) ", fontSize: "22px", margin: "3px" }} /> </Link>
              </div>
              <img src={book.image} alt="" className="w-100 h-100" />
              <div className="card-details d-flex flex-column align-items-center gap-3">
                <h3 className="card-title mt-4">{book.title.slice(0, 10)}</h3>

                <h6 className="price">{book.price}</h6>
                <Link
                  className="addToCartLink "
                  onClick={() => addToCart(book)}
                >
                  Add To Cart
                </Link>
                <Link className="viewDetailsLink" to={`/book/${book.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Products;
