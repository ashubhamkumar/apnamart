import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DealSlider from "../components/home/DealSlider/DealSlider";
import Carousel from "../layout/Carousel";
import Categories from "../components/header/Categories";
import { TruckIcon, MailIcon, CurrencyRupeeIcon } from "@heroicons/react/solid";
import MetaTags from "../utils/MetaTags";
import ProductSlider from "../components/home/productSlider/ProductSlider";
import { getProducts } from "../reduxStore/actions/productAction";
const Home = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400);
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, error]);
  return (
    <>
      <MetaTags
        title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery,Lifestyle, Books & More. Best Offers!"
        keywords="Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More, Best Offers"
      />
      <Categories />
      <main className="mx-auto mt-2 flex flex-col justify-center gap-3 px-2 sm:mt-4">
        <Carousel />
        <DealSlider title={"Deals of the Day"} time={time} />

        {!loading && (
          <ProductSlider
            title={"Suggested for You"}
            tagline={"Based on Your Activity"}
          />
        )}

        <DealSlider title={"Top Brands On Offer"} time="" />
        {/* info */}
        <div className="2xl:container 2xl:mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-10 gap-12 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            {/* Free Shipping Grid Card */}
            <div className="flex space-x-4">
              <TruckIcon className="h-10 w-10 text-indigo-500" />
              <div>
                <p className=" text-xl leading-5 font-semibold text-indigo-500 ">
                  Free Shipping
                </p>
                <p className=" text-base leading-6 font-normal text-gray-600 mt-3">
                  Free shipping on all orders.
                </p>
              </div>
            </div>

            {/* Support Grid Card */}

            <div className="flex space-x-4">
              <MailIcon className="h-10 w-10 text-indigo-500" />
              <div>
                <p className=" text-xl leading-5 font-semibold text-indigo-500 ">
                  Support 24/7
                </p>
                <p className=" text-base leading-6 font-normal flex flex-col  text-gray-600 mt-3">
                  <span>Contact us 24 hours a day at</span>
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    href="mailto:devshubhamyadav@gmail.com?subject=ApnaMart%20-%20Support"
                    className="text-indigo-500 hover:text-indigo-700 hover:underline"
                  >
                    devshubhamyadav@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* MonyBack Guarantee card */}

            <div className="flex space-x-4">
              <CurrencyRupeeIcon className="text-indigo-500 h-10 w-10" />
              <div>
                <p className=" text-xl leading-5 font-semibold text-indigo-500 ">
                  Money Back Guarantee
                </p>
                <p className=" text-base leading-6 font-normal text-gray-600 mt-3">
                  Your mony will be refunded within 7 working days .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
