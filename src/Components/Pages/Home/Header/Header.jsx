import React from 'react';
import TypeWriter from './TypeWriter';

const Header = () => {
    return (
        <div  className='w-full mt-10'>
            <div className='w-full text-left slide-left mb-10'>
                <span className='text-2xl'>Hello! My Name Is Nurul Absar</span>
                <TypeWriter></TypeWriter>
                <div className=''>
                    <p className='font-serif font-light text-sm'>
                        I have invested significant time and effort to excel in Frontend technologies during my web development journey. With a strong grasp of JavaScript, React JS, Firebase, Node JS, Express JS, and other relevant tools, I continuously stay updated with industry trends. Thriving in challenging environments that promote adaptability, I consistently exceed expectations.
                    </p>
                </div>
            </div>
            <div className='bg-gray-500 flipper rounded-[50%] h-[350px] w-[350px] bg-opacity-[0.5] border-white border-[10px]'>
                <img  src="me4.png" alt="my pic" className=' rounded-[50%]' />
            </div>
        </div>
    );
};

export default Header;