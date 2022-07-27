import { formatDate } from "../../utils/functions";
import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  TruckIcon,
} from "@heroicons/react/solid";
const OrderItem = (props) => {
  const {
    name,
    imageUrl,
    sellingPrice,
    quantity,
    createdAt,
    deliveredAt,
    orderStatus,
  } = props;
  let date = new Date(createdAt);
  let expectedDate = date.setDate(date.getDate() + 7);
  return (
    <div className="flex p-4 items-start bg-white border rounded gap-2 sm:gap-0 hover:shadow-lg">
      {/* <!-- image container --> */}
      <div className="w-full sm:w-32 h-20">
        <img
          draggable="false"
          className="h-full w-full object-contain"
          src={`https://api.theshubham.dev/${imageUrl}`}
          alt={name}
        />
      </div>
      {/* <!-- image container --> */}

      {/* <!-- order desc container --> */}
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <div className="flex flex-col gap-1 overflow-hidden">
          <p className="text-sm">
            {name.length > 40 ? `${name.substring(0, 40)}...` : name}
          </p>
          <p className="text-xs text-gray-700 mt-2">Quantity: {quantity}</p>
          <p className="text-xs text-gray-700"> ₹ {sellingPrice.toFixed(2)}</p>
        </div>

        <div className="flex flex-col sm:flex-row mt-1 sm:mt-0 gap-2 sm:gap-20 sm:w-1/2">
          <p className="text-sm">
            {" "}
            Total: ₹{(quantity * sellingPrice).toFixed(2)}
          </p>

          <div className="flex flex-col space-y-1  px-2">
            <p className="text-base font-medium flex items-center gap-1">
              {orderStatus === "Confirmed" ? (
                <>
                  <span className="text-indigo-600 ">
                    <CheckCircleIcon className="h-5 w-5 text-indigo-600" />
                  </span>
                  Delivery expected by {formatDate(expectedDate)}
                </>
              ) : orderStatus === "Shipped" ? (
                <>
                  <span className="text-yellow-500 ">
                    <TruckIcon className="h-7 w-7 text-yellow-500" />
                  </span>
                  Delivery expected by {formatDate(expectedDate)}
                </>
              ) : orderStatus === "Delivered" ? (
                <>
                  <span className="text-green-600">
                    <CheckCircleIcon className="h-5" />
                  </span>
                  Delivered on {formatDate(deliveredAt)}
                </>
              ) : orderStatus === "Cancelled" ? (
                <>
                  <span className="text-red-500">
                    <XCircleIcon className="h-5" />
                  </span>
                  Cancelled
                </>
              ) : (
                <>
                  <span className="text-primary-green pb-0.5">
                    <ClockIcon className="h-5 text-gray-400" />
                  </span>
                  Ordered on {formatDate(createdAt)}
                </>
              )}
            </p>

            <p className="text-base ml-1">
              {orderStatus === "Confirmed" ? (
                <>
                  <span className="text-indigo-600 ">
                    Your order has been placed.
                  </span>
                </>
              ) : orderStatus === "Shipped" ? (
                <>
                  <span className="text-gray-900 ">
                    Your order has been Shipped.
                  </span>
                </>
              ) : orderStatus === "Delivered" ? (
                <>
                  <span className="text-gray-900">
                    Your item has been Delivered.
                  </span>
                </>
              ) : orderStatus === "Cancelled" ? (
                <>
                  <span className="text-red-500">
                    You requested to cancel your order.
                  </span>
                </>
              ) : (
                <>
                  <span className="text-gray-600 ">
                    {" "}
                    Your order is being processed.
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      {/* <!-- order desc container --> */}
    </div>
  );
};

export default OrderItem;
