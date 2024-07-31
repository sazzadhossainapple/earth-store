import React, { useState, useRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import defaultImage from '../../../assets/image/defualtImages.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const UpdateProfile = ({
    show,
    handleClose,
    userUpdate,
    setUserUpdate,
    getLoggedInUser,
}) => {
    const [imagePreview, setImagePreview] = useState(defaultImage);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (userUpdate) {
            reset({
                name: userUpdate.name || '',
                phone: userUpdate.phone || '',
                address: userUpdate.address || '',
            });
            const userImageUrl = userUpdate.image
                ? `${import.meta.env.VITE_API_KEY_URL}/images/${
                      userUpdate.image
                  }`
                : defaultImage;
            setImagePreview(userImageUrl);
        }
    }, [userUpdate, reset]);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('phone', data.phone);
        formData.append('address', data.address);
        formData.append('file', selectedFile);

        // for (const value of formData.values()) {
        //     console.log(value);
        // }

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: `Bearer ${Cookies.get('accessToken')}`,
            },
        };

        try {
            const res = await axios.put(
                `${import.meta.env.VITE_API_KEY_URL}/api/user/${
                    userUpdate?.email
                }`,
                formData,
                config
            );
            if (res.status) {
                console.log(res);
                getLoggedInUser(); // Refresh the user data after a successful update
                toast.success('Profile updated successfully');
                reset();
                handleModalClose();
            }
        } catch (error) {
            console.error(error);
            toast.error('Profile update failed');
        } finally {
            setLoading(false);
        }
    };

    const handleModalClose = () => {
        handleClose(); // Close the modal
        setImagePreview(defaultImage); // Reset the image preview to default
        setSelectedFile(null); // Clear the selected file
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            scrollable={true}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    className="modal-title ps-2 text-model-title"
                    id="contained-modal-title-vcenter"
                >
                    Update Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4 form-body">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <div
                            className="user-img-container"
                            onClick={handleImageClick}
                        >
                            <img
                                className="updated-img"
                                src={imagePreview}
                                alt="Profile Picture"
                                style={{ cursor: 'pointer' }}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                                className="form-control mt-2"
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>

                    <div className="mb-3 col-12">
                        <label className="form-label">
                            Name <sup className="text-danger">*</sup>
                        </label>
                        <input
                            type="text"
                            className="input-field"
                            {...register('name', { required: true })}
                        />
                        {errors.name && (
                            <span className="text-danger error-text">
                                Name is required
                            </span>
                        )}
                    </div>
                    <div className="mb-3 col-12">
                        <label className="form-label">
                            Phone <sup className="text-danger">*</sup>
                        </label>
                        <input
                            type="text"
                            className="input-field"
                            {...register('phone', { required: true })}
                        />
                        {errors.phone && (
                            <span className="text-danger error-text">
                                Phone is required
                            </span>
                        )}
                    </div>

                    <div className="mb-3 col-12">
                        <label className="form-label">Address</label>
                        <textarea
                            className="input-field"
                            {...register('address')}
                        ></textarea>
                    </div>

                    <div className="mt-2 mb-3 d-flex justify-content-center">
                        <input
                            type="submit"
                            className=" text-center btns w-100 "
                            value={`${
                                loading ? 'Updating...' : 'Update Profile'
                            }`}
                        />
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateProfile;
