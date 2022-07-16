import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { indigo } from "@mui/material/colors";
import RadioGroup from "@mui/material/RadioGroup";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useParams } from "react-router-dom";
import { categories } from "../utils/constants";
import Product from "../components/Products/Product";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader";
import { clearErrors, getProducts } from "../reduxStore/actions/productAction";
import { toast } from "react-toastify";
//icons
import {
  ChevronUpIcon,
  ChevronDownIcon,
  XIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const Products = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const [price, setPrice] = useState([0, 200000]);
  const [category, setCategory] = useState(
    location.search ? location.search.split("=")[1] : ""
  );
  const [ratings, setRatings] = useState(0);

  const [categoryToggle, setCategoryToggle] = useState(true);
  const [ratingsToggle, setRatingsToggle] = useState(true);
  const { products, loading, error } = useSelector((state) => state.products);
  const keyword = params.keyword;
  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  const clearFilters = () => {
    setPrice([0, 200000]);
    setCategory("");
    setRatings(0);
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts(keyword, category, price, ratings));
  }, [dispatch, keyword, category, price, ratings, error]);
  return (
    <>
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
                        Clear
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
                            <FormControl>
                              <RadioGroup
                                aria-labelledby="category-radio-buttons-group"
                                onChange={(e) => setCategory(e.target.value)}
                                name="category-radio-buttons"
                                value={category}
                              >
                                {categories.map((el, i) => (
                                  <FormControlLabel
                                    value={el}
                                    key={uuidv4()}
                                    control={
                                      <Radio
                                        size="small"
                                        sx={{
                                          "&, &.Mui-checked": {
                                            color: indigo[500],
                                          },
                                        }}
                                      />
                                    }
                                    label={
                                      <span className="text-sm" key={i}>
                                        {el}
                                      </span>
                                    }
                                  />
                                ))}
                              </RadioGroup>
                            </FormControl>
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
                            <FormControl>
                              <RadioGroup
                                aria-labelledby="ratings-radio-buttons-group"
                                onChange={(e) => setRatings(e.target.value)}
                                value={ratings}
                                name="ratings-radio-buttons"
                              >
                                {[4, 3, 2, 1].map((el, i) => (
                                  <FormControlLabel
                                    value={el}
                                    key={uuidv4()}
                                    control={
                                      <Radio
                                        size="small"
                                        sx={{
                                          "&, &.Mui-checked": {
                                            color: indigo[500],
                                          },
                                        }}
                                      />
                                    }
                                    label={
                                      <span className="flex items-center text-sm">
                                        {el}
                                        <StarIcon
                                          sx={{ fontSize: "12px", mr: 0.5 }}
                                        />{" "}
                                        & above
                                      </span>
                                    }
                                  />
                                ))}
                              </RadioGroup>
                            </FormControl>
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
            <div className="pt-6 pb-24">
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
                      Clear
                    </button>
                  </div>
                  <div className="flex  flex-col border-b border-indigo-600 my-2">
                    <div className=" flex flex-col items-start px-2">
                      <span className="font-medium uppercase text-base text-indigo-600">
                        Price
                      </span>
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
                  <div className="flex  flex-col border-b border-indigo-600 my-2">
                    <div
                      className="flex justify-between cursor-pointer py-2 pb-4 items-center"
                      onClick={() => setCategoryToggle(!categoryToggle)}
                    >
                      <p className="font-medium uppercase text-base text-indigo-600">
                        Category
                      </p>
                      {categoryToggle ? (
                        <ChevronUpIcon className="h-5 text-indigo-600" />
                      ) : (
                        <ChevronDownIcon className="h-5 text-indigo-600" />
                      )}
                    </div>

                    {categoryToggle && (
                      <div className="flex flex-col ">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="category-radio-buttons-group"
                            onChange={(e) => setCategory(e.target.value)}
                            name="category-radio-buttons"
                            value={category}
                          >
                            {categories.map((el, i) => (
                              <FormControlLabel
                                value={el}
                                key={uuidv4()}
                                control={
                                  <Radio
                                    size="small"
                                    sx={{
                                      "&, &.Mui-checked": {
                                        color: indigo[500],
                                      },
                                    }}
                                  />
                                }
                                label={
                                  <span className="text-sm" key={i}>
                                    {el}
                                  </span>
                                }
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </div>
                    )}
                  </div>
                  {/* ratings filter */}
                  <div className="flex  flex-col border-b border-indigo-600 my-2">
                    <div
                      className="flex justify-between cursor-pointer py-2  items-center"
                      onClick={() => setRatingsToggle(!ratingsToggle)}
                    >
                      <p className="font-medium uppercase text-base text-indigo-600">
                        Customer Ratings
                      </p>
                      {ratingsToggle ? (
                        <ChevronUpIcon className="h-5 text-indigo-600" />
                      ) : (
                        <ChevronDownIcon className="h-5 text-indigo-600" />
                      )}
                    </div>

                    {ratingsToggle && (
                      <div className="flex flex-col ">
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="ratings-radio-buttons-group"
                            onChange={(e) => setRatings(e.target.value)}
                            value={ratings}
                            name="ratings-radio-buttons"
                          >
                            {[4, 3, 2, 1].map((el, i) => (
                              <FormControlLabel
                                value={el}
                                key={uuidv4()}
                                control={
                                  <Radio
                                    size="small"
                                    sx={{
                                      "&, &.Mui-checked": {
                                        color: indigo[500],
                                      },
                                    }}
                                  />
                                }
                                label={
                                  <span className="flex items-center text-sm">
                                    {el}
                                    <StarIcon className="text-indigo-600 h-4 w-4" />{" "}
                                    & above
                                  </span>
                                }
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </div>
                    )}
                  </div>
                </form>

                {/* Product grid */}
                <div className="lg:col-span-5 shadow bg-gray-50">
                  {loading && <Loader />}{" "}
                  <div className="flex-1">
                    {products?.length === 0 && (
                      <div className="flex flex-col items-center justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
                        <img
                          draggable="false"
                          className="w-1/2 h-44 object-contain"
                          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png"
                          alt="Search Not Found"
                        />
                        <h1 className="text-2xl font-medium text-indigo-600">
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
          </main>
        </div>
      </div>
    </>
  );
};
export default Products;
