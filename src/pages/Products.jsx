import Slider from "@mui/material/Slider";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import MetaTags from "../utils/MetaTags";
import { useLocation } from "react-router-dom";
import { categories } from "../utils/constants";
import Product from "../components/Products/Product";
import { v4 as uuidv4 } from "uuid";
//icons
import {
  ChevronUpIcon,
  ChevronDownIcon,
  XIcon,
} from "@heroicons/react/outline";
import { StarIcon, FilterIcon } from "@heroicons/react/solid";
//redux
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../store/redux/actions/productActions";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Products = () => {
  const dispatch = useDispatch();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();
  const [price, setPrice] = useState([0, 200000]);
  const [category, setCategory] = useState(
    location.search ? location.search.split("=")[1] : ""
  );
  const [ratings, setRatings] = useState(0);

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

  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <MetaTags title="All Products | ApnaMart" />
      <div className="bg-gray-50 ">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative  lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 flex z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                    <div className="px-4 flex items-center justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        onClick={() => clearFilters()}
                        className="bg-indigo-400 uppercase px-2 py-1 rounded-md shadow-md text-white"
                      >
                        Clear All
                      </button>
                      <button
                        type="button"
                        className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <div className="px-6">
                        <span className="font-medium text-xs">Price</span>
                        <Slider
                          value={price}
                          onChange={priceHandler}
                          valueLabelDisplay="auto"
                          getAriaLabel={() => "Price range slider"}
                          min={0}
                          max={200000}
                          style={{ color: `#6366f1` }}
                        />
                        <div className="flex gap-1 items-center justify-between mb-2">
                          <span className="flex   border px-4 py-1 max-w-20 rounded-sm text-gray-800 bg-gray-50">
                            ₹{price[0].toLocaleString()}
                          </span>
                          <span className="font-medium text-gray-400">to</span>
                          <span className="flex border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                            ₹{price[1].toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col border-b px-4">
                        <div
                          className="flex justify-between cursor-pointer py-2 pb-4 items-center"
                          onClick={() => setCategoryToggle(!categoryToggle)}
                        >
                          <p className="font-medium text-xs uppercase">
                            Category
                          </p>
                          {categoryToggle ? (
                            <ChevronUpIcon className="h-5 text-indigo-600" />
                          ) : (
                            <ChevronDownIcon className="h-5 text-indigo-600" />
                          )}
                        </div>

                        {categoryToggle && (
                          <div key={uuidv4()} className="flex flex-col pb-1">
                            <div
                              className="mt-4 space-y-4"
                              onChange={(e) => setCategory(e.target.value)}
                              name="category-radio-buttons"
                              value={category}
                            >
                              {categories.map((el, i) => (
                                <div
                                  key={uuidv4()}
                                  className="flex items-center"
                                >
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
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col border-b px-4">
                        <div
                          className="flex justify-between cursor-pointer py-2 pb-4 items-center"
                          onClick={() => setCategoryToggle(!categoryToggle)}
                        >
                          <p className="font-medium text-xs uppercase">brand</p>
                          {categoryToggle ? (
                            <ChevronUpIcon className="h-5 text-indigo-600" />
                          ) : (
                            <ChevronDownIcon className="h-5 text-indigo-600" />
                          )}
                        </div>

                        {categoryToggle && (
                          <div className="flex flex-col pb-1">
                            <div
                              className="mt-4 space-y-4"
                              onChange={(e) => setCategory(e.target.value)}
                              name="category-radio-buttons"
                              value={category}
                            >
                              {categories.map((el, i) => (
                                <div
                                  key={uuidv4()}
                                  className="flex items-center"
                                >
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
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {/* ratings */}
                      <div className="flex flex-col border-b px-4">
                        <div
                          className="flex justify-between cursor-pointer py-2  items-center"
                          onClick={() => setRatingsToggle(!ratingsToggle)}
                        >
                          <p className="font-medium text-xs uppercase">
                            Customer Ratings
                          </p>
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
                                <div
                                  key={uuidv4()}
                                  className="flex items-center"
                                >
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
                                    <StarIcon className="h-5 text-indigo-500" />{" "}
                                    & above
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="max-w-full mx-auto px-4 sm:px-6">
            <div className="relative  flex items-baseline justify-between pt-4 pb-6 border-b border-gray-200">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                {"Today's Deals"}
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={uuidv4()}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FilterIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-4 gap-y-10">
                {/* Filters */}

                <form className="hidden lg:block  sm:max-w-64 rounded-r-md bg-white p-4">
                  <div className="flex justify-between py-2  border-indigo-600">
                    <h1 className="text-indigo-600  uppercase sm:text-lg font-semibold">
                      Filter
                    </h1>
                    <button
                      onClick={() => clearFilters()}
                      className="bg-indigo-400 uppercase px-2 py-1 rounded-md shadow-md text-white"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="flex  flex-col border-b border-indigo-600 my-2">
                    <div className=" flex flex-col items-start px-2">
                      <span className="font-medium text-lg">Price</span>
                      <Slider
                        value={price}
                        onChange={priceHandler}
                        valueLabelDisplay="auto"
                        getAriaLabel={() => "Price range slider"}
                        min={0}
                        max={200000}
                        style={{ color: `#6366f1` }}
                      />
                    </div>
                    <div className="flex   items-center font-extralight justify-between mb-2">
                      <span className="flex rounded-md  border  py-1 px-2 rounded-xs text-indigo-800 ">
                        ₹{price[0].toLocaleString()}
                      </span>
                      <span className="font-medium text-gray-400">to</span>
                      <span className="flex border rounded-md py-1  px-2  rounded-xs text-indigo-800 ">
                        ₹{price[1].toLocaleString()}
                      </span>
                    </div>
                  </div>
                  {/* category filter */}
                  <div className="flex flex-col border-b ">
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
                        <div
                          className="mt-4 space-y-4"
                          onChange={(e) => setCategory(e.target.value)}
                          name="category-radio-buttons"
                          value={category}
                        >
                          {categories.map((el, i) => (
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
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* brand */}
                  <div className="flex flex-col border-b ">
                    <div
                      className="flex justify-between cursor-pointer py-2 pb-4 items-center"
                      onClick={() => setCategoryToggle(!categoryToggle)}
                    >
                      <p className="font-medium text-xs uppercase">Brand</p>
                      {categoryToggle ? (
                        <ChevronUpIcon className="h-5 text-indigo-600" />
                      ) : (
                        <ChevronDownIcon className="h-5 text-indigo-600" />
                      )}
                    </div>

                    {categoryToggle && (
                      <div className="flex flex-col pb-1">
                        <div
                          className="mt-4 space-y-4"
                          onChange={(e) => setCategory(e.target.value)}
                          name="category-radio-buttons"
                          value={category}
                        >
                          {categories.map((el, i) => (
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
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* category filter */}

                  {/* ratings filter */}
                  <div className="flex flex-col border-b">
                    <div
                      className="flex justify-between cursor-pointer py-2  items-center"
                      onClick={() => setRatingsToggle(!ratingsToggle)}
                    >
                      <p className="font-medium text-xs uppercase">
                        Customer Ratings
                      </p>
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
                </form>

                {/* Product grid */}
                <div className="lg:col-span-5 shadow bg-gray-50">
                  <div>
                    <div className="flex-1">
                      {products?.length === 0 && (
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
                            Please check the spelling or try searching for
                            something else
                          </p>
                        </div>
                      )}
                      <div className=" py-4  overflow-hidden bg-white">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                          {products?.map((product) => (
                            <div key={uuidv4()} className="group relative">
                              <Product {...product} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Products;
