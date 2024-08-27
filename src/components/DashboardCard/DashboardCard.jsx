import React from "react";
import "./dashboardCard.css";

const DashboardCard = ({ data }) => {
  return (
    <div className="dashboard-card shadow">
      <div className="icon-card">{data.icon}</div>
      <div>
        <p className="dashboard-card-small-title">{data.small_title}</p>
        <h3 className="dashboard-card-title">{data.title}</h3>
        <p className="dashboard-card-count-date">{data.desc}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
