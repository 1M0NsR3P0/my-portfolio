import React, { useEffect, useState } from 'react';
import TypeWriter from './TypeWriter';

const Header = () => {
    const [isMobile, setMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            {isMobile ?
                <div className='w-full pt-16'>
                    <div className='w-full text-left slide-left mb-10'>
                        <span className='text-2xl'>Hello! My Name Is Nurul Absar</span>
                        <TypeWriter></TypeWriter>
                        <div className=''>
                            <p className='font-serif font-light text-sm'>
                                I have invested significant time and effort to excel in Frontend technologies during my web development journey. With a strong grasp of JavaScript, React JS, Firebase, Node JS, Express JS, and other relevant tools, I continuously stay updated with industry trends. Thriving in challenging environments that promote adaptability, I consistently exceed expectations.
                            </p>
                            <div className='flex justify-center items-center gap-5 p-5 m-3'>
                                <button className='btn myButton text-white font-mono font-bold'>Contact Me</button>
                                <button className='btn myButton text-white font-mono font-bold'>Hire Me</button></div>
                        </div>
                    </div>
                    <div className='bg-gray-500 flipper rounded-[50%] h-[350px] w-[350px] bg-opacity-[0.5] border-white border-[10px]'>
                        <img src="me4.png" alt="my pic" className=' rounded-[50%]' />
                    </div>
                    <div>


                    </div>

                </div>
                :
                <div>
                    <div className='w-full pt-28 flex flex-row-reverse items-center justify-center gap-24'>
                        <div className='text-left slide-left mb-10 w-[40%] flex flex-col'>
                            <span className='text-3xl text-white '>Hello! My Name Is Nurul Absar</span>
                            <TypeWriter></TypeWriter>
                            <div className='text-white py-10'>
                                <p className='font-serif text-white '>
                                    I have invested significant time and effort to excel in Frontend technologies during my web development journey. With a strong grasp of JavaScript, React JS, Firebase, Node JS, Express JS, and other relevant tools, I continuously stay updated with industry trends. Thriving in challenging environments that promote adaptability, I consistently exceed expectations.
                                </p>
                                <div>
                                    <div className='flex justify-start items-center gap-5 p-5 m-3'>
                                        <button className='btn myButton text-white font-mono font-bold'>Contact Me</button>
                                        <button className='btn myButton text-white font-mono font-bold'>Hire Me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-500 flipper rounded-[60%] h-[650px] w-[650px] bg-opacity-[0.5] border-white border-[10px]'>
                            <img src="me4.png" alt="my pic" className=' rounded-[50%]' />
                        </div>
                    </div>

                </div>
            }
        </>
    );
};

export default Header;