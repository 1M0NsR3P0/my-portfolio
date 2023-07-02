import React from 'react';

const Error = () => {
    const goback = ()=>{
        window.history.back();
    }
    return (
        <div className='w-full flex flex-col justify-center items-center h-[90vh]'>
            <div className='w-full flex justify-center items-center'><img className='sm:w-full w-[50%]' src="/error-404.png" alt="erorr icon" /></div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl'>
            An error Happend!
            </h1>
            <p className='text-start p-5 text-slate-600'>the page you are trying to access is Either not Available or removed. Please try a differrent way or Contact us!</p>
            <button className='btn btn-info btn-lg btn-outline my-3'>contact us</button>
            <button className='btn btn-info btn-lg btn-outline' onClick={goback}>GO Back</button>

        </div>
        </div>
    );
};

export default Error;