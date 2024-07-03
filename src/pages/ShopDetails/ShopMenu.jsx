import React, { useState } from 'react';
import Review from './Review';
import ShopDescription from './ShopDescription';

const ShopMenu = () => {
    const [menuState, setMenuState] = useState(1);
    const action = (idx) => {
        setMenuState(idx);
    };

    const shopSubmenus = [
        { submenuId: 1, submenuName: 'Description' },
        { submenuId: 2, submenuName: `Reviews (${0})` },
    ];

    return (
        <div>
            <div className="d-flex align-items-center gap-4">
                {shopSubmenus.map((submenu) => (
                    <button
                        key={submenu.submenuId}
                        onClick={() => action(submenu.submenuId)}
                        className={
                            menuState === submenu.submenuId
                                ? 'active-shop-menu shop-menu'
                                : 'shop-menu'
                        }
                    >
                        {submenu.submenuName}
                    </button>
                ))}
            </div>

            <div>
                <div className={menuState === 1 ? 'd-block' : 'd-none'}>
                    <ShopDescription />
                </div>
                <div className={menuState === 2 ? 'd-block' : 'd-none'}>
                    <Review />
                </div>
            </div>
        </div>
    );
};

export default ShopMenu;
