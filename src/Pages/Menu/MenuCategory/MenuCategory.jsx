import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link, NavLink } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            {
                title && <Cover img={img} title={title} subTitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 px-5 mb-10'>Order your favourite food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;