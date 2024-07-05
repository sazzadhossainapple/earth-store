import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Img from '../../assets/client/profiles-1.png';

const Review = () => {
    const star = ['1', '2', '3', '4', '5'];
    const reviewData = [
        {
            _id: '1',
            name: 'Sazzad Hossain',
            img: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsum.',
        },
        {
            _id: '2',
            name: 'Sazzad Hossain',
            img: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsum.',
        },
        {
            _id: '3',
            name: 'Sazzad Hossain',
            img: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsum.',
        },
        {
            _id: '4',
            name: 'Sazzad Hossain',
            img: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsum.',
        },
    ];
    return (
        <div className="shop-details-desc">
            {reviewData.length <= 0 ? (
                <p className="review-text mb-2">There are no reviews yet.</p>
            ) : (
                <>
                    {reviewData.map((data) => (
                        <div className="mb-3">
                            <div className="d-flex  gap-2">
                                <img
                                    className="user-review-img"
                                    src={data.img ? data.img : Img}
                                    alt="user"
                                />
                                <div>
                                    <p style={{ color: '#585858' }}>
                                        <strong>{data.name}</strong>
                                    </p>
                                    <p className="d-flex align-items-center gap-1">
                                        <FaStar className="star-iocn" />
                                        <FaStar className="star-iocn" />
                                        <FaStar className="star-iocn" />
                                        <FaRegStar className="star-iocn" />
                                        <FaRegStar className="star-iocn" />
                                    </p>
                                    <p className="review-text text-margin">
                                        {data.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}

            <div className="review-card p-4">
                <h6 className="review-title-text mb-2">
                    Be the first to review “<span>Postcard V1</span>”
                </h6>
                <p className="review-text mb-3">
                    Your email address will not be published. Required fields
                    are marked *
                </p>

                <form action="">
                    <div className="d-flex align-items-center mb-3">
                        <label htmlFor="" className="review-label">
                            Your rating <sup>*</sup>
                        </label>
                        <div className="d-flex align-items-center gap-3">
                            {star.map((data) => (
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id={`flexRadioDefault-${data}`}
                                    />
                                    <label
                                        class="form-check-label fw-bold"
                                        style={{ color: '#585858' }}
                                        for={`flexRadioDefault-${data}`}
                                    >
                                        {data}
                                    </label>
                                </div>
                                // <button className="bg-transparent border-0 d-flex align-items-center gap-1">
                                //     <span className="star-number">{data}</span>
                                //     <FaRegStar className="star-iocn" />
                                // </button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="review-label mb-2">
                            Your review <sup>*</sup>
                        </label>
                        <textarea name="" class="input-field py-4"></textarea>
                    </div>
                    <div className="">
                        <input type="submit" value="Submit" className="btns" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
