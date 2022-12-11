import React, { useEffect, useState } from 'react';
import ThemeChange from '../../../Components/ThemeChange/ThemeChange';

const Navbar = () => {

    return (
        <nav className="shadow dark:bg-gray-800">
            <div className="text-sm md:text-lg container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">

                <a href="#" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 
                hover:border-blue-500 mx-1.5 sm:mx-6">home</a>

                <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</a>

                <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>

                <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Resume</a>

                <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    <ThemeChange></ThemeChange>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;