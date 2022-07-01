import React, { useState, useEffect } from "react";
import MetaTags from "../utils/MetaTags";
import { useParams, useLocation } from "react-router-dom";
import { categories } from "../utils/constants";
import Product from "../components/Products/Product";
import { v4 as uuidv4 } from "uuid";
import apnaMart from "../api/apnaMart";
//icons
import {
  ChevronUpIcon,
  ChevronDownIcon,
  StarIcon,
} from "@heroicons/react/outline";
const Products = () => {
  const location = useLocation();
  const params = useParams();
  const [price, setPrice] = useState([0, 200000]);
  const [category, setCategory] = useState(
    location.search ? location.search.split("=")[1] : ""
  );
  const [ratings, setRatings] = useState(0);
  const [product, setproduct] = useState([]);
  const keyword = params.keyword;
  //const [currentPage, setCurrentPage] = useState(1);
  const [categoryToggle, setCategoryToggle] = useState(true);
  const [ratingsToggle, setRatingsToggle] = useState(true);
  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  const clearFilters = () => {
    setPrice([0, 200000]);
    setCategory("");
    setRatings(0);
  };

  // useEffect(() => {
  //   if (error) {
  //     enqueueSnackbar(error, { variant: "error" });
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getProducts(keyword, category, price, ratings, currentPage));
  // }, [
  //   dispatch,
  //   keyword,
  //   category,
  //   price,
  //   ratings,
  //   currentPage,
  //   error,
  //   enqueueSnackbar,
  // ]);
  const getAllProducts = async () => {
    try {
      const response = await apnaMart.get(`/app/search-product?q=s`);
      if ((response.status = 200)) {
        console.log(response.data);
        setproduct(response.data.searchProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();

    return () => {};
  }, []);

  return (
    <>
      <MetaTags title="All Products | Apnamart" />

      <main className="w-full mt-14 sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex gap-3 mt-2 sm:mt-2 sm:mx-3 m-auto mb-7">
          {/* <!-- sidebar column  --> */}
          <div className="hidden sm:flex flex-col w-1/5 px-1">
            {/* <!-- nav tiles --> */}
            <div className="flex flex-col bg-white rounded-sm shadow">
              {/* <!-- filters header --> */}
              <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
                <p className="text-lg font-medium">Filters</p>
                <span
                  className="uppercase text-primary-blue text-xs cursor-pointer font-medium"
                  onClick={() => clearFilters()}
                >
                  clear all
                </span>
              </div>

              <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
                {/* price slider filter */}
                <div className="flex flex-col gap-2 border-b px-4">
                  <span className="font-medium text-xs">PRICE</span>

                  <input
                    type="range"
                    value={price}
                    onChange={priceHandler}
                    min={0}
                    max={200000}
                    className="text-indigo-400 bg-indigo-400"
                  />

                  <div className="flex gap-3 items-center justify-between mb-2 min-w-full">
                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                      ₹{price[0].toLocaleString()}
                    </span>
                    <span className="font-medium text-gray-400">to</span>
                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                      ₹{price[1].toLocaleString()}
                    </span>
                  </div>
                </div>
                {/* price slider filter */}

                {/* category filter */}
                <div className="flex flex-col border-b px-4">
                  <div
                    className="flex justify-between cursor-pointer py-2 pb-4 items-center"
                    onClick={() => setCategoryToggle(!categoryToggle)}
                  >
                    <p className="font-medium text-xs uppercase">Category</p>
                    {categoryToggle ? (
                      <ChevronUpIcon className="h-5 text-indigo-600" />
                    ) : (
                      <ChevronDownIcon className="h-5 text-indigo-600" />
                    )}
                  </div>

                  {categoryToggle && (
                    <div className="flex flex-col pb-1">
                      <div>
                        <div
                          className="mt-4 space-y-4"
                          onChange={(e) => setCategory(e.target.value)}
                          name="category-radio-buttons"
                          value={category}
                        >
                          {categories.map((el, i) => (
                            <>
                              <div key={uuidv4()} className="flex items-center">
                                <input
                                  id={el}
                                  name="push-categories"
                                  type="radio"
                                  value={el}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label
                                  htmlFor={el}
                                  className="ml-3 block text-sm font-medium text-gray-700"
                                >
                                  {el}
                                </label>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* category filter */}

                {/* ratings filter */}
                <div className="flex flex-col border-b px-4">
                  <div
                    className="flex justify-between cursor-pointer py-2 pb-4 items-center"
                    onClick={() => setRatingsToggle(!ratingsToggle)}
                  >
                    <p className="font-medium text-xs uppercase">ratings</p>
                    {ratingsToggle ? (
                      <ChevronUpIcon className="h-5 text-indigo-600" />
                    ) : (
                      <ChevronDownIcon className="h-5 text-indigo-600" />
                    )}
                  </div>

                  {ratingsToggle && (
                    <div className="flex flex-col pb-1">
                      <div
                        className="mt-4 space-y-4"
                        onChange={(e) => setRatings(e.target.value)}
                        value={ratings}
                        name="ratings-radio-buttons"
                      >
                        {[4, 3, 2, 1].map((el, i) => (
                          <div key={uuidv4()} className="flex items-center">
                            <input
                              id={el}
                              value={el}
                              name="push-Ratings"
                              type="radio"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                              htmlFor={el}
                              className="ml-3 flex text-sm font-medium text-gray-700"
                            >
                              {el}
                              <StarIcon className="h-5 text-indigo-500" /> &
                              above
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* ratings filter */}
              </div>
            </div>
            {/* <!-- nav tiles --> */}
          </div>
          {/* <!-- sidebar column  --> */}

          {/* <!-- search column --> */}
          <div className="flex-1">
            {product?.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
                <img
                  draggable="false"
                  className="w-1/2 h-44 object-contain"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png"
                  alt="Search Not Found"
                />
                <h1 className="text-2xl font-medium text-gray-900">
                  Sorry, no results found!
                </h1>
                <p className="text-xl text-center text-primary-grey">
                  Please check the spelling or try searching for something else
                </p>
              </div>
            )}

            <div className="flex flex-col gap-2 pb-4 justify-center items-center w-full overflow-hidden bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-4 w-full place-content-start overflow-hidden pb-4 border-b">
                {product?.map((product) => (
                  <div key={uuidv4()}>
                    <Product {...product} />
                  </div>
                ))}
              </div>
              {/* {filteredProductsCount > resultPerPage && (
                <Pagination
                  count={Number(
                    ((filteredProductsCount + 6) / resultPerPage).toFixed()
                  )}
                  page={currentPage}
                  onChange={(e, val) => setCurrentPage(val)}
                  color="primary"
                />
              )} */}
            </div>
          </div>
          {/* <!-- search column --> */}
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default Products;
