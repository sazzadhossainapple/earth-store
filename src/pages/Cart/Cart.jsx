import React from 'react';
import Img from '../../assets/product/Poster1.jpg';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import Img1 from '../../assets/product/Poster1.jpg';
import Img2 from '../../assets/product/Poster2.jpg';
import Img3 from '../../assets/product/Poster3.jpg';

const product = [
    {
        _id: '1',
        prodcut_title: 'Poster V1',
        product_img: Img1,
        product_price: '23.99',
    },
    {
        _id: '2',
        prodcut_title: 'Poster V2',
        product_img: Img2,
        product_price: '17.99',
    },
    {
        _id: '3',
        prodcut_title: 'Poster V3',
        product_img: Img3,
        product_price: '14.99',
    },
];

const Cart = () => {
    return (
        <div className="shop-contaner container">
            <h1 class="shop-title">Cart</h1>
            <div className="mt-5 table-responsive">
                <table className="table border">
                    <thead>
                        <tr>
                            <th
                                className="table-th align-middle"
                                style={{ backgroundColor: '#fbfbfb' }}
                            ></th>
                            <th
                                className="table-th align-middle"
                                style={{ backgroundColor: '#fbfbfb' }}
                            ></th>
                            <th
                                className="table-th align-middle"
                                style={{ backgroundColor: '#fbfbfb' }}
                            >
                                Product
                            </th>
                            <th
                                className="table-th align-middle"
                                style={{ backgroundColor: '#fbfbfb' }}
                            >
                                Price
                            </th>
                            <th
                                className="table-th align-middle"
                                style={{ backgroundColor: '#fbfbfb' }}
                            >
                                Quantity
                            </th>
                            <th
                                className="table-th align-middle"
                                style={{ backgroundColor: '#fbfbfb' }}
                            >
                                Subtotal
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {product?.map((data) => (
                            <tr key={data?._id}>
                                <td className="table-td align-middle text-center">
                                    <button className="delete-btn">
                                        <MdClose />
                                    </button>
                                </td>
                                <td className="table-td align-middle">
                                    <Link to="">
                                        <div className="shop-img">
                                            <img
                                                src={data?.product_img}
                                                alt={data?.prodcut_title}
                                            />
                                        </div>
                                    </Link>
                                </td>
                                <td className="table-td align-middle">
                                    <Link to="" style={{ color: '#74a84a' }}>
                                        {data?.prodcut_title
                                            ? data?.prodcut_title
                                            : 'No found'}
                                    </Link>
                                </td>
                                <td className="table-td align-middle">
                                    <span>$</span>
                                    <span>{data?.product_price}</span>
                                </td>
                                <td className="table-td align-middle">
                                    <span className="border quntity-content ">
                                        <button className="border-0 bg-transparent px-3 align-middle text-center">
                                            <FaMinus className="btn-quntity" />
                                        </button>
                                        <span className="px-3 border-start border-end d-inline-flex align-items-center justify-content-center h-100">
                                            0
                                        </span>
                                        <button className="border-0 bg-transparent px-3 align-middle text-center ">
                                            <FaPlus className="btn-quntity" />
                                        </button>
                                    </span>
                                </td>
                                <td className="table-td align-middle">
                                    <span>$</span>
                                    <span>23.99</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 table-width">
                <table className="table border">
                    <thead>
                        <tr>
                            <th
                                className="table-th align-middle"
                                style={{
                                    backgroundColor: '#fbfbfb',
                                    fontSize: '24px',
                                }}
                                colSpan={2}
                            >
                                Cart Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-td align-middle">Subtotal</td>
                            <td className="table-td align-middle">
                                <span>$</span>
                                <span>33</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-td align-middle">Total</td>
                            <td className="table-td align-middle">
                                <span>$</span>
                                <span>33</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-td align-middle" colSpan={2}>
                                <Link
                                    to="/checkout"
                                    className="text-text-center btns w-100 d-inline-block text-center"
                                >
                                    Proceed to checkout
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
