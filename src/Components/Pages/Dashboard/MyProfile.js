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

const MyProfile = () => {
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

  console.log(user);
  return (
    <div className="lg:w-[700px]">
      <div>
        <h3 className="text-4xl text-center ">My Profile</h3>
      </div>
      <div className="flex justify-end">
        <Link to={"/dashboard/edit-profile"}>
          <FaEdit title="Update Profile" />
        </Link>
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
          <Link
            to={"/dashboard/edit-profile"}
            className="btn text-white rounded-3xl border-0 mt-3 hover:bg-[rgba(255,42,127,0.75)] bg-[rgb(255,42,126)]"
          >
            Update profile
          </Link>
        </div>
        <div className="col-span-2 lg:ml-10 ml-6">
          <div className="my-5 flex justify-between">
            <div>
              <p className="">Full Name</p>
              <p className="text-2xl">{user?.displayName}</p>
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
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
