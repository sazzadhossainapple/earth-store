import React, { useState } from 'react';
import useLoggedInUser from '../../../hooks/useLoggedInUser';
import { FiEdit } from 'react-icons/fi';
import Image from '../../../assets/image/defualtImages.png';
import UpdateProfile from './UpdateProfile';
import Loading from '../../../components/Loading/Loading';

const DashboardProfile = () => {
    const [users, isLoading, getLoggedInUser] = useLoggedInUser();
    const [show, setShow] = useState(false);
    const [userUpdate, setUserUpdate] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="bg-white rounded profile-container shadow">
            <div className="p-5">
                <div>
                    <img
                        src={
                            users?.image
                                ? `${import.meta.env.VITE_API_KEY_URL}/images/${
                                      users?.image
                                  }`
                                : Image
                        }
                        className="rounded-circle user-profile-img mx-auto"
                        style={{ width: '140px', height: ' 140px' }}
                        alt=""
                    />
                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <button
                            onClick={() => {
                                handleShow();
                                setUserUpdate(users);
                            }}
                            className="btns d-flex align-items-center gap-2 bg-transparent border-0"
                            style={{ color: '#2c541d' }}
                        >
                            <FiEdit className="add-icon" />{' '}
                            <span>Edit Profile</span>
                        </button>
                    </div>
                    <hr />

                    <table className="table table-hover mb-0">
                        <tbody>
                            <tr>
                                <th scope="row" className="profile-text">
                                    Name:
                                </th>
                                <td className="profile-text">{users?.name}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="profile-text">
                                    Email:
                                </th>
                                <td className="profile-text">{users?.email}</td>
                            </tr>

                            <tr>
                                <th scope="row" className="profile-text">
                                    Phone:
                                </th>
                                <td className="profile-text">
                                    {users?.phone ? users?.phone : 'N/A'}
                                </td>
                            </tr>
                            {users?.role === 'Admin' && (
                                <tr>
                                    <th scope="row" className="profile-text">
                                        Role:
                                    </th>
                                    <td>
                                        <span className="badge badge-info text-capitalize">
                                            {users?.role}
                                        </span>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <th scope="row" className="profile-text">
                                    Address:
                                </th>
                                <td className="profile-text">
                                    {users?.address ? users.address : 'N/A'}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <UpdateProfile
                show={show}
                handleClose={handleClose}
                userUpdate={userUpdate}
                setUserUpdate={setUserUpdate}
                getLoggedInUser={getLoggedInUser}
            />
        </div>
    );
};

export default DashboardProfile;
