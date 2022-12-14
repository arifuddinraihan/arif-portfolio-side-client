import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const PrimarySpinner = () => {
    return (
        <div className='flex justify-center content-center items-center'>
            <HashLoader 
                color="#b1b0ab"
                size={100}
            />
        </div>
    );
};

export default PrimarySpinner;