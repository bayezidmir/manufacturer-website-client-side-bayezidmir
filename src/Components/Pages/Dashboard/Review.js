import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axiosPrivet from "../../Api/axiosPrivet";
import auth from "../../Hooks/Firebase";
import Loading from "../../Loading/Loading";

const Review = () => {
  const [user, loading] = useAuthState(auth);

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    const info = {
      name: data.name,
      profession: data.profession,
      userPhoto: data.image,
      description: data.description,
      rating: data.rating,
    };

    console.log(info);

    const { data: result } = await axiosPrivet.post("/review", info);
    if (result.insertedId) {
      reset();
      toast.success("success", { id: "create-Success" });
    }
  };

  return (
    <>
      <div className=" items-center w-full ">
        <div className="w-full">
          <div className="hero w-full">
            <div className="card z-0 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <p className="text-2xl text-black text-center">Add Review</p>
                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input text-black input-bordered"
                      {...register("name", {
                        required: { value: true, message: "Name is require" },
                      })}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text">Profession</span>
                    </label>
                    <input
                      type="text"
                      placeholder="profession"
                      className="input text-black input-bordered"
                      {...register("profession", {
                        required: { value: true, message: "profession is require" },
                      })}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text">Image</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Image URL"
                      className="input text-black input-bordered"
                      {...register("image", {
                        required: { value: true, message: "Image URL is require" },
                      })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="text"
                      placeholder="inter tha positive values"
                      className="input text-black input-bordered"
                      {...register("rating", {
                        required: { value: true, message: "Image URL is require" },
                        pattern: {
                          value: /^[1-5]*$/,
                          message: "Provide your phone number",
                        },
                      })}
                    />
                    {errors.rating?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">{errors.rating?.message}</span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Description"
                      className="input text-black input-bordered"
                      {...register("description", {
                        required: { value: true, message: "Description is require" },
                      })}
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
