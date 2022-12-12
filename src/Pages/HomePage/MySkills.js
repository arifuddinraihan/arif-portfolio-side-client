import React, { useContext } from 'react';
import { PageContext } from '../../Context/RefProvider';
import { BsFront } from "react-icons/bs";
import { FaNodeJs, FaServer } from "react-icons/fa";
import { CgToolbox } from "react-icons/cg";
import { AiFillHtml5 } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import { SiExpress, SiJsonwebtokens, SiVercel, SiMongodb, SiFirebase, SiReact, SiReactrouter, SiCss3, SiJavascript, SiGithub, SiGooglechrome, SiNetlify, SiFigma, SiGooglefonts, SiVisualstudiocode } from "react-icons/si";


const MySkills = () => {
    const { skills } = useContext(PageContext)
    return (
        <div className='my-24' ref={skills}>
            <section className="dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">My <span className="underline decoration-blue-500">Skills</span></h1>

                    <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        The key pillars of my web design education are HTML 5, CSS 3, and JavaScript using React JS. <br className='hidden xl:block' /> I am confident working with MongoDB, Node JS, and Express JS on the backend server side.
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <BsFront className='w-8 h-8'></BsFront>
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                Front End Technology</h1>

                            <div className='flex justify-between items-center'>
                                <ul className="text-gray-500 dark:text-gray-300">
                                    <li className='flex mt-2 items-center gap-2'><AiFillHtml5 className='w-6 h-6'></AiFillHtml5> HTML5</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiCss3 className='w-6 h-6'></SiCss3> CSS3</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiJavascript className='w-6 h-6'></SiJavascript> JavaScript</li>
                                </ul>
                                <ul className="text-gray-500 dark:text-gray-300">
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiReact className='w-6 h-6'></SiReact> React JS</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiReactrouter className='w-6 h-6'></SiReactrouter> React Router</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiFirebase className='w-6 h-6'></SiFirebase> Firebase</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <FaServer className='w-8 h-8'></FaServer>
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                Backend Technology</h1>

                            <div className='flex justify-between items-center'>
                                <ul className="text-gray-500 dark:text-gray-300">
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiMongodb className='w-6 h-6'></SiMongodb> MongoDB</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <FaNodeJs className='w-6 h-6'></FaNodeJs> Node JS</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiExpress className='w-6 h-6'></SiExpress> Express JS</li>
                                </ul>
                                <ul className="text-gray-500 dark:text-gray-300">
                                    <li className='flex mt-2 items-center gap-2'>
                                        <TbApi className='w-6 h-6'></TbApi> API</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiVercel className='w-6 h-6'></SiVercel> Vercel</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiJsonwebtokens className='w-6 h-6'></SiJsonwebtokens> Json WebToken</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <CgToolbox className='w-8 h-8'></CgToolbox>
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                Tools I use</h1>

                            <div className='flex justify-between items-center'>
                                <ul className="text-gray-500 dark:text-gray-300">
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiVisualstudiocode className='w-6 h-6'></SiVisualstudiocode> VS Code</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiGithub className='w-6 h-6'></SiGithub> Github</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiGooglechrome className='w-6 h-6'></SiGooglechrome> Dev Tool</li>
                                </ul>
                                <ul className="text-gray-500 dark:text-gray-300">
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiNetlify className='w-6 h-6'></SiNetlify> Netlify</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiFigma className='w-6 h-6'></SiFigma> Figma</li>
                                    <li className='flex mt-2 items-center gap-2'>
                                        <SiGooglefonts className='w-6 h-6'></SiGooglefonts> Google Fonts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MySkills;