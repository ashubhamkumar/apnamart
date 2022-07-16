import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../layout/Loader";
import MetaTags from "../../utils/MetaTags";

const Account = () => {
  const navigate = useNavigate();

  const { userInfo, loading } = useSelector((state) => state.userLogin);
  const user = userInfo;
  useEffect(() => {
    if (userInfo === null) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <MetaTags title="My Profile" />

      {loading ? (
        <Loader />
      ) : (
        <>
          <main className="w-full mt-12 sm:mt-0">
            <div className="flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">
              <Sidebar activeTab={"profile"} />

              <div className="flex-1 overflow-hidden shadow bg-white">
                <div className="flex flex-col gap-12 m-4 sm:mx-8 sm:my-6">
                  <div className="flex flex-col gap-5 items-start">
                    <div className="font-medium text-lg flex justify-between items-center uppercase text-indigo-600">
                      <span>Personal Information</span>
                      <Link
                        to="/account/update"
                        className="text-sm text-primary-blue font-medium ml-8 cursor-pointer"
                      >
                        Edit
                      </Link>
                    </div>
                    <div
                      className="flex flex-col sm:flex-row items-center gap-3"
                      id="personalInputs"
                    >
                      <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={user.name}
                          className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- personal info --> */}

                  {/* <!-- email address info --> */}
                  <div className="flex flex-col gap-5 items-start">
                    <span className="font-medium text-lg">
                      Email Address
                      <Link
                        to="/account/update"
                        className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer"
                      >
                        Edit
                      </Link>
                      <Link
                        to="/password/update"
                        className="text-sm text-primary-blue font-medium ml-3 sm:ml-8"
                      >
                        Change Password
                      </Link>
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={user.email}
                          className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- email address info --> */}

                  {/* <!-- mobile number info --> */}
                  <div className="flex flex-col gap-5 items-start">
                    <span className="font-medium text-lg">
                      Mobile Number
                      <span
                        className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer"
                        id="mobEditBtn"
                      >
                        Edit
                      </span>
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          value="+919876543210"
                          className="text-sm outline-none border-none text-gray-500 cursor-not-allowed"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- mobile number info --> */}

                  {/* <!-- faqs --> */}
                  <div className="flex flex-col gap-4 mt-4">
                    <h1 className="font-bold text-2xl mb-2 text-indigo-500">
                      FAQ<span className="text-base ">s</span>
                    </h1>
                    <h2 className="text-lg font-medium text-gray-900">
                      What happens when I update my email address (or mobile
                      number)?
                    </h2>
                    <p className="text-sm text-gray-700">
                      Your login email id (or mobile number) changes, likewise.
                      You'll receive all your account related communication on
                      your updated email address (or mobile number).
                    </p>

                    <h2 className="text-lg font-medium">
                      When will my apnaMart account be updated with the new
                      email address (or mobile number)?
                    </h2>
                    <p className="text-sm">
                      It happens as soon as you confirm the verification code
                      sent to your email (or mobile) and save the changes.
                    </p>

                    <h2 className="text-lg font-medium">
                      What happens to my existing apnaMart account when I update
                      my email address (or mobile number)?
                    </h2>
                    <p className="text-sm">
                      Updating your email address (or mobile number) doesn't
                      invalidate your account. Your account remains fully
                      functional. You'll continue seeing your Order history,
                      saved information and personal details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Account;
