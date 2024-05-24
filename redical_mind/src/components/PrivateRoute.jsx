import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../Layout/Layout";

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

const PrivateRoute = () => {
  return isAuthenticated() ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
