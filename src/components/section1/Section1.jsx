import React from "react";
import Navbar from "./Navbar";
import Page1content from "./Page1content";

const Section1 = (props) => {
  console.log(props);

  return (
    <div className="h-screen w-full">
      <div className="h-full w-full ">
        <Navbar />
        <Page1content users={props.users} />
      </div>
    </div>
  );
};

export default Section1;
