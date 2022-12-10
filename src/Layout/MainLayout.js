import React from 'react';
import Homepage from '../Pages/HomePage/Homepage';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Sidebar from '../Pages/Shared/Sidebar/Sidebar';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <div className='block lg:hidden'>
                <Navbar></Navbar>
            </div>
            <div className='flex'>
                <div className='flex-none hidden lg:block'>
                    <Sidebar></Sidebar>
                </div>
                <div className='grow'>
                    <Homepage></Homepage>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;