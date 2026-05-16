import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = ({ user, index }) => {
  return (
    <div className="group h-full w-80 shrink-0  overflow-hidden relative rounded-4xl cursor-pointer hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300">
      <img
        className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
        src={user.img}
        alt="Working professionals"
      />
      <RightCardContent
        index={index}
        tag={user.tag}
        color={user.color}
        intro={user.intro}
      />
    </div>
  );
};

export default RightCard;
