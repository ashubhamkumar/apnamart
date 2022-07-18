import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PencilAltIcon } from "@heroicons/react/outline";
import { fillUserAddress } from "../../reduxStore/actions/userAction";
import { toast } from "react-toastify";
const ShippingAddress = () => {
  const [isEdit, setIsEdit] = useState(false);
  const startEditingHandler = () => {
    setIsEdit(true);
  };
  const stopEditingHandler = () => {
    setIsEdit(false);
  };
  const [streetAddress, setstreetAddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");
  const [country, setcountry] = useState("");

  const dispatch = useDispatch();
  const { shippingInfo, userInfo } = useSelector((state) => state.userLogin);
  const address = shippingInfo || userInfo?.address;
  const saveAddressHandler = (e) => {
    e.preventDefault();
    if (
      streetAddress === "" ||
      city === "" ||
      state === "" ||
      zip.length === 5 ||
      country === ""
    ) {
      toast.warn("Please fill all the fields");
    } else {
      dispatch(fillUserAddress(streetAddress, city, state, country, zip));
      stopEditingHandler();
    }
  };

  return (
    <div className="w-full shadow  rounded bg-gray-50">
      <div className="sm:p-4 p-2">
        <div className=" flex  items-center justify-between">
          <div className=" flex justify-start items-center  flex-col sm:flex-row sm:divide-x-2  sm:divide-indigo-600">
            <p className="text-base sm:text-lg px-2 text-indigo-600 font-bold leading-normal ">
              Shipping Address
            </p>
            <div className="px-2 flex  items-center flex-col sm:flex-row">
              <span className="text-indigo-600 sr-only">Deliver to: </span>
              <div className="space-x-1 px-4">
                <span className="text-gray-900 font-semibold capitalize">
                  {userInfo?.name.split(" ", 1) || "Guest"},
                </span>
                <span className="text-indigo-600">{address?.zip || ""}</span>
              </div>
            </div>
          </div>
          <button
            onClick={startEditingHandler}
            className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 text-indigo-500 hover:text-indigo-600 focus:outline-none rounded"
          >
            <PencilAltIcon className="w-6 h-6 " />
          </button>
        </div>
      </div>
      {isEdit && (
        <div className="md:col-span-2">
          <div className="shadow overflow-hidden rounded-b-md ">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setstreetAddress(e.target.value);
                    }}
                    value={streetAddress}
                    type="text"
                    name="street-address"
                    id="street-address"
                    placeholder={
                      address?.streetAddress || " Enter your street address"
                    }
                    autoComplete="street-address"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setcity(e.target.value);
                    }}
                    value={city}
                    type="text"
                    name="city"
                    id="city"
                    placeholder={address?.city || "Enter your city"}
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setstate(e.target.value);
                    }}
                    value={state}
                    type="text"
                    name="region"
                    id="region"
                    placeholder={address?.state || "Enter your state"}
                    autoComplete="address-level1"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    onChange={(e) => setcountry(e.target.value)}
                    value={country}
                    type="text"
                    id="country"
                    name="country"
                    placeholder={address?.country || "Enter your country"}
                    autoComplete="country-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal code
                  </label>
                  <input
                    onChange={(e) => setzip(e.target.value)}
                    value={zip}
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    placeholder={address?.zip || "Enter your zip code"}
                    autoComplete="postal-code"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 space-x-3 text-right sm:px-6">
              <button
                onClick={stopEditingHandler}
                className="inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-gray-600 text-white  "
              >
                Cancel
              </button>
              <button
                onClick={saveAddressHandler}
                className="inline-flex justify-center py-1.5 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShippingAddress;
