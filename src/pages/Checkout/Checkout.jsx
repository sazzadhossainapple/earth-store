import React from 'react';
import { useForm } from 'react-hook-form';

const product = [
    {
        _id: '1',
        prodcut_title: 'Poster V1',
        product_price: '23.99',
    },
    {
        _id: '2',
        prodcut_title: 'Poster V2',
        product_price: '17.99',
    },
    {
        _id: '3',
        prodcut_title: 'Poster V3',
        product_price: '14.99',
    },
];

const Checkout = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    //checkout
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="shop-contaner container">
            <h1 class="shop-title">Checkout</h1>

            <form
                className="mt-5 checkout-content"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="checkout-left">
                    <h3 className="checkout-title">Billing details</h3>
                    <hr />
                    <div className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="" className="lable-text mb-2">
                                <span>Full Name</span>
                                <sup className="text-danger">*</sup>
                            </label>
                            <input
                                type="text"
                                className="input-field"
                                {...register('name', { required: true })}
                                name="name"
                            />
                            {errors.name && (
                                <span className="text-danger error-text">
                                    Name is required
                                </span>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="lable-text mb-2">
                                <span>Phone Number</span>
                                <sup className="text-danger">*</sup>
                            </label>
                            <input
                                type="text"
                                className="input-field"
                                {...register('number', { required: true })}
                                name="number"
                            />
                            {errors.number && (
                                <span className="text-danger error-text">
                                    Number is required
                                </span>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="lable-text mb-2">
                                <span>Email Address</span>
                                <sup className="text-danger">*</sup>
                            </label>
                            <input
                                type="email"
                                className="input-field"
                                {...register('email', { required: true })}
                                name="email"
                            />
                            {errors.email && (
                                <span className="text-danger error-text">
                                    Email is required
                                </span>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="lable-text mb-2">
                                <span>Town / City</span>
                                <sup className="text-danger">*</sup>
                            </label>
                            <input
                                type="text"
                                className="input-field"
                                {...register('city', { required: true })}
                                name="city"
                            />
                            {errors.city && (
                                <span className="text-danger error-text">
                                    City is required
                                </span>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="lable-text mb-2">
                                <span>Street address</span>
                                <sup className="text-danger">*</sup>
                            </label>
                            <input
                                type="text"
                                className="input-field"
                                {...register('street', { required: true })}
                                name="street"
                                placeholder="House number and street name"
                            />
                            {errors.street && (
                                <span className="text-danger error-text">
                                    Street is required
                                </span>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="lable-text mb-2">
                                <span>Zip Code</span>
                                <sup className="text-danger">*</sup>
                            </label>
                            <input
                                type="text"
                                className="input-field"
                                {...register('zip_code', { required: true })}
                                name="zip_code"
                            />
                            {errors.zip_code && (
                                <span className="text-danger error-text">
                                    Zip code is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="checkout-title">
                            Additional information
                        </h3>
                        <hr />
                        <div className="mb-4">
                            <label htmlFor="" className="lable-text mb-2">
                                <span>Order notes (optional)</span>
                            </label>
                            <textarea
                                rows={2}
                                className="input-field"
                                {...register('order_note')}
                                name="order_note"
                                placeholder="Notes about your order, e.g. special notes for delivery."
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="checkout-right">
                    <div className="checkout-right-content">
                        <h3 className="checkout-title">Your order</h3>

                        <div className="mt-4">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th className="table-th align-middle px-0">
                                            Product
                                        </th>
                                        <th className="table-th align-middle px-0 text-end">
                                            Subtotal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product?.map((data) => (
                                        <tr key={data?._id}>
                                            <td className="table-td align-middle px-0">
                                                <span>
                                                    {data?.prodcut_title}
                                                </span>
                                                ×<span>1</span>
                                            </td>
                                            <td className="table-td align-middle px-0 text-end">
                                                <span>$</span>
                                                <span>
                                                    {data?.product_price}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}

                                    <tr>
                                        <td className="table-td align-middle px-0 ">
                                            Subtotal
                                        </td>
                                        <td className="table-td align-middle px-0 text-end">
                                            <span>$</span>
                                            <span>66.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-td align-middle px-0">
                                            Total
                                        </td>
                                        <td className="table-td align-middle px-0 text-end">
                                            <span>$</span>
                                            <span>66.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4">
                            <input
                                type="submit"
                                className="text-text-center btns w-100"
                                value="Place order"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
