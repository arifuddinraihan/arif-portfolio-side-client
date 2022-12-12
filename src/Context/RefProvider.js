import React, { createContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageContext = createContext()

const RefProvider = ({ children }) => {
    const contactMe = useRef(null);
    const aboutMe = useRef(null);
    const projects = useRef(null);
    const skills = useRef(null);

    // const location = '/'
    // const navigate = useNavigate()
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    const refValue = {
        contactMe,
        aboutMe,
        projects,
        skills,
        scrollToSection
    }

    return (
        <PageContext.Provider value={refValue}>
            {children}
        </PageContext.Provider>
    );
};

export default RefProvider;