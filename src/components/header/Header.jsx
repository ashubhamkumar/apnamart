import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  UserCircleIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import AuthContext from "../../store/authContext";
import UserContext from "../../store/userContext";
const navigation = [
  { name: "Dashboard", to: "/" },
  { name: "Team", to: "/" },
  { name: "Projects", to: "/" },
  { name: "Calendar", to: "/" },
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
    <Disclosure as="nav" className="bg-indigo-400">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-36">
            <div className="relative flex py-2 flex-col md:flex-row items-center justify-between h-auto space-y-2 md:space-y-0">
              <div className="flex w-full justify-between items-center">
                <div className="inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6 " aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-white font-bold text-3xl">ApnaMart</h1>
                </div>
                <div className="md:flex-1 hidden  sm:ml-6 md:flex sm:w-0 md:w-full items-center">
                  <div className="flex items-center justify-center ">
                    {/* <Categories /> */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-indigo-700">
                          Categories
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
                        <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white  ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {navigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.to}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className=" hidden sm:flex  justify-center mx-5 px-4 items-center bg-white rounded-md shadow-md cursor-pointer flex-grow border-0">
                    <input
                      type="text"
                      placeholder="Search for puroducts, brands and more"
                      className="mt-0 block w-full  flex-grow flex-shrink px-0.5 border-0 focus:ring-0 focus:outline-none"
                    />
                    <SearchIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                </div>
                <div className="flex inset-y-0 right-0 space-x-6 flex-row items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  {!isAuth ? (
                    <div className=" text-indigo-600  font-semibold relative bg-white p-1.5 px-4 rounded-md shadow-sm">
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
                              <Menu.Item key={item.name}>
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
                  <div className=" hidden sm:flex">
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className=" flex text-base font-semibold text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          More
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
                  <button
                    type="button"
                    className=" p-1 rounded-full text-gray-100 hover:text-white  "
                  >
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="flex md:hidden w-full">
                <div className="flex  grow justify-center md:mx-5 px-4 items-center bg-white rounded-md  lg:min-w-xl lg:max-w-2xl border-0">
                  <input
                    type="text"
                    placeholder="Search for puroducts, brands and more"
                    className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 
                    focus:ring-0 
                  "
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                  <SearchIcon className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <Categories /> */}
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  to={item.to}
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
              <div className="flex items-center px-5">
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
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {userContext.email}
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Header;
