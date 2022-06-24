import Product from "./Product";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { offerProducts } from "../../../utils/constants";
import { getRandomProducts } from "../../../utils/functions";
import Timer from "../../../utils/Timer";
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
