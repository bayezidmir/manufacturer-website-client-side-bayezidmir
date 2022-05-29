import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import auth from "../Hooks/Firebase";
import Loading from "../Loading/Loading";

const Navbar = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [darkToggle, setDarkToggle] = useState(false);
  const { pathname } = useLocation();

  if (loading) {
    return <Loading />;
  }
  const navItems = (
    <>
      <li className=" py-2">
        <NavLink to={"/home"} className="rounded-lg hover:text-orange-400 font-bold btn-sm">
          HOME
        </NavLink>
      </li>

      <li className=" py-2">
        <NavLink
          to={"/portfolio"}
          className="rounded-lg hover:text-orange-400 uppercase font-bold btn-sm"
        >
          Portfolio
        </NavLink>
      </li>
      <li className=" py-2">
        <NavLink
          to={"/blog"}
          className="rounded-lg hover:text-orange-400 uppercase font-bold btn-sm"
        >
          blog
        </NavLink>
      </li>
      <li className=" py-2">
        <NavLink to={"/dashboard"} className="rounded-lg hover:text-orange-400 font-bold btn-sm">
          DASHBOARD
        </NavLink>
      </li>
      <li className=" py-2">
        {user ? (
          <span
            onClick={() => signOut(auth)}
            className="rounded-lg hover:text-orange-400 font-bold btn-sm"
          >
            LOG OUT
          </span>
        ) : (
          <NavLink to={"/login"} className="rounded-lg hover:text-orange-400 font-bold btn-sm">
            LOGIN
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer drawer-end" data-theme={darkToggle ? "dark" : "light"}>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* <!-- Navbar --> */}
          <div className={`w-full py-10 text-white navbar relative bg-[#afafb2] `}>
            <div className="container mx-auto">
              <div className="flex-none lg:hidden">
                <label htmlFor="dashboard-sidebar" className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1  px-2 mx-2">
                <Link to={"/"}>
                  <strong className="text-3xl  text-[#FFC000]">ELECTRIC</strong>
                  <strong className="text-3xl  text-white">- COLLECTION</strong>
                </Link>
              </div>
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>

              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal gap-3">
                  {/* <!-- Navbar menu content here --> */}

                  {navItems}
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
