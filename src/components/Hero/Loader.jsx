import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-header rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
