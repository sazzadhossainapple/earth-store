import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useLoggedInUser = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const token = Cookies.get('accessToken');

    // get user
    useEffect(() => {
        getLoggedInUser();
    }, []);

    function getLoggedInUser() {
        if (token) {
            fetch(`${import.meta.env.VITE_API_KEY_URL}/api/user/me`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setUsers(data?.data);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }

    return [users, isLoading, getLoggedInUser];
};

export default useLoggedInUser;
