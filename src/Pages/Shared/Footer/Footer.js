import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="flex justify-center px-4 text-gray-800 dark:text-white dark:bg-gray-900">
                <div class="container px-6 py-6">
                    <h1 class="text-lg font-bold text-center lg:text-2xl">
                        Join 31,000+ other and never miss <br /> out on new tips, tutorials, and more.
                    </h1>

                    <hr class="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

                    <div class="flex flex-col items-center justify-between md:flex-row">
                        <div>
                            <a href="#" class="text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>
                        </div>

                        <div class="flex mt-4 md:m-0">
                            <div class="-mx-4">
                                <a href="#" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">About</a>
                                <a href="#" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Blog</a>
                                <a href="#" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">News</a>
                                <a href="#" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;