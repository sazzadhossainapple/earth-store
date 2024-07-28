import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../../assets/logo/earth_store_logo.png';
import { GiShoppingBag } from 'react-icons/gi';
import { MdPeopleAlt, MdPeople, MdMenu } from 'react-icons/md';
import { FaSignInAlt } from 'react-icons/fa';

import OffCanvas from '../../../components/OffCanvas/OffCanvas';
import { AddCartContext } from '../../../context/cartContext/CartContext';
import useLoggedInUser from '../../../hooks/useLoggedInUser';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const { totalItemsInCart } = useContext(AddCartContext);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);
    const [users, isLoading] = useLoggedInUser();

    // scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrollingDown = window.scrollY > 200;
            setIsVisible(isScrollingDown);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // dropdow
    const handleButtonClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Menu toggle
    const handleMenuToggle = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="position-relative">
            <div className={isVisible ? 'scorll-nav' : 'nav-header'}>
                <nav className="container nav-container">
                    <Link to="/">
                        <img
                            src={Logo}
                            className="header-logo"
                            alt="earth store logo"
                        />
                    </Link>

                    <button
                        className="d-block d-lg-none border-0 bg-transparent"
                        // onClick={handleMenuToggle}
                    >
                        <MdMenu className="menu-icon" />
                    </button>

                    <ul className={`nav-contnet`}>
                        <li className="nav-content-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'nav-link-active'
                                        : 'nav-content-link'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-content-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'nav-link-active'
                                        : 'nav-content-link'
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-content-item">
                            <NavLink
                                to="/shop"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'nav-link-active'
                                        : 'nav-content-link'
                                }
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li className="nav-content-item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'nav-link-active'
                                        : 'nav-content-link'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        {users?.status === true && (
                            <li className="nav-content-item">
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'nav-link-active'
                                            : 'nav-content-link'
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        )}
                        <li className="nav-content-item">
                            <div className="header-icon-wrapper">
                                <button
                                    className="border-0 bg-transparent position-relative"
                                    onClick={handleShowOffcanvas}
                                >
                                    <GiShoppingBag className="header-icon bag-icon" />
                                    <span className="count-number">
                                        {totalItemsInCart}
                                    </span>
                                </button>
                                {!users?.status === true && (
                                    <div
                                        className="position-relative"
                                        ref={dropdownRef}
                                    >
                                        <button
                                            className="border-0 bg-transparent"
                                            type="button"
                                            onClick={handleButtonClick}
                                        >
                                            <MdPeopleAlt className="header-icon" />
                                        </button>

                                        {isDropdownVisible && (
                                            <ul className="dropdown-content position-absolute shadow">
                                                <li className="border-bottom">
                                                    <Link
                                                        className="dropdown-item submenu-link d-flex align-items-center gap-2"
                                                        to="/sign-in"
                                                    >
                                                        <FaSignInAlt />
                                                        <span> Sign In</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item submenu-link d-flex align-items-center gap-2"
                                                        to="/sign-up"
                                                    >
                                                        <MdPeople />
                                                        <span> Sign Up</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <OffCanvas
                show={showOffcanvas}
                handleClose={handleCloseOffcanvas}
            />
        </header>
    );
};

export default Header;
