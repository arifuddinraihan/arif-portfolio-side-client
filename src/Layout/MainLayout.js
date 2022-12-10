import React from 'react';
import Homepage from '../Pages/HomePage/Homepage';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Sidebar from '../Pages/Shared/Sidebar/Sidebar';

const MainLayout = () => {
    return (
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
                <div className='grow'>
                    <Homepage></Homepage>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;