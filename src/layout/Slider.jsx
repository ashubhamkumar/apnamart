import React from "react";
import { Swiper } from "swiper/react";
// import required modules
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
const Slider = (props) => {
  return (
    <div className="">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper "
      >
        {props.children}
      </Swiper>
    </div>
  );
};

export default Slider;
