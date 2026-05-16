import React from "react";

const RightCardContent = ({ tag, index, color, intro }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between">
      <h2 className="bg-white/90 text-gray-900 rounded-full text-xl font-bold h-12 w-12 flex justify-center items-center">
        {index + 1}
      </h2>
      <div>
        <p className="text-xl text-shadow-2xs leading-relaxed text-white mb-12">
          {intro}
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: color }}
            className=" text-white font-medium px-8 py-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {tag}
          </button>
          <button
            style={{ backgroundColor: color }}
            className=" text-white font-medium px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
