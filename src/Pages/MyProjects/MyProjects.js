import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { PageContext } from '../../Context/RefProvider';
import SingleProject from './SingleProject';

const MyProjects = () => {
    const { projects } = useContext(PageContext)
    const projectsURL = `http://localhost:5000/myAllSites`
    const { data: createdSite = [], isLoading } = useQuery({
        queryKey: ['myAllSites'],
        queryFn: async () => {
            const res = await fetch(projectsURL, {
            });
            const data = await res.json();
            return data;
        }
    })
    // console.log(createdSite)
    return (
        <div className='' ref={projects}>
            <section className=" dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Completed <span className="underline decoration-blue-500">Projects</span></h1>
                    <div className='mt-8 space-y-8 lg:mt-12'>
                        <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            {
                                createdSite.map(site => <SingleProject key={site._id} site={site}></SingleProject>)
                            }
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyProjects;