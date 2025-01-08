import React from 'react';
import useAuthHook from '../../Hooks/useAuthHook';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';


const FoodCard = ({ item }) => {

    const { name, recipe, image, price, _id } = item;
    const { user } = useAuthHook();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        // console.log(food, user?.email);

        if (user && user?.email) {
            // console.log(food, user?.email);

            // send data into the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image, 
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      // refetch the cart to update the cart items count
                      refetch();
                }
            })

        }
        else {
            Swal.fire({
                title: "You are not Logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });

                    // send the user to the login page
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
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
                    <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500 px-5">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;