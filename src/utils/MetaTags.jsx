import React from "react";
import { Helmet } from "react-helmet";
const MetaTags = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="description"
        content={
          description ||
          "ApnaMart: The One-stop Shopping Destination. E-commerce is revolutionizing the way we all shop in India."
        }
      />
      <meta
        name="keyword"
        content={
          keywords ||
          "Electronics,ApnaMart,Purnea Bihar, Best products, Best prices, Best quality,Shubham kumar"
        }
      />
      <link rel="canonical" href="https://client-apnamart.vercel.app" />
    </Helmet>
  );
};

export default MetaTags;
