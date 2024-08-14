import React, { useContext } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "./hero.css";
import { Books } from "../../Context/AllProducts";
import { Link } from "react-router-dom";

function Hero() {
  const { books } = useContext(Books);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      // loop={true}
    >
      {books?.slice(2,5).map((book) => (
        <SwiperSlide className="heroSwiper " key={book.id}>
          <div className="image p-5 d-flex flex-wrap align-items-center">
            <div className="title-content ">
              <h3>{book.title}</h3>
              <p className="paragraph"><span>Category:</span> {book.category}</p>
              <Link className="btn btn-outline-secondary" to={`/book/${book.id}`}>Read more</Link>
            </div>
            <img src={book.image} alt="book_image" width={400}  />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
