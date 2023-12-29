import React from "react";
import UserInfo from "../components/UserInfo";
import PrivateRoute from "../components/PrivateRoute";

const Dashboard = () => {
  return (
    <PrivateRoute>
      <UserInfo />
    </PrivateRoute>
  );
};

export default Dashboard;
