import React from 'react';
import { GoChevronLeft } from "react-icons/go";
import { Link, useLoaderData } from 'react-router-dom';
import { RxDot } from "react-icons/rx";
import ImageGallery from 'react-image-gallery';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const WebsiteDetailsPage = () => {
    const [data] = useLoaderData()
    const { imgURL, name, details, imgGallery, clientSiteGit, serverSiteGit, siteLink, type, usedTech } = data
    const { img1, img2, img3, img4, img5, img6 } = imgGallery
    console.log(imgGallery)
    const images = [
        {
            original: imgURL,
            thumbnail: imgURL,
        },
        {
            original: img1,
            thumbnail: img1,
        },
        {
            original: img2,
            thumbnail: img2,
        },
        {
            original: img3,
            thumbnail: img3,
        },
        {
            original: img4,
            thumbnail: img4,
        },
        {
            original: img5,
            thumbnail: img5,
        },
        {
            original: img6,
            thumbnail: img6,
        },

    ];
    return (
        <div className='min-h-screen dark:bg-gray-800'>
            <div className='container mx-auto flex justify-center'>
                <div className="max-w-4xl my-10 overflow-hidden bg-base-100 rounded-lg shadow-md dark:bg-gray-800">
                    <Link to={'/'} className="flex w-1/3 items-center gap-3 mx-2 my-4 px-6 py-3 mt-4 text-sm font-extrabold tracking-wide text-white dark:text-slate-800 capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-blue-400 dark:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <GoChevronLeft className='h-6'></GoChevronLeft> Go Back</Link>
                    <PhotoProvider>
                        <div className="foo">
                            <PhotoView src={imgURL}>
                                <img className='object-cover w-full h-64' src={imgURL} alt={name} />
                                </PhotoView>  
                        </div>
                    </PhotoProvider>

                    <div className="p-6">
                        <div>
                            <div className='flex flex-wrap md:flex-nowrap gap-2 items-center'>
                                <span className="text-md font-medium text-blue-600 uppercase dark:text-blue-400">{type}</span>
                                <div className='flex gap-2'>
                                    <a href={clientSiteGit} target="_blank" className="btn btn-sm btn-outline dark:glass">Client Side</a>
                                    <a href={serverSiteGit} target="_blank" className="btn btn-sm btn-outline dark:glass">Server Site</a>
                                </div>
                            </div>

                            <a href={siteLink} target='_blank' className="block mt-2 my-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 hover:underline" tabIndex="0" role="link">{name}</a>
                            <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {
                                    details.map((detail, i) => <li key={i}
                                        className="my-2 gap-3 flex items-start justify-start text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600"
                                    ><RxDot className='w-4 h-4'></RxDot> {detail}</li>)
                                }
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h2 className=" text-center block mt-2 my-8 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 hover:underline">Website Pages</h2>
                            <ImageGallery items={images}
                                autoPlay={true}
                                showThumbnails={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WebsiteDetailsPage;