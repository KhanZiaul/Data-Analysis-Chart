import React, { useState } from 'react';
import { Bars2Icon, Bars3BottomLeftIcon, Bars3CenterLeftIcon, Bars3Icon, BeakerIcon, LockClosedIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navigation = () => {
    const [menu, setMenu] = useState(false)
    console.log(menu)
    return (
        <>
            <div onClick={() => setMenu(!menu)} className='md:hidden'>

                {
                   menu ?   <Bars3Icon className="h-6 w-6 text-purple-500 cursor-pointer" /> :  <XMarkIcon  className="h-6 w-6 text-purple-500 cursor-pointer"></XMarkIcon>
                }

            </div>

            <ul className={`text-white flex flex-col md:flex-row justify-between p-5 bg-sky-700 absolute duration-500 md:static ${menu ? 'top-14' : '-top-48'}`}>
                <a href="/home">Home</a>
                <a href="/options">Options</a>
                <a href="/feedback">Feedback</a>
                <a href="/about_us">About Us</a>
                <a href="/login">Login</a>
            </ul>

        </>
    );
};

export default Navigation;