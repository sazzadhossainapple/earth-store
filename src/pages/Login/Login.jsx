import React, { useEffect, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    //password show
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const from = location.state?.from?.pathname || '/dashboard';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    //   login
    const onSubmit = (data) => {
        setLoading(true);

        const user = {
            email: data.email.trim(),
            password: data.password.trim(),
        };

        fetch(`${import.meta.env.VITE_API_KEY_URL}/api/user/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                const jwtToken = data?.data?.token;
                if (jwtToken) {
                    Cookies.set('accessToken', jwtToken);
                    setToken(jwtToken);
                    toast.success('Login Successfully!');
                    reset();
                } else {
                    toast.error(data?.message);
                    console.log(data?.message);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
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
                            <FaEye
                                className="eye-icon"
                                onClick={togglePassword}
                            />
                        ) : (
                            <FaEyeSlash
                                className="eye-icon"
                                onClick={(e) => setShowPassword(e)}
                            />
                        )}
                    </div>

                    <div>
                        <input
                            type="submit"
                            className="text-text-center btns w-100"
                            value={`${loading ? 'Loading...' : 'Sign In'}`}
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
