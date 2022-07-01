import { Link } from "react-router-dom";
import React from "react";
const Product = ({ image, name, offer, tag }) => {
  return (
    <Link
      to="/products"
      className="flex  cursor-pointer relative flex-col items-center gap-1.5 p-6"
    >
      <div className="h-36 w-36 transform transition-transform duration-150 ease-out hover:scale-110">
        <img
          draggable="false"
          className="h-full w-full object-fill"
          src={image}
          alt={name}
        />
      </div>
      <h2 className="mt-2 text-sm font-medium">{name}</h2>
      <span className="text-primary-green text-sm">{offer}</span>
      <span className="text-sm text-gray-500">{tag}</span>
    </Link>
  );
};

export default Product;