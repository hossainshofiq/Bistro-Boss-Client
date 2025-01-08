import React from 'react';
import { FaBook, FaCalendar, FaComment, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className='flex gap-5 max-w-7xl mx-auto my-10'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu'>
                    {/* dedicated  */}
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to={'/dashboard/manageItems'}><FaList></FaList> Manage Items </NavLink></li>
                                <li><NavLink to={'/dashboard/bookings'}><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to={'/dashboard/users'}><FaUsers></FaUsers> All Users</NavLink></li>
                            </> : <>
                                <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar> My Reservation</NavLink></li>
                                <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart> My Cart({cart.length}) </NavLink></li>
                                <li><NavLink to={'/dashboard/review'}><FaComment></FaComment> My Review</NavLink></li>
                                <li><NavLink to={'/dashboard/booking'}><FaList></FaList> My Bookings</NavLink></li>
                            </>
                    }

                    {/* shared nav links */}
                    <div className='divider'></div>
                    <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}><FaSearch></FaSearch> Menu</NavLink></li>
                    <li><NavLink to={'/order/contact'}><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;