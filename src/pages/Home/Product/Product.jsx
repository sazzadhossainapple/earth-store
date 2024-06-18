import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Img1 from '../../../assets/product/Poster1.jpg';
import Img2 from '../../../assets/product/Poster2.jpg';
import Img3 from '../../../assets/product/Poster3.jpg';

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
        _id: '1',
        prodcut_title: 'Poster V3',
        product_img: Img3,
        product_price: '14.99',
    },
];

const Product = () => {
    return (
        <div className="product-container">
            <div className="container product-gird">
                {product?.map((data) => (
                    <ProductCard key={data?._id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Product;
