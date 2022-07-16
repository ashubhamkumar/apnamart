import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import MetaTags from "../utils/MetaTags";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import PriceSidebar from "../components/Cart/PriceSidebar";
import { v4 as uuidv4 } from "uuid";

import ShippingAddress from "../components/Cart/ShippingAddress";

//rozarpay
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  async function displayRazorpay() {
    try {
      const token = authContext.token;
      const response = await apnaMart.post(
        `/app/place-order`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast(error.response.data.message);
    }
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      toast("Payment failed to load !");
      return;
    }

    const options = {
      key: "rzp_live_WsuDTXHgzYGcC8",
      currency: "INR",
      amount: cartItems.costPrice,
      order_id: "id",
      name: "MicroStudy",
      description: "name",
      image:
        "https://microstudy.org/static/media/apple-touch-icon.c8a8a81c.png",
      handler: function (response) {
        try {
          const token = authContext.token;
          apnaMart.post(
            `/user/create-invoice`,
            {
              paymentId: response.razorpay_payment_id,
              examId: "id",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 201) {
            toast(response.data.message);
          } else {
            toast("Payment Failed!");
          }
        } catch (error) {
          toast(error.response.data.message);
        }
      },
      prefill: {},
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      toast(response.error.code);
      toast(response.error.description);
      toast(response.error.source);
      toast(response.error.step);
      toast(response.error.reason);
      toast(response.error.metadata.order_id);
      toast(response.error.metadata.payment_id);
    });
  }

  return (
    <>
      <MetaTags title="Shopping Cart | ApnaMart" />
      <main className="w-full ">
        {/* <!-- row --> */}
        <div className="flex flex-col  sm:flex-row gap-4 sm:gap-8  sm:max-w-app sm:mt-6 mt-4  mx-2 sm:mx-auto ">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            <ShippingAddress />
            {/* <!-- cart items container --> */}
            <div className="flex flex-col shadow bg-white">
              <span className="font-semibold text-indigo-600 text-lg px-2 sm:px-8 py-4 border-b">
                My Cart ({cartItems.length})
              </span>

              {cartItems && cartItems.length === 0 && <EmptyCart />}

              {cartItems &&
                cartItems.map((item) => (
                  <CartItem key={uuidv4()} {...item} inCart={true} />
                ))}
            </div>
          </div>

          <PriceSidebar cartItems={cartItems}>
            <button
              onClick={displayRazorpay}
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
