import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  UserCircleIcon,
  SearchIcon,
  ShoppingCartIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import AuthContext from "../../store/authContext";
import UserContext from "../../store/userContext";
//categories icons
import mobiles from "../../assets/images/Categories/phone.png";
import fashion from "../../assets/images/Categories/fashion.png";
import electronics from "../../assets/images/Categories/electronics.png";
import home from "../../assets/images/Categories/home.png";
import appliances from "../../assets/images/Categories/appliances.png";
import furniture from "../../assets/images/Categories/furniture.png";
import beauty from "../../assets/images/Categories/beauty.png";
import grocery from "../../assets/images/Categories/grocery.png";
const categories = [
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
  { name: "My Profile", to: "/" },
  { name: "Orders", to: "/" },
  { name: "Coupons", to: "/" },
  { name: "Notifications", to: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const isAuth = authContext.isLoggedIn;
  return (
    <>
      <Disclosure as="nav" className="bg-indigo-400">
        {({ open }) => (
          <>
            <div className="max-w-app  mx-auto px-2">
              <div className="relative flex py-2 flex-col md:flex-row items-center justify-between h-auto space-y-2 md:space-y-0">
                <div className="flex w-full justify-between items-center">
                  <div className="inset-y-0 left-0 flex items-center md:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <div className="flex-shrink-0 flex items-center">
                    <Link
                      to="/"
                      className="text-white font-bold text-xl sm:text-2xl lg:text-4xl cursor-pointer"
                    >
                      ApnaMart
                    </Link>
                  </div>
                  <div className="md:flex-1 hidden  sm:mx-6 md:flex sm:w-0 md:w-full items-center">
                    <div className=" hidden sm:flex  justify-center mx-5 px-4 items-center bg-white rounded-md shadow-md cursor-pointer flex-grow border-0">
                      <input
                        type="text"
                        placeholder="Search for puroducts, brands and more"
                        className="mt-0 block w-full  flex-grow flex-shrink px-0.5 border-0 focus:ring-0 focus:outline-none"
                      />
                      <SearchIcon className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex  space-x-2 flex-row items-center pr-2   sm:pr-0">
                    {/* Profile dropdown */}
                    <div className="hidden sm:flex">
                      {!isAuth ? (
                        <div className=" text-indigo-600  font-semibold relative bg-white p-1.5 px-6 rounded-md shadow-sm">
                          <Link to="/login">Login</Link>
                        </div>
                      ) : (
                        <>
                          <Menu as="div" className=" relative">
                            <div>
                              <Menu.Button className=" bg-white flex justify-between items-center text-base font-semibold text-indigo-600 p-1.5 px-4 space-x-2 rounded-md shadow">
                                <p className="">
                                  {userContext.name || "Welcome User"}
                                </p>
                                {userContext.profileImageUrl === "" ? (
                                  <>
                                    <UserCircleIcon className="w-7 h-7 " />
                                  </>
                                ) : (
                                  <img
                                    src={userContext.profileImageUrl}
                                    className="w-8 h-8 rounded-full"
                                    alt="avatar"
                                  />
                                )}
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
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={uuidv4()}>
                                    {({ active }) => (
                                      <Link
                                        to={item.to}
                                        className={classNames(
                                          active ? "bg-indigo-200" : "",
                                          "block px-4 py-2 text-base text-gray-700 "
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                                <Menu.Item>
                                  <div
                                    onClick={authContext.logout}
                                    className="block px-4 py-2 text-sm bg-indigo-400 text-gray-700"
                                  >
                                    Sign out
                                  </div>
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </>
                      )}
                    </div>
                    <div className=" hidden sm:flex">
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className=" flex text-base font-semibold  items-center text-white rounded-full ">
                            <p>More</p>
                            <ChevronDownIcon
                              className="-mr-1 ml-2 h-5 w-5"
                              aria-hidden="true"
                            />
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
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Contact us
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Terms & Conditions
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  pravicy & policy
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <div className=" text-white relative flex items-center p-2">
                      <span className="absolute top-0 right-0  h-4 w-4 px-2  text-center rounded-full font-bold ">
                        0
                      </span>
                      <ShoppingCartIcon
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:hidden w-full">
                  <div className="flex  grow justify-center md:mx-5 px-4 items-center bg-white rounded-md  lg:min-w-xl lg:max-w-2xl border-0">
                    <input
                      type="text"
                      placeholder="Search for puroducts, brands and more"
                      className="mt-0 flex w-full px-0.5 border-0 focus:ring-0 "
                    />
                    <SearchIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* <Categories /> */}
                {categories.map((item) => (
                  <Disclosure.Button
                    key={uuidv4()}
                    as="a"
                    to={`/products?category=${item.name}`}
                    className={classNames(
                      "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                {isAuth === false ? (
                  <>
                    <div className="flex items-center justify-between px-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {userContext.profileImageUrl === "" ? (
                            <>
                              <UserCircleIcon className="w-7 h-7 " />
                            </>
                          ) : (
                            <img
                              src={userContext.profileImageUrl}
                              className="w-8 h-8 rounded-full"
                              alt="avatar"
                            />
                          )}
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">
                            {userContext.name || " Hello Guest"}
                          </div>
                          <div className="text-sm font-medium leading-none text-white">
                            {userContext.email || "devshubhamyadav@gmail.com"}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={authContext.logout}
                        className="block px-2 py-1 rounded-md text-lg font-semibold text-black hover:text-white hover:bg-gray-700 border-gray-900 border-2"
                      >
                        <LogoutIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      aria-hidden="true"
                      to="/auth/Signin"
                      className=" mx-2 flex items-center justify-center px-3 py-1 border bg-white border-gray-700 rounded-md shadow-sm text-lg font-semibold text-gray-800"
                    >
                      Sign in
                    </Link>
                  </>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Categories Menu */}
      <div className=" bg-indigo-100">
        <div className="max-w-app mx-auto hidden md:flex justify-between items-center">
          {categories.map((item) => (
            <Link
              to={`/products?category=${item.name}`}
              className="flex flex-col gap-1 items-center p-2 group"
              key={uuidv4()}
            >
              <div className="h-16 w-16">
                <img
                  draggable="false"
                  className="h-full w-full object-contain"
                  src={item.icon}
                  alt={item.name}
                />
              </div>
              <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Header;
