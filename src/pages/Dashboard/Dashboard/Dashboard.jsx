import React from "react";
import useLoggedInUser from "../../../hooks/useLoggedInUser";
import Loading from "../../../components/Loading/Loading";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import CustomerDashboard from "./CustomerDashboard/CustomerDashboard";

const Dashboard = () => {
  const [users, isLoading, getLoggedInUser] = useLoggedInUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {users?.role === "Admin" && <AdminDashboard />}
      {users?.role === "User" && <CustomerDashboard />}
    </div>
  );
};

export default Dashboard;
