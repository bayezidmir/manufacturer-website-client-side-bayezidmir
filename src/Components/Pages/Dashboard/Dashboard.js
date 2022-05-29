import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, NavLink, Outlet } from "react-router-dom";
import axiosPrivet from "../../Api/axiosPrivet";
import auth from "../../Hooks/Firebase";
import Loading from "../../Loading/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("all-users", () => axiosPrivet.get("/all-user"));

  let admin;
  const existUser = users?.data.find((u) => u?.email === user?.email);
  if (existUser?.role === "admin") {
    admin = true;
  }
  if (loading || isLoading) {
    return <Loading />;
  }

  console.log(user, users, admin);
  return (
    <>
      <div className="drawer min-h-screen drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content text-black bg-white  flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 px-10 pt-10 text-white overflow-y-auto w-80 bg-[rgb(165,163,163)] ">
            {/* <!-- Sidebar content here --> */}

            <li className="rounded-lg">
              <NavLink to={"/dashboard/my-profile"} className="rounded-lg">
                My profile
              </NavLink>
            </li>
            <li>
              <NavLink className={admin && "hidden"} to={"/dashboard/my-order"}>
                My Order
              </NavLink>
            </li>
            <li className={!admin && "hidden"}>
              <NavLink to={"/dashboard/all-payments"}>All Payments</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/review"} className={admin && "hidden"}>
                Add Review
              </NavLink>
            </li>
            <li className={!admin && "hidden"}>
              <NavLink to={"/dashboard/add-service"}>Add Product</NavLink>
            </li>
            <li className={!admin && "hidden"}>
              <NavLink to={"/dashboard/all-products"}>All Products</NavLink>
            </li>
            <li className={!admin && "hidden"}>
              <NavLink to={"/dashboard/all-user"}>All User</NavLink>
            </li>
            <li className={!admin && "hidden"}>
              <NavLink to={"/dashboard/all-admin"}>All admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
