import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    //register
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="login-container">
            <h3 className="contact-title">Sign Up</h3>
            <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="input-field"
                            {...register('name', { required: true })}
                            name="name"
                            placeholder="Name"
                        />
                        {errors.name && (
                            <span className="text-danger error-text">
                                Name is required
                            </span>
                        )}
                    </div>
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
                    <div className="mb-4">
                        <input
                            type="password"
                            className="input-field"
                            {...register('password', { required: true })}
                            name="password"
                            placeholder="Password"
                        />
                        {errors.password && (
                            <span className="text-danger error-text">
                                Password is required
                            </span>
                        )}
                    </div>

                    <div>
                        <input
                            type="submit"
                            className="text-text-center btns w-100"
                            value="Sign Up"
                        />
                    </div>
                </form>
                <p className="d-flex align-items-end login-text gap-1 mt-3">
                    <span> Already have a account?</span>
                    <Link to="/sign-in" className="sign-text">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
