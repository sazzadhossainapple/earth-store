import React, { useContext, useState } from 'react';
import Img1 from '../../assets/product/Poster1.jpg';
import Img2 from '../../assets/product/Poster2.jpg';
import Img3 from '../../assets/product/Poster3.jpg';
import Img4 from '../../assets/product/Poster4.jpg';
import Img5 from '../../assets/product/Poster5.jpg';
import { Link } from 'react-router-dom';
import ShopMenu from './ShopMenu';
import ProductCard from '../../components/ProductCard/ProductCard';
import { AddCartContext } from '../../context/cartContext/CartContext';

const ShopDetails = () => {
    const imageList = {
        _id: '1',
        prodcut_title: 'Poster V1',
        product_img: [Img1, Img2, Img3, Img4],
        product_price: '23.99',
    };

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

    const { addToCart } = useContext(AddCartContext);

    const [activeImage, setActiveImage] = useState(imageList?.product_img[0]);
    const [transformStyle, setTransformStyle] = useState({
        transform: 'translate(0%, 0%) scale(1)',
    });

    // image
    const handleThumbnailClick = (image) => {
        setActiveImage(image);
    };

    const handleMouseMove = (e) => {
        const containerWidth = e.currentTarget.offsetWidth;
        const containerHeight = e.currentTarget.offsetHeight;

        const x = e.pageX - e.currentTarget.offsetLeft;
        const y = e.pageY - e.currentTarget.offsetTop;

        const translateX = (containerWidth / 2 - x) * 2;
        const translateY = (containerHeight / 2 - y) * 2;

        const scale = 3;

        setTransformStyle({
            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        });
    };

    const handleMouseLeave = () => {
        setTransformStyle({
            transform: 'translate(0%, 0%) scale(1)',
        });
    };
    return (
        <>
            <div className="container shop-detials-container">
                <div className="shop-detials-left">
                    <div className="thumbnails">
                        {imageList.product_img.map((image, index) => (
                            <div
                                key={index}
                                className={`thumbnailsBox ${
                                    activeImage === image ? 'active' : ''
                                }`}
                                onClick={() => handleThumbnailClick(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div
                        className="mainImage"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={activeImage}
                            alt="Main"
                            style={transformStyle}
                        />
                    </div>
                </div>
                <div className="shop-detials-right">
                    <p class="shop-details-poster">Posters</p>
                    <h4 className="product-details-title">Postcard V1</h4>
                    <h5 className="product-details-price">
                        <span>$</span> <span>23.99</span>
                    </h5>
                    <p class="product-text">
                        Sending a travel postcard to a loved one is truly a
                        thoughtful gesture that can bring joy and inspiration.
                        Inspiration can come in the form of taking a break from
                        the normal routine, while being reminded of the more
                        adventurous and exotic destinations around the world.
                    </p>
                    <Link to="/cart">
                        <button className="btns">Add to cart</button>
                    </Link>
                </div>
            </div>

            <div className="container review-desc">
                <hr style={{ margin: '0px' }} />
                <ShopMenu />
            </div>
            <div className="container review-desc">
                <h1 class="shop-title mt-0 text-black">Related products</h1>

                <div className="related-product-grid product-gird">
                    {product.map((data) => (
                        <ProductCard data={data} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ShopDetails;
