import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Navigate, Outlet } from "react-router-dom";
import axiosPrivet from "../Api/axiosPrivet";
import Loading from "../Loading/Loading";
import auth from "./Firebase";

const IsAdmin = () => {
  const [user, loading] = useAuthState(auth);

  const { data, isLoading, refetch } = useQuery("admin", () =>
    axiosPrivet.get(`/admin/${user?.email}`)
  );

  if (loading || isLoading) {
    return <Loading />;
  }

  const admin = data?.data?.role === "admin";

  if (!admin) return <Navigate to={"/"} />;

  return <Outlet />;
};

export default IsAdmin;
