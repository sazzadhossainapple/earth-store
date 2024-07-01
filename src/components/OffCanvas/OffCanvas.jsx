import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './offCanvas.css';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Img from '../../assets/product/Poster1.jpg';
import { MdClose } from 'react-icons/md';

const productSelect = [
    {
        id: '1',
        img: Img,
        name: 'Postcard V1',
        price: '12.23',
    },
    {
        id: '2',
        img: Img,
        name: 'Postcard V2',
        price: '14.23',
    },
    {
        id: '4',
        img: Img,
        name: 'Postcard V3',
        price: '15.23',
    },
    {
        id: '5',
        img: Img,
        name: 'Postcard V5',
        price: '17.23',
    },
    {
        id: '6',
        img: Img,
        name: 'Postcard V6',
        price: '17.23',
    },
];

const OffCanvas = ({ show, handleClose }) => {
    return (
        <div>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                className=""
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="offcanvas-title">
                        Shopping Cart
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body className="px-0 position-relative">
                    <div className="shop-gird px-4">
                        {productSelect.length === 0 ? (
                            <p className="d-flex align-items-center justify-content-center text-secondary">
                                No data added
                            </p>
                        ) : (
                            productSelect?.map((data) => (
                                <div key={data.id} className="shop-card">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="shop-img">
                                            <img
                                                src={data?.img}
                                                alt={data?.name}
                                            />
                                        </div>
                                        <div className="shop-content-text">
                                            <h3>
                                                {data?.name
                                                    ? data.name
                                                    : 'No found'}
                                            </h3>
                                            <p className="d-flex align-items-center gap-2">
                                                <span>2</span>
                                                <span>×</span>
                                                <span>
                                                    $<span>{data?.price}</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="delete-btn">
                                            <MdClose />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="position-absolute bottom-0 w-100 bg-white">
                        <div className="border-top border-bottom d-flex align-items-center justify-content-between px-4 cart-content">
                            <h3>Subtotal:</h3>
                            <p>$41.98</p>
                        </div>

                        <div className="px-4 my-3">
                            {productSelect.length === 0 ? (
                                <>
                                    <Link
                                        to="/shop"
                                        onClick={handleClose}
                                        className="text-text-center btns w-100 d-inline-block text-center"
                                    >
                                        Continue Shopping
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/cart"
                                        onClick={handleClose}
                                        className="text-text-center btns w-100 d-inline-block text-center mb-3 text-black"
                                    >
                                        View Cart
                                    </Link>
                                    <Link
                                        to="/checkout"
                                        onClick={handleClose}
                                        className="text-text-center btns w-100 d-inline-block text-center"
                                    >
                                        Checkout
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default OffCanvas;
