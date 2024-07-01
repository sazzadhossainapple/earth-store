import React from 'react';
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagramSquare,
    FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    return (
        <div className="contact-form-container container">
            <div className="contact-form-left">
                <h3 className="contact-title">Get In Touch</h3>
                <form className="contact-form">
                    <div className="mb-4">
                        <input
                            type="text"
                            className="input-field"
                            name=""
                            placeholder="Full Name"
                            id=""
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            className="input-field"
                            name=""
                            placeholder="Phone Number"
                            id=""
                        />
                    </div>
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
                        <textarea
                            name=""
                            id=""
                            placeholder="Message"
                            className="input-field py-4"
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="submit"
                            className="text-text-center btns"
                            value="Send Now"
                        />
                    </div>
                </form>
            </div>
            <div className="contact-form-right">
                <h3 className="contact-title">Talk To Us</h3>
                <div className="d-flex gap-3 contact-info mb-5">
                    <div className="contact-icon">
                        <MdEmail />
                    </div>
                    <div className="contact-text">
                        <p>EMAIL</p>
                        <h5>earth.store@app.com</h5>
                    </div>
                </div>
                <div className="d-flex gap-3 mb-5">
                    <div className="contact-icon">
                        <MdLocalPhone />
                    </div>
                    <div className="contact-text">
                        <p>PHONE NUMBER</p>
                        <h5>202-555-0188</h5>
                    </div>
                </div>
                <div className="d-flex gap-3 mb-5">
                    <div className="contact-icon">
                        <MdLocationOn />
                    </div>
                    <div className="contact-text">
                        <p>ADDRESSR</p>
                        <h5>
                            2727 Road, <br /> Dhaka, CA, 90264
                        </h5>
                    </div>
                </div>
                <div className="follow-wrapper">
                    <h6 className="follow">Follow Us:</h6>
                    <div className="social-link">
                        <Link to="" className="social-icon">
                            <FaFacebookF />
                        </Link>
                        <Link to="" className="social-icon">
                            <FaTwitter />
                        </Link>
                        <Link to="" className="social-icon">
                            <FaInstagramSquare />
                        </Link>
                        <Link to="" className="social-icon">
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
