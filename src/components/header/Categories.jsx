import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../reduxStore/actions/productAction";
const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.allCategories);
  useEffect(() => {
    dispatch(getAllCategories());
    return () => {};
  }, [dispatch]);

  return (
    <div className=" bg-indigo-100">
      <div className="mx-auto hidden max-w-app items-center justify-between md:flex">
        {categories?.length > 0 &&
          categories?.map((item) => (
            <Link
              to={`/products?category=${item.name}`}
              className="group flex flex-col items-center gap-1 p-2"
              key={uuidv4()}
            >
             
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
