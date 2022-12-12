import React, { useContext } from 'react';
import profile from '../../../assets/DP.jpg'
import ThemeChange from '../../../Components/ThemeChange/ThemeChange';
import { FaCode, FaDownload, FaLaptopCode } from "react-icons/fa";
import resumePdf from '../../../assets/resume_of_arifuddin_mern_web_dev.pdf'
import { Link } from 'react-router-dom';
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { PageContext } from '../../../Context/RefProvider';

const Sidebar = () => {
    const {
        contactMe,
        aboutMe,
        projects,
        skills,
        scrollToSection
    } = useContext(PageContext)

    const handleDownloadPdf = () => {
        // using Java Script method to get PDF file
        fetch(resumePdf).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = resumePdf;
                alink.click();
            })
        })
    }

    return (
        <div>
            <div className="flex flex-col w-64 px-4 py-4 bg-transparent">

                <div className="flex flex-col items-center mt-2 -mx-2">
                    <img className="object-cover w-20 h-20 mx-2 rounded-full" src={profile} alt="avatar" />
                    <h4 className="mx-2 mt-2 font-bold text-gray-800 dark:text-gray-200">Web Developer</h4>
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">MERN Stack</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">mdarifuddinraihan@gmail.com</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <Link to={'/'} className="flex items-center px-4 py-1 my-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className="mx-4 font-medium">Home</span>
                        </Link>

                        <Link onClick={() => scrollToSection(aboutMe)}
                        className="flex items-center px-4 py-1 my-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className="mx-4 font-medium">About Me</span>
                        </Link>
                        <Link onClick={() => scrollToSection(projects)}
                        className="flex items-center px-4 py-1 my-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                            <FaLaptopCode className='w-5 h-5'></FaLaptopCode>

                            <span className="mx-4 font-medium">My Projects</span>
                        </Link>
                        <Link onClick={() => scrollToSection(skills)}
                        className="flex items-center px-4 py-1 my-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                            <FaCode className="w-5 h-5"></FaCode>

                            <span className="mx-4 font-medium">My Skills</span>
                        </Link>
                        <Link onClick={() => scrollToSection(contactMe)}
                        className="flex items-center px-4 py-1 my-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <MdOutlineConnectWithoutContact className='w-5 h-5'></MdOutlineConnectWithoutContact>

                            <span className="mx-4 font-medium">Contact Me</span>
                        </Link>

                        <Link to={'/blog'} className="flex items-center px-4 py-1 my-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className="mx-4 font-medium">Blogs</span>
                        </Link>
                        <div className="flex flex-row px-4 py-1 my-1 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-700">
                            <ThemeChange></ThemeChange>

                            <button onClick={handleDownloadPdf}
                                className='flex gap-2 btn btn-sm btn-ghost mx-2 text-lg'>
                                <FaDownload></FaDownload> <span className='text-sm'> Resume</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;