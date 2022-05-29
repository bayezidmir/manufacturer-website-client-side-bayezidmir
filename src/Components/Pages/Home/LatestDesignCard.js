import React from "react";

const LatestDesignCard = ({ children }) => {
  return (
    <div className="card max-w-lg mx-auto rounded-none z-10 first-letter: w-full bg-base-100 shadow-xl ">
      <figure className=" ">
        <img src={children} alt="Shoes" className="" />
      </figure>
    </div>
  );
};

export default LatestDesignCard;
