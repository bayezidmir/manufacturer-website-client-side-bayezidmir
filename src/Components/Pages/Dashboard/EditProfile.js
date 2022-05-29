import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import emptyUser from "../../Assets/empty-user.png";
import auth from "../../Hooks/Firebase";
import { FaEdit, FaPlus } from "react-icons/fa";
import { async } from "@firebase/util";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import axiosPrivet from "../../Api/axiosPrivet";
import toast from "react-hot-toast";

const EditProfile = () => {
  const [user] = useAuthState(auth);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [nameFieldDisabled, setNameFieldDisabled] = useState(false);
  const [imgFieldDisabled, setImgFieldDisabled] = useState(false);
  const [addInputItem, setAddInputItem] = useState(false);
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const { data, refetch } = useQuery("Update-profileUser", () =>
    axiosPrivet.get(`/update-profileUser/${user?.email}`)
  );

  const handleUpdateName = async () => {
    await updateProfile({ displayName });
    setNameFieldDisabled(!nameFieldDisabled);
    setDisplayName(" ");
  };

  const handleUpdatePhoto = async () => {
    await updateProfile({ photoURL });
    setImgFieldDisabled(!imgFieldDisabled);
    setPhotoURL(" ");
  };

  if (updating) {
    return <Loading />;
  }

  const onSubmit = async (input) => {
    const info = {
      phoneNumber: input.phoneNumber,
      photoURL: user.photoURL,
    };

    const { data: item } = await axiosPrivet.put(`/update-user/${user?.email}`, info);
    if (item.modifiedCount || item.acknowledged) {
      toast.success("updated success", { id: "updated-success" });
      setAddInputItem(!addInputItem);
      refetch();
      reset();
    }
  };

  return (
    <div className="lg:w-[700px]">
      <div>
        <h3 className="text-4xl text-center ">Update Profile</h3>
      </div>

      <hr className="py-[.4px] mt-5 mb-10 bg-slate-200" />
      <div className="grid grid-cols-3">
        <div className="flex col-span-1 justify-center flex-col">
          {user?.photoURL ? (
            <img
              className="w-48 h-48 rounded-full mx-auto object-cover"
              src={user?.photoURL}
              alt=""
            />
          ) : user?.user?.photoURL ? (
            <img
              className="w-48 h-48 rounded-full mx-auto object-cover"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <img className="w-48 h-48 mx-auto object-cover " src={emptyUser} alt="" />
          )}
          <p className="text-xl text-center">{user?.displayName}</p>
          <button
            onClick={() => setImgFieldDisabled(!imgFieldDisabled)}
            className="btn text-white rounded-3xl border-0 mt-3 hover:bg-[rgba(255,42,127,0.75)] bg-[rgb(255,42,126)]"
          >
            Update Photo
          </button>
        </div>
        <div className="col-span-2 lg:ml-10 ml-6">
          <div className="my-5 flex justify-between">
            <div>
              <p className="">Full Name</p>
              <p className="text-2xl">{user?.displayName}</p>
            </div>
            <div>
              <FaEdit
                onClick={() => setNameFieldDisabled(!nameFieldDisabled)}
                className="text-white cursor-pointer"
              ></FaEdit>
            </div>
          </div>
          <div className="mb-5 ">
            <p className="">Email Address</p>
            <p className="text-xl">{user?.email}</p>
          </div>
          <div className="mb-5">
            {data?.data?.phoneNumber && <p className="">Phone Number</p>}

            <p className="text-xl">{data?.data?.phoneNumber}</p>
          </div>
          <div className="flex justify-end items-center">
            <span>Add Number</span>
            <FaPlus
              onClick={() => setAddInputItem(!addInputItem)}
              className="text-white ml-3 cursor-pointer"
            />
          </div>
          <div>
            {nameFieldDisabled && (
              <div className="">
                <div class="form-control ">
                  <label class="input-group">
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Full Name"
                      class="input text-black input-bordered w-full"
                    />
                    <span onClick={(e) => handleUpdateName(e)} className="btn btn-primary">
                      Update
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>
          <div>
            {imgFieldDisabled && (
              <div className="mt-3">
                <div class="form-control ">
                  <label class="input-group">
                    <input
                      type="text"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      placeholder="image URL"
                      class="input text-black input-bordered w-full"
                    />
                    <span onClick={(e) => handleUpdatePhoto(e)} className="btn btn-primary">
                      Update
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>
          <div>
            {addInputItem && (
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body">
                    <p className="text-2xl text-center">Add Item</p>
                    <div className="form-control">
                      <input
                        type="text"
                        required
                        placeholder="Phone Number"
                        className="input input-bordered text-black"
                        {...register("phoneNumber", {
                          required: { value: true, message: "Number is require" },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: "Provide an valid number ",
                          },
                        })}
                      />
                      {errors.phoneNumber?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.phoneNumber?.message}
                        </span>
                      )}
                      {errors.phoneNumber?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.phoneNumber?.message}
                        </span>
                      )}
                    </div>
                    <div className="form-control mt-3">
                      <button type="submit" className="btn btn-primary">
                        add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
