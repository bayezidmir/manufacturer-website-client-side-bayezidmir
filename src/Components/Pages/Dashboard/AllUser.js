import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivet from "../../Api/axiosPrivet";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { FaEdit } from "react-icons/fa";
import AddAdminConfirm from "./AddAdminConfirm";
import { async } from "@firebase/util";
import { FaTrashAlt } from "react-icons/fa";

const AllUser = () => {
  const [admin, setAdmin] = useState(null);
  const { data: users, refetch } = useQuery("all-user", () => axiosPrivet.get("all-user"));

  //delete product
  const handleDelete = async (user) => {
    const email = { email: user?.email };
    const confirm = window.confirm();
    if (confirm) {
      const { data } = await axiosPrivet.delete(`/user-delete/${user?._id}`, email);
      if (data?.acknowledged) {
        toast.success("Deleted", { id: "delete-user" });
        refetch();
      }
    }
  };

  // add admin
  const handleAddAdmin = async (user) => {
    const confirm = window.confirm();
    if (confirm) {
      const { data } = await axiosPrivet.put(`/user/admin/${user?._id}`, user);
      if (data) {
        toast.success("success", { id: "add-admin-success" });
        refetch();
        console.log(data);
      }
    }
  };

  console.log(users);
  return (
    <>
      <table className="border-collapse relative bg-[rgb(167,167,169)] table-fixed  w-5/6  ">
        <thead>
          <tr className="border text-left   bg-[rgb(167,167,169)]">
            <th colSpan={1} className="pl-5 py-3">
              #
            </th>
            <th colSpan={3}>Name</th>
            <th colSpan={5}>Email</th>
            <th colSpan={3}>Admin</th>

            <th colSpan={1} className={"pr-5"}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.data?.map((user, index) => {
            return (
              <>
                <tr key={user?._id} className="hover:bg-[rgb(187,186,200)]">
                  <td colSpan={1} className="pl-5 py-2 ">
                    {index + 1}
                  </td>
                  <td colSpan={3} className=" py-2 ">
                    {user?.name}
                  </td>
                  <td colSpan={5} className="  py-2 ">
                    {user?.email}
                  </td>

                  <td colSpan={3} className=" py-2 ">
                    {user?.role === "admin" ? (
                      <span className="btn  btn-sm bg-primary border-0 text-white">admin</span>
                    ) : (
                      <span
                        onClick={() => handleAddAdmin(user)}
                        className={"btn btn-sm btn-primary border-0 text-white"}
                      >
                        add Admin <FaEdit className="ml-2" />
                      </span>
                    )}
                  </td>

                  <td colSpan={1} className="text-right py-2">
                    <span className="w-4 mx-auto">
                      <FaTrashAlt onClick={() => handleDelete(user)} />
                    </span>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllUser;
