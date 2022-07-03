import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

//pages
import SignupOtpVerification from "./pages/auth/SignupOtpVerification";
import Home from "./pages/Home";
import Login from "./pages/Signin";
import Register from "./pages/Signup";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetails from "./components/Products/ProductDetails";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Login />} />
        <Route
          path="/auth/signup/otp-verification"
          element={<SignupOtpVerification />}
        ></Route>
        <Route path="/auth/signup" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      {/* tost */}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
};

export default App;
