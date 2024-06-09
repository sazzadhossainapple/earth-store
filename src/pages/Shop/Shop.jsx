import React from 'react';
import './shop.css';
import Img1 from '../../assets/product/Poster1.jpg';
import Img2 from '../../assets/product/Poster2.jpg';
import Img3 from '../../assets/product/Poster3.jpg';
import Img4 from '../../assets/product/Poster4.jpg';
import Img5 from '../../assets/product/Poster5.jpg';
import Img6 from '../../assets/product/Poster6.jpg';
import Img7 from '../../assets/product/Poster7.jpg';
import Img8 from '../../assets/product/Poster8.jpg';
import Img9 from '../../assets/product/Poster9.jpg';
import Img10 from '../../assets/product/Poster10.jpg';
import Img11 from '../../assets/product/Poster11.jpg';
import Img12 from '../../assets/product/Poster12.jpg';
import ProductCard from '../../components/ProductCard/ProductCard';

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
    {
        _id: '4',
        prodcut_title: 'Poster V4',
        product_img: Img4,
        product_price: '12.55',
    },
    {
        _id: '5',
        prodcut_title: 'Poster V5',
        product_img: Img5,
        product_price: '10.00',
    },
    {
        _id: '6',
        prodcut_title: 'Poster V6',
        product_img: Img6,
        product_price: '09.10',
    },
    {
        _id: '7',
        prodcut_title: 'Poster V7',
        product_img: Img7,
        product_price: '16.56',
    },
    {
        _id: '8',
        prodcut_title: 'Poster V8',
        product_img: Img8,
        product_price: '17.00',
    },
    {
        _id: '9',
        prodcut_title: 'Poster V9',
        product_img: Img9,
        product_price: '09.00',
    },
    {
        _id: '10',
        prodcut_title: 'Poster V10',
        product_img: Img10,
        product_price: '14.34',
    },
    {
        _id: '11',
        prodcut_title: 'Poster V11',
        product_img: Img11,
        product_price: '13.45',
    },
    {
        _id: '12',
        prodcut_title: 'Poster V12',
        product_img: Img12,
        product_price: '11.34',
    },
];

const Shop = () => {
    return (
        <div className="shop-contaner container">
            <h1 class="shop-title">Shop</h1>
            <div className="product-gird mt-5">
                {product?.map((data) => (
                    <ProductCard key={data?._id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
