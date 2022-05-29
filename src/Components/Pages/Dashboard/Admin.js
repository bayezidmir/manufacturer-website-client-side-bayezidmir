import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivet from "../../Api/axiosPrivet";
import AddAdminConfirm from "./AddAdminConfirm";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { FaTrashAlt } from "react-icons/fa";

const Admin = () => {
  const { data: admins, refetch } = useQuery("all-admin", () => axiosPrivet.get("/user/admin"));

  const handleDelete = async (email) => {
    const { data } = await axiosPrivet.delete(`/admin-delete/${email}`);
    if (data?.acknowledged) {
      toast.success("Deleted Admin", { id: "delete-admin" });
      refetch();
    }
    console.log(data);
  };
  // console.log(admins);
  return (
    <>
      <table className="border-collapse relative bg-[rgb(167,167,169)] table-fixed  w-5/6  ">
        <thead>
          <tr className="border text-left   bg-[rgb(167,167,169)] ">
            <th colSpan={1} className="pl-5 py-3">
              #
            </th>
            <th colSpan={3}>Name</th>
            <th colSpan={5}>Email</th>
            <th colSpan={1} className={"pr-5"}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {admins?.data?.map((user, index) => {
            return (
              <>
                <tr key={user._id} className="hover:bg-[rgb(185,183,200)]">
                  <td colSpan={1} className="pl-5 py-2 ">
                    {index + 1}
                  </td>
                  <td colSpan={3} className=" py-2 ">
                    {user?.name}
                  </td>
                  <td colSpan={5} className="  py-2 ">
                    {user?.email}
                  </td>

                  <td colSpan={1} className="text-right py-2">
                    <span className="w-4 mx-auto">
                      <FaTrashAlt onClick={() => handleDelete(user?.email)} />
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

export default Admin;
