import React, { useContext } from "react";
import "./featuredBooks.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Books } from "../../Context/AllProducts";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";

function FeaturedBooks() {
  const { books } = useContext(Books);
  console.log(`books ${books}`);

  return (
    <section>
      {/* ................ featured book slider .................*/}

      <Swiper
        className="swwiperone"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        // loop={true}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="featurebook-box d-flex flex-column align-items-center mb-5 px-5">
              <img src={book.image} alt="" />
              <div className="featurebook-info d-flex flex-column align-items-center">
                <h3>{book.category}</h3>
                <h5>
                  <span>{book.price}</span>
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*  second swiper for responsive  */}
      <Swiper
        className="swipertwo"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        // loop={true}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="featurebook-box d-flex flex-column align-items-center mb-5 px-5">
              <img src={book.image} alt="" />
              <div className="featurebook-info d-flex flex-column align-items-center">
                <h3>{book.category}</h3>
                <h5>
                  <span>{book.price}</span>
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*  third swiper for responsive  */}

      <div style={{textAlign: "right" , marginRight : "30px"}} className="parentOfShowallBtn">
        <Link to="/shop" className="showAllBtn">Show All Books</Link>
        <MdDoubleArrow className="fs-5 doublearrowIcon" />
      </div>
    </section>
  );
}

export default FeaturedBooks;
