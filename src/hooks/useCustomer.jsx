import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useCustomer = () => {
    const [isCustomer, setIsCustomer] = useState(false);
    const [isCustomerLoading, setIsCustomerLoading] = useState(true);
    const token = Cookies.get('accessToken');

    useEffect(() => {
        if (token) {
            fetch(`${import.meta.env.VITE_API_KEY_URL}/api/user/customer`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsCustomer(data?.data);
                    setIsCustomerLoading(false);
                });
        } else {
            setIsCustomerLoading(false);
        }
    }, []);

    return [isCustomer, isCustomerLoading];
};

export default useCustomer;
