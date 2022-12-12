import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeChange from '../../../Components/ThemeChange/ThemeChange';
import { PageContext } from '../../../Context/RefProvider';

const Navbar = () => {
    const {
        contactMe,
        aboutMe,
        projects,
        skills,
        scrollToSection
    } = useContext(PageContext)
    return (
        <nav className="shadow dark:bg-gray-800">
            <div className="text-sm md:text-lg container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                
                <Link onClick={() => scrollToSection(aboutMe)}
                    className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</Link>

                <Link onClick={() => scrollToSection(projects)}
                    className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</Link>

                <Link onClick={() => scrollToSection(skills)}
                    className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Skills</Link>
                <Link onClick={() => scrollToSection(contactMe)}
                    className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</Link>

                <Link to={'/blog'} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Blogs</Link>

                <div className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    <ThemeChange></ThemeChange>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;