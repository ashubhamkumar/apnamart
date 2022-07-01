import React from "react";
import ReactLoading from "react-loading";
const Loader = () => {
  return (
    <div className="w-full h-screen  flex  justify-center items-center">
      <div className="text-center flex-col">
        <ReactLoading
          type="spin"
          color="#6366f1"
          height={"100%"}
          width={"100%"}
        />
        <p className="text-4xl font-bold text-indigo-500">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
