import React,{useState} from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import apnaMart from "../api/apnaMart";
import { toast } from "react-toastify";
import Carousel from "../layout/Carousel";
import Categories from "../components/header/Categories";
import ProductCard from "../components/card/ProductCard";
import {v4 as uuidv4} from 'uuid';
const Home = () => {
  const [product, setproduct] = useState([])
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400);
  const getProducts = async () => { 
    try {
 const response = await apnaMart.get(
        "/app/search-product?q=e"
      );
      if (response.status === 200) {
       setproduct(response.data.searchProducts);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  }
useEffect(() => {
  getProducts();

  return () => {}
}, [])



  return (
    <>
      <Helmet>
        <title>
          Online Shopping Site for Mobiles, Electronics, Furniture, Grocery,
          Lifestyle, Books & More. Best Offers!
        </title>
        <link rel="canonical" href="https://client-apnamart.vercel.app/" />
      </Helmet>
      <Categories />
      <div className="mx-auto mt-2 flex flex-col justify-center gap-3 px-2 sm:mt-4">
        <Carousel />

      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
            {product.map((product) => (
              <ProductCard product={product} key={uuidv4()} />
            ))} 

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
