import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineMenu } from 'react-icons/md';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import Cookies from 'js-cookie';

const DashboardHeader = ({ isSmallMenu, toggleMenu }) => {
    const navigate = useNavigate();

    const logOut = () => {
        Cookies.remove('accessToken');
        navigate('/sign-in');
    };
    return (
        <div
            className={
                isSmallMenu
                    ? 'small-left-menu header-left d-flex align-items-center justify-content-between'
                    : 'header-left d-flex align-items-center justify-content-between'
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
                <Dropdown className="bg-transparent">
                    <Dropdown.Toggle className="bg-transparent position-relative border-0">
                        <i className="fa fa-user" style={{ lineHeight: '0' }}>
                            <CgProfile />
                        </i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Link
                                to="/dashboard/profile"
                                className="text-dark w-100 d-block d-flex align-items-center gap-1"
                            >
                                <CgProfile style={{ fontSize: '20px' }} />
                                <span> Profile</span>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="mb-2">
                            <Link
                                to="/dashboard/change-password"
                                className="text-dark w-100 d-block d-flex align-items-center gap-1"
                            >
                                <RiLockPasswordLine
                                    style={{ fontSize: '20px' }}
                                />
                                <span> Change Password</span>
                            </Link>
                        </Dropdown.Item>
                        <hr style={{ margin: '0' }} />
                        <Dropdown.Item
                            onClick={logOut}
                            className="text-danger d-flex align-items-center gap-1 mt-2"
                        >
                            <AiOutlineLogout style={{ fontSize: '20px' }} />
                            <span> Log Out</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default DashboardHeader;
