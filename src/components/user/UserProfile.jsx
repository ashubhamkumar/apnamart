import React from "react";

const UserProfile = ({ data }) => {
  return (
    <div className="py-4 rounded-b-md bg-white">
      <dl className="text-base">
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Full name</dt>
          <dd className="mt-1  capitalize text-gray-900 sm:mt-0 sm:col-span-2">
            {data.name}
          </dd>
        </div>
        <div className="bg-indigo-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className=" font-medium text-gray-500">Email address</dt>
          <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
            {data.email}
          </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className=" font-medium text-gray-500">Phone number</dt>
          <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
            {data.phone}
          </dd>
        </div>
        <div className="bg-indigo-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className=" font-medium text-gray-500">Address</dt>
          <dd className="mt-1  text-gray-900   capitalize sm:mt-0 sm:col-span-2">
            <p>{data.address.streetAddress}</p>
            <p>{data.address.city}</p>
            <p>{data.address.state}</p>
            <p>{data.address.country}</p>
            <p>{data.address.zip}</p>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default UserProfile;
