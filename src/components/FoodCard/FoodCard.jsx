import React from 'react';

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-6 mt-4 p-1 rounded-lg'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500 px-5">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;