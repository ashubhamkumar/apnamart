import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import DealSlider from "../components/home/DealSlider/DealSlider";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, getSliderProducts } from "../store/actions/productAction";
import Carousel from "../layout/Carousel";
import Timer from "../utils/Timer";

const Home = () => {
  const dispatch = useDispatch();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400);
  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);

      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error]);
  return (
    <>
      <Helmet>
        <title>
          Online Shopping Site for Mobiles, Electronics, Furniture, Grocery,
          Lifestyle, Books & More. Best Offers!
        </title>
        <link rel="canonical" href="https://client-apnamart.vercel.app/" />
      </Helmet>
      <main className="justify-center mx-auto flex flex-col gap-3 px-2 mt-16 sm:mt-4">
        <Carousel />

        <DealSlider title={"Deals of the Day"}>
          <Timer expiryTimestamp={time} />
        </DealSlider>
        <DealSlider title={"Top Brands On Offer"} />
        <DealSlider title={"Top Offers On"} />
      </main>
    </>
  );
};

export default Home;
