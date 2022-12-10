import React from 'react';

const ContactMe = () => {
    return (
        <div>
            <section className="py-16 dark:bg-gray-900 lg:flex">
                <div className="flex flex-col justify-center w-full p-8 lg:dark:bg-gray-800 lg:px-12 xl:px-32 lg:w-1/2">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-4xl">hire Me.</h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Ask us everything and we would love
                        to hear from you
                    </p>
                </div>

                <div className="flex flex-col justify-center w-full p-4 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
                    <form>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            get in touch
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactMe;