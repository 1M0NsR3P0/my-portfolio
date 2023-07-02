import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [err, setErr] = useState('')
    const [isMobile, setMobile] = useState(window.innerWidth < 768);
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        useEffect(() => {

        }, [])
    };
    // <Alert severity="success">Email sent successfully mr imon shaheb to you mongo db</Alert>
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

        <div>
            {isMobile?
                <div>
                <div className='pt-24'>
    
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    <div className=''>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Your Email" className="input input-bordered" />
                            <span>{err}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tell Me More</span>
                            </label>
                            <textarea {...register("text", { required: true })} type="text" placeholder="More details" className="input input-bordered" />
                            <span>{err}</span>
                        </div>
                        <input type="submit" className='btn btn-outline my-3 text-white' />
                    </div>
                </form>
            </div>
            :
            <>
                <div className='mx-[150px] flex gap-20 justify-center items-center'>
                <div className=' text-3xl text-center text-blue-100  flex flex-col justify-center items-center'>
                    If You Want to Know More Please <br /> Contact Me Here Or Send Me An Email
                    <div className='text-2xl text-center text-yellow-400'>Contact Me Here</div>
                                <ul className='flex justify-center items-center gap-3 my-2'>
                                    <li
                                        data-aos="flip-up"
                                        data-aos-duration="2000"

                                        data-aos-once="false"
                                        className='bg-blue-400 w-[64px] p-1 m-1'><a target='blank' href="https://www.facebook.com/naimon.chy"><img src="/icon/facebook-logo.png" alt="" /></a></li>
                                    <li
                                        data-aos="flip-up"
                                        data-aos-duration="2000"

                                        data-aos-once="false"
                                        className='bg-blue-400 w-[64px] p-1 m-1'><a target='blank' href="https://www.instagram.com/n_a_imon/"><img src="/icon/instagram.png" alt="" /></a></li>
                                    <li
                                        data-aos="flip-up"
                                        data-aos-duration="2000"

                                        data-aos-once="false"
                                        className='bg-blue-400 w-[64px] p-1 m-1'><a target='blank' href="https://www.linkedin.com/in/nurul-absar-imon-a9203424a/"><img src="/icon/linkedin.png" alt="" /></a></li>
                                    <li
                                        data-aos="flip-up"
                                        data-aos-duration="2000"
                                        data-aos-mirror="true"
                                        data-aos-once="false"
                                        className='bg-blue-400 w-[64px] p-1 m-1'><a target='blank' href="https://github.com/1M0NsR3P0?tab=repositories"><img src="/icon/github.png" alt="" /></a></li>
                                </ul>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=' flex justify-center items-center h-[80vh] text-center'>
                    <div className='w-[600px]'>
                        <div className='text-xl text-yellow-100 underline'>Contact Me!</div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Your Name" className="myInput" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Your Email" className="myInput" />
                            <span>{err}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tell Me More</span>
                            </label>
                            <textarea {...register("text", { required: true })} type="text" placeholder="More details" className="myInput" />
                            <span>{err}</span>
                        </div>
                        <input type="submit" className='btn btn-outline my-3 text-white' />
                    </div>
                </form>
            </div>
            </>
            }
        </div>
    );
};

export default Contact;