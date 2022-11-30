import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  UserCircleIcon,
  SearchIcon,
  ShoppingCartIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import {
  BellIcon,
  ChatAltIcon,
  CollectionIcon,
  TicketIcon,
} from "@heroicons/react/solid";

import { logout } from "../../reduxStore/actions/userAction";
//categories icons
import { useSelector, useDispatch } from "react-redux";
import mobiles from "../../assets/images/Categories/phone.png";
import fashion from "../../assets/images/Categories/fashion.png";
import electronics from "../../assets/images/Categories/electronics.png";
import home from "../../assets/images/Categories/home.png";
import appliances from "../../assets/images/Categories/appliances.png";
import furniture from "../../assets/images/Categories/furniture.png";
import beauty from "../../assets/images/Categories/beauty.png";
import grocery from "../../assets/images/Categories/grocery.png";
import { toast } from "react-toastify";
export const categories = [
  {
    name: "Mobiles",
    icon: mobiles,
  },
  {
    name: "Fashion",
    icon: fashion,
  },
  {
    name: "Electronics",
    icon: electronics,
  },
  {
    name: "Home",
    icon: home,
  },
  {
    name: "Appliances",
    icon: appliances,
  },
  {
    name: "Furniture",
    icon: furniture,
  },
  {
    name: "Beauty,Toys & more",
    icon: beauty,
  },
  {
    name: "Grocery",
    icon: grocery,
  },
];
const userNavigation = [
  {
    name: "My Profile",
    to: "/account",
    icon: <UserCircleIcon className="h-5 w-5 text-indigo-600  " />,
  },
  {
    name: "Orders",
    to: "/orders",
    icon: <CollectionIcon className="h-5 w-5  text-indigo-600 " />,
  },
  {
    name: "Coupons",
    to: "/",
    icon: <TicketIcon className="h-5 w-5  text-indigo-600 " />,
  },
  {
    name: "Contact Us",
    to: "/",
    icon: <ChatAltIcon className="h-5 w-5 text-indigo-600 " />,
  },
  {
    name: "Notifications",
    to: "/",
    icon: <BellIcon className="h-5 w-5 text-indigo-600 " />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "") {
      if (keyword.trim()) {
        navigate(`/products/${keyword}`);
      } else {
        navigate("/products");
      }
    } else {
      toast.warn("Please enter Search Keyword");
    }
  };

  const { userInfo } = useSelector((state) => state.userLogin);
  const users = userInfo;
  const { cartItems } = useSelector((state) => state.cart);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="bg-indigo-600">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-indigo-800 p-2">
                <BellIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">
                  Big news! We're excited to announce product demo here.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://youtu.be/KTmhVbybIcs"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <Disclosure
        as="nav"
        className="sticky right-0  top-0 left-0 z-10  bg-indigo-400"
      >
        {({ open }) => (
          <>
            <div className=" relative mx-auto max-w-app  sm:py-2 bg-indigo-400 px-2">
              <div className=" flex h-auto flex-col items-center justify-between space-y-2 py-2 md:flex-row md:space-y-0">
                <div className="flex w-full items-center justify-between">
                  <div className="inset-y-0 left-0 flex items-center md:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      {open ? (
                        <XIcon className="block h-6 w-6 " aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <Link
                      to="/"
                      className="cursor-pointer  text-3xl font-bold text-white sm:text-3xl lg:text-4xl"
                    >
                      ApnaMart
                    </Link>
                  </div>
                  <div className="hidden items-center  sm:mx-6 sm:w-0 md:flex md:w-full md:flex-1">
                    <form
                      onSubmit={handleSubmit}
                      className=" mx-5 hidden  flex-grow cursor-pointer items-center justify-center rounded-md border-0 bg-white pl-4 shadow  sm:flex"
                    >
                      <input
                        name="keyword"
                        value={keyword}
                        onChange={(e) => {
                          setKeyword(e.target.value);
                        }}
                        type="text"
                        placeholder="Search for puroducts, brands and more"
                        className="mt-0 block w-full  flex-shrink flex-grow border-0 px-0.5 focus:outline-none focus:ring-0"
                      />
                      <button
                        type="submit"
                        className="Shadow rounded-r-md px-4 py-2.5 bg-gray-600 text-white focus:outline-none"
                      >
                        <SearchIcon className="h-5 w-5 " />
                      </button>
                    </form>
                  </div>
                  <div className="flex  flex-row items-center space-x-6 pr-2 capitalize  sm:pr-0">
                    {/* Profile dropdown */}
                    <div className="hidden sm:flex">
                      {!users ? (
                        <div className=" relative  rounded-md bg-white p-1.5 px-6 font-semibold text-indigo-600 shadow-sm">
                          <Link to="/auth/signin">Login</Link>
                        </div>
                      ) : (
                        <>
                          <Menu as="div" className=" relative">
                            <div>
                              <Menu.Button className=" flex items-center capitalize justify-between space-x-2 rounded-md bg-white p-1.5 px-5 text-base font-semibold text-indigo-600 shadow">
                                <p>{users.name || " Hello Guest"}</p>
                                <UserCircleIcon className="h-7 w-7 " />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute capitalize right-0 mt-4 w-48 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={uuidv4()}>
                                    {({ active }) => (
                                      <Link
                                        to={item.to}
                                        className={classNames(
                                          active ? "bg-indigo-200" : "",
                                          "flex items-center space-x-2 px-4 py-2 text-base "
                                        )}
                                      >
                                        {item.icon}
                                        <span className="">{item.name}</span>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                                <Menu.Item>
                                  <div
                                    onClick={logoutHandler}
                                    className="  flex border-t space-x-2 bg-indigo-400 rounded-b-md px-4 py-2 text-sm text-white"
                                  >
                                    <LogoutIcon className="h-5" />
                                    <span> Sign out</span>
                                  </div>
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </>
                      )}
                    </div>

                    <Link
                      to="/cart"
                      className=" relative flex items-center  p-2 text-white"
                    >
                      {cartItems.length > 0 && (
                        <p className="absolute -top-1 -right-2 h-5 w-5  rounded-full  text-indigo-600 bg-white px-2.5  font-semibold ">
                          <span className=" flex items-center justify-center text-center">
                            {" "}
                            {cartItems.length}
                          </span>
                        </p>
                      )}
                      <ShoppingCartIcon
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex w-full md:hidden">
                  <form
                    onSubmit={handleSubmit}
                    className="lg:min-w-xl flex grow items-center justify-center rounded-md border-0 bg-white  shadow pl-4 md:mx-5 lg:max-w-2xl"
                  >
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) => {
                        setKeyword(e.target.value);
                      }}
                      name="keyword"
                      placeholder="Search for puroducts, brands and more"
                      className="mt-0 flex w-full border-0 px-0.5 focus:ring-0 "
                    />
                    <button
                      type="submit"
                      className="Shadow-lg  rounded-r-md px-4 py-2.5 bg-gray-600 text-white focus:outline-none"
                    >
                      <SearchIcon className="h-5 w-5 " />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <Disclosure.Panel className=" relative md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {/* <Categories /> */}
                {categories.map((item) => (
                  <Disclosure.Button
                    key={uuidv4()}
                    as="a"
                    href={`/products?category=${item.name}`}
                    className="text-white hover:bg-gray-700 cursor-pointer capitalize block rounded-md px-3  text-lg font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3 capitalize">
                {users ? (
                  <>
                    <Disclosure.Button
                      as="a"
                      href="/account"
                      className="flex items-center justify-between px-4"
                    >
                      <div className="flex items-center">
                        <div>
                          <p className="text-lg font-bold leading-none ">
                            {users.name || " Hello Guest"}
                          </p>
                          <p className="text-sm font-medium leading-none ">
                            {users.email || "guest@gmail.com"}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={logoutHandler}
                        className="block rounded-md border-2 border-gray-900 px-2 py-1 text-lg font-semibold text-black hover:bg-gray-700 hover:text-white"
                      >
                        <LogoutIcon className="h-6 w-6" />
                      </button>
                    </Disclosure.Button>
                    {userNavigation.map((item) => (
                      <div key={uuidv4()}>
                        <Disclosure.Button
                          as="a"
                          href={item.to}
                          className="flex items-center space-x-2 px-4 py-2 text-base "
                        >
                          {item.icon}
                          <span className="">{item.name}</span>
                        </Disclosure.Button>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <Disclosure.Button
                      as="a"
                      href="/auth/Signin"
                      className=" mx-2 flex items-center justify-center rounded-md border border-gray-700 bg-white px-3 py-1 text-lg font-semibold text-gray-800 shadow-sm"
                    >
                      Sign in
                    </Disclosure.Button>
                  </>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
export default Header;
