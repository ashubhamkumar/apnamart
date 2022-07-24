import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../layout/Loader";
import MetaTags from "../../utils/MetaTags";
import UpdateProfile from "./UpdateProfile";
import UserProfile from "./UserProfile";

const Account = () => {
  const [isEditing, setisEditing] = useState(false);
  const startEditingHandler = () => {
    setisEditing(true);
  };
  const stopEditingHandler = () => {
    setisEditing(false);
  };
  const navigate = useNavigate();
  const { userInfo, loading } = useSelector((state) => state.userLogin);
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
          <main className="max-w-full mx-auto px-4 sm:px-6 md:py-10">
            <div className="w-full shadow-md my-6 rounded-md ">
              <div className=" px-4 sm:px-10 py-4 md:py-7 rounded-t-md bg-indigo-200 ">
                <div className=" flex  items-center justify-between">
                  <Link
                    to="/my-account"
                    className="text-base sm:text-lg md:text-xl text-indigo-600 lg:text-2xl font-bold leading-normal "
                  >
                    Personal Information
                  </Link>
                  <div>
                    <button
                      onClick={startEditingHandler}
                      className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 shadow-md bg-white focus:outline-none rounded"
                    >
                      <p className="text-sm font-medium leading-none text-indigo-600">
                        Update Profile
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              {isEditing ? (
                <UpdateProfile onCancel={stopEditingHandler} />
              ) : (
                <UserProfile data={userInfo} />
              )}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Account;
