import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";

const Rightcontent = (props) => {
  console.log(props);

  return (
    <div
      id="right"
      className="h-[75vh] w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto  scrollbar-none scroll-smooth rounded-3xl"
    >
      {props.users.map(function (user, index) {
        return <RightCard key={index} index={index} user={user} />;
      })}
    </div>
  );
};

export default Rightcontent;
