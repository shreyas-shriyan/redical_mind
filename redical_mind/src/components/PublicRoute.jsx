import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../Layout/Layout";

const isAuthenticated = () => {
  // Add your authentication logic here
  return localStorage.getItem("authToken") !== null;
};

const PublicRoute = ({ restricted }) => {
  return isAuthenticated() && restricted ? (
    <Navigate to="/dashboard" />
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default PublicRoute;
