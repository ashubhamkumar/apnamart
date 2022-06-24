import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import DealSlider from "../components/home/DealSlider/DealSlider";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, getSliderProducts } from "../store/actions/productAction";
import Carousel from "../layout/Carousel";

const Home = () => {
  const dispatch = useDispatch();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400);
  const { error } = useSelector((state) => state.products);

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
      <main className="mx-auto sm:mt-4 flex flex-col justify-center gap-3 px-2 mt-2">
        <Carousel />
        <DealSlider title={"Deals of the Day"} time={time} />
        <DealSlider title={"Top Brands On Offer"} time="" />
        <DealSlider title={"Top Offers On"} time="" />
      </main>
    </>
  );
};

export default Home;
