import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    const [isMobile, setMobile] = useState(window.innerWidth < 768);

    return (
        <div className={`${!isMobile?'text-5xl':'text-2xl'} h-[50px]`}>
        <div  className='md:flex flex-col'>
  
            <Typewriter
                
                options={{
                    cursor:'',
                    strings: ['<span class="text-yellow-400"> welcome to my portfolio</span>','<span class="text-yellow-400">i am a web developer</span>', '<span class="text-yellow-400">Front end developer</span>','<span class="text-yellow-400">MERN Stack Developer</span>'],
                    autoStart: true,
                    delay: 10,
                    deleteSpeed: 5,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString()
                    // typewriter.pasteString('whats up')
                    .pauseFor(1000)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
        
        </div>
    );
};

export default TypeWriter;