import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import MainHeroSection from '../MainHeroSection/MainHeroSection';
import MyProjects from '../MyProjects/MyProjects';

const Homepage = () => {
    return (
        <div className='lg:my-8'>
            <MainHeroSection></MainHeroSection>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Homepage;