import React, { useState } from "react";
import toast from "react-hot-toast";

const SelectProduct = ({ handleSubmitFrom, error, quantity, data }) => {
  const { available, description, price, img, name, minOrder, _id } = data;
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputError, setInputError] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");

  return (
    <div className="container mx-auto my-24">
      <div className="grid h-full md:grid-cols-2 lg:grid-cols-3  gap-5 items-center ">
        <div className="w-full flex justify-center  lg:justify-end">
          <img className="lg:w-[500px]" src={img} alt="" />
        </div>

        <div className="lg:col-span-2  flex justify-center">
          <div>
            <table className="max-w-lg border-separate border border-slate-400 ">
              <thead>
                <tr>
                  <th colSpan={"2"} className="border p-2 border-slate-300 ">
                    Product Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 border-slate-300 ">Product Name</td>
                  <td className="border p-2 border-slate-300 ">{name}</td>
                </tr>
                <tr>
                  <td className="border p-2 border-slate-300 ">Price</td>
                  <td className="border p-2 border-slate-300 ">{price}</td>
                </tr>
                <tr>
                  <td className="border p-2 border-slate-300 ">Min-Order</td>
                  <td className="border p-2 border-slate-300 ">{minOrder}</td>
                </tr>
                <tr>
                  <td className="border p-2 border-slate-300 ">Quantity</td>
                  <td className="border p-2 border-slate-300 ">
                    {quantity ? quantity : `${minOrder} or (Min-order-100)`}
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 border-slate-300 ">Available</td>
                  <td className="border p-2 border-slate-300 ">{available}</td>
                </tr>
                <tr>
                  <td className="border p-2 border-slate-300 ">Description</td>
                  <td className="border p-2 border-slate-300 ">{description}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-12">
              <form onSubmit={handleSubmitFrom} className="">
                <div className="form-control">
                  <label className="input-group">
                    <input
                      type="text"
                      name="quantity"
                      onChange={(e) => setInputQuantity(e.target.value)}
                      placeholder={`Enter quantity amount ( Min-order ${minOrder} )`}
                      className="input input-bordered w-full"
                    />
                    <button
                      disabled={parseInt(inputQuantity) < parseInt(minOrder)}
                      type="submit"
                      className="btn btn-primary"
                    >
                      submit
                    </button>
                  </label>
                  {error && <span className="label-text-alt text-red-500">{error}</span>}
                  {inputError && <span className="label-text-alt text-red-500">{inputError}</span>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProduct;
