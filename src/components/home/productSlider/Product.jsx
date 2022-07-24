import { Link } from "react-router-dom";

import { StarIcon, BadgeCheckIcon } from "@heroicons/react/solid";
const Product = ({
  name,
  imageUrl,
  ratings,
  discount,
  brand,
  price,
  sellingPrice,
  slug,
}) => {
  return (
    <div className="  py-4 px-2 hover:shadow-xl">
      <Link to={`/product/${slug}`}>
        <div>
          <img
            src={`https://api.theshubham.dev/${imageUrl}`}
            alt=""
            className="w-full h-44 object-contain"
          />
        </div>
        <div className="bg-white">
          <div className="p-4">
            <div className="flex items-center">
              <h2 className="text-lg truncate font-semibold ">
                {name.split(" ").slice(0, 5).join(" ")}
              </h2>
            </div>
            <p className="text-xs text-gray-600 my-2">{name}</p>
            <div className="flex items-center justify-between my-2">
              <div className=" flex ">
                <span className="text-sm px-1.5 py-0.5 bg-indigo-500 rounded text-white flex items-center gap-0.5">
                  {ratings.toFixed(1)} <StarIcon className="h-5 " />
                </span>
              </div>
              <div>
                <BadgeCheckIcon className="text-indigo-500 h-6" />
              </div>
            </div>
            <p className="text-indigo-400 uppercase text-base">
              {brand.brandname}
            </p>
            <div className="flex items-center justify-between py-4">
              <div className=" space-x-1">
                <span className="font-semibold text-base">
                  ₹&nbsp;{sellingPrice.toFixed(2)}
                </span>{" "}
                <span className="text-gray-700  line-through text-sm">
                  ₹{price.toLocaleString()}{" "}
                </span>{" "}
                <span className="text-sm font-medium text-indigo-600">
                  {discount}%&nbsp;off
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
