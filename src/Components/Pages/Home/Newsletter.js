import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-cover bg-no-repeat py-20 ">
      <div className="text-center">
        <h4 className="text-5xl text-black mb-10">Newsletter</h4>

        <div className="flex justify-center">
          <div className="form-control ">
            <label className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered lg:w-[542px] md:w-[400px]"
              />
              <button className="btn btn-primary">SUBSCRIBE</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
