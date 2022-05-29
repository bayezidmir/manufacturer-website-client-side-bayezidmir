import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { FaTrashAlt } from "react-icons/fa";
import axiosPrivet from "../Api/axiosPrivet";
import auth from "./Firebase";
import Fetcher from "../Api/Fetcher";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import MyOrderState from "./MyOrderState";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery("my-payments", () => axiosPrivet.get(`get-order/${user?.email}`));

  //delete product
  const handleDelete = async (id) => {
    const confirm = window.confirm();
    if (confirm) {
      const { data } = await Fetcher.delete(`/order-delete/${id}`);
      if (data?.acknowledged) {
        toast.success("Deleted", { id: "delete-product" });
        refetch();
      }
    }
  };

  if (isLoading || loading) {
    return <Loading />;
  }

  let isPaid;
  if (localStorage.getItem("paymentStatus") === "paid") {
    isPaid = "true";
  }
  return (
    <>
      <div className="mb-5">
        <h1 className="text-3xl font-bold uppercase mb-3">
          Welcome to Dashboard {user?.displayName}
        </h1>
        <p className="text-center text-2xl ">{user?.email}</p>
      </div>
      <div className="flex justify-center">
        <table className="border-collapse relative bg-[rgb(136,135,139)] table-fixed  w-5/6  ">
          <thead>
            <tr className="border text-left   border-[rgb(124,123,125)] ">
              <th colSpan={1} className="pl-5 py-3">
                #
              </th>
              <th colSpan={3}>Product Name</th>
              <th colSpan={2}>Quantity</th>
              <th colSpan={2}>Price</th>
              <th colSpan={2}>Total Price</th>
              <th colSpan={3} className="text-center">
                Image
              </th>
              <th colSpan={2}>status</th>

              <th colSpan={3} className={"pr-5 text-center"}>
                Delete / T:Id
              </th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders?.data?.map((order, index) => {
                return (
                  <>
                    <tr key={order?._id} className=" hover:bg-[rgb(200,193,193)]">
                      <td colSpan={1} className="pl-5 py-2 ">
                        {index + 1}
                      </td>
                      <td colSpan={3} className=" py-2 ">
                        {order?.productName}
                      </td>
                      <td colSpan={2} className=" py-2 ">
                        {order?.quantity}
                      </td>
                      <td colSpan={2} className=" py-2 ">
                        {order?.price}
                      </td>
                      <td colSpan={2} className=" py-2 ">
                        {order?.totalPrice}
                      </td>
                      <td colSpan={3} className=" py-2 ">
                        <div className="flex justify-center">
                          <img className="w-10 " src={order?.img} alt="" />
                        </div>
                      </td>

                      <td colSpan={2} className=" py-2 ">
                        <MyOrderState
                          transactionId={order?.transactionId}
                          orderId={order?._id}
                          orderPaid={order?.paid}
                        ></MyOrderState>
                      </td>

                      <td colSpan={3} className=" py-2">
                        {order?.transactionId ? (
                          <span
                            className="flex justify-center label-text-alt text-white"
                            title={order?.transactionId}
                          >
                            {order?.transactionId.slice(0, 12)}
                            ...
                          </span>
                        ) : (
                          <span className="flex justify-center">
                            <FaTrashAlt className="" onClick={() => handleDelete(order?._id)} />
                          </span>
                        )}
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrder;
