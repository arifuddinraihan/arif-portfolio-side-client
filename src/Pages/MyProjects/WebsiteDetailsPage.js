import React from 'react';
import { GoChevronLeft } from "react-icons/go";
import { Link, useLoaderData } from 'react-router-dom';
import { RxDot } from "react-icons/rx";

const WebsiteDetailsPage = () => {
    const [data] = useLoaderData()
    const { imgURL, name, details, imgGallery, clientSiteGit, serverSiteGit, siteLink, type, _id, usedTech } = data
    console.log(data)
    return (
        <div className='min-h-screen dark:bg-gray-800'>
            <div className='container mx-auto flex justify-center'>
                <div className="max-w-4xl my-10 overflow-hidden bg-base-100 rounded-lg shadow-md dark:bg-gray-800">
                    <Link to={'/'} className="flex w-1/3 items-center gap-3 mx-2 my-4 px-6 py-3 mt-4 text-sm font-extrabold tracking-wide text-white dark:text-slate-800 capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-blue-400 dark:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <GoChevronLeft className='h-6'></GoChevronLeft> Go Back</Link>
                    <img className="object-cover w-full h-64" src={imgURL} alt={name} />

                    <div className="p-6">
                        <div>
                            <div className='flex flex-wrap md:flex-nowrap gap-2 items-center'>
                                <span className="text-md font-medium text-blue-600 uppercase dark:text-blue-400">{type}</span>
                                <a href={clientSiteGit} target="_blank" className="btn btn-sm glass">Client Side</a>
                                <a href={serverSiteGit} target="_blank" className="btn btn-sm glass">Server Site</a>
                            </div>

                            <a href={siteLink} target='_blank' className="block mt-2 my-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 hover:underline" tabIndex="0" role="link">{name}</a>
                            <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {
                                    details.map((detail, i) => <li key={i}
                                        className="my-2 gap-3 flex items-start justify-start text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600"
                                    ><RxDot></RxDot> {detail}</li>)
                                }
                            </ul>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Jone Doe</a>
                                </div>
                                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WebsiteDetailsPage;