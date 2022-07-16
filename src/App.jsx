import React, { lazy, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

//pages
const Header = lazy(() => import("./components/header/Header"));
// const SignupOtpVerification = lazy(() =>
//   import("./pages/auth/SignupOtpVerification")
// );
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Signin"));
//const Register = lazy(() => import("./pages/Signup"));
const Cart = lazy(() => import("./pages/Cart"));
const Footer = lazy(() => import("./components/Footer"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() =>
  import("./components/Products/ProductDetails")
);
const Account = lazy(() => import("./components/user/Account"));

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Login />} />
        {/* <Route
          path="/auth/signup/otp-verification"
          element={<SignupOtpVerification />}
        ></Route>
        <Route path="/auth/signup" element={<Register />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        ></Route>
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
