import React from 'react';
import { GoBrowser,GoChevronRight } from "react-icons/go";
import { Link } from 'react-router-dom';


const SingleProject = ({ site }) => {
    const { imgURL, name, siteLink, type, _id, usedTech } = site;

    return (
        <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img class="object-cover w-full h-64" src={imgURL} alt={name} />

            <div class="p-6">
                <div>
                    <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{type}</span>
                    <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{name}</a>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 flex flex-wrap">
                        {
                            usedTech.map((tech, i) => <p className='text-xs bg-slate-800 text-slate-200 p-2 rounded-lg m-1' key={i}>{tech}</p>)
                        }
                    </p>
                </div>

                <div class="mt-4">
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <a href={siteLink} target="_blank" class="flex items-center gap-3 mx-2 px-6 py-3 mt-4 text-sm font-extrabold tracking-wide text-white dark:text-slate-800 capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-blue-400 dark:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" tabindex="0" role="link"><GoBrowser className='h-6'></GoBrowser> Visit Site</a>
                            <Link to={`/mySite/${_id}`} class="flex items-center gap-3 mx-2 px-6 py-3 mt-4 text-sm font-extrabold tracking-wide text-white dark:text-slate-800 capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-blue-400 dark:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" tabindex="0" role="link"><GoChevronRight className='h-6'></GoChevronRight> More Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;