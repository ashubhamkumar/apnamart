import Product from "./Product";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { offerProducts } from "../../../utils/constants";
import { getRandomProducts } from "../../../utils/functions";

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon />
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon />
    </div>
  );
};
export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 1,
  swipe: false,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const DealSlider = ({ title }) => {
  return (
    <div className="bg-white w-full shadow overflow-hidden">
      {/* <!-- header --> */}
      <div className="flex px-6 py-3 justify-between items-center">
        <div className="flex justify-start items-center">
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
        <Link
          to="/products"
          className="bg-indigo-400 text-base font-semibold text-white px-5 py-2.5 rounded-sm shadow-lg"
        >
          VIEW ALL
        </Link>
      </div>
      <hr />
      {/* <!-- header --> */}

      {/* <Slider {...settings}> */}
      <div className="flex items-center">
        {getRandomProducts(offerProducts, 12).map((item, i) => (
          <Product {...item} key={i} />
        ))}
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default DealSlider;
