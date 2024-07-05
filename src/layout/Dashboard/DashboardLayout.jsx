import React, { useEffect, useState } from "react";
import "./dashboardLayout.css";
import { MdOutlineMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const DashboardLayout = () => {
  const [isSmallMenu, setIsSmallMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showLabel, setShowLabel] = useState({
    visible: false,
    text: "",
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsSmallMenu(true);
      } else {
        setIsSmallMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsSmallMenu(!isSmallMenu);
  };

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  const handleMouseOver = (e) => {
    if (isSmallMenu && e.currentTarget.dataset.label) {
      const rect = e.currentTarget.getBoundingClientRect();
      setShowLabel({
        visible: true,
        text: e.currentTarget.dataset.label,
        top: rect.top + window.scrollY + 30, // Adjust as needed
        left: rect.left + window.scrollX + 70, // Adjust as needed
      });
    }
  };

  const handleMouseOut = () => {
    setShowLabel({ visible: false, text: "", top: 0, left: 0 });
  };
  return (
    <div className="body">
      <div id="logo" className={isSmallMenu ? "small-left-menu" : ""}>
        <span className="big-logo">EARTH STORE</span>
        <span className="small-logo">E!S</span>
      </div>
      <div id="left-menu" className={isSmallMenu ? "small-left-menu" : ""}>
        <ul>
          <li>
            <a href="#">
              <i>
                <MdDashboard />
              </i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className={`has-sub ${activeSubmenu === 0 ? "rotate" : ""}`}>
            <a href="#" onClick={() => toggleSubmenu(0)}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <i>
                    <MdDashboard />
                  </i>
                  <span>UI Elements</span>
                </div>
                {activeSubmenu === 0 ? <FaAngleDown /> : <FaAngleRight />}
              </div>
            </a>
            <ul className={activeSubmenu === 0 ? "open" : ""}>
              <li>
                <a href="#">UI Elements Item 1</a>
              </li>
              <li>
                <a href="#">UI Elements Item 2</a>
              </li>
              <li>
                <a href="#">UI Elements Item 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i>
                <MdDashboard />
              </i>
              <span>Users</span>
            </a>
          </li>
          <li className={`has-sub ${activeSubmenu === 1 ? "rotate" : ""}`}>
            <a href="#" onClick={() => toggleSubmenu(1)}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <i>
                    <MdDashboard />
                  </i>
                  <span>UI Elements-1</span>
                </div>
                {activeSubmenu === 1 ? <FaAngleDown /> : <FaAngleRight />}
              </div>
            </a>
            <ul className={activeSubmenu === 1 ? "open" : ""}>
              <li>
                <a href="#">UI Elements Item 1</a>
              </li>
              <li>
                <a href="#">UI Elements Item 2</a>
              </li>
              <li>
                <a href="#">UI Elements Item 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i>
                <MdDashboard />
              </i>
              <span>Users</span>
            </a>
          </li>
        </ul>
      </div>
      <div id="main-content">
        <div id="header">
          <div
            className={
              isSmallMenu
                ? "small-left-menu header-left d-flex align-items-center justify-content-between"
                : "header-left d-flex align-items-center justify-content-between"
            }
          >
            <div>
              <i
                id="toggle-left-menu"
                className="fa fa-bars"
                onClick={toggleMenu}
              >
                <MdOutlineMenu />
              </i>
            </div>
            <div className="pe-4">
              <i className="fa fa-user">
                <CgProfile />
              </i>
            </div>
          </div>
        </div>
        <div
          id="page-container"
          className={isSmallMenu ? "small-left-menu" : ""}
        >
          <div className="card">vsdfs</div>
        </div>
      </div>
      {showLabel.visible && (
        <span
          id="show-lable"
          style={{ top: showLabel.top, left: showLabel.left }}
        >
          {showLabel.text}
        </span>
      )}
    </div>
  );
};

export default DashboardLayout;
