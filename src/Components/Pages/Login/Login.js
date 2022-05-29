import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import auth from "../../Hooks/Firebase";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";
import toast from "react-hot-toast";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, sUser, sLoading, sError] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || gUser || sUser);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const getEmail = getValues("email");

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  if (loading || gLoading || sLoading) {
    return <Loading />;
  }

  if (error || gError || sError) {
    console.log(error, gError, sError);
  }

  if (token) {
    toast.success("success", { id: "login-Success" });
    reset();
    navigate(from, { replace: true });
  }

  return (
    <div className="grid grid-cols-1 min-h-screen items-center bg-base-200">
      <div className="w-full">
        <div className="hero  ">
          <div className="card z-0 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <p className="text-2xl text-center">Log in to your account</p>
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
                  <label className="label">
                    <span
                      onClick={async () => {
                        await sendPasswordResetEmail(getEmail);
                        toast("Sent email");
                      }}
                      className="label-text-alt  link link-hover"
                    >
                      Forgot password?
                    </span>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                {sError && (
                  <span className="label-text-alt text-red-500 text-center">{sError.message}</span>
                )}
              </div>
            </form>
            <hr className="py-[0.5px] bg-gray-300" />
            <div className="py-6 text-center">
              <p className="text-lg ">
                New to T-collection?{" "}
                <Link to="/register" className="text-primary font-semibold underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <span
            onClick={() => signInWithGoogle()}
            className="text-center btn btn-link text-lg text-primary font-semibold underline"
          >
            Continue with Google
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
