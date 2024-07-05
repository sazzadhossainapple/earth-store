import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineMenu } from 'react-icons/md';

const DashboardHeader = ({ isSmallMenu, toggleMenu }) => {
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
                <i className="fa fa-user">
                    <CgProfile />
                </i>
            </div>
        </div>
    );
};

export default DashboardHeader;
