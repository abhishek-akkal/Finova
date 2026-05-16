import React from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

const Page1content = (props) => {
  console.log(props);

  return (
    <div className=" flex items-center gap-10 px-20 h-[90vh]">
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  );
};

export default Page1content;
