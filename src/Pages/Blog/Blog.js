import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='lg:mx-10 min-h-screen'>
            <div className='flex flex-col justify-center place-items-center'>
                <h2 className='text-4xl my-40 text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline'>Coming Soon...</h2>
                <Link to={'/'} className='btn btn-outline btn-ghost my-4'>
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default Blog;