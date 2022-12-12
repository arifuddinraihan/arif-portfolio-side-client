import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../../../Context/RefProvider';

const Footer = () => {

    const { contactMe,
        aboutMe,
        scrollToSection } = useContext(PageContext)
    return (
        <div>
            <footer className="flex justify-center px-4 text-gray-800 dark:text-white dark:bg-gray-900">
                <div className="container px-6 py-6">
                    <h1 className="text-lg font-bold text-center lg:text-2xl font-mono">
                        “Great web design without functionality
                        <br /> is like a sports car with no engine.”
                    </h1>
                    <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div>
                            <Link to={'/'} className="text-2xl lg:text-4xl xl:text-6xl font-bold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-mono">
                                Arif Raihan
                            </Link>
                        </div>

                        <div className="flex mt-4 md:m-0">
                            <div className="-mx-4">
                                <a href="https://www.linkedin.com/in/arif-uddin-raihan/" target="_blank" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">LinkedIn</a>
                                <a href="https://github.com/arifuddinraihan" target="_blank" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Github</a>
                                <Link to={'/blog'} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Blogs</Link>
                                <Link onClick={() => scrollToSection(contactMe)} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;