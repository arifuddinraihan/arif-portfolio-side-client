import React, { useContext } from 'react';
import { VscGoToFile } from "react-icons/vsc";
import ResumeModal from './ResumeModal/ResumeModal';
import { PageContext } from '../../Context/RefProvider';
import AnimatedText from 'react-animated-text-content';


const MainHeroSection = () => {
    const { aboutMe } = useContext(PageContext)
    return (
        <div className="px-6 py-10 xl:py-28" ref={aboutMe}>
            <div className="flex items-center py-6 lg:h-[36rem] lg:flex-row">
                <div className="">
                    <h2 className="flex items-end text-lg md:text-xl lg:text-3xl font-semibold underline text-primary dark:text-slate-200">
                        Arif Uddin Raihan
                        <label htmlFor="resume-modal" className='btn btn-sm btn-ghost hover:bg-transparent'>
                            <small className='flex items-end text-sm md:text-md lg:text-2xl font-semibold underline text-blue-500 dark:text-blue-400 ml-4 gap-2 lowercase'> <VscGoToFile></VscGoToFile> resume</small>
                        </label>
                    </h2>
                    <h2 className="text-xl md:text-2xl font-normal text-black lg:text-5xl xl:text-6xl py-8 xl:py-16 dark:text-base-100">
                        Arif is a web developer who is committed to advancing his career in the developer industry by creating thoughtful visual identities and memorable experiences for web users.</h2>
                    <AnimatedText
                        className="text-md md:text-lg font-light text-black lg:text-2xl font-mono dark:text-base-100"
                        type='words'
                        interval={0.04}
                        duration={0.5}
                        animation={{
                            y: '100px',
                            ease: 'ease',
                        }}
                    >
                        Creating real-world problem-solving online platforms with agile frameworks as well as providing a solution to critical web layout and adaptive design functionality using MERN Stack technology. Also, server-side solutions based on structured data via NoSQL and API creation with minimum security are another side of my service effort.
                    </AnimatedText>
                    {/* <h2 className="text-md md:text-lg font-light text-black lg:text-2xl font-mono dark:text-base-100">Creating real-world problem-solving online platforms with agile frameworks as well as providing a solution to critical web layout and adaptive design functionality using MERN Stack technology. Also, server-side solutions based on structured data via NoSQL and API creation with minimum security are another side of my service effort.</h2> */}
                </div>
            </div>
            <ResumeModal></ResumeModal>
        </div>
    );
};

export default MainHeroSection;