import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Sidebar from '../Pages/Shared/Sidebar/Sidebar';

const MainLayout = () => {
    return (
        <div className='dark:bg-gray-900'>
            <div className='container mx-auto'>
                <div className='block lg:hidden sticky top-0 bg-base-100 z-50'>
                    <Navbar></Navbar>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex-none fixed hidden lg:block z-10'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='flex-none w-64 hidden lg:block'>

                    </div>
                    <div className='grow lg:ml-4'>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className='z-40'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;