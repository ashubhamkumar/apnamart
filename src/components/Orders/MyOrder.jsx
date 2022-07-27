import React, { useEffect } from "react";
import MetaTags from "../../utils/MetaTags";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "./OrderItem";
import { toast } from "react-toastify";
import { myOrders, clearErrors } from "../../reduxStore/actions/orderAction";
import Loader from "../../layout/Loader";
const MyOrder = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.myOrders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(myOrders());

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <MetaTags title="ApnaMart - Your Order history" />
      <main>
        <div className="max-w-app mx-auto px-4  py-4 my-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">My Orders</h1>
              <p className="text-sm text-gray-500">
                You can view your orders here.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {loading && <Loader />}
              {orders &&
                orders
                  ?.map((order) => {
                    const {
                      _id,
                      orderStatus,
                      orderedProduct,
                      createdAt,
                      deliveredAt,
                    } = order;

                    return orderedProduct?.map((item, index) => (
                      <OrderItem
                        {...item}
                        key={index}
                        orderId={_id}
                        orderStatus={orderStatus}
                        createdAt={createdAt}
                        deliveredAt={deliveredAt}
                      />
                    ));
                  })
                  .reverse()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyOrder;
