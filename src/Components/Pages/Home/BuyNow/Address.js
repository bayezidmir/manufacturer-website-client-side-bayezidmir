import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Hooks/Firebase";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axiosPrivet from "../../../Api/axiosPrivet";
import toast from "react-hot-toast";
import Loading from "../../../Loading/Loading";
import { Navigate, useNavigate } from "react-router-dom";

const Address = ({ quantity, inputData, isDisabled, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const [inputError, setInputError] = useState("");
  const navigate = useNavigate();
  const { price, available, email, img, minOrder, name, _id } = inputData;

  // console.log(inputData);

  let setQuantity;
  let subTotal;

  if (!quantity) {
    setQuantity = minOrder;
    subTotal = parseInt(inputData?.price) * parseInt(minOrder);
  }
  if (quantity) {
    setQuantity = quantity;
    subTotal = parseInt(inputData?.price) * parseInt(quantity);
  }

  // console.log(setQuantity, subTotal);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loading />;
  }
  // console.log(user);
  const onSubmit = async (info) => {
    const orderInfo = {
      price,
      email: user.email,
      img,
      productName: name,
      productId: _id,
      userName: user?.displayName,
      quantity: setQuantity,
      totalPrice: subTotal,
      address: info.address,
      shippingAddress: info?.Shipping,
      phoneNumber: info?.phone,
    };
    const { data: order } = await axiosPrivet.post("/order", orderInfo);
    if (order?.insertedId) {
      toast.success("order success & please proceed to pay", { id: "order-success" });
      const info = parseInt(available) - setQuantity;
      const { data: update } = await axiosPrivet.patch(`/update-available/${_id}`, {
        available: info,
      });
      refetch();
      navigate(`/dashboard/my-order`);
    }
  };

  return (
    <>
      <div className="hero mb-10">
        <div className="hero-content  w-full justify-items-center grid  grid-cols-1 ">
          <div className="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body w-full">
                <h4 className="text-3xl mb-6 font-bold text-center">Your Address</h4>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={user?.displayName}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    value={user?.email}
                    placeholder="Email address"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    required
                    placeholder="Your Address"
                    className="input input-bordered"
                    {...register("address", {
                      required: { value: true, message: "Name is require" },
                    })}
                  />
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">{errors.address?.message}</span>
                  )}
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    required
                    placeholder="Shipping Address"
                    className="input input-bordered"
                    {...register("Shipping", {
                      required: { value: true, message: "Shipping Address is require" },
                    })}
                  />
                  {errors.Shipping?.type === "required" && (
                    <span className="label-text-alt text-red-500">{errors.Shipping?.message}</span>
                  )}
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    required
                    placeholder="Phone Number"
                    className="input input-bordered"
                    {...register("phone", {
                      required: { value: true, message: "phone number is require" },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Provide your phone number",
                      },
                    })}
                  />
                  {errors.phone?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">{errors.phone?.message}</span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button
                    disabled={isDisabled}
                    type="submit"
                    className="btn btn-primary disabled:text-[#ffffff8a] disabled:bg-[#545f5f]"
                  >
                    Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
