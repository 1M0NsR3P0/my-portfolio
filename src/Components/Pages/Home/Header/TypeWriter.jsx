import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    const [start,setStart] = useState(false)
    return (
        <div className='text-xl h-[100px]'>
        <div className='md:flex flex-col'>
            <Typewriter
                options={{
                    cursor:'',
                    autoStart: true,
                    delay: 5,
                    loop: false,
                    
                }}
                
                onInit={(typewriter) => {
                    typewriter.typeString(`<p class="mb-0">Hello! I my Name is Nurul Absar </p>`)
                    .callFunction(() => {
                        // console.log('')
                        setStart(true)
                      })
                    .start();
                }}
                />
            {
                
            }
            <Typewriter
                
                options={{
                    cursor:'',
                    strings: ['<span class="text-yellow-400"> welcome to my portfolio</span>','<span class="text-yellow-400">i am a web developer</span>', '<span class="text-yellow-400">Front end developer</span>','<span class="text-yellow-400">React Developer</span>'],
                    autoStart: start?true:false,
                    delay: 20,
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