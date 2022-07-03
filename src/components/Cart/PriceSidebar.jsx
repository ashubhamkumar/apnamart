const PriceSidebar = (props) => {
  const { cartItems } = props;
  return (
    <div className="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">
      {/* <!-- nav tiles --> */}
      <div className="flex flex-col bg-gray-100 rounded shadow py-6">
        <h1 className="px-6 py-3  text-xl  capitalize  font-bold text-indigo-600">
          Order summary
        </h1>

        <div className="flex flex-col space-y-3   px-4 sm:px-8 py-3">
          <p className="flex justify-between">
            Price ({cartItems.length} item){" "}
            <span>
              ₹
              {cartItems
                .reduce(
                  (sum, item) => sum + item.cuttedPrice * item.quantity,
                  0
                )
                .toLocaleString()}
            </span>
          </p>
          <p className="flex justify-between">
            Discount{" "}
            <span className="text-primary-green">
              - ₹
              {cartItems
                .reduce(
                  (sum, item) =>
                    sum +
                    (item.cuttedPrice * item.quantity -
                      item.price * item.quantity),
                  0
                )
                .toLocaleString()}
            </span>
          </p>
          <p className="flex justify-between">
            Delivery Charges <span className="text-primary-green">FREE</span>
          </p>
          <p className="flex justify-between text-lg font-semibold">
            Total Amount{" "}
            <span>
              ₹
              {cartItems
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toLocaleString()}
            </span>
          </p>

          {/* <p className="font-medium text-primary-green">
            You will save ₹
            {cartItems
              .reduce(
                (sum, item) =>
                  sum +
                  (item.cuttedPrice * item.quantity -
                    item.price * item.quantity),
                0
              )
              .toLocaleString()}{" "}
            on this order
          </p> */}
          <div className="flex justify-center text-center text-sm py-4 text-gray-500">
            {props.children}
          </div>
        </div>
      </div>
      {/* <!-- nav tiles --> */}
    </div>
  );
};

export default PriceSidebar;
