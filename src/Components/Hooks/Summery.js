import React from "react";
import { FaTools, FaRegAddressCard, FaUsers } from "react-icons/fa";

const Summery = () => {
  return (
    <div className="mb-20 container mx-auto">
      <h1 className="text-4xl mb-10 text-center font-bold">summery</h1>
      <div className="grid lg:grid-cols-3 gap-10 justify-items-center text-center">
        <div class="card lg:max-w-lg px-16  bg-base-100 shadow-xl">
          <div class="card-body ">
            <div className="mx-auto">
              <FaUsers className="w-20 text-4xl text-center" />
            </div>
            <p className="text-2xl font-bold">2000+</p>
            <p>Happy Customers</p>
          </div>
        </div>
        <div class="card lg:max-w-lg px-20  bg-base-100 shadow-xl">
          <div class="card-body">
            <div className="mx-auto">
              <FaTools className="w-20 text-4xl text-center" />
            </div>
            <p className="text-2xl font-bold">100+</p>
            <p>Tools</p>
          </div>
        </div>
        <div class="card lg:max-w-lg px-20   bg-base-100 shadow-xl">
          <div class="card-body ">
            <div className="mx-auto">
              <FaRegAddressCard className="w-20 text-4xl text-center" />
            </div>
            <p className="text-2xl font-bold">1000+</p>
            <p>Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
