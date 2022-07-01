import React from "react";
import DealSlider from "../components/home/DealSlider/DealSlider";
import Carousel from "../layout/Carousel";
import Categories from "../components/header/Categories";
import MetaTags from "../utils/MetaTags";

const Home = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400);
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
        <DealSlider title={"Top Brands On Offer"} time="" />
        <DealSlider title={"Top Offers On"} time="" />
      </main>
    </>
  );
};

export default Home;
