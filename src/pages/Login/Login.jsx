import React, { useState } from 'react';
import './login.css';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../Contact/contact.css';

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    //password show
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    //   login
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="login-container">
            <h3 className="contact-title">Sign In</h3>
            <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="email"
                            className="input-field"
                            {...register('email', { required: true })}
                            name="email"
                            placeholder="Email"
                        />
                        {errors.email && (
                            <span className="text-danger error-text">
                                Email is required
                            </span>
                        )}
                    </div>
                    <div className="mb-4 position-relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            style={{ paddingRight: '40px' }}
                            {...register('password', { required: true })}
                            className="input-field"
                            name="password"
                            placeholder="Password"
                        />
                        {errors.password && (
                            <span className="text-danger error-text">
                                Password is required
                            </span>
                        )}
                        {showPassword ? (
                            <button
                                onClick={togglePassword}
                                className="border-0 bg-transparent"
                            >
                                <FaEye className="eye-icon" />
                            </button>
                        ) : (
                            <button
                                onClick={(e) => setShowPassword(e)}
                                className="border-0 bg-transparent"
                            >
                                <FaEyeSlash className="eye-icon" />
                            </button>
                        )}
                    </div>

                    <div>
                        <input
                            type="submit"
                            className="text-text-center btns w-100"
                            value="Sign In"
                        />
                    </div>
                </form>

                <p className="d-flex align-items-end login-text gap-1 mt-3">
                    <span> Create a account?</span>
                    <Link to="/sign-up" className="sign-text">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
