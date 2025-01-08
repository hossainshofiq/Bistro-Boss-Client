import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuthHook from '../../Hooks/useAuthHook';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const GoogleLogin = () => {

    const { googleSignIn } = useAuthHook();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                // console.log(result.user.displayName);
                // console.log(result.user.photoURL);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn w-full'><FaGoogle></FaGoogle> Login with Google</button>
        </div>
    );
};

export default GoogleLogin;