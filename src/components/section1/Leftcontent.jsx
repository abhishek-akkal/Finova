import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

const Leftcontent = () => {
  return (
    <div className="h-[75vh] w-1/3 flex flex-col justify-between hover:translate-x-3 hover:-translate-y-3 transition-all duration-700">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default Leftcontent;
