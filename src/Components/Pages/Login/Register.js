import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import auth from "../../Hooks/Firebase";
import useToken from "../../Hooks/useToken";
import Loading from "../../Loading/Loading";

const Register = () => {
  const [user, loading] = useAuthState(auth);
  const [createUserWithEmailAndPassword, cUser, cLoading, cError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  if (cLoading || loading || updating) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast.success("success", { id: "create-Success" });
  };

  if (token) {
    navigate(from, { replace: true });
  }

  console.log(watch("email"), watch("password"));
  return (
    <div className="grid grid-cols-1 min-h-screen items-center bg-base-200">
      <div className="w-full">
        <div className="hero  ">
          <div className="card z-0 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <p className="text-2xl text-center">Sign Up Your Account</p>
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text"> Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered"
                    {...register("name", {
                      required: { value: true, message: "Name is require" },
                      pattern: {
                        value: /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
                        message: "Provide a valid name",
                      },
                    })}
                  />
                  {errors.name?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">{errors.name?.message}</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
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
                </div>
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: { value: true, message: "Password is require" },
                      pattern: { value: /(?=.*?[A-Z])/, message: "Provide a valid password" },
                    })}
                  />
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                {cError && (
                  <span className="label-text-alt text-red-500 text-center">{cError?.message}</span>
                )}
              </div>
            </form>
            <hr className="py-[0.5px] bg-gray-300" />
            <div className="py-6 text-center">
              <p className="text-lg ">
                You have an account?{" "}
                <Link to="/login" className="text-primary font-semibold underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
