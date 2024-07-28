import React from 'react';
import useLoggedInUser from '../../../hooks/useLoggedInUser';
import { FiEdit } from 'react-icons/fi';
import image from '../../../assets/image/defualtImages.png';

const DashboardProfile = () => {
    const [users] = useLoggedInUser();

    return (
        <div className="bg-white rounded profile-container shadow">
            <div className="p-5">
                <div className="employee-profile">
                    <img
                        src={
                            users?.image
                                ? users?.image
                                : // `${import.meta.env.VITE_API_KEY_URL}/assets/${
                                  //       users?.image
                                  //   }`

                                  image
                        }
                        className="rounded-circle employee-profile-img mx-auto"
                        style={{ width: '140px', height: ' 140px' }}
                        alt=""
                    />
                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <button
                            // onClick={() => {
                            //     handleShow();
                            //     setUserUpdate(users);
                            // }}
                            className="btns d-flex align-items-center gap-2"
                            // style={{ color: '#2c541d' }}
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
                                    {users?.employee?.address}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardProfile;
