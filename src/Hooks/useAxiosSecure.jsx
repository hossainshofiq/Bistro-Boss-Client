import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthHook from './useAuthHook';
import Swal from 'sweetalert2';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthHook();

    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {

        const token = localStorage.getItem('Access-token');
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);

        // for 401 and 403 logout the user and move the user to login page
        if (status === 401 || status === 403) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${user.displayName} is logged out for invalid token`,
                showConfirmButton: false,
                timer: 1500
            });
            await logout();
            navigate('/login')
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;