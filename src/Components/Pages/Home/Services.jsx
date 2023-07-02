import React, { useContext } from 'react';
import { DarkModeContext } from '../../Utilities/DarkmodeContext';
import FireFlies from '../../Common/Flies/FireFlies';

const Services = () => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div>
            <div className={`overflow-hidden flex justify-center items-center h-[80vh] ${!darkMode?'text-white':'text-black'}`}>
                No services Available now...
                <FireFlies/>
            </div>
           
        </div>
    );
};

export default Services;