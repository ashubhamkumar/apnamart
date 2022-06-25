import Product from "./Product";

import { Link } from "react-router-dom";
import { offerProducts } from "../../../utils/constants";
import { getRandomProducts } from "../../../utils/functions";
import Slider from "../../../layout/Slider";
import { SwiperSlide } from "swiper/react";
import Timer from "../../../utils/Timer";

const DealSlider = ({ title, time }) => {
  return (
    <div className="w-full overflow-hidden bg-white shadow">
      {/* <!-- header --> */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex flex-col items-center justify-start sm:flex-row">
          <h1 className=" whitespace-nowrap text-base  font-semibold text-indigo-600 sm:text-xl">
            {title}
          </h1>
          {time !== "" && <Timer expiryTimestamp={time} />}
        </div>
        <Link
          to="/products"
          className="whitespace-nowrap rounded-sm bg-indigo-400 px-4 py-2 text-sm font-semibold leading-4 text-white shadow-lg"
        >
          VIEW ALL
        </Link>
      </div>
      <hr />
      {/* <!-- header --> */}

      <Slider>
        <div className="flex items-center">
          {getRandomProducts(offerProducts, 12).map((item, i) => (
            <SwiperSlide>
              <Product {...item} key={i} />
            </SwiperSlide>
          ))}
        </div>
      </Slider>
    </div>
  );
};

export default DealSlider;
