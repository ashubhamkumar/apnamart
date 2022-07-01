import { Link } from "react-router-dom";
//import { getDiscount } from "../../utils/functions";

import { StarIcon } from "@heroicons/react/outline";

const Product = ({
  id,
  title,
  imageUrl,
  rating,
  discount,
  stock,
  price,
  costPrice,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 px-4 py-6 relative hover:shadow-lg rounded-lg">
      <Link
        to={`/product/${title}`}
        className="flex flex-col items-center text-center group"
      >
        <div className="w-44 h-48">
          <img
            draggable="false"
            className="w-full h-full object-contain"
            src={`https://api.theshubham.dev/${imageUrl}`}
            alt=""
          />
        </div>
        <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left">
          {title.length > 85 ? `${title.substring(0, 85)}...` : title}
        </h2>{" "}
        *
      </Link>
      {/* <!-- image & product title --> */}

      {/* <!-- product description --> */}
      <div className="flex flex-col gap-2 items-start">
        {/* <!-- rating badge --> */}
        <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
          <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">
            {rating.toFixed(1)} <StarIcon className="h-5 text-indigo-500" />
          </span>
        </span>
        {/* <!-- rating badge --> */}

        {/* <!-- price container --> */}
        <div className="flex items-center gap-1.5 text-md font-medium">
          <span>₹{costPrice.toLocaleString()}</span>
          <span className="text-gray-500 line-through text-xs">
            ₹{price.toLocaleString()}
          </span>
          <span className="text-xs text-primary-green">
            {discount}%&nbsp;off
          </span>
        </div>
        {/* <!-- price container --> */}
      </div>
      <button className="bg-indigo-400 px-4 py-2 rounded-md shadow-md">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
