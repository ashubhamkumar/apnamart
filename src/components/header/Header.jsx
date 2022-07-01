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
                      className="cursor-pointer text-xl font-bold text-white sm:text-2xl lg:text-4xl"
                    >
                      ApnaMart
                    </Link>
                  </div>
                  <div className="hidden items-center  sm:mx-6 sm:w-0 md:flex md:w-full md:flex-1">
                    <div className=" mx-5 hidden  flex-grow cursor-pointer items-center justify-center rounded-md border-0 bg-white px-4 shadow-md sm:flex">
                      <input
                        type="text"
                        placeholder="Search for puroducts, brands and more"
                        className="mt-0 block w-full  flex-shrink flex-grow border-0 px-0.5 focus:outline-none focus:ring-0"
                      />
                      <SearchIcon className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex  flex-row items-center space-x-2 pr-2   sm:pr-0">
                    {/* Profile dropdown */}
                    <div className="hidden sm:flex">
                      {!isAuth ? (
                        <div className=" relative  rounded-md bg-white p-1.5 px-6 font-semibold text-indigo-600 shadow-sm">
                          <Link to="/auth/signin">Login</Link>
                        </div>
                      ) : (
                        <>
                          <Menu as="div" className=" relative">
                            <div>
                              <Menu.Button className=" flex items-center justify-between space-x-2 rounded-md bg-white p-1.5 px-4 text-base font-semibold text-indigo-600 shadow">
                                <p className="">
                                  {userContext.name || "Welcome User"}
                                </p>
                                {userContext.profileImageUrl ? (
                                  <>
                                    <UserCircleIcon className="h-7 w-7 " />
                                  </>
                                ) : (
                                  <img
                                    src={userContext.profileImageUrl}
                                    className="h-8 w-8 rounded-full"
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
                              <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                    className="block bg-indigo-400 px-4 py-2 text-sm text-gray-700"
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
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className=" flex items-center rounded-full  text-base font-semibold text-white ">
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
                          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                <div
                                  onClick={authContext.logout}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </div>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <div className=" relative flex items-center p-2 text-white">
                      <span className="absolute top-0 right-0  h-4 w-4 rounded-full  px-2 text-center font-bold ">
                        0
                      </span>
                      <ShoppingCartIcon
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:hidden">
                  <div className="lg:min-w-xl  flex grow items-center justify-center rounded-md border-0 bg-white  px-4 md:mx-5 lg:max-w-2xl">
                    <input
                      type="text"
                      placeholder="Search for puroducts, brands and more"
                      className="mt-0 flex w-full border-0 px-0.5 focus:ring-0 "
                    />
                    <SearchIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {/* <Categories /> */}
                {categories.map((item) => (
                  <Disclosure.Button
                    key={uuidv4()}
                    as="a"
                    to={`/products?category=${item.name}`}
                    className={classNames(
                      "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                {isAuth ? (
                  <>
                    <div className="flex items-center justify-between px-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {userContext.profileImageUrl === "" ? (
                            <>
                              <UserCircleIcon className="h-7 w-7 " />
                            </>
                          ) : (
                            <img
                              src={userContext.profileImageUrl}
                              className="h-8 w-8 rounded-full"
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
                        className="block rounded-md border-2 border-gray-900 px-2 py-1 text-lg font-semibold text-black hover:bg-gray-700 hover:text-white"
                      >
                        <LogoutIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      aria-hidden="true"
                      to="/auth/Signin"
                      className=" mx-2 flex items-center justify-center rounded-md border border-gray-700 bg-white px-3 py-1 text-lg font-semibold text-gray-800 shadow-sm"
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
    </>
  );
};
export default Header;
