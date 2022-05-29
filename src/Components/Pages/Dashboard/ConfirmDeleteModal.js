import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ConfirmDeleteModal = ({ product, handleDelete }) => {
  return (
    <>
      <input type="checkbox" id="confirm-Delete-Modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#120E43] ">
          <h3 className="font-bold text-center text-xl my-10">
            Are you sure want to delete {product?.name} ?
          </h3>
          <p className="text-center">Email: {product?.email}</p>

          <div className="flex justify-around mt-10">
            <label htmlFor="confirm-Delete-Modal" className="btn  ">
              Cancel
            </label>
            <label
              onClick={() => handleDelete(product?._id)}
              htmlFor="confirm-Delete-Modal"
              className="btn"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDeleteModal;
