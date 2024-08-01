import React, { useContext } from "react";
import "./featuredBooks.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Books } from "../../Context/AllProducts";

function FeaturedBooks() {
  const { books } = useContext(Books);
  console.log(`books ${books}`);
  return (
    <section>
      {/* ................ featured book slider .................*/}
      {books.map((book) => {
        <div>
          <h3>{book.title}</h3>
        </div>;
      })}
      <div>
        go to swiper
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        // loop={true}
      >
        {books.map((book) => {
          <SwiperSlide key={book.id}>
            <div className="featurebook-box d-flex flex-column align-items-center">
              <img src={book.image} alt="" />
              <div className="featurebook-info d-flex flex-column align-items-center">
                <h3>{book.category}</h3>
                <h5>
                  <span>{book.price}</span>
                </h5>
              </div>
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </section>
  );
}

export default FeaturedBooks;
