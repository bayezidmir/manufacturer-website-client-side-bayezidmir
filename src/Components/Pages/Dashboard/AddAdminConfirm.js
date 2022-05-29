import React from "react";
import { FaEdit } from "react-icons/fa";

const AddAdminConfirm = ({ id }) => {
  console.log(id);
  return (
    <>
      {/* <!-- The button to open modal --> */}
      <div className=" mx-auto">
        <label htmlFor="confirm-admin-Modal">
          <span className="btn btn-sm">
            {" "}
            add Admin <FaEdit className="ml-2" />
          </span>
        </label>
      </div>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="confirm-admin-Modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#120E43] ">
          <h3 className="font-bold text-center text-xl my-10">
            Do you sure want to add {id} as admin ?
          </h3>

          <div className="flex justify-around mt-10">
            <label htmlFor="confirm-admin-Modal">
              <span className="btn px-11 ">no</span>
            </label>
            <label
              // onClick={() => handleAddAdmin(id)}
              htmlFor="confirm-admin-Modal"
              className="btn"
            >
              <span className="btn px-8 ">yes</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAdminConfirm;
