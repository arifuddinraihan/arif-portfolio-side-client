import React, { useContext } from 'react';
import { PageContext } from '../../Context/RefProvider';

const MyProjects = () => {

    const { projects } = useContext(PageContext)
    return (
        <div className='' ref={projects}>
            <section className=" dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Completed <span className="underline decoration-blue-500">Projects</span></h1>
                    <section className="mt-8 space-y-8 lg:mt-12">
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New album is released!</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New album is released!</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
                                </div>
                            </div>
                        </div>
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New album is released!</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default MyProjects;