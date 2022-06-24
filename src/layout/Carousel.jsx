import React from "react";
import { v4 as uuidv4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//images
//import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import gadgetSale from "../assets/images/Banners/gadget-sale.jpg";
import kitchenSale from "../assets/images/Banners/kitchen-sale.jpg";
import poco from "../assets/images/Banners/poco-m4-pro.webp";
import realme from "../assets/images/Banners/realme-9-pro.webp";
import fashionSale from "../assets/images/Banners/fashionsale.jpg";
import oppo from "../assets/images/Banners/oppo-reno7.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const banners = [gadgetSale, kitchenSale, poco, fashionSale, realme, oppo];
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <section className="h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden">
          {banners.map((el, i) => (
            <SwiperSlide key={uuidv4()}>
              <img
                draggable="false"
                className="h-44 sm:h-72 w-full object-cover"
                src={el}
                alt="banner"
                key={i}
              />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
    </>
  );
}
