import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Spin } from "antd";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  const { user, isLoading, isSuccess } = useSelector((state) => state.auth);

  console.log(user);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (token && isLoading) {
    return (
      <div className="h-[70vh] w-full flex justify-center items-center">
        {" "}
        <Spin />
      </div>
    );
  }

  if (token && user?.email && !isLoading && isSuccess) {
    return children;
  }
};

export default PrivateRoute;
