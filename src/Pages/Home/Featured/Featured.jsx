import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-8 my-20'>
            <SectionTitle heading={"Featured Item"} subHeading={"check it out"}></SectionTitle>
            <div className='md:flex justify-center items-center text-white bg-slate-500 bg-opacity-50 pb-20 pt-12 px-36 '>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10 space-y-2'>
                    <p>Aug 20, 2025</p>
                    <p className='uppercase'>Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam porro totam esse maxime nesciunt alias quia unde, aut dicta deserunt maiores, autem velit! Doloremque quos eaque repellat accusamus nam, voluptatem facilis dolorem quaerat est quae pariatur illum quod saepe voluptatibus nisi asperiores amet rem sint dolore, nostrum aspernatur fuga.</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
                </div>
                
            </div>
        </div>
    );
};

export default Featured;