import { useSelector } from "react-redux";

import {
  CollectionIcon,
  UserIcon,
  CreditCardIcon,
  SupportIcon,
} from "@heroicons/react/solid";

import { Link } from "react-router-dom";

const Sidebar = ({ activeTab }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const user = userInfo;

  return (
    <div className="hidden sm:flex flex-col gap-4 w-1/4 px-1">
      {/* <!-- profile card --> */}
      <div className="flex items-center gap-4 p-3 bg-white rounded-sm shadow">
        {/* <!-- user icon --> */}

        {/* <!-- user icon --> */}
        <div className="flex flex-col gap-1 text-indigo-600">
          <p className="text-sm">Hello,</p>
          <h2 className="font-semibold text-xl">{user.name}</h2>
        </div>
      </div>

      {/* <!-- nav tiles --> */}
      <div className="flex flex-col bg-white rounded-sm shadow">
        {/* <!-- my orders tab --> */}
        <div className="flex items-center gap-5 px-4 py-4 border-b border-indigo-500">
          <Link
            className="flex w-full  font-medium text-gray-700 hover:text-indigo-600"
            to="/orders"
          >
            <CollectionIcon className="h-6 text-indigo-500 " />
            <span className="px-4 font-semibold uppercase">MY ORDERS</span>
          </Link>
        </div>

        <div className="flex items-center gap-5 px-4 py-4">
          <UserIcon className="h-7 text-indigo-500" />
          <p className="flex w-full justify-between font-medium text-gray-500">
            ACCOUNT SETTINGS
          </p>
        </div>
        <div className="flex flex-col pb-3 border-b text-sm">
          <Link
            to="/account"
            className={`${
              activeTab === "profile"
                ? "bg-indigo-100 text-indigo-600 font-medium"
                : "hover:bg-indigo-50 hover:text-primary-blue"
            } p-3 pl-14`}
          >
            Profile Information
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            Manage Addresses
          </Link>
        </div>
        {/* <!-- account settings tab --> */}
        <div className="flex items-center gap-5 px-4 py-4">
          <CreditCardIcon className="h-7 text-indigo-500" />
          <p className="flex w-full justify-between font-medium text-indigo-600">
            PAYMENTS
          </p>
        </div>
        <div className="flex flex-col pb-3 border-b text-sm">
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue flex justify-between pr-6"
            to="/"
          >
            Wallet
            <span className="font-medium text-primary-green">₹0</span>
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            Saved UPI
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            Saved Cards
          </Link>
        </div>

        <div className="flex items-center gap-5 px-4 py-4">
          <SupportIcon className="h-7 text-indigo-500" />
          <p className="flex w-full justify-between font-medium text-indigo-600">
            Support 24x7
          </p>
        </div>
        <div className="flex flex-col pb-3 border-b text-sm">
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            Help Center
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            FAQ
          </Link>
        </div>
        {/* <!-- my stuff tab --> */}
      </div>
    </div>
  );
};

export default Sidebar;
