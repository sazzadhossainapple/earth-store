import { createContext, useState } from 'react';

export const AddCartContext = createContext();

const CartContext = ({ children }) => {
    const [cartCounts, setCartCounts] = useState({});
    const addToCart = (id) => {
        setCartCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
        }));
    };

    const totalItemsInCart = Object.values(cartCounts).reduce(
        (total, count) => total + count,
        0
    );

    const CartInfo = { totalItemsInCart, addToCart };

    return (
        <AddCartContext.Provider value={CartInfo}>
            {children}
        </AddCartContext.Provider>
    );
};

export default CartContext;
