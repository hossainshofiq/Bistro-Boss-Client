import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuthHook from '../../Hooks/useAuthHook';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';

const Navbar = () => {

    const { user, logout } = useAuthHook();
    const [cart] = useCart();

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Logout Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    const links = <>
        <div className='lg:flex gap-2'>
            <li className='uppercase'><NavLink to={'/'}>Home</NavLink></li>
            {/* <li className='uppercase'><NavLink to={'/'}>Contact Us</NavLink></li> */}
            <li className='uppercase'><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
            <li className='uppercase'><NavLink to={'/menu'}>Our Menu</NavLink></li>
            <li className='uppercase'><NavLink to={'/order/salad'}>Our Shop</NavLink></li>
            {/* <li className='uppercase'><NavLink to={'/register'}>Register</NavLink></li> */}
            <li className='uppercase'><NavLink to={'/secret'}>Secret</NavLink></li>
            <li>
                <Link to={'/dashboard/cart'}>
                    <button className="btn">
                        <FaShoppingCart className='text-lg'></FaShoppingCart>
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </Link>
            </li>
            {/* {
                user ?
                    <><button onClick={handleLogout} className='btn btn-error uppercase'>Logout</button></>
                    :
                    <><li className='uppercase'><Link to={'/login'}>Login</Link></li></>
            } */}
        </div>
    </>
    return (
        <div className="navbar fixed z-50 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className='flex items-center gap-2'>
                                <div className='border-2 p-1 border-black rounded-md'><h2>{user?.displayName}</h2></div>
                                <div>
                                    <img
                                        className='w-12 h-12 object-cover rounded-full border-2 border-black'
                                        src={user?.photoURL}
                                        alt={user?.displayName}
                                        data-tooltip-id='my-tooltip'
                                        data-tooltip-content={user?.displayName}
                                    />
                                    <Tooltip id='my-tooltip'></Tooltip>
                                </div>
                                <button onClick={handleLogout} className='btn btn-error uppercase'>Logout</button>
                            </div>
                        </>
                        :
                        <>
                            <Link to={"/register"} className='btn btn-link text-white uppercase'><button>Register</button></Link>
                            <Link to={"/login"}><button className='btn btn-success uppercase'>Login</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;