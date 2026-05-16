import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black/90 backdrop-blur-md flex items-center justify-between py-10 px-20 h-20">
      <h4 className="bg-gray-700 text-white font-medium py-2 px-5 rounded-full uppercase cursor-pointer hover:bg-gray-600  hover:scale-105 transition-all duration-300">
        Target Audience
      </h4>

      <button className="bg-gray-700 text-white font-medium py-2 px-5 rounded-full uppercase tracking-wider text-sm cursor-pointer hover:bg-gray-600 hover:scale-105 transition-all duration-300">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
