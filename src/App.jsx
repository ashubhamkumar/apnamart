import React, { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import AuthContext from "./store/authContext";

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
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // useEffect(() => {
  //   console.log(navigator.userAgent);
  //   console.log(navigator.product);
  //   navigator.geolocation.getCurrentPosition(
  //     function success(position) {
  //       // for when getting location is a success
  //       console.log(
  //         "latitude",
  //         position.coords.latitude,
  //         "longitude",
  //         position.coords.longitude
  //       );
  //     },
  //     function error(error_message) {
  //       // for when getting location results in an error
  //       console.log(
  //         "An error has occured while retrieving location",
  //         error_message
  //       );
  //     }
  //   );
  //   function ipLookUp() {
  //     axios("http://ip-api.com/json").then(
  //       function success(response) {
  //         console.log("User's Location Data is ", response);
  //         console.log("User's Country", response.country);
  //       },

  //       function fail(data, status) {
  //         console.log("Request failed.  Returned status of", status);
  //       }
  //     );
  //   }
  //   ipLookUp();
  //   return () => {};
  // }, []);

  // // disable right click
  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  // window.addEventListener("keydown", (e) => {
  //   if (e.keyCode == 123) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
  //   if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
  // });
  const authContext = useContext(AuthContext);
  const isAuth = authContext.isLoggedIn;
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
        <Route
          path="/cart"
          element={isAuth ? <Cart /> : <Navigate to="/auth/signin" />}
        />
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
