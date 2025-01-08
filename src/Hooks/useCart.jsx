import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuthHook from './useAuthHook';

const useCart = () => {
    // tanstack query
    const axiosSecure = useAxiosSecure();
    const { user } = useAuthHook();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch];
};

export default useCart;