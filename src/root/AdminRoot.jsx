import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminSidebarLayout from "../components/user-layouts/AdminSidebarLayout";

const AdminRoot = () => {
  return (
    <>
      <AdminSidebarLayout />
      <Toaster />
      <Outlet />
    </>
  );
};

export default AdminRoot;
