import React from 'react';
import './lodaing.css';
import Img from '../../assets/logo/earth_store_logo.png';

const Loading = () => {
    return (
        <div className="loading-center">
            <div className="abgne-loading-20140104-2">
                <div className="loading"></div>
                <div className="word">
                    <img
                        src={Img}
                        alt="Earth Store Logo"
                        className="popup-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Loading;
