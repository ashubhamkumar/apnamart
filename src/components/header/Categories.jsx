import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { categories } from "./Header";
const Categories = () => {
  return (
    <div className=" bg-indigo-100">
      <div className="mx-auto hidden max-w-app items-center justify-between md:flex">
        {categories.map((item) => (
          <Link
            to={`/products?category=${item.name}`}
            className="group flex flex-col items-center gap-1 p-2"
            key={uuidv4()}
          >
            <div className="h-16 w-16">
              <img
                draggable="false"
                className="h-full w-full object-contain"
                src={item.icon}
                alt={item.name}
              />
            </div>
            <span className="group-hover:text-primary-blue text-sm font-medium text-gray-800">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
