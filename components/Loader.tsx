import React from "react";

const Loader = () => {
  return (
    <div
      className="bg-[#181818] flex items-center
    justify-center w-full h-screen"
    >
      <div className="loader">
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
