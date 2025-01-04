import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenuHook from '../../../Hooks/useMenuHook';

const PopularMenu = () => {

    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])

    const [menu] = useMenuHook();

    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className='mb-12'>
            <SectionTitle subHeading={"Popular Items"} heading={"From Our Menu"}></SectionTitle>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='mt-10 btn btn-outline border-0 border-b-4 px-5'>View our full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;