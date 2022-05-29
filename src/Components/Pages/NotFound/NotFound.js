import React from "react";
import img from "../../Assets/banner/404.gif";
const NotFound = () => {
  return (
    <div className="h-screen ">
      <div className="flex h-screen">
        <img className="w-screen" src={img} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
