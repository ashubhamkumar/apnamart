import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRandomProducts } from "../../../utils/functions";
import Slider from "../../../layout/Slider";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import Product from "./Product";

const ProductSlider = ({ title, tagline }) => {
  const { products } = useSelector((state) => state.products);
  return (
    <section className="bg-white w-full shadow overflow-hidden">
      {/* <!-- header --> */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="items-center justify-start ">
          <h1 className=" whitespace-nowrap text-base  font-semibold text-indigo-600 sm:text-xl">
            {title}
          </h1>
          <p className="text-sm text-gray-400">{tagline}</p>
        </div>
        <Link
          to="/products"
          className="whitespace-nowrap rounded-sm bg-indigo-500 px-4 py-2 text-sm font-semibold leading-4 text-white shadow-lg"
        >
          VIEW ALL
        </Link>
      </div>
      <hr />

      <Slider>
        {products &&
          getRandomProducts(products, 12).map((product) => (
            <SwiperSlide key={uuidv4()}>
              {" "}
              <Product {...product} />
            </SwiperSlide>
          ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
