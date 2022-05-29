import { async } from "@firebase/util";
import { data } from "autoprefixer";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivet from "../../Api/axiosPrivet";
import Fetcher from "../../Api/Fetcher";
import auth from "../../Hooks/Firebase";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const [minOrderError, setMinOrderError] = useState("");
  const [availableError, setAvailableError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (info) => {
    if (!info) {
      toast.error("please provide information", { id: "wrong-information" });
      return;
    }
    if (info.available < 100) {
      return setAvailableError("minimum 100");
    } else {
      setAvailableError(" ");
    }
    if (info.minOrder < 100) {
      return setMinOrderError("minimum 100");
    } else {
      setMinOrderError(" ");
    }

    const { data } = await axiosPrivet.post("/add-product", info);
    if (data?.acknowledged) {
      toast.success("success", { id: "success-add" });
      reset();
    }
  };

  return (
    <>
      <div className="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body w-full">
            <div className="form-control">
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered text-black"
                {...register("name", {
                  required: { value: true, message: "Product name is require" },
                })}
              />
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors.name?.message}</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Email address"
                className="input input-bordered text-black"
                {...register("email", {
                  required: { value: true, message: "Email is require" },
                  pattern: {
                    value:
                      /^[\w-']+(\.[\w-']+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
                    message: "Provide a valid email",
                  },
                })}
              />
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">{errors.email?.message}</span>
              )}
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors.email?.message}</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                required
                placeholder="price"
                className="input input-bordered text-black"
                {...register("price", {
                  required: { value: true, message: "Price is require" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Provide an valid price amount ",
                  },
                })}
              />
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors.price?.message}</span>
              )}
              {errors.price?.type === "pattern" && (
                <span className="label-text-alt text-red-500">{errors.price?.message}</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                required
                placeholder="Available"
                className="input input-bordered text-black"
                {...register("available", {
                  required: { value: true, message: "available is require" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Provide an valid amount number",
                  },
                })}
              />
              {errors.available?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors.available?.message}</span>
              )}
              {errors.available?.type === "pattern" && (
                <span className="label-text-alt text-red-500">{errors.available?.message}</span>
              )}
              {availableError && (
                <span className="label-text-alt text-red-500">{availableError}</span>
              )}
            </div>

            {/* Minimum Order */}
            <div className="form-control">
              <input
                type="text"
                required
                placeholder="Minimum Order"
                className="input input-bordered text-black"
                {...register("minOrder", {
                  required: { value: true, message: "Minimum order is require" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Provide an valid amount number",
                  },
                })}
              />
              {errors.minOrder?.type === "pattern" && (
                <span className="label-text-alt text-red-500">{errors.minOrder?.message}</span>
              )}
              {errors.minOrder?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors.minOrder?.message}</span>
              )}
              {minOrderError && (
                <span className="label-text-alt text-red-500">{minOrderError}</span>
              )}
            </div>

            {/*Product Image */}
            <div className="form-control">
              <input
                type="text"
                required
                placeholder="Product Image URL"
                className="input input-bordered text-black"
                {...register("img", {
                  required: { value: true, message: "image URL is require" },
                })}
              />
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors.img?.message}</span>
              )}
            </div>

            {/* product description */}
            <div className="form-control">
              <input
                type="text"
                required
                placeholder="Product description"
                className="input input-bordered text-black"
                {...register("description", {
                  required: { value: true, message: "Product description is require" },
                })}
              />
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors.img?.message}</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
