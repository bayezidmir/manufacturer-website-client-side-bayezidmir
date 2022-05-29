import React from "react";
import { useQuery } from "react-query";
import Fetcher from "../../Api/Fetcher";
import { FaTrashAlt } from "react-icons/fa";
import { async } from "@firebase/util";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import toast from "react-hot-toast";
import axiosPrivet from "../../Api/axiosPrivet";

const AllProducts = () => {
  const { data: products, refetch } = useQuery("all-products", () =>
    axiosPrivet.get("/all-products")
  );

  //delete product
  const handleDelete = async (id) => {
    const confirm = window.confirm();
    if (confirm) {
      const { data } = await Fetcher.delete(`/product-delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (data?.acknowledged) {
        toast.success("Deleted", { id: "delete-product" });
        refetch();
      }
    }
  };

  //   console.log(products);
  return (
    <>
      <table className="border-collapse relative bg-[rgb(167,167,169)] table-fixed  w-5/6  ">
        <thead>
          <tr className="border text-left   bg-[rgb(167,167,169)] ">
            <th colSpan={1} className="pl-5 py-3">
              #
            </th>
            <th colSpan={5}>Name</th>
            <th colSpan={3}>Price</th>
            <th colSpan={3}>Available</th>
            <th colSpan={3}>Image</th>
            <th colSpan={1} className={"pr-5"}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.map((product, index) => {
            return (
              <>
                <tr key={product._id} className="hover:bg-[rgb(183,180,199)]">
                  <td colSpan={1} className="pl-5 py-2 ">
                    {index + 1}
                  </td>
                  <td colSpan={5} className=" py-2 ">
                    {product?.name}
                  </td>
                  <td colSpan={3} className=" py-2 ">
                    {product?.price}
                  </td>
                  <td colSpan={3} className=" py-2 ">
                    {product?.available}
                  </td>
                  <td colSpan={3} className=" py-2 ">
                    <img className="w-10" src={product?.img} alt="" />
                  </td>
                  <td colSpan={1} className="text-right py-2">
                    <span className="w-4 mx-auto">
                      <FaTrashAlt onClick={() => handleDelete(product?._id)} />
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

export default AllProducts;
