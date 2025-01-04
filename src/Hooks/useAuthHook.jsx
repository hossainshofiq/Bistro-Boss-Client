import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAuthHook = () => {
    const context = useContext(AuthContext);
    return context;
};

export default useAuthHook;