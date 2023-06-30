import React, { useState } from 'react';

const About = () => {
    const [isMobile, setMobile] = useState(window.innerWidth < 768);
    return (
        <>
        <div className='text-white
        '>
            {
                isMobile?
                <div >
                    <div>
                        about me section . and this is a test
                    </div>
                </div>
                :
                <div>
                    <div>
                        if this is a pc
                    </div>
                </div>
            }
        </div>
        </>
    );
};

export default About;