import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  PlusCircleIcon,
  TrashIcon,
  MinusCircleIcon,
} from "@heroicons/react/outline";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../reduxStore/actions/cartAction";
import { getDeliveryDate } from "../../utils/functions";

import { Link } from "react-router-dom";

const CartItem = ({
  productId,
  name,
  brand,
  sellingPrice,
  price,
  slug,
  discount,
  imageUrl,
  stock,
  quantity,
  inCart,
}) => {
  const dispatch = useDispatch();

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (quantity >= stock) {
      toast.warn("Maximum Order Quantity");
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (quantity <= 1) return;
    dispatch(addItemsToCart(id, newQty));
  };

  const removeCartItem = (id) => {
    dispatch(removeItemsFromCart(id));
    toast.success("Product Removed From Cart");
  };

  return (
    <div
      className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden"
      key={productId}
    >
      <Link
        to={`/product/${slug}`}
        className="flex flex-col sm:flex-row gap-5 items-stretch w-full group"
      >
        {/* <!-- product image --> */}
        <div className="w-full sm:w-1/6 h-28 flex-shrink-0">
          <img
            draggable="false"
            className="h-full w-full object-contain"
            src={`https://api.theshubham.dev/${imageUrl}`}
            alt={imageUrl}
          />
        </div>
        {/* <!-- product image --> */}

        {/* <!-- description --> */}
        <div className="flex flex-col sm:gap-5 w-full pr-6">
          {/* <!-- product title --> */}
          <div className="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
            <div className="flex flex-col gap-0.5 sm:w-3/5">
              <p className="group-hover:text-indigo-600">
                {name.split(" ").slice(0, 10).join(" ")}
              </p>
              <span className="text-sm text-indigo-500">Barnd: {brand}</span>
            </div>

            <div className="flex flex-col sm:gap-2">
              <p className="text-sm">
                Delivery by {getDeliveryDate()} |{" "}
                <span className="text-gray-700">Free</span>{" "}
                <span className="line-through text-gray-700">
                  ₹{quantity * 40}
                </span>
              </p>
              <span className="text-xs text-gray-500">
                7 Days Replacement Policy
              </span>
            </div>
          </div>
          {/* <!-- product title --> */}

          {/* <!-- price desc --> */}
          <div className="flex items-baseline gap-2 text-xl font-medium">
            <span>₹{(sellingPrice * quantity).toFixed(2)}</span>
            <span className="text-sm text-gray-500 line-through font-normal">
              ₹{(price * quantity).toFixed(2)}
            </span>
            <span className="text-sm text-primary-green">
              {discount}%&nbsp;off
            </span>
          </div>
          {/* <!-- price desc --> */}
        </div>
        {/* <!-- description --> */}
      </Link>

      <div className="flex justify-between mt-4 pr-4 sm:pr-0 sm:justify-start sm:gap-6">
        <div className="flex gap-1 items-center">
          <span
            onClick={() => decreaseQuantity(productId, quantity)}
            className="w-7 h-7 text-3xl font-light   flex items-center justify-center cursor-pointer"
          >
            <MinusCircleIcon className="h-7 text-gray-700 hover:text-indigo-500 hover:shadow-xl" />
          </span>
          <input
            className="w-11 border outline-none text-center rounded-sm py-0.5 text-indigo-700 font-medium text-sm "
            value={quantity}
            disabled
          />
          <span
            onClick={() => increaseQuantity(productId, quantity, stock)}
            className="w-7 h-7 text-xl font-light   flex items-center justify-center cursor-pointer"
          >
            <PlusCircleIcon className="h-7 text-gray-700 hover:text-indigo-500 hover:shadow-xl" />
          </span>
        </div>
        {/* <!-- quantity --> */}
        {inCart && (
          <>
            <button
              onClick={() => removeCartItem(productId)}
              className="font-semibold  text-red-500 hover:shadow-xl hover:text-red-600"
            >
              <TrashIcon className="h-7" />
            </button>
          </>
        )}
      </div>
      {/* <!-- save for later --> */}
    </div>
  );
};

export default CartItem;
