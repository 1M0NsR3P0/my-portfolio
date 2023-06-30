import React from 'react';
import TypeWriter from './TypeWriter';

const Header = () => {
    return (
        <div className='w-full'>
            <div className='w-full text-left ml-4'>
                <TypeWriter></TypeWriter>
            </div>
            <div className='bg-gray-500  rounded-[50%] h-[350px] w-[350px] ml-5 bg-opacity-[0.5] border-white border-[5px]'>
            <img src="me4.png" alt="my pic" className=' rounded-[50%]' />
            </div>
        </div>
    );
};

export default Header;