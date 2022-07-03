import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MetaTags from "../utils/MetaTags";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import PriceSidebar from "../components/Cart/PriceSidebar";
import { v4 as uuidv4 } from "uuid";
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const placeOrderHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <>
      <MetaTags title="Shopping Cart | ApnaMart" />
      <main className="w-full ">
        {/* <!-- row --> */}
        <div className="flex flex-col  sm:flex-row gap-4 sm:gap-8  sm:max-w-app sm:mt-6 mt-4  mx-2 sm:mx-auto ">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            {/* <!-- cart items container --> */}
            <div className="flex flex-col shadow bg-gray-50">
              <span className="font-semibold text-indigo-600 text-lg px-2 sm:px-8 py-4 border-b">
                My Cart ({cartItems.length})
              </span>

              {cartItems && cartItems.length === 0 && <EmptyCart />}

              {cartItems &&
                cartItems.map((item) => (
                  <CartItem key={uuidv4()} {...item} inCart={true} />
                ))}

              {/* <!-- place order btn --> */}

              {/* <!-- place order btn --> */}
            </div>
            {/* <!-- cart items container --> */}

            {/* <!-- saved for later items container --> */}
          </div>

          <PriceSidebar cartItems={cartItems}>
            <button
              onClick={placeOrderHandler}
              disabled={cartItems.length < 1 ? true : false}
              className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              PLACE ORDER
            </button>
          </PriceSidebar>
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default Cart;
