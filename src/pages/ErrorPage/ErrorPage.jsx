import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './errorPage.css';
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div class="section">
            <div>
                <h1 class="error">404</h1>
                <div class="page">
                    Ooops!!! The page you are looking for is not found
                </div>
                {/* <p className="my-3">{error.statusText || error.message}</p> */}
                <div className="d-flex justify-content-center">
                    <Link class="back-home" href="/">
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
