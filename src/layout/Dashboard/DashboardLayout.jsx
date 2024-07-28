import React, { useEffect, useState, useRef } from 'react';
import './dashboardLayout.css';
import { MdDashboard } from 'react-icons/md';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import { FaCartArrowDown, FaCartPlus, FaUser } from 'react-icons/fa';
import useLoggedInUser from '../../hooks/useLoggedInUser';

const menuData = [
    {
        label: 'Dashboard',
        icon: <MdDashboard />,
        path: '/dashboard',
        user_type: 'User',
    },

    {
        label: 'Dashboard',
        icon: <MdDashboard />,
        path: '/dashboard',
        user_type: 'Admin',
    },

    {
        label: 'All Product',
        icon: <FaCartArrowDown />,
        path: '/dashboard/product',
        user_type: 'User',
    },
    {
        label: 'User Setting',
        icon: <FaUser />,
        user_type: 'Admin',
        submenu: [
            {
                label: 'User',
                path: '/dashboard/user',
                user_type: 'Admin',
            },
            {
                label: 'Role',
                path: '/dashboard/role',
                user_type: 'Admin',
            },
        ],
    },
];

const DashboardLayout = () => {
    const [isSmallMenu, setIsSmallMenu] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [showLabel, setShowLabel] = useState({
        visible: false,
        text: '',
        top: 0,
        left: 0,
        submenu: [],
    });

    const [users, isLoading] = useLoggedInUser();

    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 992) {
                setIsSmallMenu(true);
            } else {
                setIsSmallMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
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

    const handleMouseOver = (e, label, submenu) => {
        if (isSmallMenu) {
            const rect = e.currentTarget.getBoundingClientRect();
            setShowLabel({
                visible: true,
                text: label,
                top: rect.top + window.scrollY,
                left: rect.right + 10,
                submenu: submenu.map((item) => ({ ...item, to: item.path })),
                link: submenu.length > 0 ? submenu[0].path : '#',
            });
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }
    };

    const handleMouseOut = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setShowLabel({
                visible: false,
                text: '',
                top: 0,
                left: 0,
                submenu: [],
            });
        }, 1000);
    };

    const handleLabelMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShowLabel((prevState) => ({ ...prevState, visible: true }));
    };

    const handleLabelMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setShowLabel({
                visible: false,
                text: '',
                top: 0,
                left: 0,
                submenu: [],
            });
        }, 1000);
    };

    // menu data filter
    const filteredMenuData = menuData.filter(
        (item) => item.user_type === users?.role
    );

    return (
        <div className="body">
            <div id="logo" className={isSmallMenu ? 'small-left-menu' : ''}>
                <span className="big-logo">EARTH STORE</span>
                <span className="small-logo">E!S</span>
            </div>
            <div
                id="left-menu"
                className={isSmallMenu ? 'small-left-menu' : ''}
            >
                <ul>
                    {filteredMenuData.map((item, index) => (
                        <li
                            key={index}
                            className={`has-sub ${
                                activeSubmenu === index ? 'rotate' : ''
                            }`}
                        >
                            {item.submenu ? (
                                <>
                                    <a
                                        onClick={() => toggleSubmenu(index)}
                                        data-label={item.label}
                                        onMouseOver={(e) =>
                                            handleMouseOver(e, '', item.submenu)
                                        }
                                        onMouseOut={handleMouseOut}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <i>{item.icon}</i>
                                                <span>{item.label}</span>
                                            </div>
                                            {activeSubmenu === index ? (
                                                <FaAngleDown className="angle-color" />
                                            ) : (
                                                <FaAngleRight className="angle-color" />
                                            )}
                                        </div>
                                    </a>
                                    <ul
                                        className={`submenus ${
                                            activeSubmenu === index
                                                ? 'open'
                                                : ''
                                        }`}
                                    >
                                        {item.submenu.map(
                                            (subitem, subindex) => (
                                                <li key={subindex}>
                                                    <NavLink
                                                        to={subitem.path}
                                                        className="submenu-texts"
                                                    >
                                                        {subitem.label}
                                                    </NavLink>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    data-label={item.label}
                                    onMouseOver={(e) =>
                                        handleMouseOver(e, item.label, [
                                            item.path,
                                        ])
                                    }
                                    onMouseOut={handleMouseOut}
                                >
                                    <i>{item.icon}</i>
                                    <span>{item.label}</span>
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div id="main-content">
                <div id="header">
                    <DashboardHeader
                        isSmallMenu={isSmallMenu}
                        toggleMenu={toggleMenu}
                    />
                </div>
                <div
                    id="page-container"
                    className={isSmallMenu ? 'small-left-menu' : ''}
                >
                    <Outlet />
                </div>
            </div>

            {showLabel.visible && (
                <div
                    id="show-label"
                    style={{ top: showLabel.top, left: showLabel.left }}
                    onMouseEnter={handleLabelMouseEnter}
                    onMouseLeave={handleLabelMouseLeave}
                >
                    {showLabel.text && (
                        <Link to={showLabel.link}>{showLabel.text}</Link>
                    )}

                    {showLabel.submenu.length > 0 && (
                        <ul>
                            {showLabel.submenu.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default DashboardLayout;
