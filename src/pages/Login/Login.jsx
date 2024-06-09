import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="login-container">
            <h3 className="contact-title">Sign In</h3>
            <form className="contact-form">
                <div className="mb-4">
                    <input
                        type="email"
                        className="input-field"
                        name=""
                        placeholder="Email"
                        id=""
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="input-field"
                        name=""
                        placeholder="Password"
                        id=""
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        className="text-text-center btns"
                        value="Sign In"
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;
