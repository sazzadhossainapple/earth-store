import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../../assets/logo/earth_store_logo.png';
import { GiShoppingBag } from 'react-icons/gi';
import { MdPeopleAlt, MdPeople } from 'react-icons/md';
import { FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

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

                    <ul className="nav-contnet">
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
                        <li className="nav-content-item">
                            <div className="header-icon-wrapper">
                                <button className="border-0 bg-transparent position-relative">
                                    <GiShoppingBag className="header-icon bag-icon" />
                                    <span className="count-number">0</span>
                                </button>
                                <div
                                    class="position-relative"
                                    ref={dropdownRef}
                                >
                                    <button
                                        class="border-0 bg-transparent"
                                        type="button"
                                        onClick={handleButtonClick}
                                    >
                                        <MdPeopleAlt className="header-icon" />
                                    </button>

                                    {isDropdownVisible && (
                                        <ul class="dropdown-content position-absolute shadow">
                                            <li className="border-bottom">
                                                <Link
                                                    class="dropdown-item submenu-link d-flex align-items-center gap-2"
                                                    to="/sign-in"
                                                >
                                                    <FaSignInAlt />
                                                    <span> Sign In</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    class="dropdown-item submenu-link d-flex align-items-center gap-2"
                                                    to="/sign-up"
                                                >
                                                    <MdPeople />
                                                    <span> Sign Up</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
