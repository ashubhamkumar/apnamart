import React from "react";

const UpdateProfile = ({ onCancel }) => {
  return (
    <div className="shadow overflow-hidden">
      <div className="px-4 md:px-8 lg:px-14 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="user-name"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <input
              type="text"
              name="user-name"
              id="user-name"
              autoComplete="user-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="user-phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              type="text"
              name="user-phone"
              id="user-phone"
              autoComplete="phone"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-gray-700"
            >
              Street address
            </label>
            <textarea
              type="text"
              name="street-address"
              id="street-address"
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
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
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
              type="text"
              name="city"
              id="city"
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
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-4">
        <button
          onClick={onCancel}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-indigo-600 bg-white   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
