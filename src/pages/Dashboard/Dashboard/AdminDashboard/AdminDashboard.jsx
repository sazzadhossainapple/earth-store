import React, { useState } from "react";
import DashboardCard from "../../../../components/DashboardCard/DashboardCard";
import {
  FaCartArrowDown,
  FaDollarSign,
  FaRegUser,
  FaMoneyCheck,
} from "react-icons/fa";
import LineChart from "../../../../components/LineChart/LineChart";
import BarChart from "../../../../components/BarChart/BarChart";

const dashboardCardData = [
  {
    id: "1",
    small_title: "New Orders",
    title: "34",
    desc: "(30 days)",
    icon: <FaCartArrowDown style={{ color: "#906ec6" }} />,
  },
  {
    id: "2",
    small_title: "Total Income",
    title: "34",
    desc: "Increase",
    icon: <FaDollarSign style={{ color: "#178f51" }} />,
  },
  {
    id: "3",
    small_title: "Total Expense",
    title: "34",
    desc: "Expense",
    icon: <FaMoneyCheck style={{ color: "#758de3" }} />,
  },
  {
    id: "4",
    small_title: "Total Users",
    title: "34",
    desc: "Earning",
    icon: <FaRegUser style={{ color: "#f6be6f" }} />,
  },
];

const AdminDashboard = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().toISOString().substring(0, 7); // Get YYYY-MM format
  
    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(currentMonth);
  
    const handleYearChange = (event) => {
      setYear(event.target.value);
    };
  
    const handleMonthChange = (event) => {
      setMonth(event.target.value);
    };
  
    const years = Array.from(new Array(10), (v, i) => currentYear - i);

  return (
    <div>
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-grid my-4">
        {dashboardCardData.map((data) => (
          <DashboardCard key={data.id} data={data} />
        ))}
      </div>

      <div className="chart-gird">
        <div className="bg-white rounded p-4 left-chart">
          <div className="chart-header">
            <div className="left-header">
              <h3 className="salse-title">Monthly Sales </h3>
              <h2 className="chart-title">$1234566</h2>
            </div>
            <div>
              <input type="month"  value={month}
                onChange={handleMonthChange} className="input-field py-1" name="month" />
            </div>
          </div>
          <LineChart />
        </div>
        <div className="bg-white rounded p-4 right-chart">
          <div className="chart-header">
            <div className="left-header">
              <h3 className="salse-title">Yearly Income</h3>
              <h2 className="chart-title">$1234566</h2>
            </div>
            <div>
              <select
                id="yearSelect"
                className="input-field py-1"
                style={{ fontSize: "14px" }}
                value={year}
                onChange={handleYearChange}
              >
                <option value="">--Select Year--</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
